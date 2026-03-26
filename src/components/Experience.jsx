import useScrollReveal from '../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section className="experience-section" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number reveal">03</div>
            <h2 className="section-title reveal stagger-1">Internship & <em>experience</em></h2>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-item reveal stagger-3">
            <div><div className="timeline-date">July 2025</div></div>
            <div>
              <div className="timeline-role">Java & MySQL Application Developer</div>
              <div className="timeline-company">Summer Training | Certificate</div>
              <ul className="timeline-desc">
                <li>Completed summer training developing application-based projects using JDBC for secure and efficient database connectivity</li>
                <li>Built interactive GUI applications with Java Swing and implemented full CRUD operations integrated with a real-time MySQL backend</li>
              </ul>
              <div className="timeline-tags">
                {['Java','MySQL','JDBC','Swing'].map((t) => <span className="timeline-tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
