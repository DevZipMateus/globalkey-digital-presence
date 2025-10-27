import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.contact.company}</h3>
            <p className="text-sm opacity-90 mb-4">
              {t.footer.description}
            </p>
            <p className="text-sm opacity-80">
              CNPJ: {t.contact.cnpj}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t.header.home}
              </a>
              <a href="#about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t.header.about}
              </a>
              <a href="#services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t.header.services}
              </a>
              <a href="#values" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t.header.values}
              </a>
              <a href="#contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                {t.header.contact}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footer.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 opacity-80" />
                <div>
                  <p className="text-sm opacity-90">+55 11 94321-9969</p>
                  <p className="text-sm opacity-90">+55 11 93243-2464</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 opacity-80" />
                <p className="text-sm opacity-90">zitaconsultoriainternacional@gmail.com</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 opacity-80" />
                <p className="text-sm opacity-90">
                  Rua Bela Cintra, 746, sala 2 - Consolação<br />
                  São Paulo - SP, 01415-001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm opacity-80">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
