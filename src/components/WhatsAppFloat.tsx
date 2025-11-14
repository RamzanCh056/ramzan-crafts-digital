import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Ramzan! I'd like to discuss a project with you.");
    window.open(`https://wa.me/923144876962?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-110 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-0"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppFloat;
