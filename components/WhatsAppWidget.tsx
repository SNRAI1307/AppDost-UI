// appdost-ui/components/WhatsAppWidget.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Using a standard chat icon

export const WhatsAppWidget = () => {
  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg
                 bg-green-500 hover:bg-green-600"
    >
      {/* !!! IMPORTANT !!!
        Replace "YOUR_PHONE_NUMBER" with your actual WhatsApp number 
        (e.g., 911234567890) 
      */}
      <Link href="https://wa.me/918318451996" target="_blank">
        <MessageCircle className="w-7 h-7" />
      </Link>
    </Button>
  );
};