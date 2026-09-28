import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  showConsultation?: boolean;
}

export default function CTABanner({
  title = "Ready to Transform Your Home?",
  subtitle = "Get a free consultation and quotation for your carpentry or electrical project.",
  showConsultation = true,
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-brand-primary via-brand-primary/95 to-charcoal-800">
      <div className="container-custom py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4">{title}</h2>
          <p className="text-white/80 text-lg mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-brand-primary hover:bg-charcoal-50"
            >
              <Phone className="w-5 h-5" />
              Call Kevin
            </a>
            {showConsultation && (
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal-800">
                <Calendar className="w-5 h-5" />
                Book Site Visit
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
