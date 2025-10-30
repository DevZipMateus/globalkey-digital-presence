import { Building2, Users, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t.about.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t.about.subtitle}
            </p>
          </div>

          <div className="space-y-8 mb-8 sm:mb-12 md:mb-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.about.milestone1Title}</h3>
                  <p className="text-muted-foreground">
                    {t.about.milestone1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.about.milestone2Title}</h3>
                  <p className="text-muted-foreground">
                    {t.about.milestone2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.about.milestone3Title}</h3>
                  <p className="text-muted-foreground">
                    {t.about.milestone3Desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.about.historyTitle}</h3>
              <p className="text-foreground leading-relaxed whitespace-pre-line">
                {t.about.historyText}
              </p>
            </div>
          </div>

          <div className="bg-gradient-primary rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">
              {t.about.objectivesTitle}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🇨🇳</div>
                <p className="text-white/90">
                  {t.about.objective1}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">📦</div>
                <p className="text-white/90">
                  {t.about.objective2}
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">🌎</div>
                <p className="text-white/90">
                  {t.about.objective3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
