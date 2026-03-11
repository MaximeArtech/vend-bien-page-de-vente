import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
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
      <Stats />
      <TeamAndValue />
      <Comparison />
      <Guarantee />
      <ThreeSteps />
      <Testimonials />
      <Process />
      <RecentSales />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
