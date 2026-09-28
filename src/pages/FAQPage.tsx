import { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    category: 'General Questions',
    items: [
      {
        question: 'What services do you offer?',
        answer: 'We offer custom carpentry services including kitchen cabinets, bedroom wardrobes, and countertops/tabletops. We also provide whole unit electrical rewiring services for Singapore homes.',
      },
      {
        question: 'Do you work with HDB and condo units?',
        answer: 'Yes, we have extensive experience with HDB flats of all sizes, private condos, and landed properties across Singapore. We understand the requirements and guidelines for each home type.',
      },
      {
        question: 'Do you provide free site measurement and consultation?',
        answer: 'Yes, site measurement and initial consultation are provided at no charge. We visit your home to assess the space, discuss your requirements, and take precise measurements before providing a quotation.',
      },
      {
        question: 'How do I request a quotation?',
        answer: 'Contact Singapore Carpentry via WhatsApp or phone. We will arrange a convenient time for a site visit, after which we provide a detailed, itemised quotation with no hidden costs.',
      },
    ],
  },
  {
    category: 'Kitchen Cabinet',
    items: [
      {
        question: 'How long does kitchen cabinet installation take?',
        answer: 'Installation typically takes 1 to 3 days depending on kitchen size and complexity. The overall timeline from design confirmation to installation is usually 2 to 4 weeks, including fabrication.',
      },
      {
        question: 'What materials do you use for kitchen cabinets?',
        answer: 'We work with quality materials including laminate, veneer, acrylic, and solid surface. Kitchen carcasses are typically plywood or particle board, both of which are suitable for Singapore homes.',
      },
      {
        question: 'Can I choose custom colours and finishes?',
        answer: 'Absolutely. We have a wide selection of laminate and veneer samples for you to choose from. Whether you prefer matte, gloss, woodgrain, or solid colours, we can source finishes that suit your style.',
      },
      {
        question: 'Do you remove old kitchen cabinets?',
        answer: 'Yes, removal and disposal of existing cabinets is included in our quotation when requested. All costs are transparent upfront.',
      },
      {
        question: 'Do you provide warranties for kitchen cabinets?',
        answer: 'Yes, all carpentry work comes with a workmanship warranty. Hardware components like hinges and drawer runners also carry manufacturer warranties. Details are provided during the quotation.',
      },
    ],
  },
  {
    category: 'Bedroom Wardrobe',
    items: [
      {
        question: 'What is the difference between sliding and swing door wardrobes?',
        answer: 'Sliding doors move along tracks and do not require clearance to open, making them ideal for compact rooms or when you want to place furniture close to the wardrobe. Swing doors open outward and need clearance space.',
      },
      {
        question: 'How deep should a wardrobe be?',
        answer: 'Standard wardrobe depth is 580mm to 600mm to accommodate hanging clothes. Shallow wardrobes of 450mm can work for folded clothes and are useful for very tight spaces. We advise on the best depth for your space.',
      },
      {
        question: 'Can you build wardrobes for small bedrooms?',
        answer: 'Yes, we specialise in space-efficient designs for HDB bedrooms and compact condo rooms. Sliding doors, full-height designs, and clever internal layouts help maximise storage even in tight spaces.',
      },
      {
        question: 'What internal configurations can I choose?',
        answer: 'We customise internal layouts based on what you need to store. Options include hanging rails at different heights, adjustable shelves, drawers, pull-out accessories, shoe racks, and more.',
      },
      {
        question: 'How long does wardrobe installation take?',
        answer: 'Installation typically takes 1 to 2 days depending on size and complexity. The full process from design confirmation to installation is usually 2 to 4 weeks.',
      },
    ],
  },
  {
    category: 'Tabletop & Countertop',
    items: [
      {
        question: 'What countertop materials do you offer?',
        answer: 'We supply and install Quartz, Solid Surface, Sintered Stone, and Laminate countertops. Each material has different properties in terms of durability, heat resistance, and cost. We advise based on your needs.',
      },
      {
        question: 'Quartz vs Solid Surface - which is better?',
        answer: 'Quartz is more durable and heat-resistant, ideal for heavy cooking households. Solid Surface allows seamless joins and can be repaired if scratched, and is suited to modern designs.',
      },
      {
        question: 'Do you provide waterfall edge countertops?',
        answer: 'Yes, we offer waterfall edges where the countertop continues vertically down to the floor. This creates a dramatic, modern look and is particularly popular for kitchen islands.',
      },
      {
        question: 'How long does countertop installation take?',
        answer: 'Installation is typically completed in one day. The overall timeline includes templating after base cabinets are installed, fabrication in our workshop, and final installation.',
      },
      {
        question: 'Do I need to seal my countertop?',
        answer: 'Quartz and Solid Surface do not require sealing. Natural stones like Granite would require periodic sealing. We provide specific maintenance guidance for your chosen material during installation.',
      },
    ],
  },
  {
    category: 'Whole Unit Rewiring',
    items: [
      {
        question: 'How do I know if my home needs rewiring?',
        answer: 'If your home is over 20 years old, or if you experience frequent circuit trips, burning smells, warm outlets, or flickering lights, you should have your wiring assessed. Resale HDB flats often benefit from rewiring.',
      },
      {
        question: 'How long does whole unit rewiring take?',
        answer: 'For a typical HDB flat, rewiring takes 3 to 5 working days. Larger condos or landed homes may take longer. We provide a specific timeline during quotation.',
      },
      {
        question: 'Is rewiring disruptive?',
        answer: 'Rewiring involves some hacking and chasing of walls for concealed wiring. We recommend scheduling rewiring before painting, flooring, and carpentry works, ideally when the unit is empty.',
      },
      {
        question: 'Do you provide certification after rewiring?',
        answer: 'Yes, all rewiring works are tested and documented. We provide proper records and certificates confirming your new electrical system meets Singapore requirements.',
      },
      {
        question: 'Can rewiring be done alongside carpentry works?',
        answer: 'Yes, rewiring should typically be completed before carpentry installation. We can coordinate both services within your renovation timeline, ensuring electrical points are in the right positions.',
      },
    ],
  },
  {
    category: 'Project & Payment',
    items: [
      {
        question: 'How long does a typical project take?',
        answer: 'Timelines vary by project scope. Kitchen cabinets and wardrobes typically take 2 to 4 weeks from design confirmation to installation. Whole unit rewiring takes 3 to 5 working days.',
      },
      {
        question: 'What are your payment terms?',
        answer: 'We typically require a deposit upon confirmation, with the balance due upon completion. Specific terms are provided in the quotation. All costs are transparent with no hidden charges.',
      },
      {
        question: 'Do you offer instalment plans?',
        answer: 'Payment terms are discussed during the quotation process. We are transparent about all costs and payment requirements upfront.',
      },
      {
        question: 'Can I make changes after the project starts?',
        answer: 'Minor changes may be possible depending on project stage. Any changes that affect materials or scope will be quoted separately. We recommend finalising designs before fabrication begins.',
      },
      {
        question: 'What if I am not satisfied with the work?',
        answer: 'We stand behind our craftsmanship. If there are any issues, we address them promptly. Workmanship warranties apply, and we return to rectify any defects covered under warranty.',
      },
    ],
  },
];

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <main className="pt-20">
      <SEO
        title="Frequently Asked Questions | Singapore Carpentry"
        description="Answers to common questions about custom carpentry and electrical rewiring in Singapore. Pricing, timeline, materials, and service details for HDB, condo, and landed homes."
        path="/faq"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7509782/pexels-photo-7509782.jpeg"
            alt="Frequently asked questions Singapore carpentry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Find answers to common questions about our carpentry and electrical services.
              If you don't find what you're looking for, contact Singapore Carpentry directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {faqData.map((section) => (
              <div key={section.category} className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
                <div className="space-y-4">
                  {section.items.map((item, index) => {
                    const key = `${section.category}-${index}`;
                    const isExpanded = expandedItems.has(key);

                    return (
                      <div
                        key={key}
                        className="bg-warm-50 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(key)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                        >
                          <span className="font-medium text-charcoal-800 pr-4">
                            {item.question}
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-charcoal-400 flex-shrink-0" />
                          )}
                        </button>
                        {isExpanded && (
                          <div className="px-6 pb-4">
                            <p className="text-charcoal-600">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4">Still Have Questions?</h2>
            <p className="text-charcoal-600 text-lg mb-8">
              We are here to help. Contact Singapore Carpentry directly and we will answer your questions
              about carpentry and electrical services for your Singapore home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6583889596?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Get in touch for a free consultation and detailed quotation. We answer all your questions before you commit."
      />
    </main>
  );
}
