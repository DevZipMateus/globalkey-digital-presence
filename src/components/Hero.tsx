import { Globe2, TrendingUp, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBackground from "@/assets/hero-background.jpg";
const Hero = () => {
  const {
    t
  } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="inicio" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-hero relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl bg-white/20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in drop-shadow-lg leading-tight">
            {t.hero.title}
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-6 sm:mb-8 font-semibold animate-fade-in drop-shadow-lg">
            {t.hero.subtitle}
          </h2>
          <p className="text-base sm:text-lg text-gray-100 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <Button onClick={() => scrollToSection("servicos")} size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg w-full sm:w-auto">
              {t.hero.servicesBtn}
            </Button>
            <Button onClick={() => scrollToSection("contato")} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 hover:border-primary shadow-lg w-full sm:w-auto">
              {t.hero.contactBtn}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16">
            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t.hero.highlight1Title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t.hero.highlight1Desc}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t.hero.highlight2Title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t.hero.highlight2Desc}
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg bg-white shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{t.hero.highlight3Title}</h3>
              <p className="text-sm text-muted-foreground text-center">
                {t.hero.highlight3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;