/* Lives outside the "use server" module: those files may only export
   async functions, so the state shape and its initial value can't sit
   alongside the action itself. */
export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactState: ContactState = { status: "idle" };
