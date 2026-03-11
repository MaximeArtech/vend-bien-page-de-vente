import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32373c] mb-16">
          Pourquoi choisir <span className="text-amber-500">Vend&amp;Bien</span> ?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vente traditionnelle */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-400 mb-8 text-center">
              Vente traditionnelle
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-gray-600">
                  <strong>+144 jours</strong> de délai de vente moyen
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-gray-600">
                  Financement des acheteurs non vérifié
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-gray-600">
                  Incertitude sur le prix de vente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-400 mt-0.5 shrink-0" />
                <span className="text-gray-600">
                  Visibilité limitée du bien
                </span>
              </li>
            </ul>
          </div>

          {/* Vend & Bien */}
          <div className="bg-[#32373c] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              RECOMMANDÉ
            </div>
            <h3 className="text-xl font-semibold text-amber-500 mb-8 text-center">
              Vend&amp;Bien
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-gray-200">
                  <strong className="text-white">Garantie vendeur à 30 jours</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-gray-200">
                  Qualification et vérification des acheteurs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-gray-200">
                  <strong className="text-white">Prix net vendeur optimal</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-gray-200">
                  Méthodologie éprouvée &amp; stratégie digitale
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="text-gray-200">
                  Accompagnement complet de A à Z
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
