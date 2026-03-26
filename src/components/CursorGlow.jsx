import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const el = ref.current;

    const onMove = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
      el.style.opacity = '1';
    };
    const onLeave = () => { el.style.opacity = '0'; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,142,247,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0, transform: 'translate(-50%,-50%)',
        transition: 'opacity 0.4s', opacity: 0,
      }}
    />
  );
}
