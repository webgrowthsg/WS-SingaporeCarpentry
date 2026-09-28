import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  ArrowRight,
  Ruler,
  Settings,
  Truck,
  Droplets,
  Flame,
  Sparkles,
  Shield,
} from 'lucide-react';
import { useState } from 'react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';
import RelatedServices from '../components/RelatedServices';

const materials = [
  {
    name: 'Quartz',
    description: 'Engineered stone composed of natural quartz crystals and resin. Extremely durable, non-porous, and available in a wide range of colours and patterns.',
    image: 'https://images.pexels.com/photos/4249587/pexels-photo-4249587.jpeg',
    pros: ['Non-porous', 'Scratch-resistant', 'Heat-resistant', 'Low maintenance'],
    cons: ['Higher cost', 'Professional installation required'],
    bestFor: 'Premium kitchens, homeowners seeking low-maintenance luxury',
  },
  {
    name: 'Solid Surface',
    description: 'A synthetic material made from acrylic or polyester resins. Seamless joins, repairable, and can be shaped into custom forms.',
    image: 'https://images.pexels.com/photos/7587380/pexels-photo-7587380.jpeg',
    pros: ['Seamless joins', 'Repairable', 'Custom shapes', 'Non-porous'],
    cons: ['Not heat-resistant', 'Can scratch'],
    bestFor: 'Integrated sink designs, curved countertops, modern aesthetics',
  },
  {
    name: 'Sintered Stone',
    description: 'Ultra-compact surfaces created through high heat and pressure. Extremely hard, resistant to virtually everything including heat and scratches.',
    image: 'https://milestoneintl.net/wp-content/uploads/2025/12/what-is-sintered-stone.png',
    pros: ['Extreme durability', 'Heat-resistant', 'UV-stable', 'Slim profiles possible'],
    cons: ['Highest cost', 'Limited fabricators'],
    bestFor: 'Premium renovations, outdoor kitchens, minimalist designs',
  },
  {
    name: 'Laminate',
    description: 'Decorative paper layers bonded to particle board or MDF. Affordable, available in many designs, and suitable for most kitchen applications.',
    image: 'https://images.pexels.com/photos/9467701/pexels-photo-9467701.jpeg',
    pros: ['Affordable', 'Many designs', 'Quick installation', 'Easy to replace'],
    cons: ['Not heat-resistant', 'Cannot repair', 'Shorter lifespan'],
    bestFor: 'Budget-conscious renovations, HDB flats, rental properties',
  },
];



const comparisonFactors = [
  {
    icon: Shield,
    factor: 'Durability',
    quartz: 'Excellent',
    solidSurface: 'Good',
    sintered: 'Excellent',
    laminate: 'Fair',
  },
  {
    icon: Flame,
    factor: 'Heat Resistance',
    quartz: 'Good',
    solidSurface: 'Poor',
    sintered: 'Excellent',
    laminate: 'Poor',
  },
  {
    icon: Sparkles,
    factor: 'Scratch Resistance',
    quartz: 'Excellent',
    solidSurface: 'Fair',
    sintered: 'Excellent',
    laminate: 'Fair',
  },
  {
    icon: Droplets,
    factor: 'Stain Resistance',
    quartz: 'Excellent',
    solidSurface: 'Excellent',
    sintered: 'Excellent',
    laminate: 'Good',
  },
];

const benefits = [
  'Premium materials from trusted suppliers',
  'Precise templating and fabrication',
  'Seamless joins where possible',
  'Various edge profiles available',
  'Waterfall and extended edge options',
  'Professional installation',
  'Suitable for HDB, condo, and landed homes',
  'Competitive pricing for quality materials',
];

const maintenanceTips = [
  {
    material: 'Quartz',
    tips: [
      'Wipe spills immediately',
      'Use mild soap and water for daily cleaning',
      'Avoid abrasive cleaners',
      'Use trivets for hot pots despite heat resistance',
      'No sealing required',
    ],
  },
  {
    material: 'Solid Surface',
    tips: [
      'Clean with mild detergent and water',
      'Remove scratches with fine sandpaper',
      'Avoid placing hot pans directly on surface',
      'Seamless joins are virtually invisible after repair',
      'Professional polishing restores gloss',
    ],
  },
  {
    material: 'Laminate',
    tips: [
      'Clean with damp cloth and mild cleaner',
      'Never place hot items directly on surface',
      'Use cutting boards, do not cut directly',
      'Wipe spills quickly to prevent seepage',
      'Avoid prolonged water exposure at seams',
    ],
  },
];

const faqItems = [
  {
    question: 'Which material is best for Singapore kitchens?',
    answer: 'Quartz is popular for its durability and low maintenance. Solid surface suits modern designs with integrated sinks. Laminate is cost-effective for budget renovations. Your choice depends on budget, usage, and aesthetic preferences.',
  },
  {
    question: 'How thick should a kitchen countertop be?',
    answer: 'Standard thickness is 20mm to 30mm for stone surfaces. Quartz and sintered stone can be thinner (12mm) with support. Laminate tops are typically 30mm to 40mm including substrate.',
  },
  {
    question: 'Can you do waterfall edge countertops?',
    answer: 'Yes, we offer waterfall edges where the countertop continues vertically to the floor. This creates a dramatic, modern look and is popular for kitchen islands.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Installation is typically completed in one day. The overall timeline including templating and fabrication is 1 to 2 weeks for stone surfaces, faster for laminate.',
  },
  {
    question: 'Do I need to seal my countertop?',
    answer: 'Quartz and solid surface do not require sealing. Natural stones like granite do require periodic sealing. We advise on maintenance during handover.',
  },
  {
    question: 'What is the difference between quartz and sintered stone?',
    answer: 'Quartz is engineered stone with resin binder, offering excellent durability at mid-range price. Sintered stone is formed under extreme heat and pressure, making it even harder and more heat-resistant, but at higher cost.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Material Selection',
    description: 'View samples and discuss the best material for your needs, budget, and design vision.',
    icon: Ruler,
  },
  {
    step: '02',
    title: 'Site Templating',
    description: 'Precise measurements are taken after base cabinets are installed.',
    icon: Settings,
  },
  {
    step: '03',
    title: 'Fabrication',
    description: 'Your top is cut, edged, and finished in our workshop.',
    icon: Settings,
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Professional installation with silicone sealing and final checks.',
    icon: Truck,
  },
];

export default function TabletopPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <SEO
        title="Tabletop & Countertop Services | Singapore Carpentry"
        description="Premium countertops in quartz, solid surface, sintered stone, and laminate. Durable, beautiful surfaces for kitchens and bathrooms with seamless joins and waterfall edge designs."
        path="/services/tabletop"
      />
      <ServiceJsonLd
        name="Tabletop & Countertop Services"
        description="Premium countertops in quartz, solid surface, sintered stone, and laminate for Singapore homes."
        url="/services/tabletop"
      />
      <BreadcrumbJsonLd items={[{ name: 'Services', url: '/services' }, { name: 'Tabletop', url: '/services/tabletop' }]} />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Tabletop' }]} />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6958147/pexels-photo-6958147.jpeg"
            alt="Premium kitchen countertop Singapore"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6">
              <CheckCircle className="w-4 h-4" />
              Premium Countertops in Singapore
            </div>
            <h1 className="text-white mb-6">Tabletop and Countertop Singapore</h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Quartz, solid surface, sintered stone, and laminate countertops for Singapore homes.
              Professional installation with quality workmanship and competitive pricing.
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
            <h2 className="mb-6">Countertop Solutions for Singapore Homes</h2>
            <div className="space-y-4 text-charcoal-600 text-lg">
              <p>
                The countertop is the hardest-working surface in your kitchen. It needs to resist
                heat, scratches, stains, and daily wear while looking beautiful. Choosing the right
                material makes the difference between a surface that lasts decades and one that
                shows its age quickly.
              </p>
              <p>
                We supply and install a range of countertop materials to suit different needs and
                budgets. From premium quartz and sintered stone to practical laminate options, we
                help you choose what works for your kitchen, your cooking habits, and your budget.
              </p>
              <p>
                Every installation includes precise templating, professional fabrication, and expert
                fitting. Whether you are renovating an HDB flat, upgrading a condo kitchen, or
                fitting out a landed home, we deliver quality work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Countertop Materials Compared</h2>
            <p className="text-charcoal-600 text-lg">
              Each material has strengths and considerations. Here is what you need to know.
            </p>
          </div>

          <div className="space-y-8">
            {materials.map((material) => (
              <div key={material.name} className="bg-white rounded-2xl overflow-hidden shadow-card">
                <div className="grid lg:grid-cols-3">
                  <div className="aspect-video lg:aspect-auto">
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-semibold mb-4">{material.name}</h3>
                    <p className="text-charcoal-600 mb-6">{material.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
                        <ul className="space-y-1">
                          {material.pros.map((pro) => (
                            <li key={pro} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-charcoal-600 mb-2">Considerations</h4>
                        <ul className="space-y-1">
                          {material.cons.map((con) => (
                            <li key={con} className="flex items-center gap-2 text-sm">
                              <span className="w-4 h-4 rounded-full border border-charcoal-400 flex items-center justify-center text-charcoal-400 text-xs">-</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="text-sm bg-brand-primary/5 rounded-lg px-4 py-3">
                      <span className="font-medium text-charcoal-800">Best for: </span>
                      <span className="text-charcoal-600">{material.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Material Performance Comparison</h2>
            <p className="text-charcoal-600 text-lg">
              Quick reference for how different materials perform.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-charcoal-900 text-white">
                  <th className="px-6 py-4 text-left">Factor</th>
                  <th className="px-6 py-4 text-center">Quartz</th>
                  <th className="px-6 py-4 text-center">Solid Surface</th>
                  <th className="px-6 py-4 text-center">Sintered</th>
                  <th className="px-6 py-4 text-center">Laminate</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFactors.map((row, index) => (
                  <tr key={row.factor} className={index % 2 === 0 ? 'bg-warm-50' : 'bg-white'}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <row.icon className="w-5 h-5 text-brand-primary" />
                        <span className="font-medium">{row.factor}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        row.quartz === 'Excellent' ? 'bg-green-100 text-green-700' :
                        row.quartz === 'Good' ? 'bg-blue-100 text-blue-700' :
                        'bg-charcoal-100 text-charcoal-600'
                      }`}>
                        {row.quartz}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        row.solidSurface === 'Excellent' ? 'bg-green-100 text-green-700' :
                        row.solidSurface === 'Good' ? 'bg-blue-100 text-blue-700' :
                        row.solidSurface === 'Fair' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {row.solidSurface}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        row.sintered === 'Excellent' ? 'bg-green-100 text-green-700' :
                        row.sintered === 'Good' ? 'bg-blue-100 text-blue-700' :
                        'bg-charcoal-100 text-charcoal-600'
                      }`}>
                        {row.sintered}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        row.laminate === 'Excellent' ? 'bg-green-100 text-green-700' :
                        row.laminate === 'Good' ? 'bg-blue-100 text-blue-700' :
                        row.laminate === 'Fair' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {row.laminate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Section */}


      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4">Why Choose Our Countertop Services</h2>
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
                src="https://images.pexels.com/photos/10855207/pexels-photo-10855207.jpeg"
                alt="Quality countertop installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-white mb-4">Cleaning and Maintenance</h2>
            <p className="text-charcoal-300 text-lg">
              How to keep different countertop materials looking their best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {maintenanceTips.map((item) => (
              <div key={item.material} className="bg-charcoal-800 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold mb-4">{item.material}</h3>
                <ul className="space-y-2">
                  {item.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-charcoal-300 text-sm">
                      <Droplets className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Installation Process</h2>
            <p className="text-charcoal-600 text-lg">
              From material selection to completed installation.
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
                Get answers to common questions about kitchen countertops in Singapore.
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
            description: 'Complete your kitchen with custom cabinets.',
            path: '/services/kitchen-cabinets',
          },
          {
            title: 'Bedroom Wardrobe',
            description: 'Built-in wardrobes with matching surfaces.',
            path: '/services/custom-wardrobes',
          },
          {
            title: 'Whole Unit Rewiring',
            description: 'Electrical updates for your renovation.',
            path: '/services/electrical-services',
          },
        ]}
      />
      <CTABanner
        title="Ready for Your New Countertop?"
        subtitle="Let us help you choose the right material and design. Free consultation and competitive quotation included."
      />
    </main>
  );
}
