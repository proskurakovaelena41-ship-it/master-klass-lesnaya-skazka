import Hero from "@/components/landing/Hero";
import ForWhom from "@/components/landing/ForWhom";
import Steps from "@/components/landing/Steps";
import Gallery from "@/components/landing/Gallery";
import Prices from "@/components/landing/Prices";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ForWhom />
      <Steps />
      <Gallery />
      <Prices />
      <FinalCta />
      <Footer />
    </main>
  );
};

export default Index;