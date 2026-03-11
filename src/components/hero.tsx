import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 min-h-[90vh] flex items-center bg-gradient-to-br from-[#32373c] to-[#1a1d21] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Reims &amp; Epernay
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Nous vendons votre bien en{" "}
            <span className="text-amber-500">30 jours</span> et au prix convenu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Sinon jusqu&apos;à{" "}
            <span className="text-amber-500 font-semibold">
              100% des honoraires offerts
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-8 py-6 text-lg font-semibold"
            >
              Je vérifie l&apos;éligibilité de mon bien
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
