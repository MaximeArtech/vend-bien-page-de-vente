import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, Clock } from "lucide-react";

const properties = [
  {
    price: "315 000 €",
    city: "Épernay",
    area: "152 m²",
    soldIn: "15 jours",
    type: "Maison",
  },
  {
    price: "305 000 €",
    city: "Vauciennes",
    area: "136 m²",
    soldIn: "3 semaines",
    type: "Maison",
  },
  {
    price: "490 000 €",
    city: "Epernay",
    area: "136 m²",
    soldIn: "3 semaines",
    type: "Maison",
  },
  {
    price: "129 000 €",
    city: "Épernay",
    area: "80 m²",
    soldIn: "21 jours",
    type: "Appartement",
  },
  {
    price: "275 000 €",
    city: "Reims",
    area: "95 m²",
    soldIn: "18 jours",
    type: "Appartement",
  },
  {
    price: "420 000 €",
    city: "Montbré",
    area: "160 m²",
    soldIn: "25 jours",
    type: "Maison",
  },
];

export function RecentSales() {
  return (
    <section id="ventes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32373c] mb-4">
          Nos <span className="text-amber-500">ventes récentes</span>
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Découvrez nos dernières transactions réalisées avec succès
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((prop, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-sm">Photo du bien</span>
                <Badge className="absolute top-3 left-3 bg-green-500 text-white hover:bg-green-600">
                  VENDU
                </Badge>
                <Badge className="absolute top-3 right-3 bg-white text-[#32373c] hover:bg-gray-100">
                  {prop.type}
                </Badge>
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold text-[#32373c] mb-3">
                  {prop.price}
                </div>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    {prop.city}
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="h-4 w-4 text-amber-500" />
                    {prop.area}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-amber-500" />
                    Vendu en{" "}
                    <span className="font-semibold text-amber-600">
                      {prop.soldIn}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
