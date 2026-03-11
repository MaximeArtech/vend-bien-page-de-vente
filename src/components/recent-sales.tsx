"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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

export function RecentSales() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
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
                className="min-w-[280px] max-w-[280px] bg-white border border-gray-200 overflow-hidden shrink-0"
              >
                <div className="relative h-44">
                  <Image
                    src={prop.image}
                    alt={`${prop.city} - ${prop.price}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#32373c] text-white text-[10px] font-bold px-3 py-1 uppercase">
                    Vendu en {prop.soldIn}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-0.5">{prop.city}</p>
                  <p className="text-xs text-gray-500 mb-2">{prop.area}</p>
                  <p className="text-lg font-bold text-[#32373c]">
                    {prop.price}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
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
      </div>
    </section>
  );
}
