import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";

export function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#32373c] mb-6">
            Bien plus qu&apos;une agence, nous combinons{" "}
            <span className="text-amber-500">expertise immobilière</span> et{" "}
            <span className="text-amber-500">innovation digitale</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors group">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <Zap className="h-7 w-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#32373c] mb-3">
              Rapidité garantie
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vente en 30 jours ou jusqu&apos;à 100% des honoraires offerts. Notre engagement est concret.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors group">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <Shield className="h-7 w-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#32373c] mb-3">
              Sécurité totale
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Qualification des acheteurs et vérification des financements pour une transaction sereine.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors group">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
              <TrendingUp className="h-7 w-7 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#32373c] mb-3">
              Prix optimal
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Notre stratégie digitale maximise la visibilité de votre bien pour obtenir le meilleur prix net vendeur.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg font-semibold"
          >
            Je vérifie l&apos;éligibilité de mon bien
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
