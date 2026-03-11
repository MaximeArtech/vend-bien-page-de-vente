import { BarChart3, Rocket, Heart } from "lucide-react";

export function ThreeSteps() {
  return (
    <section id="methode" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32373c] mb-4">
          Notre méthode en <span className="text-amber-500">3 étapes</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          Un processus simple et efficace pour vendre votre bien rapidement
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                1
              </div>
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#32373c] mb-3">
                Estimation fiable
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trois estimations complémentaires révèlent le potentiel de votre
                bien et déterminent le prix juste.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                2
              </div>
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Rocket className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#32373c] mb-3">
                Stratégie digitale optimale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Visibilité maximale avant même le lancement de la
                commercialisation grâce à notre stratégie digitale innovante.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6">
                3
              </div>
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-[#32373c] mb-3">
                Votre projet, notre priorité absolue
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Disponible 7j/7, de 8h à 20h, 365 jours par an. Votre projet
                est notre priorité numéro un.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
