import ghLogo from "../images/ghlogo.png";

type Props = {
  mascotSrc: string;
  onCtaProjects: () => void;
};

export default function Home({ mascotSrc, onCtaProjects }: Props) {
  const email = "tatelinhf@gmail.com";

  return (
    <section id="home" className="hero">
      <div className="heroContent">
        <div className="mascotWrap">
          <img className="mascot" src={mascotSrc} alt="mascot" />
        </div>

        <h1 className="heroTitle">
          <span className="heroTitleMain">Tate</span>
        </h1>

        <div className="heroSubtitle">Full-stack developer</div>

        <p className="heroText">
          Developing web applications across the full stack — from UI to backend
          architecture. Most of my experience lies in backend systems, APIs and
          database design, primarily within .NET and Java ecosystems, with
          growing focus on frontend development.
        </p>

        <div className="heroActions">
          <button className="btnPrimary" type="button" onClick={onCtaProjects}>
            View projects <span className="ctaIcon">→</span>
          </button>

          <a href={`mailto:${email}`} className="btnGhost">
            Get in touch
          </a>
        </div>

        <div className="socialRow">
          <a
            className="socialBtn"
            href="https://github.com/timm4k"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img className="socialIconGithub" src={ghLogo} alt="GitHub" />
          </a>

          <a className="socialBtn" href={`mailto:${email}`} aria-label="Email">
            <span className="socialGlyph">✉</span>
          </a>
        </div>
      </div>
    </section>
  );
}
