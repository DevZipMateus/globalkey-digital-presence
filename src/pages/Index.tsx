import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Institucional from "@/components/Institucional";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="institucional">
          <Institucional />
        </section>
        <section id="produtos">
          <Gallery />
        </section>
        <section id="servicos">
          <Services />
        </section>
        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
