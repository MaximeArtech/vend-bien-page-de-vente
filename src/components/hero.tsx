import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <div className="mb-8">
          <Image
            src="/images/logo.png"
            alt="Vend & Bien"
            width={280}
            height={70}
            className="mx-auto h-16 md:h-20 w-auto"
          />
        </div>
        <p className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-8">
          Reims &amp; Epernay
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#32373c] leading-tight mb-6">
          Nous vendons votre bien en 30 jours et au prix convenu
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Sinon jusqu&apos;à{" "}
          <strong className="text-[#32373c]">100% des honoraires offerts</strong>
        </p>
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
