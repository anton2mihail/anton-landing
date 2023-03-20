export type NavbarProps = {
   activeSection: "home" | "projects" | "contact" | undefined;
   setActiveSection: React.Dispatch<React.SetStateAction<"home" | "projects" | "contact" | undefined>>
}
