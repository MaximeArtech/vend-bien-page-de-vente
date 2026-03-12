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
    <div ref={ref} className="text-[32px] font-normal leading-9 text-[#32373c]">
      {count}
      {suffix}
    </div>
  );
}

export function Hero() {
  return (
    <>
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url(/images/hero/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* White overlay at 80% */}
        <div className="absolute inset-0 bg-white/80" />

        {/* TrustIndex Google badge */}
        <div className="absolute top-4 right-4 z-20 hidden md:block">
          <a
            href="https://www.google.com/maps/place/Vend+%26+Bien"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg px-4 py-3 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#32373c]">4.8</span>
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i} className="text-sm">{s}</span>
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-500">Avis Google</span>
            </div>
          </a>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-[200px] py-[200px] max-lg:px-8 max-lg:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#DE6539] text-white px-4 py-1 mb-6 inline-block self-center">
              <span className="text-[35px] font-semibold uppercase tracking-wide">
                Reims &amp; Epernay
              </span>
            </div>
            <h1
              className="text-[48px] max-md:text-[32px] font-medium text-[#32373c] leading-tight mb-6"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Nous vendons votre bien{" "}
              <br className="hidden md:block" />
              <span className="text-[#DE6539]">en 30 jours</span> et{" "}
              <span className="text-[#DE6539]">au prix convenu</span>
            </h1>
            <p className="text-[20px] text-[#32373c] mb-8">
              Sinon jusqu&apos;à{" "}
              <strong>100% des honoraires offerts</strong>
            </p>

            {/* Formulaire iframe */}
            <div className="w-full max-w-3xl">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
                style={{ width: "100%", height: "500px", border: "none", borderRadius: "3px" }}
                title="Formulaire - Vendeurs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar - overlapping hero */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
        <div className="bg-white shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.155)] flex flex-col md:flex-row justify-between items-center px-5 py-9 gap-6">
          <div className="flex flex-col items-center text-center flex-1 gap-0">
            <AnimatedNumber target={188} />
            <p
              className="text-[28px] font-normal text-[#DE6539] leading-[42px]"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Biens vendus
            </p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 gap-0">
            <div className="flex items-baseline gap-1">
              <AnimatedNumber target={30} />
              <span className="text-[32px] font-normal text-[#32373c]">Jours</span>
            </div>
            <p
              className="text-[28px] font-normal text-[#DE6539] leading-[42px]"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Délai de vente mandat performance
            </p>
          </div>
          <div className="flex flex-col items-center text-center flex-1 gap-0">
            <AnimatedNumber target={98} suffix=" %" />
            <p
              className="text-[28px] font-normal text-[#DE6539] leading-[42px]"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Satisfaction clients
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
