import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5511258976005";
  const whatsappMessage = encodeURIComponent(t.whatsapp.message);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full flex items-center justify-center shadow-medium transition-colors"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
