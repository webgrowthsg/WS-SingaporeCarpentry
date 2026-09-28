import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

const services = [
  {
    id: 'kitchen-cabinet',
    title: 'Kitchen Cabinet',
    shortTitle: 'Kitchen Cabinet',
    description: 'Custom kitchen cabinet design and installation for Singapore homes.',
    image: 'https://images.pexels.com/photos/15062084/pexels-photo-15062084.jpeg',
    path: '/services/kitchen-cabinets',
    highlights: [
      'Upper and lower cabinets',
      'Tall units and pantry storage',
      'Island and peninsula cabinets',
      'Corner storage solutions',
      'Soft-close hinges and drawers',
      'Laminate, veneer, and acrylic finishes',
    ],
    cta: 'View Kitchen Cabinet Service',
  },
  {
    id: 'bedroom-wardrobe',
    title: 'Bedroom Wardrobe',
    shortTitle: 'Wardrobe',
    description: 'Built-in wardrobes and custom closet solutions for every bedroom size.',
    image: 'https://images.pexels.com/photos/6508346/pexels-photo-6508346.jpeg',
    path: '/services/custom-wardrobes',
    highlights: [
      'Built-in sliding wardrobes',
      'Swing door wardrobes',
      'Walk-in wardrobe design',
      'Full-height storage solutions',
      'Space-saving layouts for small rooms',
      'Custom compartments and accessories',
    ],
    cta: 'View Bedroom Wardrobe Service',
  },
  {
    id: 'tabletop',
    title: 'Tabletop & Countertop',
    shortTitle: 'Tabletop',
    description: 'Premium countertops in quartz, solid surface, and durable laminates.',
    image: 'https://images.pexels.com/photos/7828174/pexels-photo-7828174.jpeg',
    path: '/services/tabletop',
    highlights: [
      'Quartz countertops',
      'Solid surface tops',
      'Sintered stone options',
      'Laminate tabletops',
      'Waterfall edge designs',
      'Seamless joins',
    ],
    cta: 'View Tabletop Service',
  },
  {
    id: 'whole-unit-rewiring',
    title: 'Whole Unit Rewiring',
    shortTitle: 'Rewiring',
    description: 'Complete electrical rewiring for Singapore HDB, condo, and landed homes.',
    image: 'https://images.pexels.com/photos/5691493/pexels-photo-5691493.jpeg',
    path: '/services/electrical-services',
    highlights: [
      'Full home rewiring',
      'Circuit planning and load balancing',
      'New DB box installation',
      'LAN and TV points',
      'Air-con wiring',
      'Neat cable management',
    ],
    cta: 'View Rewiring Service',
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <SEO
        title="Our Services | Singapore Carpentry"
        description="Complete carpentry and electrical solutions for Singapore homes. Kitchen cabinets, bedroom wardrobes, tabletops, and whole-unit rewiring designed for HDB, condo, and landed properties."
        path="/services"
      />
      <Breadcrumbs items={[{ label: 'Services' }]} />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8146322/pexels-photo-8146322.jpeg"
            alt="Carpentry services Singapore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6">Our Services</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Complete carpentry and electrical solutions for Singapore homes.
              Kitchen cabinets, bedroom wardrobes, tabletops, and whole-unit rewiring
              designed for HDB, condo, and landed properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                  <p className="text-charcoal-600 mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.path}
                    className="btn-primary"
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Combination Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Combined Services for Your Renovation</h2>
            <p className="text-charcoal-600 text-lg mb-8">
              Many homeowners combine carpentry and electrical work for complete home renovations.
              We can coordinate both services under one timeline, reducing hassle and ensuring
              smooth project delivery.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h4 className="font-semibold mb-2">Kitchen + Rewiring</h4>
                <p className="text-charcoal-600 text-sm">
                  New cabinets with updated electrical points for appliances, lighting, and power outlets.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h4 className="font-semibold mb-2">Bedroom + Rewiring</h4>
                <p className="text-charcoal-600 text-sm">
                  Wardrobe installation with additional lighting, switches, and air-con wiring points.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h4 className="font-semibold mb-2">Full Home Renovation</h4>
                <p className="text-charcoal-600 text-sm">
                  Complete carpentry and rewiring for resale flats or upgrading older homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Need Help Deciding?"
        subtitle="Contact us to discuss your project. We will recommend the right services and provide a detailed quotation."
      />
    </main>
  );
}
