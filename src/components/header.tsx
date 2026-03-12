import Image from "next/image";

function TrustIndexBadge() {
  return (
    <a
      href="https://www.trustindex.io/reviews/www.immo.vendetbien.com/lang/fr"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-white/90 rounded-lg px-4 py-2 shadow-sm"
    >
      <Image
        src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
        alt="Google"
        width={150}
        height={25}
        className="h-[25px] w-auto"
        unoptimized
      />
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                alt=""
                width={17}
                height={17}
                className="w-[17px] h-[17px]"
                unoptimized
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-[#32373c]">4.8</span>
        </div>
        <span className="text-[11px] text-[#32373c] whitespace-nowrap">
          Service le mieux noté 2026
        </span>
      </div>
    </a>
  );
}

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[999]">
      <div className="p-2.5 flex items-center justify-between">
        <a href="https://www.immovendetbien.com">
          <Image
            src="/images/logo-horizontal.png"
            alt="Vend & Bien"
            width={350}
            height={84}
            className="h-auto w-[350px] max-w-full"
            priority
          />
        </a>
        <div className="hidden md:block">
          <TrustIndexBadge />
        </div>
      </div>
    </header>
  );
}
