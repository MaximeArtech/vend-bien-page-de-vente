const steps = [
  {
    num: "1",
    title: "Éligibilité",
    description: "Vérifiez en 1 clic si votre bien est éligible",
  },
  {
    num: "2",
    title: "Estimation offerte",
    description:
      "Grâce à notre estimation innovante, vous bénéficiez d'une évaluation fiable pour optimiser la vente de votre bien.",
  },
  {
    num: "3",
    title: "Déploiement de notre méthode",
    description:
      "Notre solution innovante déployée par notre expert dédié à votre projet immobilier.",
  },
  {
    num: "4",
    title: "Négociation et vente du bien",
    description:
      "Qualifier les visites, mener les négociations, sécuriser le financement, c'est notre métier.",
  },
  {
    num: "5",
    title: "Suivi & accompagnement administratif",
    description:
      "Du premier contact au passage chez le notaire, nous sommes à vos côtés pour tout gérer !",
  },
  {
    num: "6",
    title: "Souriez, c'est vendu !",
    description:
      "Et ouvrez la porte de vos nouveaux projets immobiliers…",
  },
];

export function Process() {
  return (
    <section className="pt-24 pb-16 bg-[#45494e]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[36px] font-medium text-white text-center mb-2" style={{ fontFamily: "var(--font-roboto-slab)" }}>
          Comment ça marche ?
        </h2>
        <p className="text-[36px] font-medium text-white text-center mb-12" style={{ fontFamily: "var(--font-roboto-slab)" }}>
          Tout est pensé pour Vendre &amp; Bien !
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-9 pt-12 pb-24">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col items-center text-center flex-1 py-9 px-4"
            >
              <div className="w-[30px] h-[30px] mb-3">
                <svg viewBox="0 0 30 30" className="w-full h-full">
                  <circle cx="15" cy="15" r="15" fill="white" />
                  <text x="15" y="21" textAnchor="middle" fill="#32373c" fontSize="16" fontWeight="bold">{step.num}</text>
                </svg>
              </div>
              <h3 className="text-[22px] font-normal text-white uppercase mb-2">
                {step.title}
              </h3>
              <p className="text-[19px] font-normal text-white leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
