export type SectionId = "home" | "skills" | "projects" | "about" | "contact";

type Props = {
  activeId: SectionId;
  onNavigate: (id: SectionId) => void;
};

export default function Topbar({ activeId, onNavigate }: Props) {
  const navItems: { id: SectionId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
  ];

  return (
    <header className="topbar">
      <div className="topbarInner">
        <div className="brandLeft">Tate</div>

        <nav className="topnav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`topnavLink ${activeId === item.id ? "topnavLinkActive" : ""}`}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="topbarActions">
          <button
            className="ctaTop"
            type="button"
            onClick={() => onNavigate("contact")}
          >
            Contact <span className="ctaIcon">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}
