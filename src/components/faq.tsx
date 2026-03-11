import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question:
      "Comment garantissez-vous de vendre mon bien au meilleur prix ?",
    answer:
      "Nous utilisons une approche d'évaluation de votre bien en 3 phases : (Structurel, Marché et Concurentielle). Cette méthode permet de positionner votre bien pour au meilleur prix, dès le départ. De plus, notre stratégie digitale cible les acheteurs les plus susceptibles d'être intéressés par votre bien, augmentant ainsi les chances d'obtenir le meilleur prix.",
  },
  {
    question: "Quels services sont inclus dans votre gestion de la vente ?",
    answer:
      "Notre service couvre tous les aspects de la vente, annonce et photos pensées pour sublimer votre bien et en révéler tous les atouts, brochure et un site web dédié à votre bien, suivi en temps réel du marché, qualification des visites, négociations, prise en charge administrative, certification financière des acheteurs… vous garantissant une vente sécurisée et sans souci.",
  },
  {
    question:
      "Comment votre stratégie digitale améliore-t-elle les chances de vendre mon bien ?",
    answer:
      "Nous optimisons la visibilité de votre bien sur toutes les plateformes de diffusion : portails immobiliers, réseaux sociaux et sites spécialisés. Grâce à notre stratégie digitale ciblée nous captons un maximum d'acquéreurs en mettant en valeur les atouts uniques de votre bien. Nous suivons en temps réel l'évolution de l'offre et de la demande en temps réel, ajustant la stratégie pour garantir une position optimale de votre bien.",
  },
  {
    question: "Puis-je retirer mon bien de la vente ?",
    answer:
      "Absolument… Vous avez toujours la maîtrise et la possibilité de retirer votre bien à tout moment si vous l'estimez. C'est notre façon de garantir que notre service répond pleinement à vos attentes.",
  },
  {
    question:
      "Que se passe-t-il si mon bien n'est pas vendu dans les 30 jours ?",
    answer:
      "Si votre bien n'est pas vendu dans les 30 jours au prix convenu, nous allons jusqu'à offrir l'intégralité de nos honoraires. Cela augmente votre prix net vendeur et reflète notre détermination à conclure la vente de votre bien dans les délais impartis. Conditions affiché en agence.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#32373c] mb-2">
          Vous avez des questions ?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-10">
          Nous avons les réponses
        </p>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gray-200 bg-white px-6"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-[#32373c] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
