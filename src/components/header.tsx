import Image from "next/image";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="px-2.5 py-2.5 flex justify-center">
        <a href="#">
          <Image
            src="/images/logo.png"
            alt="Vend & Bien"
            width={350}
            height={100}
            className="h-auto w-[350px] max-w-full"
            priority
          />
        </a>
      </div>
    </header>
  );
}
