export function ThreeSteps() {
  return (
    <section id="methode" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Étape 1 */}
          <div className="bg-white p-8 text-center">
            <div className="w-12 h-12 bg-[#32373c] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-lg font-bold text-[#32373c] mb-4">
              Estimation fiable
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Nos 3 estimations complémentaires permettent de révéler tout le
              potentiel de votre bien et d&apos;en optimiser la valeur.
            </p>
            <ul className="text-sm text-gray-600 text-left space-y-2">
              <li>
                <strong className="text-[#32373c]">Structurale</strong> : pour
                déceler la valeur unique de votre bien
              </li>
              <li>
                <strong className="text-[#32373c]">Marché</strong> : pour
                élaborer une stratégie d&apos;acquisition acquéreurs
              </li>
              <li>
                <strong className="text-[#32373c]">Concurrentielle</strong> :
                pour réaliser une vente rapide au meilleur prix
              </li>
            </ul>
          </div>

          {/* Étape 2 */}
          <div className="bg-white p-8 text-center">
            <div className="w-12 h-12 bg-[#32373c] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-lg font-bold text-[#32373c] mb-4">
              Stratégie digitale optimale
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong className="text-[#32373c]">
                Vendez plus vite, avec plus de visibilité !
              </strong>
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Grâce à notre stratégie digitale avancée, offrez à votre bien une
              visibilité maximale et attirez des acquéreurs ciblés, avant même
              la mise en ligne de votre annonce.
            </p>
          </div>

          {/* Étape 3 */}
          <div className="bg-white p-8 text-center">
            <div className="w-12 h-12 bg-[#32373c] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-lg font-bold text-[#32373c] mb-4">
              Votre projet, notre priorité absolue !
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              <strong className="text-[#32373c]">
                Votre projet, guidé par notre engagement.
              </strong>
            </p>
            <ul className="text-sm text-gray-600 text-left space-y-2">
              <li>Disponible 7j/7, de 8h à 20h, 365 jours par an.</li>
              <li>Estimation en 48h.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
