import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  ArrowRight,
  AlertTriangle,
  Shield,
  Settings,
  Zap,
  Home,
  Clock,
} from 'lucide-react';
import { useState } from 'react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';
import RelatedServices from '../components/RelatedServices';

const warningSigns = [
  {
    sign: 'Frequent Circuit Trips',
    description: 'Circuits that trip regularly indicate overloaded or faulty wiring. This is a safety concern that should not be ignored.',
    severity: 'high',
  },
  {
    sign: 'Burning Smell from Outlets',
    description: 'Any burning smell from switches or outlets is a serious warning. Turn off power and have it inspected immediately.',
    severity: 'critical',
  },
  {
    sign: 'Discoloured or Warm Outlets',
    description: 'Outlets that feel warm to touch or show discoloration may have loose connections or damaged wiring behind.',
    severity: 'high',
  },
  {
    sign: 'Old Wiring (Over 20 Years)',
    description: 'Homes with wiring older than 20 years, especially resale HDB flats, benefit from full rewiring for safety and modern needs.',
    severity: 'medium',
  },
  {
    sign: 'Limited Power Points',
    description: 'If you rely on extension cords and power strips throughout your home, you may need additional circuits and outlets.',
    severity: 'medium',
  },
  {
    sign: 'Flickering Lights',
    description: 'Lights that flicker when appliances turn on suggest inadequate wiring or circuit capacity.',
    severity: 'medium',
  },
];

const rewiringScope = [
  {
    title: 'Complete Cable Replacement',
    description: 'All old wiring is removed and replaced with new, code-compliant cables throughout the unit.',
  },
  {
    title: 'DB Box Upgrade',
    description: 'New distribution board with adequate circuit breakers and RCD protection for modern safety standards.',
  },
  {
    title: 'Circuit Planning',
    description: 'Proper distribution of loads across circuits. Separate circuits for air-con, kitchen appliances, lighting, and general power.',
  },
  {
    title: 'Additional Power Points',
    description: 'New outlets added where needed for modern living, including kitchen appliances, entertainment systems, and charging needs.',
  },
  {
    title: 'LAN and Data Points',
    description: 'Structured cabling for internet connectivity in multiple rooms, supporting work-from-home needs.',
  },
  {
    title: 'TV Points',
    description: 'Coaxial cable points in living room and bedrooms for television connection.',
  },
  {
    title: 'Air-Conditioner Wiring',
    description: 'Dedicated circuits and isolator switches for air-conditioning units.',
  },
  {
    title: 'Cable Management',
    description: 'Neat and tidy routing of all cables, with concealed wiring and proper trunking.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Site Assessment',
    description: 'We inspect your existing wiring, understand your power needs, and identify the scope of work required.',
    icon: Home,
  },
  {
    step: '02',
    title: 'Circuit Planning',
    description: 'We design the new circuit layout, allocating loads and planning outlet positions for your lifestyle.',
    icon: Settings,
  },
  {
    step: '03',
    title: 'Wiring Installation',
    description: 'Old cables are removed and new wiring is installed. DB box is upgraded. Work includes chasing and trunking.',
    icon: Zap,
  },
  {
    step: '04',
    title: 'Testing & Handover',
    description: 'Full electrical testing is performed. We explain your new system and provide documentation.',
    icon: Shield,
  },
];

const benefits = [
  {
    title: 'Safety Compliance',
    description: 'Modern wiring meets current Singapore electrical codes and safety standards.',
  },
  {
    title: 'Fire Prevention',
    description: 'New cables and connections reduce fire risk from overheating or faulty wiring.',
  },
  {
    title: 'Adequate Capacity',
    description: 'Proper circuits for modern appliances, air-conditioners, and home entertainment systems.',
  },
  {
    title: 'Neat Installation',
    description: 'Organised cable routing and proper trunking instead of messy surface wiring.',
  },
  {
    title: 'Future-Ready',
    description: 'LAN points and sufficient outlets support modern connectivity needs.',
  },
  {
    title: 'Peace of Mind',
    description: 'Know your family is safe with properly installed and tested electrical systems.',
  },
];

const timeline = [
  { phase: 'Site Assessment', duration: '1 day' },
  { phase: 'Planning and Quotation', duration: '2-3 days' },
  { phase: 'Wiring Works', duration: '3-5 days (typical HDB)' },
  { phase: 'Testing and Certification', duration: '1 day' },
];

const faqItems = [
  {
    question: 'How do I know if my home needs rewiring?',
    answer: 'If your home is over 20 years old, or if you experience frequent circuit trips, burning smells, warm outlets, or flickering lights, you should have your wiring assessed. Resale flats especially benefit from rewiring before moving in.',
  },
  {
    question: 'How long does whole unit rewiring take?',
    answer: 'For a typical HDB flat, rewiring takes 3 to 5 working days. Larger units or landed homes may take longer. We will provide a specific timeline during quotation.',
  },
  {
    question: 'Is rewiring disruptive to my home?',
    answer: 'Rewiring involves some hacking and chasing of walls for concealed wiring. We recommend doing rewiring before renovation works like painting and flooring, or when the unit is vacant.',
  },
  {
    question: 'Do you provide certification after rewiring?',
    answer: 'Yes, all rewiring works are tested and documented. We provide proper records and your new electrical system meets Singapore requirements.',
  },
  {
    question: 'Can rewiring be done with other renovation works?',
    answer: 'Yes, rewiring should typically be done early in the renovation timeline, before plastering, painting, and carpentry works. We can coordinate with your renovation contractor.',
  },
  {
    question: 'Do you work on HDB flats?',
    answer: 'Yes, we have extensive experience with HDB rewiring. We understand HDB guidelines and work within renovation rules. We also handle submissions where required.',
  },
];

export default function WholeUnitRewiringPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <SEO
        title="Whole Unit Electrical Rewiring | Singapore Carpentry"
        description="Complete electrical rewiring for Singapore HDB, condo, and landed homes. Circuit planning, DB box installation, LAN and TV points, air-con wiring, and neat cable management."
        path="/services/electrical-services"
      />
      <ServiceJsonLd
        name="Whole Unit Electrical Rewiring"
        description="Complete electrical rewiring for Singapore HDB, condo, and landed homes."
        url="/services/electrical-services"
      />
      <BreadcrumbJsonLd items={[{ name: 'Services', url: '/services' }, { name: 'Whole Unit Rewiring', url: '/services/electrical-services' }]} />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Whole Unit Rewiring' }]} />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg"
            alt="Electrical rewiring Singapore HDB"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/20 backdrop-blur-md rounded-full text-white text-sm mb-6">
              <Shield className="w-4 h-4" />
              Licensed Electrician Services in Singapore
            </div>
            <h1 className="text-white mb-6">Whole Unit Rewiring Singapore</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Complete electrical rewiring for HDB flats, condos, and landed homes.
              Safe, compliant, and properly planned electrical systems for modern Singapore homes.
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
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal-800">
                <Clock className="w-5 h-5" />
                Get Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="mb-6">Professional Electrical Rewiring for Singapore Homes</h2>
            <div className="space-y-4 text-charcoal-600 text-lg">
              <p>
                Electrical wiring is not something homeowners think about often, but it is critical
                to your family's safety. Older homes, especially resale HDB flats and private
                properties built more than 15 years ago, often have wiring that was designed for
                different times, when households used fewer appliances.
              </p>
              <p>
                Modern Singapore homes have air-conditioners, induction cookers, water heaters,
                home entertainment systems, and countless devices requiring charging. Older wiring
                may be inadequate, unsafe, or simply messy from repeated ad-hoc additions over the years.
              </p>
              <p>
                Whole unit rewiring replaces all cables, upgrades your distribution board, and plans
                circuits properly for modern living. It is an investment in safety and convenience
                that adds lasting value to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm mb-4">
              <AlertTriangle className="w-4 h-4" />
              Safety Warning
            </div>
            <h2 className="mb-4">Signs Your Home Needs Rewiring</h2>
            <p className="text-charcoal-600 text-lg">
              These warning signs indicate potential electrical hazards. Do not ignore them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((item) => (
              <div
                key={item.sign}
                className={`bg-white rounded-xl p-6 shadow-card border-l-4 ${
                  item.severity === 'critical' ? 'border-red-500' :
                  item.severity === 'high' ? 'border-orange-500' :
                  'border-amber-500'
                }`}
              >
                <div className="flex items-start gap-3">
                  {item.severity === 'critical' && (
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  )}
                  {item.severity === 'high' && (
                    <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  )}
                  <div>
                    <h3 className="font-semibold text-charcoal-800 mb-2">{item.sign}</h3>
                    <p className="text-charcoal-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/6593485255?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-700 font-medium hover:text-red-800"
            >
              <Phone className="w-5 h-5" />
              Call Kevin immediately if you notice critical warning signs
            </a>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4">What Whole Unit Rewiring Includes</h2>
              <p className="text-charcoal-600 text-lg mb-8">
                A complete rewiring project covers all aspects of your home's electrical system,
                from the main distribution board to every outlet and switch.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {rewiringScope.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-charcoal-800 mb-1">{item.title}</h4>
                      <p className="text-charcoal-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg"
                alt="Electrical distribution box inspection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Rewiring Matters */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-white mb-4">Why Whole Unit Rewiring Matters</h2>
            <p className="text-charcoal-300 text-lg">
              Older wiring was not designed for the electrical demands of modern Singapore homes.
              Rewiring brings your home up to current standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-charcoal-800 rounded-xl p-6">
                <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-charcoal-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Planning Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                src="https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg"
                alt="Electrical wiring installation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="mb-4">Circuit Planning and Load Balancing</h2>
              <p className="text-charcoal-600 text-lg mb-6">
                Proper circuit planning prevents overloads and ensures each part of your home
                has the electrical capacity it needs.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-charcoal-800 mb-1">Air-Conditioner Circuits</h4>
                  <p className="text-charcoal-600 text-sm">
                    Dedicated circuits with proper isolation switches for each air-con unit.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-charcoal-800 mb-1">Kitchen Circuits</h4>
                  <p className="text-charcoal-600 text-sm">
                    Separate circuits for hob, hood, refrigerator, and general kitchen power.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-charcoal-800 mb-1">Water Heater Circuits</h4>
                  <p className="text-charcoal-600 text-sm">
                    Isolated circuits for instant and storage water heaters in bathrooms.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-charcoal-800 mb-1">General Power and Lighting</h4>
                  <p className="text-charcoal-600 text-sm">
                    Separate circuits for lighting and general power outlets, so a fault in one does not affect others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Rewiring Process</h2>
            <p className="text-charcoal-600 text-lg">
              A structured approach to ensure your rewiring is done safely and correctly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-warm-50 rounded-xl p-6">
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

      {/* Timeline Section */}
      <section className="py-16 bg-warm-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-8">Typical Project Timeline</h2>
            <div className="space-y-3">
              {timeline.map((item, index) => (
                <div
                  key={item.phase}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-card"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.phase}</h4>
                  </div>
                  <div className="text-charcoal-600 text-sm font-medium">{item.duration}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-charcoal-500 text-sm mt-6">
              Timeline may vary based on unit size and additional requirements.
            </p>
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
                Get answers to common questions about whole unit rewiring in Singapore.
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
            description: 'New cabinets with updated electrical points.',
            path: '/services/kitchen-cabinets',
          },
          {
            title: 'Bedroom Wardrobe',
            description: 'Wardrobe installation with new lighting.',
            path: '/services/custom-wardrobes',
          },
          {
            title: 'Tabletop & Countertop',
            description: 'Complete your renovation with new surfaces.',
            path: '/services/tabletop',
          },
        ]}
      />
      <CTABanner
        title="Concerned About Your Home's Wiring?"
        subtitle="Contact us for a safety assessment and quotation. We help Singapore homeowners protect their families with proper electrical systems."
      />
    </main>
  );
}
