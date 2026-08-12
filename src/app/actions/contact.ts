"use server";

import { Resend } from "resend";
import { profile } from "@/data/profile";
import type { ContactState } from "@/lib/contact-state";

/* Pragmatic rather than RFC-exhaustive: one @, a dot in the domain,
   no whitespace. Anything stricter rejects addresses that work. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  /* Honeypot: a field hidden from humans. Bots fill it in. Return the
     success state so they get no signal that they were caught. */
  if ((formData.get("website") as string)?.length) {
    return { status: "success", message: "Thanks — your message is on its way." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const fieldErrors: ContactState["fieldErrors"] = {};

  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  else if (name.length > 80) fieldErrors.name = "That name is a little long.";

  if (!EMAIL.test(email)) fieldErrors.email = "Please enter a valid email.";
  else if (email.length > 160) fieldErrors.email = "That email is too long.";

  if (message.length < 10)
    fieldErrors.message = "A little more detail, please — at least 10 characters.";
  else if (message.length > 4000)
    fieldErrors.message = "Please keep it under 4,000 characters.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      fieldErrors,
    };
  }

  /* Degrade gracefully rather than throwing: the form is fully wired and
     validating before the key exists. Add RESEND_API_KEY to .env.local
     to switch sending on. */
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[contact] RESEND_API_KEY is not set — message validated but not sent.",
      { name, email },
    );
    return {
      status: "error",
      message: `Email isn't configured on this deployment yet. Please reach me directly at ${profile.email}.`,
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      /* Until a custom domain is verified with Resend, onboarding@resend.dev
         is the only permitted sender and can only deliver to the account's
         own address. Swap in your domain once verified. */
      from: process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO ?? profile.email],
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error);
      return {
        status: "error",
        message: `Something went wrong sending that. You can reach me directly at ${profile.email}.`,
      };
    }

    return {
      status: "success",
      message: "Thanks — your message is on its way. I'll reply soon.",
    };
  } catch (err) {
    console.error("[contact] Unexpected failure:", err);
    return {
      status: "error",
      message: `Something went wrong sending that. You can reach me directly at ${profile.email}.`,
    };
  }
}
