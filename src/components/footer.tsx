import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#32373c] text-gray-400 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Image
          src="/images/logo-white.png"
          alt="Vend & Bien"
          width={180}
          height={45}
          className="h-10 w-auto mx-auto mb-6"
        />

        <div className="flex flex-wrap justify-center gap-6 text-xs mb-6">
          <a href="#" className="hover:text-white transition-colors">
            Honoraires
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Politique de confidentialité
          </a>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-xs">
            Tous droits réservés – Vend&amp;Bien – 2025
          </p>
          <p className="text-xs mt-1">
            Site, stratégie, et publicités forgés dans la jungle de Trib&apos;up
          </p>
        </div>
      </div>
    </footer>
  );
}
