export type Project = {
  title: string;
  blurb: string;
  image: string;
  /* Split from the old single `github` field, which held live-demo URLs
     for three of four entries while every card was labelled "Live Demo". */
  links: {
    live?: string;
    repo?: string;
  };
  tech?: string[];
  /* TODO: add years — they give the list an editorial spine. */
  year?: string;
};

export const projects: Project[] = [
  {
    title: "GreenThumb",
    blurb:
      "An IoT-powered smart greenhouse that waters itself. Soil and climate sensors report to a Firebase backend, irrigation runs on thresholds rather than timers, and the whole system is monitored from a React Native app.",
    image: "/asset/greenthumb.jpg",
    links: { repo: "https://github.com/80may/greenthumb" },
    tech: ["ESP32", "Firebase", "React Native", "IoT"],
  },
  {
    title: "Ranao Job Platform",
    blurb:
      "A full-stack job platform connecting employers and job seekers across Lanao — postings, applications, and employer profiles, built for a region most national job boards skip.",
    image: "/asset/ranao-job.png",
    links: { live: "https://ranaojob-platform.vercel.app/" },
    tech: ["React", "Node.js", "Firebase"],
  },
  {
    title: "MSU Herbarium Management System",
    blurb:
      "A cataloguing system for the MSU herbarium: specimens are recorded, tracked and searched through a single interface, replacing the paper ledgers the collection had been kept in.",
    image: "/asset/msu-herbarium.png",
    links: { live: "https://msu-herbarium-ms.vercel.app/" },
    /* TODO: confirm the stack — the original copy only said
       "modern web technologies", so nothing is listed rather than guessed. */
  },
  {
    title: "CE Graduation Predictor",
    blurb:
      "A machine-learning web app that predicts whether a Civil Engineering student at Mindanao State University – Marawi will graduate on time, trained on historical academic records.",
    image: "/asset/ce-pred.png",
    /* Trailing double slash removed from the original URL. */
    links: { live: "https://ce-predictor-msu.streamlit.app/" },
    tech: ["Python", "Streamlit", "Machine Learning"],
  },
];
