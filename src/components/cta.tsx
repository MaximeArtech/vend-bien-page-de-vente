import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-[#32373c] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à vendre votre bien en{" "}
          <span className="text-amber-500">30 jours</span> ?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Vérifiez l&apos;éligibilité de votre bien dès maintenant et
          découvrez notre méthode exclusive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            Ma maison est éligible
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
          >
            Mon appartement est éligible
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
