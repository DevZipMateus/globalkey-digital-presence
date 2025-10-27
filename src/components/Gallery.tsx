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
    { src: fibraLaranja, alt: "Fibra Laranja 0.15mm" },
    { src: fibraMarrom, alt: "Fibra Marrom" },
    { src: fibraPreta, alt: "Fibra Preta" },
    { src: filmePolimidaBlack, alt: "Filme de Polimida Black High Performance" },
    { src: filmePolimidaSemAdesivo, alt: "Filme de Polimida sem Adesivo" },
    { src: filmePolimidaSemAdesivo2, alt: "Filme de Polimida sem Adesivo" },
    { src: filmePolimidaAdesivo, alt: "Filme de Polimida com Adesivo" },
    { src: filmePolimidaAdesivo2, alt: "Filme de Polimida com Adesivo" },
    { src: fioCca, alt: "Fio CCA" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
          {t.gallery.title}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t.gallery.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
