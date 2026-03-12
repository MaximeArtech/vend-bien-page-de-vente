import Image from "next/image";

const members = [
  { name: "Alessia", photo: "/images/team/alessia-portrait.png" },
  { name: "Véronique", photo: "/images/team/veronique-portrait.jpg" },
  { name: "Amina", photo: "/images/team/amina-portrait.jpeg" },
  { name: "Sébastien", photo: "/images/team/sebastien-portrait.png" },
];

export function TeamAndValue() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Left side - team photos */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {members.slice(0, 2).map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h2 className="text-base font-semibold text-[#32373c]">
                  {member.name}
                </h2>
              </div>
            ))}
          </div>

          {/* Right side - logo + tagline + CTA */}
          <div className="col-span-2 flex flex-col justify-center items-center text-center px-4">
            <Image
              src="/images/logo-horizontal.png"
              alt="Vend & Bien"
              width={400}
              height={96}
              className="h-16 md:h-20 w-auto mb-8"
            />
            <p className="text-base md:text-lg text-[#32373c] mb-8 leading-relaxed max-w-md">
              Bien plus qu&apos;une agence, nous combinons{" "}
              <strong className="text-[#DE6539]">
                expertise immobilière et innovation digitale
              </strong>
              , pour vous accompagner avec succès.
            </p>
            <a
              href="#eligibilite"
              className="inline-block bg-[#32373c] text-white text-sm font-medium px-8 py-4 hover:bg-[#45494e] transition-colors"
            >
              Je vérifie l&apos;éligibilité de mon bien
            </a>
          </div>
        </div>

        {/* Bottom row - remaining team members */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="md:col-start-1" />
          <div className="md:col-start-2" />
          {members.slice(2).map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h2 className="text-base font-semibold text-[#32373c]">
                {member.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
