"use client";

import { useEffect, useState, useRef } from "react";
import { Home, Clock, Star } from "lucide-react";

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
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-amber-500">
      {count}
      {suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center">
              <Home className="h-8 w-8 text-amber-500" />
            </div>
            <AnimatedNumber target={350} suffix="+" />
            <p className="text-lg text-gray-600 font-medium">Biens vendus</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center">
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <AnimatedNumber target={30} suffix=" jours" />
            <p className="text-lg text-gray-600 font-medium">
              Délai de vente mandat performance
            </p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center">
              <Star className="h-8 w-8 text-amber-500" />
            </div>
            <AnimatedNumber target={98} suffix="%" />
            <p className="text-lg text-gray-600 font-medium">
              Satisfaction clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
