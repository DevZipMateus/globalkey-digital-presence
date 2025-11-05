import { FileText, Package2, Ship, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

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

          <Tabs defaultValue="assessoria" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 sm:mb-12 h-auto">
              <TabsTrigger value="assessoria">{t.services.tab1}</TabsTrigger>
              <TabsTrigger value="produtos">{t.services.tab2}</TabsTrigger>
            </TabsList>

            <TabsContent value="assessoria" className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Ship className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{t.services.consultingTitle}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{t.services.consultingIntro}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">{t.services.servicesTitle}</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service1Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service1Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service2Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service2Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service3Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service3Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service4Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service4Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service5Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service5Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service6Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service6Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service7Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service7Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service8Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service8Desc}</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h5 className="font-semibold text-foreground mb-1">{t.services.service9Title}</h5>
                      <p className="text-sm text-muted-foreground">{t.services.service9Desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="produtos" className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft mb-4 sm:mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{t.services.productsTitle}</h3>
                <p className="text-muted-foreground">{t.services.productsIntro}</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>{t.services.product1Name}</CardTitle>
                  <CardDescription>{t.services.product1Specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.services.product1Desc}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.services.product2Name}</CardTitle>
                  <CardDescription>{t.services.product2Specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.services.product2Desc}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.services.product3Name}</CardTitle>
                  <CardDescription>{t.services.product3Specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.services.product3Desc}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.services.product4Name}</CardTitle>
                  <CardDescription>{t.services.product4Specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.services.product4Desc}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t.services.product5Name}</CardTitle>
                  <CardDescription>{t.services.product5Specs}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {t.services.product5Desc}
                  </p>
                </CardContent>
              </Card>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
                <Package2 className="w-12 h-12 text-accent mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-foreground mb-2">{t.services.comingSoonTitle}</h4>
                <p className="text-sm text-muted-foreground">
                  {t.services.comingSoonDesc}
                </p>
              </div>

              <div className="text-xs text-muted-foreground text-center p-4 bg-muted/50 rounded-lg">
                ⚖️ {t.services.disclaimer}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Services;
