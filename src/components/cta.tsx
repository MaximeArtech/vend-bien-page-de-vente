interface CTAProps {
  variant?: "primary" | "secondary";
}

export function CTA({ variant = "primary" }: CTAProps) {
  if (variant === "secondary") {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#32373c] mb-8">
            Vérifiez votre éligibilité, vous avez :
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-sm font-medium px-8 py-3 hover:bg-[#45494e] transition-colors"
            >
              Une maison
            </a>
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-sm font-medium px-8 py-3 hover:bg-[#45494e] transition-colors"
            >
              Un appartement
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="eligibilite" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-[#32373c] mb-10 leading-snug">
          Vérifiez en 1 clic si vous êtes éligible à notre garantie
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-sm font-semibold text-[#32373c] mb-4">
              J&apos;ai une maison
            </p>
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-sm font-medium px-6 py-3 hover:bg-[#45494e] transition-colors w-full"
            >
              Je vérifie l&apos;éligibilité de mon bien
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-[#32373c] mb-4">
              J&apos;ai un appartement
            </p>
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-sm font-medium px-6 py-3 hover:bg-[#45494e] transition-colors w-full"
            >
              Je vérifie l&apos;éligibilité de mon bien
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
