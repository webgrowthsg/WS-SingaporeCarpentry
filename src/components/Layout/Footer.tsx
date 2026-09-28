import { Link } from 'react-router-dom';
import { Phone, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';

const services = [
  { name: 'Kitchen Cabinet', path: '/services/kitchen-cabinets' },
  { name: 'Bedroom Wardrobe', path: '/services/custom-wardrobes' },
  { name: 'Tabletop', path: '/services/tabletop' },
  { name: 'Whole Unit Rewiring', path: '/services/electrical-services' },
];

const quickLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Projects', path: '/projects' },
  { name: 'Advice & Tips', path: '/advice' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-display font-semibold text-lg">Singapore Carpentry</span>
              </div>
            </Link>
            <p className="text-charcoal-300 text-sm leading-relaxed mb-6">
              Premium custom carpentry and electrical services for Singapore homes.
              Specializing in kitchen cabinets, bedroom wardrobes, tabletops, and whole-unit rewiring
              for HDB, condo, and landed properties.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-charcoal-800 flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-charcoal-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-charcoal-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal-300 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  +65 9348 5255
                </a>
              </li>

              <li className="flex items-start gap-3 text-charcoal-300 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Singapore-wide service coverage<br />HDB, Condo, Landed</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Kevin
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-charcoal-400 text-sm">
              {currentYear} Singapore Carpentry. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-charcoal-400">
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/advice" className="hover:text-white transition-colors">
                Advice
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
