import Image from "next/image";

interface TeamMember {
  name: string;
  photo: string;
}

interface GuaranteeProps {
  heading?: string;
  teamMembers?: TeamMember[];
}

const defaultHeading =
  "Bénéficiez de notre garantie vendeur à 30 jours, au meilleur prix";
const defaultTeamMembers: TeamMember[] = [
  { name: "Amina", photo: "/images/agents/amina.png" },
  { name: "Maeve", photo: "/images/agents/maeve.png" },
];

export function Guarantee({
  heading = defaultHeading,
  teamMembers = defaultTeamMembers,
}: GuaranteeProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#32373c] mb-4">
          {heading}
        </h2>

        <a
          href="#eligibilite"
          className="inline-block bg-[#32373c] text-white text-sm font-medium px-8 py-4 hover:bg-[#45494e] transition-colors mb-8"
        >
          Je vérifie l&apos;éligibilité de mon bien
        </a>

        <div className="flex justify-center gap-4 mt-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="hidden md:block w-32 lg:w-40">
              <Image
                src={member.photo}
                alt={member.name}
                width={160}
                height={213}
                className="w-full h-auto object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
