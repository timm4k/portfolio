type SkillGroup = {
  key: string;
  title: string;
  icon: string;
  items: string[];
};

export default function Skills() {
  const groups: SkillGroup[] = [
    {
      key: "languages",
      title: "Languages",
      icon: "LANG",
      items: [
        "C#",
        "Java",
        "C++",
        "TypeScript",
        "JavaScript",
        "Python",
        "Kotlin",
      ],
    },
    {
      key: "backend-dotnet",
      title: ".NET Backend",
      icon: ".NET",
      items: [
        "ASP.NET Core",
        "Entity Framework Core",
        "ADO.NET",
        "Dapper",
        "Minimal API",
      ],
    },
    {
      key: "backend-java",
      title: "Java Backend",
      icon: "JVM",
      items: ["Spring Boot", "Spring MVC", "Spring Data", "Spring Security"],
    },
    {
      key: "frontend",
      title: "Frontend",
      icon: "UI",
      items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Angular"],
    },
    {
      key: "databases",
      title: "Databases",
      icon: "DB",
      items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"],
    },
    {
      key: "desktop-ui",
      title: "Desktop / UI",
      icon: "WIN",
      items: [
        "WPF",
        "WinUI",
        "XAML",
        "MVVM",
        "WinForms",
        "Avalonia UI",
        ".NET MAUI",
        "Blazor",
      ],
    },
    {
      key: "tools",
      title: "Tools",
      icon: "DEV",
      items: ["Git", "Docker", "Linux", "REST APIs", "GraphQL", "WebSockets"],
    },
    {
      key: "architecture",
      title: "Architecture",
      icon: "ARC",
      items: [
        "OOP",
        "SOLID",
        "Repository pattern",
        "Layered architecture",
        "DTO",
        "Design patterns",
      ],
    },
  ];

  return (
    <section id="skills" className="section sectionSkills">
      <div className="stars stars--section" aria-hidden="true" />

      <div className="sectionInner">
        {}
        <div className="sectionHeaderCenter">
          <div className="sectionPill">Expertise</div>

          <h2 className="sectionTitle">
            Skills <span className="sectionTitleAccent">& Technologies</span>
          </h2>

          <div className="sectionUnderline" />
        </div>

        <div className="skillsGrid skillsGrid--many">
          {groups.map((g) => (
            <article key={g.key} className="skillCard">
              <div className="skillCardGlow" aria-hidden="true" />

              <div className="skillIcon" aria-hidden="true">
                <span className="skillIconText">{g.icon}</span>
              </div>

              <h3 className="skillCardTitle">{g.title}</h3>

              <div className="skillPills">
                {g.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
