export function ThreeSteps() {
  return (
    <section id="methode" className="bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-[36px] font-medium text-center text-[#32373c] mb-16"
          style={{ fontFamily: "var(--font-roboto-slab)" }}
        >
          Notre méthode pour une vente garantie
        </h2>

        {/* Étape 1 - Card left, image right */}
        <div className="flex flex-col md:flex-row items-center gap-0 mb-16">
          <div className="bg-white shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.15)] p-12 flex-1 z-10 md:mr-[-80px]">
            <div className="bg-[#32373c] text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 inline-block mb-4">
              Étape 1
            </div>
            <h3
              className="text-2xl font-medium text-[#32373c] mb-4"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Estimation fiable
            </h3>
            <p className="text-[16px] text-[#58595B] leading-relaxed mb-4">
              Nos 3 estimations complémentaires permettent de révéler tout le
              potentiel de votre bien et d&apos;en optimiser la valeur.
            </p>
            <ul className="text-[16px] text-[#58595B] space-y-2">
              <li>
                <strong className="text-[#32373c]">Structurelle</strong> : pour
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
          <div
            className="flex-1 min-h-[500px] border-[5px] border-[#32373c] z-[8] hidden md:block"
            style={{
              backgroundImage: "url(/images/steps/estimation.jpg)",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>

        {/* Étape 2 - Image left, card right */}
        <div className="flex flex-col md:flex-row items-center gap-0 mb-16">
          <div
            className="flex-1 min-h-[500px] border-[5px] border-[#32373c] z-[8] hidden md:block"
            style={{
              backgroundImage: "url(/images/steps/digital.png)",
              backgroundSize: "cover",
            }}
          />
          <div className="bg-white shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.15)] p-12 flex-1 z-10 md:ml-[-80px]">
            <div className="bg-[#32373c] text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 inline-block mb-4">
              Étape 2
            </div>
            <h3
              className="text-2xl font-medium text-[#32373c] mb-4"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Stratégie digitale optimale
            </h3>
            <p className="text-[16px] text-[#58595B] leading-relaxed mb-2">
              <strong className="text-[#32373c]">
                Vendez plus vite, avec plus de visibilité !
              </strong>
            </p>
            <p className="text-[16px] text-[#58595B] leading-relaxed">
              Grâce à notre stratégie digitale avancée, offrez à votre bien une
              visibilité maximale et attirez des acquéreurs ciblés, avant même
              la mise en ligne de votre annonce.
            </p>
          </div>
        </div>

        {/* Étape 3 - Card left, image right */}
        <div className="flex flex-col md:flex-row items-center gap-0">
          <div className="bg-white shadow-[0px_0px_20px_-4px_rgba(0,0,0,0.15)] p-12 flex-1 z-10 md:mr-[-80px]">
            <div className="bg-[#32373c] text-white text-xs font-semibold uppercase tracking-wider px-2.5 py-1 inline-block mb-4">
              Étape 3
            </div>
            <h3
              className="text-2xl font-medium text-[#32373c] mb-4"
              style={{ fontFamily: "var(--font-roboto-slab)" }}
            >
              Votre projet, notre priorité absolue !
            </h3>
            <p className="text-[16px] text-[#58595B] leading-relaxed mb-2">
              <strong className="text-[#32373c]">
                Votre projet, guidé par notre engagement.
              </strong>
            </p>
            <ul className="text-[16px] text-[#58595B] space-y-2">
              <li>Disponible 7j/7, de 8h à 20h, 365 jours par an.</li>
              <li>Estimation en 48h.</li>
            </ul>
          </div>
          <div
            className="flex-1 min-h-[500px] border-[5px] border-[#32373c] rounded-[5px] z-[8] hidden md:block"
            style={{
              backgroundImage: "url(/images/steps/equipe.png)",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
