/* Single source of truth for the section anchors. Navbar and
   MobileNavbar both read from here — they used to keep separate,
   drifting copies of this list. */
export type NavLink = {
  name: string;
  id: string;
};

export const navLinks: NavLink[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Work", id: "projects" },
  { name: "Path", id: "experience" },
  { name: "Contact", id: "contact" },
];
