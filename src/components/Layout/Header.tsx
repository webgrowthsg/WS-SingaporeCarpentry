import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  {
    name: 'Our Work',
    path: '/services',
    children: [
      { name: 'Kitchen Cabinet', path: '/services/kitchen-cabinets' },
      { name: 'Bedroom Wardrobe', path: '/services/custom-wardrobes' },
      { name: 'Tabletop', path: '/services/tabletop' },
      { name: 'Whole Unit Rewiring', path: '/services/electrical-services' },
    ],
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Advice', path: '/advice' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-semibold text-lg leading-tight ${isScrolled ? 'text-charcoal-800' : 'text-charcoal-800'}`}>
                Singapore Carpentry
              </span>
              <span className={`text-xs ${isScrolled ? 'text-charcoal-500' : 'text-charcoal-600'}`}>
                Singapore Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-brand-primary bg-brand-primary/5'
                      : isScrolled
                      ? 'text-charcoal-700 hover:text-brand-primary hover:bg-charcoal-50'
                      : 'text-charcoal-700 hover:text-brand-primary'
                  }`}
                >
                  {link.name}
                </Link>
                {link.children && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-soft-lg border border-charcoal-100 py-2 animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-charcoal-700 hover:text-brand-primary hover:bg-warm-100 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6593485255?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal-700 hover:bg-charcoal-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-slide-up">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'text-brand-primary bg-brand-primary/5'
                        : 'text-charcoal-700 hover:text-brand-primary hover:bg-charcoal-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block px-4 py-2 text-sm text-charcoal-600 hover:text-brand-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 px-4">
              <a
                href="https://wa.me/6593485255?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center"
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
