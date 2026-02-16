import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <ProductShowcase />
        <Features />
        <Integrations />
        <Pricing />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
