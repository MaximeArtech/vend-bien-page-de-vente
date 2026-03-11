import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Team } from "@/components/team";
import { ValueProposition } from "@/components/value-proposition";
import { Comparison } from "@/components/comparison";
import { ThreeSteps } from "@/components/three-steps";
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
      <Stats />
      <Team />
      <ValueProposition />
      <Comparison />
      <ThreeSteps />
      <RecentSales />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
