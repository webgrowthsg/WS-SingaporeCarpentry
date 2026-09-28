import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  ArrowRight,
  Ruler,
  Palette,
  Settings,
  Truck,
} from 'lucide-react';
import { useState } from 'react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';
import RelatedServices from '../components/RelatedServices';

const wardrobeTypes = [
  {
    title: 'Built-in Sliding Wardrobe',
    description: 'Space-saving sliding doors that do not intrude into room space. Ideal for bedrooms with limited clearance.',
    image: 'https://images.pexels.com/photos/32331029/pexels-photo-32331029.png',
  },
  {
    title: 'Swing Door Wardrobe',
    description: 'Classic hinged doors that open fully for complete access. Suitable for bedrooms with enough space.',
    image: 'https://images.pexels.com/photos/9646754/pexels-photo-9646754.jpeg',
  },
  {
    title: 'Walk-in Wardrobe',
    description: 'A dedicated dressing space with open shelving, hanging rails, and custom storage configurations.',
    image: 'https://images.pexels.com/photos/37797447/pexels-photo-37797447.png',
  },
  {
    title: 'Full-Height Wardrobe',
    description: 'Floor-to-ceiling storage that maximises vertical space. Perfect for high ceilings in condos and landed homes.',
    image: 'https://images.pexels.com/photos/32331030/pexels-photo-32331030.png',
  },
];

const features = [
  {
    title: 'Custom Compartments',
    description: 'Shelves, drawers, and hanging rails arranged for your wardrobe contents.',
  },
  {
    title: 'Accessory Drawers',
    description: 'Jewellery trays, watch cushions, and divided compartments for small items.',
  },
  {
    title: 'Integrated Lighting',
    description: 'LED strips, motion sensors, and warm lighting for visibility and atmosphere.',
  },
  {
    title: 'Mirror Integration',
    description: 'Full-length mirrors on doors or as separate panels.',
  },
  {
    title: 'Hidden Storage',
    description: 'Concealed compartments for valuables and seasonal items.',
  },
  {
    title: 'Open Display Shelves',
    description: 'Mix of concealed and open storage for displaying bags, shoes, or accessories.',
  },
];

const materials = [
  {
    name: 'Laminate Finishes',
    description: 'Durable, scratch-resistant surfaces in matte, gloss, and woodgrain textures. Wide colour selection.',
    bestFor: 'Family homes, high-traffic bedrooms',
  },
  {
    name: 'Wood Veneer',
    description: 'Real wood veneer with natural grain patterns. Can be stained or lacquered to preference.',
    bestFor: 'Premium bedroom interiors',
  },
  {
    name: 'Glass Panels',
    description: 'Frosted, clear, or tinted glass doors for a modern, lighter appearance.',
    bestFor: 'Contemporary interiors, walk-in wardrobes',
  },
  {
    name: 'Acrylic Finishes',
    description: 'High-gloss surfaces that reflect light and make rooms feel spacious.',
    bestFor: 'Modern, minimalist bedrooms',
  },
];

const benefits = [
  'Maximise storage in compact Singapore bedrooms',
  'Custom dimensions for any wall or recess',
  'Sliding doors for rooms with limited space',
  'Designed for HDB, condo, and landed homes',
  'Quality hardware with soft-close systems',
  'Material and finish options to match your interior',
  'Professional installation with clean site practice',
  'Workmanship warranty included',
];

const smallRoomTips = [
  {
    tip: 'Sliding Doors',
    description: 'Eliminate door swing space so you can place furniture closer to the wardrobe.',
  },
  {
    tip: 'Full-Height Design',
    description: 'Use vertical space completely, storing seasonal items at the top.',
  },
  {
    tip: 'Light Colours',
    description: 'White or light finishes blend with walls, making the room feel larger.',
  },
  {
    tip: 'Mirrored Doors',
    description: 'Reflective surfaces create depth illusion and serve dual purpose.',
  },
  {
    tip: 'Built-in Corners',
    description: 'Custom corner units turn awkward angles into usable storage.',
  },
];

const faqItems = [
  {
    question: 'What is the difference between sliding and swing door wardrobes?',
    answer: 'Sliding doors move along tracks and do not require clearance space to open. They are ideal for rooms where space is tight. Swing doors open outward, providing full access to the interior but require floor space for the door arc.',
  },
  {
    question: 'How deep should a wardrobe be?',
    answer: 'Standard wardrobe depth is 580mm to 600mm, which comfortably fits hanging clothes. Shallow wardrobes (450mm) work for folded clothes and can be designed for very tight spaces.',
  },
  {
    question: 'Can you build wardrobes for small rooms?',
    answer: 'Yes, we specialise in space-efficient designs for HDB bedrooms. Sliding doors, full-height units, and clever internal layouts help maximise storage in compact rooms.',
  },
  {
    question: 'How long does wardrobe installation take?',
    answer: 'Installation typically takes 1 to 2 days depending on wardrobe complexity. The full process from design confirmation to installation is usually 2 to 4 weeks.',
  },
  {
    question: 'Do you provide design consultation?',
    answer: 'Yes, we offer a site consultation where we measure the space, discuss your storage needs, and propose design options. This is included at no charge with our quotation.',
  },
  {
    question: 'What warranties do you provide?',
    answer: 'All wardrobe carpentry comes with a workmanship warranty. Hardware components (hinges, tracks, drawer runners) carry manufacturer warranties.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Site Measurement',
    description: 'We visit your home to measure the space, discuss your requirements, and assess access points.',
    icon: Ruler,
  },
  {
    step: '02',
    title: 'Design Planning',
    description: 'We propose internal layouts, door styles, and finishes based on your needs and budget.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Fabrication',
    description: 'Your wardrobe is custom-built in our workshop with quality materials and hardware.',
    icon: Settings,
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Professional installation with site protection and final handover.',
    icon: Truck,
  },
];

export default function BedroomWardrobePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <SEO
        title="Custom Wardrobe Services | Singapore Carpentry"
        description="Built-in wardrobes and custom closet solutions for every bedroom size. Sliding doors, swing doors, walk-in wardrobes, and full-height storage for HDB, condo, and landed homes."
        path="/services/custom-wardrobes"
      />
      <ServiceJsonLd
        name="Custom Wardrobe Services"
        description="Built-in wardrobes and custom closet solutions for Singapore bedrooms."
        url="/services/custom-wardrobes"
      />
      <BreadcrumbJsonLd items={[{ name: 'Services', url: '/services' }, { name: 'Bedroom Wardrobe', url: '/services/custom-wardrobes' }]} />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Bedroom Wardrobe' }]} />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/16849894/pexels-photo-16849894.jpeg"
            alt="HDB bedroom wardrobe Singapore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6">
              <CheckCircle className="w-4 h-4" />
              Built-in Wardrobes for Singapore Homes
            </div>
            <h1 className="text-white mb-6">Bedroom Wardrobe Singapore</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Custom built-in wardrobes designed for Singapore bedrooms. From compact HDB rooms
              to spacious master suites, we create storage solutions that maximise space and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6583889596?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-accent hover:bg-brand-accent/90"
              >
                <Phone className="w-5 h-5" />
                Call Kevin
              </a>
              <Link to="/projects" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal-800">
                View Wardrobe Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="mb-6">Custom Wardrobes for Singapore Homes</h2>
            <div className="space-y-4 text-charcoal-600 text-lg">
              <p>
                Every homeowner deserves a bedroom with organised, accessible storage.
                Unfortunately, many Singapore bedrooms come with tiny built-in wardrobes or no
                storage at all. A custom built-in wardrobe transforms how you use your bedroom.
              </p>
              <p>
                We design wardrobes that fit your space exactly, whether that is an awkward recess,
                a full wall, or a dedicated walk-in room. Every compartment, shelf, and drawer is
                planned for what you own, from long dresses to folded t-shirts, from shoe collections
                to handbag displays.
              </p>
              <p>
                From HDB bedrooms where every centimetre counts, to condo master suites with room
                for walk-in luxury, we have crafted wardrobes across every Singapore home type.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wardrobe Types */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Types of Built-in Wardrobes</h2>
            <p className="text-charcoal-600 text-lg">
              Choose the door style that suits your bedroom layout and storage preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wardrobeTypes.map((type) => (
              <div key={type.title} className="card overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-charcoal-600 text-sm">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4">Customisable Wardrobe Features</h2>
              <p className="text-charcoal-600 text-lg mb-8">
                Your wardrobe should be designed around what you own and how you dress.
                We offer a full range of features and configurations.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-warm-50 rounded-lg p-4">
                    <h4 className="font-medium text-charcoal-800 mb-1">{feature.title}</h4>
                    <p className="text-charcoal-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-warm-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Wardrobe Finish Options</h2>
            <p className="text-charcoal-600 text-lg">
              Select materials and finishes that complement your bedroom interior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {materials.map((material) => (
              <div key={material.name} className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="text-xl font-semibold mb-2">{material.name}</h3>
                <p className="text-charcoal-600 mb-4">{material.description}</p>
                <div className="text-sm">
                  <span className="font-medium text-charcoal-800">Best for: </span>
                  <span className="text-charcoal-600">{material.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small Bedrooms Section */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-white mb-4">Wardrobe Ideas for Small Bedrooms</h2>
              <p className="text-charcoal-300 text-lg mb-8">
                HDB bedrooms and compact condo rooms need clever design. Here is how we help
                you get more storage from less floor space.
              </p>

              <div className="space-y-6">
                {smallRoomTips.map((item) => (
                  <div key={item.tip} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.tip}</h4>
                      <p className="text-charcoal-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.pexels.com/photos/17495860/pexels-photo-17495860.jpeg"
                alt="Small HDB bedroom wardrobe Singapore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.pexels.com/photos/15522918/pexels-photo-15522918.jpeg"
                alt="Custom wardrobe benefits"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="mb-4">Benefits of Custom Built-in Wardrobes</h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                    <span className="text-charcoal-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Wardrobe Design and Installation Process</h2>
            <p className="text-charcoal-600 text-lg">
              A smooth process from consultation to your completed bedroom wardrobe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <span className="text-sm font-semibold text-brand-primary mb-2 block">
                  Step {step.step}
                </span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-charcoal-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-charcoal-600 text-lg mb-8">
                Get answers to common questions about built-in wardrobes in Singapore.
              </p>
              <Link to="/faq" className="btn-secondary">
                View All FAQs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-warm-50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-charcoal-800 pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-charcoal-600 text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <RelatedServices
        services={[
          {
            title: 'Kitchen Cabinet',
            description: 'Custom kitchen cabinets designed for Singapore homes.',
            path: '/services/kitchen-cabinets',
          },
          {
            title: 'Whole Unit Rewiring',
            description: 'Add lighting and power points for your bedroom.',
            path: '/services/electrical-services',
          },
          {
            title: 'Tabletop & Countertop',
            description: 'Matching surfaces for bedroom vanities and desks.',
            path: '/services/tabletop',
          },
        ]}
      />
      <CTABanner
        title="Design Your Dream Wardrobe"
        subtitle="Let us create a custom wardrobe that fits your space perfectly. Free consultation and detailed quotation included."
      />
    </main>
  );
}
