import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#1a1d21] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold text-white">
              Vend<span className="text-amber-500">&</span>Bien
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Nous vendons votre bien en 30 jours et au prix convenu.
              Reims &amp; Epernay.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Honoraires
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Reims &amp; Epernay</li>
              <li>Disponible 7j/7 de 8h à 20h</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>Tous droits réservés – Vend&amp;Bien – 2025</p>
          <p className="mt-2 md:mt-0">
            Forgés dans la jungle de{" "}
            <span className="text-amber-500">Trib&apos;up</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
