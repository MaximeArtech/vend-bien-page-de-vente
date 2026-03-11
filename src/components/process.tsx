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
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white p-6 flex items-start gap-4"
            >
              <div className="w-10 h-10 bg-[#32373c] text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#32373c] mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
