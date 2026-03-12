import { Check, X, Home } from "lucide-react";
import Image from "next/image";

export function Comparison() {
  return (
    <section className="pt-24 pb-24 bg-[#45494e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[36px] font-medium text-center text-white mb-12"
          style={{ fontFamily: "var(--font-roboto-slab)" }}
        >
          VEND &amp; BIEN votre atout Immobilier,
          <br />
          pour une vente rapide, au prix convenu !
        </h2>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Vente traditionnelle */}
          <div className="bg-[#7A7A7A] p-6">
            <div className="flex justify-center mb-4">
              <Home className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-[22px] font-normal text-white mb-6 text-center uppercase">
              Vente traditionnelle
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Durée moyenne de vente <strong>+144 jours</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Financement acquéreur non vérifié
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Incertitude du prix de vente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Visibilité limitée de votre bien
                </span>
              </li>
            </ul>
          </div>

          {/* Vend & Bien */}
          <div className="bg-[#32373c] p-12">
            <div className="flex justify-center mb-4 -mt-7 -ml-9">
              <Image
                src="/images/logo-white-horizontal.png"
                alt="Vend & Bien"
                width={200}
                height={47}
                className="w-[62%] h-auto"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-1 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Garantie vendeur à <strong>30 jours</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-1 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  <strong>Qualification</strong> des acquéreurs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-1 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Prix net vendeur <strong>optimal</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-1 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  <strong>Méthode éprouvée</strong> portée par notre expertise
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-white mt-1 shrink-0" />
                <span className="text-[19px] font-normal text-white">
                  Accompagnement global,{" "}
                  <strong>transaction sereine et réussie.</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
