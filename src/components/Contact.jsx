import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-grid">
          <div>
            <h2 className="contact-heading reveal">
              Let's build<br />something <em>together</em>
            </h2>
            <p className="contact-text reveal stagger-1">
              I'm currently looking for internship and full-time opportunities where I can contribute, learn, and grow as a developer. If you have a role that's a good fit, I'd love to connect.
            </p>
            <a href="mailto:Sharmamridulika8@gmail.com" className="contact-email-link reveal stagger-2">
              Sharmamridulika8@gmail.com
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
          <div className="contact-details">
            <div className="contact-detail-group reveal stagger-3">
              <div className="contact-detail-label">Location</div>
              <div className="contact-detail-value">Phagwara, Punjab, India<br />Open to remote & relocation</div>
            </div>
            <div className="contact-detail-group reveal stagger-4">
              <div className="contact-detail-label">Phone</div>
              <div className="contact-detail-value"><a href="tel:+919596972392">+91 9596 972 392</a></div>
            </div>
            <div className="contact-detail-group reveal stagger-5">
              <div className="contact-detail-label">Connect</div>
              <div className="contact-socials">
                <a href="https://github.com/Mridu265" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/mridulikasharma" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a href="mailto:Sharmamridulika8@gmail.com" className="contact-social-link" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
                </a>
                <a href="https://drive.google.com/drive/folders/1BmEFudzirt4p5JqwXvaDPEi9WGqZR1UZ" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="Resume">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
