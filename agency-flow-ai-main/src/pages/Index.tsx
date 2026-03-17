import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
    <Navbar />
    <Hero />
    <Problems />
    <Services />
    <HowItWorks />
    <WhoItsFor />
    <CTA />
    <Footer />
  </div>
);

export default Index;
