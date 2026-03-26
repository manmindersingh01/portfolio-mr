import './Marquee.css';

const items = ['C/C++','Java','JavaScript','HTML & CSS','MySQL','Git & GitHub','Data Structures','OOPs','DBMS','Operating Systems','Computer Networks'];

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <span className="marquee-item" key={i}>{item}</span>
        ))}
      </div>
    </section>
  );
}
