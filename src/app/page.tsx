import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TeamAndValue } from "@/components/team-and-value";
import { Comparison } from "@/components/comparison";
import { Guarantee } from "@/components/guarantee";
import { ThreeSteps } from "@/components/three-steps";
import { Testimonials } from "@/components/testimonials";
import { RecentSales } from "@/components/recent-sales";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TeamAndValue />
      <Comparison />
      <Guarantee />
      <ThreeSteps />
      <Testimonials />
      <Process />
      <RecentSales />
      <Guarantee
        heading="Nous vendons votre bien dans les 30 prochains jours, au prix convenu."
        subtitle="Sinon, jusqu'à 100% des honoraires offerts."
        teamMembers={[
          { name: "Sébastien", photo: "/images/agents/sebastien.png" },
        ]}
      />
      <CTA />
      <FAQ />
      <CTA variant="secondary" />
      <Footer />
    </main>
  );
}
