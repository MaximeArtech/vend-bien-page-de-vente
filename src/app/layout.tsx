import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vend & Bien | Nous vendons votre bien en 30 jours",
  description:
    "Nous vendons votre bien en 30 jours et au prix convenu. Sinon jusqu'à 100% des honoraires offerts. Reims & Epernay.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* TypeKit fonts (effra) */}
        <link rel="stylesheet" href="https://use.typekit.net/frr5tat.css" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Elementor CSS */}
        <link rel="stylesheet" href="/css/hello-reset.css" />
        <link rel="stylesheet" href="/css/hello-theme.css" />
        <link rel="stylesheet" href="/css/elementor-frontend.min.css" />
        <link rel="stylesheet" href="/css/post-5.css" />
        <link rel="stylesheet" href="/css/widget-image.min.css" />
        <link rel="stylesheet" href="/css/widget-heading.min.css" />
        <link rel="stylesheet" href="/css/widget-video.min.css" />
        <link rel="stylesheet" href="/css/widget-counter.min.css" />
        <link rel="stylesheet" href="/css/widget-icon-list.min.css" />
        <link rel="stylesheet" href="/css/widget-spacer.min.css" />
        <link rel="stylesheet" href="/css/widget-divider.min.css" />
        <link rel="stylesheet" href="/css/widget-accordion.min.css" />
        <link rel="stylesheet" href="/css/widget-call-to-action.min.css" />
        <link rel="stylesheet" href="/css/widget-lottie.min.css" />
        <link rel="stylesheet" href="/css/swiper.min.css" />
        <link rel="stylesheet" href="/css/e-swiper.min.css" />
        <link rel="stylesheet" href="/css/widget-nested-carousel.min.css" />
        <link rel="stylesheet" href="/css/fadeInLeft.min.css" />
        <link rel="stylesheet" href="/css/fadeInUp.min.css" />
        <link rel="stylesheet" href="/css/fadeInDown.min.css" />
        <link rel="stylesheet" href="/css/transitions.min.css" />
        <link rel="stylesheet" href="/css/post-1313.css" />
        {/* TrustIndex */}
        <link
          rel="stylesheet"
          href="https://cdn.trustindex.io/assets/widget-presetted-css/v2/97-soft.css"
        />
        {/* LeadConnector form embed */}
        <script
          src="https://link.msgsndr.com/js/form_embed.js"
          async
          defer
        />
      </head>
      <body className="home page page-id-1313 elementor-default elementor-kit-5 elementor-page elementor-page-1313">
        {children}
      </body>
    </html>
  );
}
