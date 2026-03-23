import { useEffect, useMemo, useState } from "react";
import Topbar, { type SectionId } from "./components/Topbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import mascot from "./images/mascot.png";
import "./style/index.css";

function scrollToId(id: SectionId) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const sectionIds = useMemo<SectionId[]>(
    () => ["home", "skills", "projects", "about", "contact"],
    [],
  );

  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((x): x is HTMLElement => Boolean(x));

    if (elements.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id as SectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return (
    <div className="pageRoot">
      <div className="stars" aria-hidden="true" />
      <Topbar activeId={active} onNavigate={scrollToId} />
      <main className="pageMain">
        <Home mascotSrc={mascot} onCtaProjects={() => scrollToId("projects")} />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
