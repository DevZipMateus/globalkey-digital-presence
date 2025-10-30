import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const whatsappNumber = "551125897600";
  const whatsappMessage = encodeURIComponent(t.whatsapp.message);

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t.contact.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.phone}</h3>
                    <a
                      href="tel:+551125897600"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (11) 2589-7600
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.email}</h3>
                    <a
                      href="mailto:leonardo@globalkey.com.br"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      leonardo@globalkey.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.address}</h3>
                    <p className="text-muted-foreground">
                      {t.contact.addressText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-medium transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t.contact.hours}</h3>
                    <p className="text-muted-foreground">{t.contact.hoursText}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-xl md:rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">{t.contact.ctaTitle}</h3>
              <p className="text-white/90 mb-8">
                {t.contact.ctaDescription}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 w-full mb-6"
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t.contact.ctaButton}
                </a>
              </Button>

              <div className="border-t border-white/20 pt-6 mt-2">
                <p className="text-sm text-white/80 mb-4">{t.contact.followTitle}</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/fibra_kapton_global_key/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/fibra.kapton.globalkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>{t.contact.cnpj}</p>
            <p className="mt-2">{t.contact.company}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
