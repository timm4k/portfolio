import "../style/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="sectionInner">
        <div className="sectionHeaderCenter">
          <div className="sectionPill">Get in Touch</div>
          <h2 className="sectionTitle">
            Let's <span className="sectionTitleAccent">Connect</span>
          </h2>
          <div className="sectionUnderline" />
        </div>

        <form
          className="contactForm"
          action="https://formspree.io/f/mjgadqbz"
          method="POST"
        >
          <div className="formRow">
            <div className="formGroup">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="name"
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>

          <div className="formGroup">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="type of message"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me abt your project..."
              maxLength={500}
              required
            ></textarea>
            <span className="charCount">Max 500 characters</span>
          </div>

          <button type="submit" className="btnSubmit">
            Send Message <span>➤</span>
          </button>
        </form>

        <div className="contactFooter">
          <div className="contactInfo">
            <span className="infoIcon">✉</span>
            <a href="mailto:tatelinhf@gmail.com">tatelinhf@gmail.com</a>
          </div>
          <div className="dotDivider">•</div>
          <div className="contactInfo">
            <span>Ukraine</span>
          </div>
        </div>
      </div>
    </section>
  );
}
