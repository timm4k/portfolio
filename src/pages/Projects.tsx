import React from "react";
import "../style/projects.css";

interface ProjectItem {
  id: string;
  title: string;
  mainTech: string;
  orbitTech: string[];
  description: string;
  tags: string[];
  github: string;
}

export default function Projects() {
  const projectList: ProjectItem[] = [
    {
      id: "atiko",
      title: "Atiko Vintage Marketplace",
      mainTech: ".NET",
      orbitTech: [
        "C#",
        "WinUI",
        "XAML",
        "MVVM",
        "Async",
        "LINQ",
        "JSON",
        "Styles",
        "UI",
        "UX",
        "Binding",
        "Task",
        "DI",
        "Desktop",
        "Events",
        "IO",
      ],
      description:
        "A C# desktop application built with WinUI and the MVVM pattern. Features advanced data binding and clean architecture.",
      tags: ["C#", ".NET", "WinUI", "XAML", "MVVM"],
      github: "https://github.com/timm4k/demo_atiko",
    },
    {
      id: "mythological",
      title: "Mythological Archive",
      mainTech: "C#",
      orbitTech: [
        "CLI",
        ".NET 8",
        "Auth",
        "BCrypt",
        "Quiz",
        "Service",
        "Parser",
        "Logic",
        "LINQ",
        "Collections",
        "Generic",
        "IO",
        "Hash",
        "Console",
        "Security",
        "Data",
      ],
      description:
        "A .NET 8 console application with service-oriented architecture, Spectre.Console UI, and secure authentication.",
      tags: ["C#", ".NET 8", "Console", "Spectre.Console", "BCrypt"],
      github: "https://github.com/timm4k/Demo_MythologicalArchive",
    },
    {
      id: "activity-tracker",
      title: "Activity Tracker",
      mainTech: "JAVA",
      orbitTech: [
        "OOP",
        "JSON",
        "CRUD",
        "PDF",
        "Streams",
        "Auth",
        "Logic",
        "List",
        "Map",
        "Exception",
        "File",
        "Report",
        "3-Tier",
        "Validate",
        "Util",
        "Lib",
      ],
      description:
        "Java console app featuring user authorization, 3-tier architecture, and automated report generation.",
      tags: ["Java", "OOP", "JSON", "Validation"],
      github: "https://github.com/timm4k/ActivityTracker_",
    },
    {
      id: "coffee-shop",
      title: "Coffee Shop Management",
      mainTech: "C++",
      orbitTech: [
        "STL",
        "OOP",
        "Files",
        "CRUD",
        "Vector",
        "Map",
        "Struct",
        "Pointer",
        "Logic",
        "Algorithm",
        "Store",
        "Data",
        "Binary",
        "Stream",
        "Class",
        "Menu",
      ],
      description:
        "C++ management system with STL containers and file persistence. Demonstrates structured business logic.",
      tags: ["C++", "OOP", "STL", "File Handling"],
      github: "https://github.com/timm4k/Demo_CoffeeShopManagementSystem",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="sectionInner">
        <div className="sectionHeaderCenter">
          <div className="sectionPill">Projects</div>
          <h2 className="sectionTitle">
            Featured <span className="sectionTitleAccent">Projects</span>
          </h2>
          <div className="sectionUnderline"></div>
        </div>

        <div className="projectsGrid">
          {projectList.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="projectCardGlow"></div>

              <div className="projectImageWrapper">
                <div className="tech-stage">
                  <div className="main-logo">{project.mainTech}</div>
                  <div className="orbits">
                    {project.orbitTech.map((tech, index) => (
                      <div
                        key={index}
                        className="orbit-item"
                        style={
                          {
                            animationDelay: `${-index * 1.2}s`,
                            transform: `rotateY(${index * 22.5}deg) translateZ(${110 + (index % 3) * 20}px) rotateX(${(index % 4) * 10 - 20}deg)`,
                          } as React.CSSProperties
                        }
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="imageOverlay"></div>
              </div>

              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>

                <div className="projectTags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="projectFooter">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="viewLink"
                  >
                    View Project <span>→</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="githubIconLink"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
