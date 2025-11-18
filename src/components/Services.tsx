import { Ship } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import globalKeyImage from "@/assets/global-key-services.png";

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {t.services.title}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t.services.description}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft">
                <div className="flex flex-col lg:flex-row items-start gap-6 mb-8">
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Ship className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{t.services.consultingTitle}</h3>
                        <p className="text-muted-foreground whitespace-pre-line">{t.services.consultingIntro}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img 
                      src={globalKeyImage} 
                      alt="Global Key - Import & Export Services" 
                      className="w-full max-w-md rounded-lg"
                    />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mb-6">{t.services.servicesTitle}</h4>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service1Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service1Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service2Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service2Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service3Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service3Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service4Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service4Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service5Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service5Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service6Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service6Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service7Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service7Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service8Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service8Desc}</p>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-medium transition-all animate-fade-in border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-lg">{t.services.service9Title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{t.services.service9Desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
