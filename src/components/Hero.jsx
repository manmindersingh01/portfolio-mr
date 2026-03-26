import { useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import useMagneticHover from '../hooks/useMagneticHover';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const revealRef = useScrollReveal();
  const magnetic = useMagneticHover();

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const onScroll = () => {
      if (!video.duration) return;
      const rect = section.getBoundingClientRect();
      const sh = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sh));
      const targetTime = progress * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.03) {
        video.currentTime = targetTime;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="heroSection" ref={sectionRef}>
      <div className="hero-sticky" ref={revealRef}>
        <video className="hero-video" ref={videoRef} muted playsInline preload="auto">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-label reveal stagger-1">
            <span className="hero-label-dot" />
            Open to opportunities
          </div>
          <h1 className="hero-title reveal stagger-2">
            Hi, I'm<br /><em>Mridulika</em> <span className="accent-text">Sharma</span>
          </h1>
          <p className="hero-description reveal stagger-3">
            Computer Science undergrad at LPU with hands-on experience in Java, C/C++, and full-stack web development. I build clean, functional applications and love solving problems through code.
          </p>
          <div className="hero-actions reveal stagger-4">
            <a href="#projects" className="btn-primary" onClick={(e) => scrollTo(e, '#projects')} {...magnetic}>
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <a href="https://github.com/Mridu265" target="_blank" rel="noopener noreferrer" className="btn-outline" {...magnetic}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              GitHub
            </a>
            <a href="https://drive.google.com/drive/folders/1BmEFudzirt4p5JqwXvaDPEi9WGqZR1UZ" target="_blank" rel="noopener noreferrer" className="btn-outline" {...magnetic}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
              Resume
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          Scroll to explore
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
        </div>
      </div>
    </section>
  );
}
