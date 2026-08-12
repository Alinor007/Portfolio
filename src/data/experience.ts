/* ⚠️  SCAFFOLD — REPLACE BEFORE PUBLISHING  ⚠️
 *
 * Nothing in the codebase recorded your work history or education, and
 * inventing employers, titles or dates would be worse than leaving it
 * blank. The entries below are placeholders with the right shape.
 *
 * Fill them in and set `experienceReady = true` to render the section.
 * While it's false the Path section is skipped entirely and its nav
 * link is hidden — so the site never ships visible "Lorem" content.
 */
export const experienceReady = false;

export type TimelineEntry = {
  kind: "work" | "education";
  title: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  detail?: string;
};

export const timeline: TimelineEntry[] = [
  {
    kind: "education",
    title: "TODO: your degree",
    org: "Mindanao State University – Main Campus",
    location: "Marawi City",
    start: "20XX",
    end: "20XX",
    detail: "TODO: a sentence on focus, thesis, or notable coursework.",
  },
  {
    kind: "work",
    title: "TODO: your role",
    org: "TODO: organisation",
    location: "TODO",
    start: "20XX",
    end: "Present",
    detail: "TODO: what you built and what it changed.",
  },
];
