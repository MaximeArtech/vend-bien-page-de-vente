import Image from "next/image";

const members = [
  { name: "Alessia", photo: "/images/team/alessia.jpeg" },
  { name: "Véronique", photo: "/images/team/veronique.jpg" },
  { name: "Amina", photo: "/images/team/amina.jpeg" },
];

export function TeamAndValue() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden bg-gray-100 mb-3">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="text-sm font-semibold text-[#32373c]">
                {member.name}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-[#32373c] mb-8 leading-snug max-w-2xl mx-auto">
          Bien plus qu&apos;une agence, nous combinons{" "}
          <strong>expertise immobilière et innovation digitale</strong>, pour
          vous accompagner avec succès.
        </h2>

        <a
          href="#eligibilite"
          className="inline-block bg-[#32373c] text-white text-sm font-medium px-8 py-4 hover:bg-[#45494e] transition-colors"
        >
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
