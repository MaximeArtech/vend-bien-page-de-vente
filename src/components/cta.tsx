interface CTAProps {
  variant?: "primary" | "secondary";
}

export function CTA({ variant = "primary" }: CTAProps) {
  if (variant === "secondary") {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[36px] font-medium text-[#32373c] mb-8"
            style={{ fontFamily: "var(--font-roboto-slab)" }}
          >
            Vérifiez votre éligibilité, vous avez :
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-[20px] font-semibold px-7 py-3.5 hover:bg-[#45494e] transition-colors"
            >
              Une maison
            </a>
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-[20px] font-semibold px-7 py-3.5 hover:bg-[#45494e] transition-colors"
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
        <h2
          className="text-[36px] font-medium text-[#32373c] mb-10 leading-snug"
          style={{ fontFamily: "var(--font-roboto-slab)" }}
        >
          Vérifiez en 1 clic si vous êtes éligible à notre garantie
        </h2>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-[20px] font-normal text-[#32373c] mb-4">
              J&apos;ai une maison
            </p>
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-[20px] font-semibold px-7 py-3.5 hover:bg-[#45494e] transition-colors w-full"
            >
              Je vérifie l&apos;éligibilité de mon bien
            </a>
          </div>
          <div className="text-center">
            <p className="text-[20px] font-normal text-[#32373c] mb-4">
              J&apos;ai un appartement
            </p>
            <a
              href="#"
              className="inline-block bg-[#32373c] text-white text-[20px] font-semibold px-7 py-3.5 hover:bg-[#45494e] transition-colors w-full"
            >
              Je vérifie l&apos;éligibilité de mon bien
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
