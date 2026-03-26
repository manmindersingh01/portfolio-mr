import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${done ? 'done' : ''}`}>
      <span className="preloader-text">Mridulika Sharma</span>
      <span className="preloader-sub">Developer Portfolio</span>
    </div>
  );
}
