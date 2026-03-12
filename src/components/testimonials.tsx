export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-[36px] font-medium text-[#32373c] mb-4"
          style={{ fontFamily: "var(--font-roboto-slab)" }}
        >
          Nos clients témoignent !
        </h2>
        <p className="text-[20px] text-[#32373c] mb-8">
          98% de nos clients satisfaits par nos conseillers, alors pourquoi pas
          vous ?
        </p>
        <a
          href="#eligibilite"
          className="inline-block bg-[#32373c] text-white text-[20px] font-semibold px-7 py-3.5 hover:bg-[#45494e] transition-colors"
        >
          Je vérifie l&apos;éligibilité de mon bien
        </a>
      </div>
    </section>
  );
}
