import Image from "next/image";

const topRow = [
  { name: "Alessia", photo: "/images/team/alessia-portrait.png" },
  { name: "Véronique", photo: "/images/team/veronique-portrait.jpg" },
];

const bottomRow = [
  { name: "Amina", photo: "/images/team/amina-portrait.jpeg" },
  { name: "Véronique", photo: "/images/team/veronique-portrait.jpg" },
  { name: "Amina", photo: "/images/team/amina-portrait.jpeg" },
  { name: "Sébastien", photo: "/images/team/sebastien-portrait.png" },
];

function TeamPhoto({ name, photo }: { name: string; photo: string }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <div className="relative w-full -mb-5">
        <Image
          src={photo}
          alt={name}
          width={300}
          height={250}
          className="w-full h-[250px] object-cover object-top border-4 border-[#32373c] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.15)]"
        />
      </div>
      <div className="bg-[#32373c] px-2.5 py-2.5 self-center z-10">
        <h2 className="text-[24px] font-semibold text-white text-center">
          {name}
        </h2>
      </div>
    </div>
  );
}

export function TeamAndValue() {
  return (
    <section
      className="-mt-20 mb-24 relative z-10 pt-44 bg-white"
      style={{
        backgroundImage: "url(/images/favicon.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: 2 photos + logo/tagline */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 grid grid-cols-2 gap-0">
            {topRow.map((member) => (
              <TeamPhoto key={member.name} {...member} />
            ))}
          </div>

          {/* Right side - logo + tagline + CTA */}
          <div className="flex-1 flex flex-col items-center text-center">
            <Image
              src="/images/logo-horizontal.png"
              alt="Vend & Bien"
              width={400}
              height={96}
              className="w-[62%] h-auto mb-8"
            />
            <p className="text-[25px] font-normal text-[#32373c] mb-8 leading-relaxed max-w-[90%]">
              Bien plus qu&apos;une agence, nous combinons{" "}
              <strong className="text-[#DE6539]">
                expertise immobilière et innovation digitale
              </strong>
              , pour vous accompagner avec succès.
            </p>
            <a
              href="#eligibilite"
              className="inline-block bg-[#32373c] text-white text-[20px] font-semibold px-7 py-3.5 hover:bg-[#45494e] transition-colors"
            >
              Je vérifie l&apos;éligibilité de mon bien
            </a>
          </div>
        </div>

        {/* Bottom row - remaining team members */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-36">
          {bottomRow.map((member, i) => (
            <TeamPhoto key={`${member.name}-${i}`} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
