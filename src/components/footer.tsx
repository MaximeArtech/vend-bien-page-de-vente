import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <a href="#">
          <Image
            src="/images/logo.png"
            alt="Vend & Bien"
            width={351}
            height={100}
            className="h-auto w-[200px] mx-auto mb-6"
          />
        </a>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 mb-6">
          <a href="#" className="hover:text-[#32373c] transition-colors">
            Honoraires
          </a>
          <a href="#" className="hover:text-[#32373c] transition-colors">
            Mentions légales
          </a>
          <a href="#" className="hover:text-[#32373c] transition-colors">
            Politique de confidentialité
          </a>
        </div>

        <p className="text-xs text-gray-500">
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
