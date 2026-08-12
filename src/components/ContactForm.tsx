"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { sendMessage } from "@/app/actions/contact";
import { initialContactState, type ContactState } from "@/lib/contact-state";
import { cn } from "@/lib/utils";

/** Underline fields, to match the hairline language of the page. */
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <label className="font-mono text-[0.625rem] uppercase tracking-[0.28em] text-brass">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-2 font-mono text-[0.6875rem] text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

const fieldClasses =
  "mt-3 w-full border-0 border-b border-brass-deep bg-transparent px-0 py-3 text-[1.0625rem] text-ink placeholder:text-ink-faint transition-colors duration-500 focus:border-brass focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    sendMessage,
    initialContactState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  useEffect(() => {
    if (state.status === "success") {
      toast.success("Message sent", { description: state.message });
      formRef.current?.reset();
    } else if (state.status === "error" && !state.fieldErrors) {
      toast.error("Couldn't send that", { description: state.message });
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-9" noValidate>
      {/* Honeypot — hidden from humans, catnip for bots. */}
      <div className="absolute h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <Field label="Name" error={state.fieldErrors?.name}>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(state.fieldErrors?.name)}
            className={cn(
              fieldClasses,
              state.fieldErrors?.name && "border-destructive",
            )}
          />
        </Field>

        <Field label="Email" error={state.fieldErrors?.email}>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            className={cn(
              fieldClasses,
              state.fieldErrors?.email && "border-destructive",
            )}
          />
        </Field>
      </div>

      <Field label="Message" error={state.fieldErrors?.message}>
        <textarea
          id={messageId}
          name="message"
          required
          rows={5}
          placeholder="What are you working on?"
          aria-invalid={Boolean(state.fieldErrors?.message)}
          className={cn(
            fieldClasses,
            "resize-y",
            state.fieldErrors?.message && "border-destructive",
          )}
        />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex items-center gap-3 border border-brass bg-brass px-8 py-4 font-mono text-xs uppercase tracking-[0.22em] text-[#14100a] transition-colors duration-500 hover:bg-brass-bright disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
            Sending
          </>
        ) : (
          <>
            Send message
            <Send
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </>
        )}
      </button>

      {/* Screen-reader announcement for the non-toast path */}
      <p className="sr-only" role="status" aria-live="polite">
        {state.status !== "idle" ? state.message : ""}
      </p>
    </form>
  );
}
