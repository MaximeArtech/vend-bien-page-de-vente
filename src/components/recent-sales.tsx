"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Maximize2 } from "lucide-react";
import { useRef } from "react";

const agentFullPhotos: Record<string, string> = {
  Alessia: "/images/agents/alessia.jpeg",
  Sébastien: "/images/agents/sebastien.png",
  Véronique: "/images/agents/veronique.jpg",
  Amina: "/images/agents/amina.png",
};

const properties = [
  {
    price: "315 000€",
    city: "Épernay",
    area: "152 m²",
    soldIn: "15 jours",
    image: "/images/properties/epernay-315.jpeg",
    agent: "Alessia",
  },
  {
    price: "305 000€",
    city: "Vauciennes",
    area: "136 m²",
    soldIn: "3 semaines",
    image: "/images/properties/vauciennes-305.jpg",
    agent: "Sébastien",
  },
  {
    price: "490 000€",
    city: "Epernay",
    area: "136 m²",
    soldIn: "3 semaines",
    image: "/images/properties/epernay-490.jpeg",
    agent: "Véronique",
  },
  {
    price: "129 000€",
    city: "Épernay",
    area: "80 m²",
    soldIn: "3 semaines",
    image: "/images/properties/epernay-129.jpg",
    agent: "Alessia",
  },
  {
    price: "499 000€",
    city: "Épernay",
    area: "213 m²",
    soldIn: "15 jours",
    image: "/images/properties/reims-francoise.jpg",
    agent: "Sébastien",
  },
  {
    price: "219 000€",
    city: "Reims",
    area: "90 m²",
    soldIn: "3 semaines",
    image: "/images/properties/reims-219.jpeg",
    agent: "Véronique",
  },
  {
    price: "610 000€",
    city: "Montbré",
    area: "160 m²",
    soldIn: "3 semaines",
    image: "/images/properties/montbre-610.jpg",
    agent: "Alessia",
  },
  {
    price: "349 000€",
    city: "Reims",
    area: "120 m²",
    soldIn: "3 semaines",
    image: "/images/properties/reims-349.jpeg",
    agent: "Véronique",
  },
  {
    price: "353 000€",
    city: "Reims",
    area: "93 m²",
    soldIn: "3 semaines",
    image: "/images/properties/reims-353.jpg",
    agent: "Alessia",
  },
  {
    price: "319 000€",
    city: "Bezannes",
    area: "104 m²",
    soldIn: "3 semaines",
    image: "/images/properties/bezannes-319.jpeg",
    agent: "Véronique",
  },
];

function EuroIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
    >
      <path d="m24 1.5a22.5 22.5 0 1 0 22.5 22.5 22.5 22.5 0 0 0 -22.5-22.5zm9.171 31.081a11.37 11.37 0 0 1 -18.171-4.693h-2.185a1.5 1.5 0 0 1 0-3h1.533c-.022-.288-.048-.588-.048-.888s.022-.6.045-.892h-1.53a1.5 1.5 0 0 1 0-3h2.185a11.391 11.391 0 0 1 10.682-7.491 11.267 11.267 0 0 1 7.03 2.43 1.5 1.5 0 1 1 -1.853 2.358 8.3 8.3 0 0 0 -5.177-1.788 8.387 8.387 0 0 0 -7.418 4.491h6.241a1.5 1.5 0 0 1 0 3h-7.153a8.466 8.466 0 0 0 -.052.892 8.6 8.6 0 0 0 .047.884h7.158a1.5 1.5 0 0 1 0 3h-6.24a8.376 8.376 0 0 0 12.935 2.437 1.5 1.5 0 0 1 1.973 2.26z" />
    </svg>
  );
}

export function RecentSales() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="ventes" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#32373c] mb-2">
          Nos derniers biens vendus en moins de 30 jours
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          Ajoutez-y votre bien sans plus tarder !
        </p>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center"
            aria-label="Précédent"
          >
            <ChevronLeft className="h-5 w-5 text-[#32373c]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
          >
            {properties.map((prop, i) => (
              <div
                key={i}
                className="min-w-[340px] max-w-[340px] bg-white border border-gray-200 overflow-hidden shrink-0"
              >
                {/* Sold badge */}
                <div className="bg-[#32373c] text-white text-xs font-bold px-4 py-2 text-center uppercase">
                  Vendu en {prop.soldIn}
                </div>

                {/* Property image */}
                <div className="relative h-52">
                  <Image
                    src={prop.image}
                    alt={`${prop.city} - ${prop.price}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Property info with icons */}
                <div className="px-4 py-3">
                  <div className="flex items-center justify-center gap-4 text-sm text-[#32373c]">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {prop.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="h-3.5 w-3.5" />
                      {prop.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <EuroIcon className="h-3.5 w-3.5" />
                      {prop.price}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mx-4" />

                {/* Agent section */}
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-12 h-14 overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src={agentFullPhotos[prop.agent]}
                      alt={prop.agent}
                      width={48}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Vendu par {prop.agent}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center"
            aria-label="Suivant"
          >
            <ChevronRight className="h-5 w-5 text-[#32373c]" />
          </button>
        </div>

        <div className="text-center mt-10">
          <a
            href="#eligibilite"
            className="inline-block bg-[#32373c] text-white text-sm font-medium px-8 py-4 hover:bg-[#45494e] transition-colors"
          >
            Je vérifie l&apos;éligibilité de mon bien
          </a>
        </div>
      </div>
    </section>
  );
}
