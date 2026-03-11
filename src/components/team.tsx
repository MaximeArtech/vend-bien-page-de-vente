export function Team() {
  const members = [
    { name: "Alessia", role: "Conseillère immobilière" },
    { name: "Véronique", role: "Conseillère immobilière" },
    { name: "Amina", role: "Conseillère immobilière" },
    { name: "Sébastien", role: "Directeur" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#32373c] mb-4">
          Notre équipe à votre service
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Des experts passionnés qui vous accompagnent à chaque étape
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.name} className="text-center group">
              <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-br from-amber-100 to-amber-200 mb-4 overflow-hidden flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <span className="text-4xl font-bold text-amber-600">
                  {member.name[0]}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#32373c]">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
