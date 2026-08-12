/* Typographic skills matrix rather than a logo strip.
   The PNGs in public/logos/ have baked-in white backgrounds and read
   as bright rectangles against the ink ground — they'd need redrawing
   as inline SVG to be usable. */
export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", ".NET Core", "ASP.NET", "REST APIs"],
  },
  {
    label: "Data",
    items: ["Firebase", "MongoDB", "MySQL", "SQL Server", "SQLite"],
  },
  {
    label: "Machine Learning",
    items: ["Python", "scikit-learn", "Streamlit", "Pandas"],
  },
  {
    label: "Hardware",
    items: ["ESP32", "Arduino", "Sensor networks"],
  },
  {
    label: "Design",
    items: ["Figma", "Photoshop", "Canva"],
  },
];
