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

const cabinetTypes = [
  {
    title: 'Upper Cabinets',
    description: 'Wall-mounted cabinets for storage above countertops. Available in various heights and depths.',
    image: 'https://images.pexels.com/photos/7244740/pexels-photo-7244740.jpeg',
  },
  {
    title: 'Lower Cabinets',
    description: 'Base cabinets with drawers and doors. The workhorse of any kitchen, supporting your countertop.',
    image: 'https://images.pexels.com/photos/5893076/pexels-photo-5893076.jpeg',
  },
  {
    title: 'Tall Units',
    description: 'Floor-to-ceiling cabinets for integrated appliances, pantry storage, or built-in ovens.',
    image: 'https://images.pexels.com/photos/15124970/pexels-photo-15124970.jpeg',
  },
  {
    title: 'Kitchen Island',
    description: 'Free-standing or connected island units with storage, seating, and workspace.',
    image: 'https://images.pexels.com/photos/27626178/pexels-photo-27626178.jpeg',
  },
];

const finishOptions = [
  {
    name: 'Laminate',
    description: 'Durable, affordable, and available in countless colours and woodgrain patterns. Easy to clean and resistant to scratches.',
    bestFor: 'HDB and condo kitchens, high-traffic family homes',
  },
  {
    name: 'Veneer',
    description: 'Real wood slices applied to substrate, giving natural wood appearance with consistent grain. Can be stained or lacquered.',
    bestFor: 'Premium home interiors, homeowners who want real wood aesthetics',
  },
  {
    name: 'Acrylic',
    description: 'High-gloss, reflective finish that makes kitchens feel larger. Smooth surface that is easy to wipe clean.',
    bestFor: 'Modern, contemporary kitchens seeking a sleek look',
  },
  {
    name: 'Solid Surface',
    description: 'Seamless, non-porous material for cabinet doors and panels. Can be curved and shaped without visible joins.',
    bestFor: 'Custom designs, unique shapes, integrated sink tops',
  },
];

const benefits = [
  'Maximise storage in compact Singapore kitchens',
  'Custom dimensions for awkward layouts and corners',
  'Choice of materials to match your style and budget',
  'Soft-close hinges and drawer systems included',
  'Designed for HDB, condo, and landed property layouts',
  'Professional installation with clean site practice',
  'Workmanship warranty for peace of mind',
];

const problemsSolved = [
  {
    problem: 'Limited Cabinet Space',
    solution: 'Custom tall units, corner pull-outs, and optimised layouts that maximise every centimetre.',
  },
  {
    problem: 'Awkward Kitchen Layout',
    solution: 'Made-to-measure cabinets that fit L-shaped, galley, and open-concept kitchens perfectly.',
  },
  {
    problem: 'Old or Damaged Cabinets',
    solution: 'Complete removal and replacement with modern designs and quality materials.',
  },
  {
    problem: 'Lack of Appliance Housing',
    solution: 'Built-in oven housings, refrigerator cabinets, and washer-dryer integration.',
  },
  {
    problem: 'Outdated Kitchen Style',
    solution: 'Contemporary designs with modern finishes, handleless options, and LED lighting integration.',
  },
];

const faqItems = [
  {
    question: 'How long does kitchen cabinet installation take?',
    answer: 'Typical installation takes 1 to 3 days depending on kitchen size. The overall timeline from design confirmation to installation is usually 2 to 4 weeks, including fabrication.',
  },
  {
    question: 'What is the difference between laminate and veneer?',
    answer: 'Laminate is a printed synthetic surface that is durable and affordable. Veneer uses real wood slices for a natural grain appearance. Veneer costs more but offers authentic wood aesthetics.',
  },
  {
    question: 'Do you remove old cabinets?',
    answer: 'Yes, we can remove and dispose of your existing kitchen cabinets as part of the renovation. All removal and disposal costs are included in your quotation.',
  },
  {
    question: 'Can I choose my own materials and finishes?',
    answer: 'Absolutely. We show you samples of laminates, veneers, and other finishes during the design consultation. You choose what suits your style and budget.',
  },
  {
    question: 'Do you work with HDB kitchens?',
    answer: 'Yes, we have extensive experience with HDB flats of all sizes. We understand HDB renovation guidelines and work within those requirements.',
  },
  {
    question: 'What hardware do you use?',
    answer: 'We use quality hardware including soft-close hinges and drawer runners. Blum, Hettich, and other reputable brands are available depending on your preference.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We visit your home to understand your needs, measure the space, and discuss design possibilities.',
    icon: Ruler,
  },
  {
    step: '02',
    title: 'Design Proposal',
    description: 'We propose layouts, materials, and finishes. Adjustments are made until you are satisfied.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Fabrication',
    description: 'Your cabinets are manufactured to specifications in our workshop.',
    icon: Settings,
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Professional installation with site protection, clean-up, and final handover.',
    icon: Truck,
  },
];

export default function KitchenCabinetPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <SEO
        title="Kitchen Cabinet Services | Singapore Carpentry"
        description="Custom kitchen cabinet design and installation for Singapore homes. Upper and lower cabinets, tall units, islands, and corner storage solutions in laminate, veneer, and acrylic finishes."
        path="/services/kitchen-cabinets"
      />
      <ServiceJsonLd
        name="Kitchen Cabinet Services"
        description="Custom kitchen cabinet design and installation for Singapore homes."
        url="/services/kitchen-cabinets"
      />
      <BreadcrumbJsonLd items={[{ name: 'Services', url: '/services' }, { name: 'Kitchen Cabinet', url: '/services/kitchen-cabinets' }]} />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Kitchen Cabinet' }]} />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/15062084/pexels-photo-15062084.jpeg"
            alt="Custom kitchen cabinet Singapore HDB"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6">
              <CheckCircle className="w-4 h-4" />
              Custom Kitchen Carpentry in Singapore
            </div>
            <h1 className="text-white mb-6">Kitchen Cabinet Singapore</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Custom kitchen cabinets designed for Singapore homes. From HDB flats to private condos,
              we create kitchens that maximise storage, suit your style, and stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-accent hover:bg-brand-accent/90"
              >
                <Phone className="w-5 h-5" />
                Call Kevin
              </a>
              <Link to="/projects" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal-800">
                View Kitchen Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="mb-6">Custom Kitchen Cabinet Design in Singapore</h2>
            <div className="space-y-4 text-charcoal-600 text-lg">
              <p>
                The kitchen is the heart of every Singapore home. Whether you are renovating an HDB flat,
                upgrading a resale condo, or building a new landed home, custom kitchen cabinets transform
                how you cook, store, and live.
              </p>
              <p>
                Unlike off-the-shelf options, custom carpentry fits your exact dimensions. We design around
                corners, columns, and unusual layouts. We create storage solutions that make sense for how
                you use your kitchen. And we build with quality materials that last.
              </p>
              <p>
                From compact HDB kitchens to spacious condo designs, our team has completed hundreds of
                kitchen projects across Singapore. We understand local requirements, from HDB renovation
                guidelines to condo management rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Types */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Types of Kitchen Cabinets</h2>
            <p className="text-charcoal-600 text-lg">
              Custom cabinetry for every part of your kitchen, designed to maximise function and style.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabinetTypes.map((type) => (
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

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-semibold mb-4">Corner Storage Solutions</h3>
            <p className="text-charcoal-600 mb-6">
              Kitchen corners often become dead space. We offer several solutions to maximise these areas:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Corner Pull-Outs</h4>
                  <p className="text-charcoal-600 text-sm">Sliding shelves that bring items to you.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Lazy Susan</h4>
                  <p className="text-charcoal-600 text-sm">Rotating trays for easy access.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">LeMans Corner</h4>
                  <p className="text-charcoal-600 text-sm">Swing-out shelves for full access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finishes Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Cabinet Finish Options</h2>
            <p className="text-charcoal-600 text-lg">
              Choose from quality finishes that suit your budget and design preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {finishOptions.map((finish) => (
              <div key={finish.name} className="bg-warm-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">{finish.name}</h3>
                <p className="text-charcoal-600 mb-4">{finish.description}</p>
                <div className="text-sm">
                  <span className="font-medium text-charcoal-800">Best for: </span>
                  <span className="text-charcoal-600">{finish.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HDB & Condo Section */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white mb-4">Kitchen Cabinets for HDB and Condo Homes</h2>
              <p className="text-charcoal-300 text-lg mb-6">
                Singapore homes have unique layouts and constraints. We specialise in designing
                kitchens that work within these spaces.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">HDB Kitchen Specialists</h4>
                    <p className="text-charcoal-300 text-sm">
                      We understand HDB renovation guidelines and design kitchens that comply with all requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Space-Saving Designs</h4>
                    <p className="text-charcoal-300 text-sm">
                      Compact kitchens in smaller HDB flats benefit from clever storage and optimised layouts.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Condo Renovation Expertise</h4>
                    <p className="text-charcoal-300 text-sm">
                      We work with condo management for approvals and coordinate within building regulations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Landed Property Kitchens</h4>
                    <p className="text-charcoal-300 text-sm">
                      Larger spaces allow for premium designs including walk-in pantries and butler kitchens.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.pexels.com/photos/39829582/pexels-photo-39829582.jpeg"
                alt="Modern kitchen for HDB and condo homes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4">Benefits of Custom Kitchen Cabinets</h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                    <span className="text-charcoal-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.pexels.com/photos/36777910/pexels-photo-36777910.jpeg"
                alt="Custom kitchen cabinet benefits"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Common Kitchen Problems We Solve</h2>
            <p className="text-charcoal-600 text-lg">
              Every homeowner has different frustrations with their existing kitchen. Here is how we help.
            </p>
          </div>

          <div className="space-y-6">
            {problemsSolved.map((item) => (
              <div key={item.problem} className="bg-warm-50 rounded-xl p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <span className="text-sm font-medium text-charcoal-500">Problem</span>
                  <h3 className="text-lg font-semibold text-charcoal-800">{item.problem}</h3>
                </div>
                <div className="md:w-2/3">
                  <span className="text-sm font-medium text-brand-primary">Our Solution</span>
                  <p className="text-charcoal-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-warm-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Kitchen Cabinet Installation Process</h2>
            <p className="text-charcoal-600 text-lg">
              A straightforward process from consultation to completed kitchen.
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
                Get answers to common questions about kitchen cabinet renovation in Singapore.
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
            title: 'Tabletop & Countertop',
            description: 'Quartz, solid surface, and laminate countertops to complete your kitchen.',
            path: '/services/tabletop',
          },
          {
            title: 'Whole Unit Rewiring',
            description: 'Update your electrical points for modern kitchen appliances.',
            path: '/services/electrical-services',
          },
          {
            title: 'Bedroom Wardrobe',
            description: 'Custom wardrobes for the rest of your home.',
            path: '/services/custom-wardrobes',
          },
        ]}
      />
      <CTABanner
        title="Ready for Your New Kitchen?"
        subtitle="Let us design a kitchen that fits your space, cooking habits, and style. Get a free consultation and detailed quotation."
      />
    </main>
  );
}
