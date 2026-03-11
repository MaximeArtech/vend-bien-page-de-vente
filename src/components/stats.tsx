"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedNumber({
  target,
  suffix = "",
  duration = 2000,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#32373c]">
      {count}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section id="resultats" className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <AnimatedNumber target={350} suffix="" />
            <p className="text-sm text-gray-500">Biens vendus</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline justify-center gap-2">
              <AnimatedNumber target={30} />
              <span className="text-sm text-gray-500">Jours</span>
            </div>
            <p className="text-sm text-gray-500">
              Délai de vente mandat performance
            </p>
          </div>
          <div className="space-y-2">
            <AnimatedNumber target={98} suffix=" %" />
            <p className="text-sm text-gray-500">Satisfaction clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
