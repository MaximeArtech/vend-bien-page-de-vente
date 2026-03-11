import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#32373c] mb-12">
          VEND &amp; BIEN votre atout Immobilier, pour une vente rapide, au prix
          convenu !
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vente traditionnelle */}
          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-lg font-bold text-gray-400 mb-6 text-center uppercase tracking-wide">
              Vente traditionnelle
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">
                  Durée moyenne de vente <strong>+144 jours</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">
                  Financement acquéreur non vérifié
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">
                  Incertitude du prix de vente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-600">
                  Visibilité limitée de votre bien
                </span>
              </li>
            </ul>
          </div>

          {/* Vend & Bien */}
          <div className="bg-[#32373c] p-8 text-white">
            <h3 className="text-lg font-bold text-white mb-6 text-center uppercase tracking-wide">
              Vend &amp; Bien
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  Garantie vendeur à <strong className="text-white">30 jours</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  <strong className="text-white">Qualification</strong> des acquéreurs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  Prix net vendeur <strong className="text-white">optimal</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  <strong className="text-white">Méthode éprouvée</strong> portée par
                  notre expertise
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-green-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">
                  Accompagnement global,{" "}
                  <strong className="text-white">
                    transaction sereine et réussie.
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
