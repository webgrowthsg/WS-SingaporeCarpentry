import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
  Ruler,
  Settings,
  Truck,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

const services = [
  {
    title: 'Kitchen Cabinet',
    description: 'Custom kitchen cabinets designed for your space, style, and cooking needs. Maximize storage and elevate your kitchen aesthetics.',
    path: '/services/kitchen-cabinets',
    image: 'https://images.pexels.com/photos/8146322/pexels-photo-8146322.jpeg',
  },
  {
    title: 'Bedroom Wardrobe',
    description: 'Built-in wardrobes and custom closet solutions that fit your bedroom perfectly. From sliding doors to walk-in designs.',
    path: '/services/custom-wardrobes',
    image: 'https://images.pexels.com/photos/7535013/pexels-photo-7535013.jpeg',
  },
  {
    title: 'Tabletop',
    description: 'Premium countertops and tabletops in quartz, solid surface, and laminate. Durable, beautiful, and built to last.',
    path: '/services/tabletop',
    image: 'https://images.pexels.com/photos/6264414/pexels-photo-6264414.jpeg',
  },
  {
    title: 'Whole Unit Rewiring',
    description: 'Complete electrical rewiring for Singapore homes. Safe, compliant, and neat cable management for peace of mind.',
    path: '/services/electrical-services',
    image: 'https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg',
  },
];

const benefits = [
  {
    title: 'Custom-Made Solutions',
    description: 'Every piece is designed and built to fit your exact space and style preferences.',
  },
  {
    title: 'Singapore Home Experience',
    description: 'We understand HDB, condo, and landed property requirements and constraints.',
  },
  {
    title: 'Clean Workmanship',
    description: 'Precision carpentry with attention to every detail. Clean sites, tidy finishes.',
  },
  {
    title: 'Timely Project Delivery',
    description: 'Clear timelines and consistent updates. We respect your schedule.',
  },
  {
    title: 'Transparent Quotation',
    description: 'No hidden costs. Itemized quotes so you know exactly what you are paying for.',
  },
  {
    title: 'Quality Materials',
    description: 'We work with trusted suppliers for laminates, veneers, and hardware.',
  },
  {
    title: 'Friendly Coordination',
    description: 'From site measurement to final installation, we coordinate with you every step.',
  },
];

const projects = [
  {
    title: 'Modern HDB Kitchen',
    type: 'Kitchen Cabinet',
    homeType: 'HDB 4-Room',
    materials: 'Matte laminate, soft-close hinges',
    image: 'https://images.pexels.com/photos/8146322/pexels-photo-8146322.jpeg',
    result: 'Maximized corner storage with L-shaped layout and tall unit for appliances.',
  },
  {
    title: 'Condo Master Bedroom',
    type: 'Wardrobe',
    homeType: 'Private Condo',
    materials: 'Veneer finish, sliding doors',
    image: 'https://images.pexels.com/photos/7535013/pexels-photo-7535013.jpeg',
    result: 'Full-height sliding wardrobe with integrated LED strips and glass panels.',
  },
  {
    title: 'Quartz Kitchen Top',
    type: 'Tabletop',
    homeType: 'Landed Terrace',
    materials: 'Quartz countertop, waterfall edge',
    image: 'https://images.pexels.com/photos/6264414/pexels-photo-6264414.jpeg',
    result: 'Seamless quartz surface with waterfall sides for a premium look.',
  },
  {
    title: 'Full Electrical Upgrade',
    type: 'Whole Unit Rewiring',
    homeType: 'HDB Resale',
    materials: 'New cables, DB box, LAN points',
    image: 'https://images.pexels.com/photos/5691642/pexels-photo-5691642.jpeg',
    result: 'Complete rewiring with new circuit planning for modern appliance needs.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Enquiry',
    description: 'Reach out via WhatsApp or call. Tell us about your project.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'Site Measurement',
    description: 'We visit your home for a free consultation and to take precise measurements.',
    icon: Ruler,
  },
  {
    number: '03',
    title: 'Design & Quotation',
    description: 'We propose design options and provide a detailed, transparent quotation.',
    icon: Settings,
  },
  {
    number: '04',
    title: 'Fabrication & Installation',
    description: 'Once confirmed, we fabricate and install your custom carpentry or complete rewiring.',
    icon: Truck,
  },
];

const testimonials = [
  {
    name: 'Mrs. Tan',
    location: 'HDB Tampines',
    rating: 5,
    quote: "The team was punctual and the kitchen cabinets turned out exactly as we discussed. Clean work from start to finish. Highly recommended for HDB owners.",
  },
  {
    name: 'David & Sharon',
    location: 'Condo Bukit Timah',
    rating: 5,
    quote: "We renovated our entire resale flat with them. The built-in wardrobes and full rewiring were done smoothly. They coordinated well with our timeline.",
  },
  {
    name: 'Mr. Lee',
    location: 'Landed Sembawang',
    rating: 5,
    quote: "Very responsive and transparent with pricing. The quartz countertop was installed neatly and their electrician tidied up all the old messy wiring.",
  },
  {
    name: 'Siti & Family',
    location: 'HDB Punggol',
    rating: 5,
    quote: "We were impressed by how they managed to fit a full-height wardrobe in a small bedroom. Practical design that works for our family's needs.",
  },
];

const faqItems = [
  {
    question: 'Do you provide site measurement?',
    answer: 'Yes, we offer free site measurement and consultation. Our team will visit your home to assess the space, discuss your requirements, and provide professional recommendations.',
  },
  {
    question: 'Do you work with HDB and condo units?',
    answer: 'Absolutely. We have extensive experience with HDB flats, private condos, and landed properties across Singapore. We understand the specific requirements and constraints for each type of home.',
  },
  {
    question: 'How long does a typical carpentry project take?',
    answer: 'For kitchen cabinets or wardrobes, typical timelines range from 2 to 4 weeks from design confirmation to installation. Complex projects or whole-unit rewiring may take longer depending on scope.',
  },
  {
    question: 'Do you provide removal of old cabinets or wardrobes?',
    answer: 'Yes, we can handle removal and disposal of existing cabinetry or wardrobes as part of the renovation package. This will be included in the quotation.',
  },
  {
    question: 'Do you provide warranties for your work?',
    answer: 'Yes, we stand behind our craftsmanship. All carpentry work comes with a workmanship warranty. Hardware such as hinges and drawer systems also carry manufacturer warranties.',
  },
  {
    question: 'How do I request a quotation?',
    answer: 'Simply WhatsApp or call Kevin. We will arrange a site visit, take measurements, and provide a detailed quotation with no hidden costs.',
  },
];

export default function HomePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <main>
      <SEO
        title="Singapore Carpentry | Custom Kitchen Cabinets & Wardrobes"
        description="Premium custom carpentry and electrical services for Singapore homes. Kitchen cabinets, bedroom wardrobes, tabletops, and whole-unit rewiring for HDB, condo, and landed properties."
        path="/home"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8146322/pexels-photo-8146322.jpeg"
            alt="Modern Singapore HDB kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6 animate-fade-in">
              <Shield className="w-4 h-4" />
              Trusted Carpentry & Electrical Services in Singapore
            </div>
            <h1 className="text-white mb-6 animate-slide-up">
              Custom Carpentry for Singapore Homes
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Kitchen cabinets, bedroom wardrobes, tabletops, and whole-unit rewiring.
              Designed for HDB, condo, and landed homes with quality workmanship and honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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
                View Our Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-white/90 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-accent" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-accent" />
                <span>Quality Workmanship</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-accent" />
                <span>Fast Response</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-charcoal-600 text-lg">
              Complete carpentry and electrical solutions for Singapore homeowners.
              Custom designs that fit your space, style, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.title} to={service.path} className="group">
                <div className="card h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-charcoal-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-primary font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4">Why Homeowners Choose Us</h2>
              <p className="text-charcoal-600 text-lg mb-8">
                We have built our reputation on reliable work, clear communication,
                and quality carpentry that stands the test of time.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-charcoal-800 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-charcoal-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
   
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-soft-lg p-6 max-w-xs">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="text-charcoal-600 text-sm">
                  "Professional, responsive, and delivered exactly as promised. Our kitchen looks amazing."
                </p>
                <p className="text-charcoal-500 text-sm mt-2 font-medium">— Sarah, HDB Ang Mo Kio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-warm-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="text-charcoal-600 text-lg">
              See our work across HDB flats, private condos, and landed homes in Singapore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full">
                      {project.type}
                    </span>
                    <span className="px-3 py-1 bg-charcoal-100 text-charcoal-600 text-xs font-medium rounded-full">
                      {project.homeType}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-charcoal-500 text-sm mb-3">
                    <strong>Materials:</strong> {project.materials}
                  </p>
                  <p className="text-charcoal-600 text-sm">{project.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Our Process</h2>
            <p className="text-charcoal-600 text-lg">
              From your first enquiry to final installation, we keep the process simple and clear.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary/30 to-brand-primary/10" />
                )}
                <div className="text-center lg:text-left">
                  <div className="w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-primary/80 flex items-center justify-center mb-4 shadow-soft">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-brand-primary mb-2 block">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-charcoal-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-white mb-4">What Homeowners Say</h2>
            <p className="text-charcoal-300 text-lg">
              Real feedback from homeowners across Singapore after completing their projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-charcoal-800 rounded-2xl p-6 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="text-charcoal-200 text-sm flex-1 mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-charcoal-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-4">Common Questions</h2>
              <p className="text-charcoal-600 text-lg mb-8">
                We believe in clear communication. Here are answers to questions many homeowners ask
                before starting their project.
              </p>
              <Link to="/faq" className="btn-secondary">
                View All FAQs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-card overflow-hidden"
                >
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

      {/* Final CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7535013/pexels-photo-7535013.jpeg"
            alt="Singapore condo bedroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/80" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-6">
              Let Us Build Your Dream Space
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Whether you are renovating an HDB flat, upgrading a condo kitchen,
              or rewiring a landed home, we are ready to help. Reach out for a no-obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6583889596?text=Hi%20Kevin,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-brand-accent hover:bg-brand-accent/90"
              >
                <Phone className="w-5 h-5" />
                Call Kevin
              </a>
              <Link to="/contact" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white hover:text-charcoal-800">
                <Clock className="w-5 h-5" />
                Book Site Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
