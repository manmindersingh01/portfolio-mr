import useScrollReveal from '../hooks/useScrollReveal';
import './Skills.css';

const cards = [
  { icon: 'code', color: 'blue', title: 'Languages', tags: ['C','C++','Java','JavaScript','SQL'] },
  { icon: 'layout', color: 'orange', title: 'Frameworks & Web', tags: ['HTML5','CSS3','Java Swing','JDBC'] },
  { icon: 'db', color: 'green', title: 'Tools & Platforms', tags: ['MySQL','Git','GitHub'] },
  { icon: 'book', color: 'purple', title: 'CS Fundamentals', tags: ['DBMS','Operating Systems','Computer Networks','OOPs','DSA'] },
];

const icons = {
  code: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  layout: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>,
  db: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>,
  book: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section className="skills-section" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number reveal">01</div>
            <h2 className="section-title reveal stagger-1">Technical <em>skills</em></h2>
          </div>
          <p className="section-description reveal stagger-2">A growing toolkit spanning languages, frameworks, databases, and core CS fundamentals.</p>
        </div>
        <div className="skills-grid">
          {cards.map((c, i) => (
            <div className={`skill-card reveal stagger-${i + 3}`} key={c.title}>
              <div className={`skill-card-icon ${c.color}`}>{icons[c.icon]}</div>
              <div className="skill-card-title">{c.title}</div>
              <div className="skill-tags">
                {c.tags.map((t) => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
