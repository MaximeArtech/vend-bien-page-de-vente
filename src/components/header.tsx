"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#">
            <Image
              src="/images/logo.png"
              alt="Vend & Bien"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#resultats" className="text-sm font-medium text-[#32373c] hover:opacity-70 transition-opacity">
              Nos résultats
            </a>
            <a href="#methode" className="text-sm font-medium text-[#32373c] hover:opacity-70 transition-opacity">
              Notre méthode
            </a>
            <a href="#ventes" className="text-sm font-medium text-[#32373c] hover:opacity-70 transition-opacity">
              Nos ventes
            </a>
            <a href="#faq" className="text-sm font-medium text-[#32373c] hover:opacity-70 transition-opacity">
              FAQ
            </a>
            <a
              href="#eligibilite"
              className="bg-[#32373c] text-white text-sm font-medium px-6 py-3 rounded hover:bg-[#45494e] transition-colors"
            >
              Je vérifie l&apos;éligibilité
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#32373c]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          <a href="#resultats" className="block text-sm font-medium text-[#32373c]">Nos résultats</a>
          <a href="#methode" className="block text-sm font-medium text-[#32373c]">Notre méthode</a>
          <a href="#ventes" className="block text-sm font-medium text-[#32373c]">Nos ventes</a>
          <a href="#faq" className="block text-sm font-medium text-[#32373c]">FAQ</a>
          <a
            href="#eligibilite"
            className="block bg-[#32373c] text-white text-sm font-medium px-6 py-3 rounded text-center"
          >
            Je vérifie l&apos;éligibilité
          </a>
        </div>
      )}
    </header>
  );
}
