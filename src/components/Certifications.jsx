import { useEffect, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Certifications.css';

const certs = [
  { name: 'C/C++ with Data Structures & Algorithms', issuer: 'InternsElite', date: 'Dec 2025' },
  { name: 'ChatGPT Made Easy: AI Essentials for Beginners', issuer: 'Infosys', date: 'Aug 2025' },
  { name: 'Introduction to Hardware and Operating Systems', issuer: 'Coursera', date: 'Sep 2024' },
  { name: 'The Bits and Bytes of Computer Networking', issuer: 'Coursera', date: 'Oct 2024' },
];

const achievements = [
  { stat: '50+', text: 'Coding problems solved across GeeksForGeeks, sharpening problem-solving and algorithmic thinking skills.', date: 'Nov 2025' },
  { stat: 'Top 10', text: 'Ranked in top 10 out of 100+ teams in Innovate - a 24-hour hackathon organized by Pentaomnia.', date: 'Mar 2024' },
];

function AnimatedStat({ stat }) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const num = parseInt(stat.match(/\d+/)?.[0]);
        if (!num) return;
        const suffix = stat.replace(/\d+/, '');
        let cur = 0;
        const step = Math.ceil(num / 35);
        const interval = setInterval(() => {
          cur = Math.min(cur + step, num);
          el.textContent = cur + suffix;
          if (cur >= num) clearInterval(interval);
        }, 30);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  return <div className="achievement-stat" ref={elRef}>{stat}</div>;
}

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section className="certs-section" id="certifications" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number reveal">05</div>
            <h2 className="section-title reveal stagger-1">Certifications & <em>achievements</em></h2>
          </div>
        </div>
        <div className="certs-achievements-grid">
          <div>
            <ul className="cert-list">
              {certs.map((c, i) => (
                <li className={`cert-item reveal stagger-${i + 2}`} key={c.name}>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-issuer">{c.issuer}</div>
                  </div>
                  <span className="cert-date">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {achievements.map((a, i) => (
              <div className={`achievement-card reveal stagger-${i + 3}`} key={a.stat}>
                <AnimatedStat stat={a.stat} />
                <div className="achievement-text">{a.text}</div>
                <div className="achievement-date">{a.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
