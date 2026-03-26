import useScrollReveal from '../hooks/useScrollReveal';
import './Education.css';

const schools = [
  { name: 'Lovely Professional University', degree: 'B.Tech - Computer Science and Engineering', location: 'Phagwara, Punjab, India', score: '7.00', label: 'CGPA', period: 'Aug 2025 - Present' },
  { name: 'Harsh Niketan Higher Secondary School', degree: 'Intermediate (Class XII)', location: 'Sunder Bani, Jammu & Kashmir', score: '75%', label: 'Percentage', period: 'Jun 2022 - May 2023' },
  { name: 'New Public High School', degree: 'Matriculation (Class X)', location: 'Sunder Bani, Jammu & Kashmir', score: '84.4%', label: 'Percentage', period: 'Jun 2020 - May 2021' },
];

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="education-section" id="education" ref={ref}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-number reveal">04</div>
            <h2 className="section-title reveal stagger-1">Education</h2>
          </div>
        </div>
        <div className="edu-grid">
          {schools.map((s, i) => (
            <div className={`edu-card reveal stagger-${i + 2}`} key={s.name}>
              <div>
                <div className="edu-card-institution">{s.name}</div>
                <div className="edu-card-degree">{s.degree}</div>
                <div className="edu-card-location">{s.location}</div>
              </div>
              <div className="edu-card-right">
                <div className="edu-card-score">{s.score}</div>
                <div className="edu-card-period">{s.label}</div>
                <div className="edu-card-period" style={{ marginTop: '0.5rem' }}>{s.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
