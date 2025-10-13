import { FileText, Package2, Ship, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.services.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.services.description}
            </p>
          </div>

          <Tabs defaultValue="assessoria" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="assessoria">{t.services.tab1}</TabsTrigger>
              <TabsTrigger value="produtos">{t.services.tab2}</TabsTrigger>
            </TabsList>

            <TabsContent value="assessoria" className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Ship className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{t.services.consultingTitle}</h3>
                    <p className="text-muted-foreground">{t.services.consultingIntro}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {t.services.planningTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ {t.services.planning1}</li>
                        <li>✓ {t.services.planning2}</li>
                        <li>✓ {t.services.planning3}</li>
                        <li>✓ {t.services.planning4}</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        {t.services.operationalTitle}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ {t.services.operational1}</li>
                        <li>✓ {t.services.operational2}</li>
                        <li>✓ {t.services.operational3}</li>
                        <li>✓ {t.services.operational4}</li>
                        <li>✓ {t.services.operational5}</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="text-sm text-foreground font-medium mb-2">
                    {t.services.languagesTitle}
                  </p>
                  <p className="text-muted-foreground text-sm">{t.services.languagesText}</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="produtos" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-soft mb-6">
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
