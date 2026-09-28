import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Call Button */}
      <a
        href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-white rounded-full shadow-soft-lg px-4 py-3 hover:bg-charcoal-50 transition-colors group"
      >
        <span className="text-sm font-medium text-charcoal-800 group-hover:text-brand-primary">
          Call Kevin
        </span>
        <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center">
          <Phone className="w-5 h-5 text-white" />
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full shadow-soft-lg flex items-center justify-center bg-[#25D366] hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
