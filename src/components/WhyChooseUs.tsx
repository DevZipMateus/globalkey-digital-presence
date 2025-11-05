import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-elegant border border-primary/20 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                {t.whyChooseUs.title}
              </h2>
            </div>
            
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium">
                {t.whyChooseUs.subtitle}
              </p>
              <p>
                {t.whyChooseUs.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
