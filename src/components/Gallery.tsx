import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ChevronDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import filmePolimidaSemAdesivo from "@/assets/filme_polimida_sem_adesivo.jpg";
import filmePolimidaSemAdesivo2 from "@/assets/filme_polimida_sem_adesivo_2.jpg";
import filmePolimidaAdesivo from "@/assets/filme_polimida_adesivo.jpg";
import filmePolimidaAdesivo2 from "@/assets/filme_polimida_adesivo_2.jpg";
import filmePolimidaBlack from "@/assets/filme_polimida_black.jpg";
import fibraLaranja from "@/assets/fibra_laranja.jpg";
import fibraMarrom from "@/assets/fibra_marrom.jpg";
import fibraPreta from "@/assets/fibra_preta.jpg";
import fioCca from "@/assets/fio_cca.jpg";
import papelBranco from "@/assets/papel_branco.jpg";
import papelKraft from "@/assets/papel_kraft.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const products = [
    {
      name: t.gallery.polimidaNoAdhesive.name,
      specs: t.gallery.polimidaNoAdhesive.specs,
      description: t.gallery.polimidaNoAdhesive.description,
      applications: t.gallery.polimidaNoAdhesive.applications,
      features: t.gallery.polimidaNoAdhesive.features,
      images: [filmePolimidaSemAdesivo, filmePolimidaSemAdesivo2],
    },
    {
      name: t.gallery.polimidaAdhesive.name,
      specs: t.gallery.polimidaAdhesive.specs,
      description: t.gallery.polimidaAdhesive.description,
      applications: t.gallery.polimidaAdhesive.applications,
      features: t.gallery.polimidaAdhesive.features,
      images: [filmePolimidaAdesivo, filmePolimidaAdesivo2],
    },
    {
      name: t.gallery.polimidaBlack.name,
      specs: t.gallery.polimidaBlack.specs,
      description: t.gallery.polimidaBlack.description,
      features: t.gallery.polimidaBlack.features,
      images: [filmePolimidaBlack],
    },
    {
      name: t.gallery.phenolicFiber.name,
      specs: t.gallery.phenolicFiber.specs,
      description: t.gallery.phenolicFiber.description,
      applications: t.gallery.phenolicFiber.applications,
      features: t.gallery.phenolicFiber.features,
      images: [fibraLaranja, fibraMarrom, fibraPreta],
    },
    {
      name: t.gallery.ccaWire.name,
      specs: t.gallery.ccaWire.specs,
      description: t.gallery.ccaWire.description,
      applications: t.gallery.ccaWire.applications,
      features: t.gallery.ccaWire.features,
      images: [fioCca],
    },
    {
      name: t.gallery.finishingPapers.name,
      specs: t.gallery.finishingPapers.specs,
      description: t.gallery.finishingPapers.description,
      applications: t.gallery.finishingPapers.applications,
      features: t.gallery.finishingPapers.features,
      images: [papelBranco, papelKraft],
    },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          {t.gallery.title}
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          {t.gallery.description}
        </p>
        
        <div className="space-y-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary hover:shadow-medium transition-shadow animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">
                  {product.name}
                </CardTitle>
                {product.specs && (
                  <p className="text-sm text-primary font-medium mt-2">
                    {product.specs}
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Images */}
                <div className={`grid gap-4 ${product.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1 max-w-md mx-auto'}`}>
                  {product.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image}
                          alt={`${product.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collapsible Details */}
                <Collapsible
                  open={openItems[index]}
                  onOpenChange={(open) => setOpenItems({ ...openItems, [index]: open })}
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between"
                    >
                      <span>{openItems[index] ? t.gallery.lessDetails : t.gallery.moreDetails}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openItems[index] ? 'transform rotate-180' : ''
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="space-y-6 pt-6">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>

                    {/* Applications */}
                    {product.applications && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          {t.gallery.applicationsTitle}
                        </h4>
                        <ul className="space-y-2">
                          {product.applications.map((app, appIndex) => (
                            <li key={appIndex} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Features */}
                    {product.features && (
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          {t.gallery.featuresTitle}
                        </h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
