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
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {count}
      {suffix}
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "url(/images/hero/bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left column - text */}
          <div>
            <p className="text-sm font-medium text-gray-300 tracking-widest uppercase mb-6">
              Reims &amp; Epernay
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6">
              Nous vendons votre bien{" "}
              <br className="hidden md:block" />
              <span className="text-[#DE6539]">en 30 jours</span> et{" "}
              <span className="text-[#DE6539]">au prix convenu</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Sinon jusqu&apos;à{" "}
              <strong className="text-white">100% des honoraires offerts</strong>
            </p>

            {/* Formulaire iframe */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
                style={{ width: "100%", height: "500px", border: "none", borderRadius: "3px" }}
                title="Formulaire - Vendeurs"
              />
            </div>
          </div>

          {/* Right column - video */}
          <div className="hidden md:block">
            <div className="relative rounded-lg overflow-hidden cursor-pointer group">
              <video
                className="w-full"
                src="https://www.immovendetbien.com/wp-content/uploads/2025/09/Pitch-Vend-Bien.mp4"
                loop
                preload="metadata"
                controls
                poster="/images/hero/video-cover.png"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <AnimatedNumber target={188} />
              <p className="text-sm text-gray-400">Biens vendus</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline justify-center gap-2">
                <AnimatedNumber target={30} />
                <span className="text-sm text-gray-400">Jours</span>
              </div>
              <p className="text-sm text-gray-400">
                Délai de vente mandat performance
              </p>
            </div>
            <div className="space-y-2">
              <AnimatedNumber target={98} suffix=" %" />
              <p className="text-sm text-gray-400">Satisfaction clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
