import { useLanguage } from "@/contexts/LanguageContext";
import fibraLaranja from "@/assets/fibra_laranja.jpg";
import fibraMarrom from "@/assets/fibra_marrom.jpg";
import fibraPreta from "@/assets/fibra_preta.jpg";
import filmePolimidaBlack from "@/assets/filme_polimida_black.jpg";
import filmePolimidaSemAdesivo from "@/assets/filme_polimida_sem_adesivo.jpg";
import filmePolimidaSemAdesivo2 from "@/assets/filme_polimida_sem_adesivo_2.jpg";
import filmePolimidaAdesivo from "@/assets/filme_polimida_adesivo.jpg";
import filmePolimidaAdesivo2 from "@/assets/filme_polimida_adesivo_2.jpg";
import fioCca from "@/assets/fio_cca.jpg";

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: fibraLaranja, alt: t.gallery.product1, name: t.gallery.product1 },
    { src: fibraMarrom, alt: t.gallery.product2, name: t.gallery.product2 },
    { src: fibraPreta, alt: t.gallery.product3, name: t.gallery.product3 },
    { src: filmePolimidaBlack, alt: t.gallery.product4, name: t.gallery.product4 },
    { src: filmePolimidaSemAdesivo, alt: t.gallery.product5, name: t.gallery.product5 },
    { src: filmePolimidaSemAdesivo2, alt: t.gallery.product6, name: t.gallery.product6 },
    { src: filmePolimidaAdesivo, alt: t.gallery.product7, name: t.gallery.product7 },
    { src: filmePolimidaAdesivo2, alt: t.gallery.product8, name: t.gallery.product8 },
    { src: fioCca, alt: t.gallery.product9, name: t.gallery.product9 },
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="text-sm font-semibold text-foreground text-center">
                  {image.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
