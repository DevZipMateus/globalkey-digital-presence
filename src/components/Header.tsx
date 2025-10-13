import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="Global Key - Bridging the gaps" className="h-14 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("valores")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Valores
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("valores")}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                Valores
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary-dark text-primary-foreground w-full"
              >
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
