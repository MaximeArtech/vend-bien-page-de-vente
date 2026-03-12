"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

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

function TrustIndexBadgeMobile() {
  return (
    <div className="md:hidden mt-6">
      <a
        href="https://www.trustindex.io/reviews/www.immo.vendetbien.com/lang/fr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 bg-white rounded-lg px-4 py-2 shadow-sm"
      >
        <Image
          src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
          alt="Google"
          width={150}
          height={25}
          className="h-[25px] w-auto"
          unoptimized
        />
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                  alt=""
                  width={17}
                  height={17}
                  className="w-[17px] h-[17px]"
                  unoptimized
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-[#32373c]">4.8</span>
          </div>
          <span className="text-[11px] text-[#32373c] whitespace-nowrap">
            Service le mieux noté 2026
          </span>
        </div>
      </a>
    </div>
  );
}

export function Hero() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setVideoPlaying(true);
    videoRef.current?.play();
  };

  return (
    <>
      <section
        id="header-form"
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url(/images/hero/bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* White overlay at 80% */}
        <div className="absolute inset-0 bg-white/80" />

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
            <div className="w-full">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/s2V6VyjwDx9jjE7oQLrH"
                style={{ width: "100%", height: "399px", border: "none", borderRadius: "3px" }}
                title="Formulaire - Vendeurs"
              />
            </div>

            {/* TrustIndex badge mobile only */}
            <TrustIndexBadgeMobile />

            {/* Video with poster overlay */}
            <div className="w-full max-w-2xl mt-8">
              <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="https://www.immovendetbien.com/wp-content/uploads/2025/09/Pitch-Vend-Bien.mp4"
                  loop
                  preload="metadata"
                  controls={videoPlaying}
                  controlsList="nodownload"
                />
                {!videoPlaying && (
                  <div
                    className="absolute inset-0 cursor-pointer flex items-center justify-center"
                    style={{
                      backgroundImage: "url(/images/hero/video-cover.png)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={handlePlay}
                    role="button"
                    aria-label="Lire la vidéo"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePlay(); }}
                  >
                    <svg
                      className="w-16 h-16 text-white drop-shadow-lg"
                      viewBox="0 0 1000 1000"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                    >
                      <path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z" />
                    </svg>
                  </div>
                )}
              </div>
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
