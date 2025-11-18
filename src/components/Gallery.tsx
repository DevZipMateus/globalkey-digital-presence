import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check, ChevronDown, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import filmePolimidaSemAdesivo from "@/assets/filme_polimida_sem_adesivo.jpg";
import filmePolimidaSemAdesivo2 from "@/assets/filme_polimida_sem_adesivo_2.jpg";
import filmePolimidaAdesivo from "@/assets/filme_polimida_adesivo.jpg";
import filmePolimidaAdesivo2 from "@/assets/filme_polimida_adesivo_2.jpg";
import filmePolimidaBlack from "@/assets/filme_polimida_black.jpg";
import filmePolimidaBlack2 from "@/assets/filme_polimida_black_2.jpg";
import filmePolimidaBlack3 from "@/assets/filme_polimida_black_3.jpg";
import fibraLaranja from "@/assets/fibra_laranja.jpg";
import fibraMarrom from "@/assets/fibra_marrom.jpg";
import fibraPreta from "@/assets/fibra_preta.jpg";
import fioCca from "@/assets/fio_cca.jpg";
import fioCcaw2 from "@/assets/fio_ccaw_2.jpg";
import papelBranco from "@/assets/papel_branco.jpg";
import papelKraft from "@/assets/papel_kraft.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});
  const [lightboxImages, setLightboxImages] = useState<{ images: string[]; currentIndex: number; productName: string } | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(6).fill(false));

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
      images: [filmePolimidaBlack, filmePolimidaBlack2, filmePolimidaBlack3],
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
      images: [fioCca, fioCcaw2],
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

  useEffect(() => {
    const observers = cardsRef.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-foreground">
          {t.gallery.title}
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          {t.gallery.description}
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <Card 
              key={index} 
              ref={(el) => (cardsRef.current[index] = el)}
              className={`overflow-hidden border-l-4 border-l-primary hover:shadow-medium transition-shadow ${
                visibleCards[index] ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
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
              <CardContent className="space-y-4">
                {/* Images */}
                <div className={`grid gap-4 ${product.images.length > 1 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 max-w-md mx-auto'}`}>
                  {product.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setLightboxImages({ images: product.images, currentIndex: imgIndex, productName: product.name })}
                    >
                      <div className="aspect-video max-h-48 overflow-hidden">
                        <img
                          src={image}
                          alt={`${product.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                          Clique para ampliar
                        </span>
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

        {/* Lightbox Modal with Carousel */}
        <Dialog open={!!lightboxImages} onOpenChange={(open) => !open && setLightboxImages(null)}>
          <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-black/95 border-none">
            <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-8 w-8 text-white" />
              <span className="sr-only">Fechar</span>
            </DialogClose>
            {lightboxImages && (
              <div className="flex flex-col items-center justify-center w-full h-full p-4">
                <Carousel className="w-full max-w-6xl" opts={{ startIndex: lightboxImages.currentIndex, loop: true }}>
                  <CarouselContent>
                    {lightboxImages.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="flex items-center justify-center h-[85vh]">
                          <img
                            src={image}
                            alt={`${lightboxImages.productName} ${index + 1}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {lightboxImages.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-4 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                      <CarouselNext className="right-4 h-12 w-12 bg-white/10 hover:bg-white/20 border-white/20 text-white" />
                    </>
                  )}
                </Carousel>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full">
                  {lightboxImages.currentIndex + 1} / {lightboxImages.images.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
