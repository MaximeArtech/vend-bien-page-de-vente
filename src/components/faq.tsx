import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment fonctionne la garantie de vente en 30 jours ?",
    answer:
      "Si votre bien n'est pas vendu dans les 30 jours suivant la mise en vente, nous vous offrons jusqu'à 100% de nos honoraires. C'est notre engagement qualité envers vous.",
  },
  {
    question: "Quels services sont inclus dans votre offre ?",
    answer:
      "Notre offre comprend l'estimation, la stratégie de commercialisation digitale, les visites, la qualification des acheteurs, la négociation, et l'accompagnement administratif jusqu'à la signature chez le notaire.",
  },
  {
    question: "En quoi votre stratégie digitale est-elle différente ?",
    answer:
      "Nous utilisons des outils digitaux innovants pour maximiser la visibilité de votre bien avant même le lancement officiel de la commercialisation. Cela nous permet de créer un effet de rareté et d'attirer les acheteurs les plus qualifiés.",
  },
  {
    question: "Puis-je retirer mon bien de la vente à tout moment ?",
    answer:
      "Oui, vous êtes libre de retirer votre bien de la vente à tout moment, sans frais ni pénalités. Nous croyons en la transparence et la liberté de nos clients.",
  },
  {
    question: "Que se passe-t-il si la vente ne se conclut pas en 30 jours ?",
    answer:
      "Si votre bien ne trouve pas acquéreur dans les 30 jours, nous réduisons nos honoraires selon les termes de notre garantie, pouvant aller jusqu'à 100% d'honoraires offerts. Nous continuons bien entendu à commercialiser votre bien.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32373c] mb-4">
          Questions <span className="text-amber-500">fréquentes</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Tout ce que vous devez savoir sur notre service
        </p>

        <Accordion className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white rounded-xl px-6 border border-gray-200"
            >
              <AccordionTrigger className="text-left font-semibold text-[#32373c] hover:text-amber-500 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
