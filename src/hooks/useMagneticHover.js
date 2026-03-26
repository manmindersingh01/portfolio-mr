import { useCallback } from 'react';

export default function useMagneticHover() {
  const isFine = typeof window !== 'undefined' && window.matchMedia('(pointer:fine)').matches;

  const onMouseMove = useCallback((e) => {
    if (!isFine) return;
    const btn = e.currentTarget;
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  }, [isFine]);

  const onMouseLeave = useCallback((e) => {
    if (!isFine) return;
    const btn = e.currentTarget;
    btn.style.transform = '';
    btn.style.transition = 'transform 0.4s cubic-bezier(.23,1,.32,1)';
    setTimeout(() => { btn.style.transition = ''; }, 400);
  }, [isFine]);

  return { onMouseMove, onMouseLeave };
}
