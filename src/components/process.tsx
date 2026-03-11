import {
  MousePointerClick,
  Calculator,
  Settings,
  Handshake,
  FileCheck,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Éligibilité",
    description: "Vérification de l'éligibilité de votre bien en un clic.",
  },
  {
    icon: Calculator,
    title: "Estimation offerte",
    description:
      "Estimation gratuite et innovante de votre bien par nos experts.",
  },
  {
    icon: Settings,
    title: "Déploiement de notre méthode",
    description:
      "Mise en place de notre méthodologie éprouvée par nos experts terrain.",
  },
  {
    icon: Handshake,
    title: "Négociation et vente",
    description:
      "Qualification des acheteurs et sécurisation de la transaction.",
  },
  {
    icon: FileCheck,
    title: "Suivi & accompagnement",
    description:
      "Accompagnement administratif et suivi notarial jusqu'à la signature.",
  },
  {
    icon: PartyPopper,
    title: "Souriez, c'est vendu !",
    description: "Conclusion de la transaction et remise des clés.",
  },
];

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32373c] mb-4">
          Notre processus <span className="text-amber-500">pas à pas</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">
          De l&apos;estimation à la remise des clés, nous gérons tout
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative flex items-start gap-4 p-6 rounded-2xl hover:bg-gray-50 transition-colors"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-lg font-bold">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-amber-500" />
                    <h3 className="text-lg font-semibold text-[#32373c]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
