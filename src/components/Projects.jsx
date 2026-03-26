import useScrollReveal from '../hooks/useScrollReveal';
import './Projects.css';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
);

const projects = [
  {
    title: 'Clothing Store Management',
    badge: 'Java Application',
    image: 'https://picsum.photos/seed/clothing-store-app/1200/750',
    highlights: [
      'Centralized system automating product management, billing, customer handling, and inventory tracking',
      'Built with Java Swing GUI and MySQL backend with secure JDBC-based CRUD operations',
      'Real-time stock updates and automated bill generation, reducing manual errors',
    ],
    tags: ['Java','MySQL','JDBC','Swing'],
  },
  {
    title: 'Gym Fitness Website',
    badge: 'Web Project',
    image: 'https://picsum.photos/seed/gym-fitness-web/600/375',
    highlights: [
      'Responsive site showcasing membership plans, workout programs, and trainer profiles',
      'Interactive schedule viewer, enquiry forms with validation, and dynamic rendering',
      'Enhanced accessibility and smooth UX for membership registrations',
    ],
    tags: ['HTML','CSS','JavaScript'],
  },
];

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section className="projects-section" id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number reveal">02</div>
            <h2 className="section-title reveal stagger-1">Featured <em>projects</em></h2>
          </div>
          <p className="section-description reveal stagger-2">From Java desktop apps to responsive web builds.</p>
        </div>
        <div className="projects-bento">
          {projects.map((p, i) => (
            <div className={`project-card reveal stagger-${i + 3}`} key={p.title}>
              <div className="project-card-image">
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className="project-card-badge">{p.badge}</span>
              </div>
              <div className="project-card-body">
                <div className="project-card-title">{p.title}</div>
                <ul className="project-highlights">
                  {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="project-card-footer">
                  <div className="project-tech-tags">
                    {p.tags.map((t) => <span className="project-tech-tag" key={t}>{t}</span>)}
                  </div>
                  <a href="https://github.com/Mridu265" target="_blank" rel="noopener noreferrer" className="project-card-arrow"><ArrowIcon /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
