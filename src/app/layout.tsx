import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Vend & Bien | Nous vendons votre bien en 30 jours",
  description:
    "Nous vendons votre bien en 30 jours et au prix convenu. Sinon jusqu'à 100% des honoraires offerts. Reims & Epernay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/frr5tat.css" />
      </head>
      <body
        className={`${roboto.variable} ${robotoSlab.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-roboto), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
