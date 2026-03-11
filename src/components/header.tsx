"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#32373c]">
              Vend<span className="text-amber-500">&</span>Bien
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#stats" className="text-sm font-medium text-gray-600 hover:text-[#32373c] transition-colors">
              Nos résultats
            </a>
            <a href="#methode" className="text-sm font-medium text-gray-600 hover:text-[#32373c] transition-colors">
              Notre méthode
            </a>
            <a href="#ventes" className="text-sm font-medium text-gray-600 hover:text-[#32373c] transition-colors">
              Nos ventes
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[#32373c] transition-colors">
              FAQ
            </a>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6">
              Vérifier l&apos;éligibilité
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
          <a href="#stats" className="block text-sm font-medium text-gray-600">Nos résultats</a>
          <a href="#methode" className="block text-sm font-medium text-gray-600">Notre méthode</a>
          <a href="#ventes" className="block text-sm font-medium text-gray-600">Nos ventes</a>
          <a href="#faq" className="block text-sm font-medium text-gray-600">FAQ</a>
          <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full">
            Vérifier l&apos;éligibilité
          </Button>
        </div>
      )}
    </header>
  );
}
