import { Github, Facebook, Linkedin, type LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/alinor007",
    icon: Github,
  },
  {
    /* TODO: verify this handle. The previous value was `https://In/alinor-abdulgafor `
       — an invalid host with a trailing space, so the link never worked.
       The slug below is recovered from that string; confirm it resolves. */
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alinor-abdulgafor",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/alinor007",
    icon: Facebook,
  },
];
