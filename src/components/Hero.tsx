import { Globe2, TrendingUp, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Global Key
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in">
            Soluções completas em comércio exterior e produtos premium para alto-falantes
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in">
            Assessoria internacional, importação, exportação e a melhor linha de materiais para
            reparo de alto-falantes do Brasil.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in">
            <Button
              onClick={() => scrollToSection("servicos")}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Nossos serviços
            </Button>
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              variant="outline"
              className="border-primary/60 text-primary hover:bg-primary/10 hover:border-primary"
            >
              Fale conosco
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Comércio global</h3>
              <p className="text-sm text-muted-foreground text-center">
                Importação e exportação com atendimento em 3 idiomas
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Experiência comprovada</h3>
              <p className="text-sm text-muted-foreground text-center">
                Desde 2009 conectando empresas ao mercado internacional
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Produtos premium</h3>
              <p className="text-sm text-muted-foreground text-center">
                A melhor linha de materiais para alto-falantes do Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
