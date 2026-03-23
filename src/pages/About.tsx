import "../style/about.css";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="sectionInner">
        <div className="sectionHeaderCenter">
          <div className="sectionPill">About Me</div>
          <h2 className="sectionTitle">
            Developer <span className="sectionTitleAccent">Story</span>
          </h2>
          <div className="sectionUnderline" />
        </div>

        <div className="aboutContent">
          <p>
            I am a full-stack developer with a primary focus on the backend,
            working with .NET and Java ecosystems. I have experience building
            web applications from the interface level to server logic and
            database management, including API design, data processing, and
            application structure organization.
          </p>
          <p>
            Parallelly, I am actively developing in frontend development, as I
            aim to create holistic products where both the technical part and
            the user experience are important. I have worked on various types of
            projects — from educational implementations to more complex
            prototypes covering the full application logic cycle.
          </p>
          <p>
            I am studying Software Engineering, where I combine a theoretical
            base with the practical implementation of projects. This has given
            me a wide stack of technologies and flexibility in choosing tools
            for the task.
          </p>
        </div>

        <div className="statsGrid">
          <div className="statCard">
            <div className="statCardGlow" />
            <span className="statNumber">5+</span>
            <span className="statLabel">Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
