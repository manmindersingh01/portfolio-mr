import { useState, useEffect } from 'react';
import useMagneticHover from '../hooks/useMagneticHover';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const magnetic = useMagneticHover();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          mridulika<span>.</span>
        </a>
        <ul className="nav-links">
          {['skills', 'projects', 'experience', 'education', 'contact'].map((s) => (
            <li key={s}><a href={`#${s}`} onClick={(e) => scrollTo(e, `#${s}`)}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => scrollTo(e, '#contact')} {...magnetic}>Get in Touch</a>
        <button className="nav-mobile-toggle" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
