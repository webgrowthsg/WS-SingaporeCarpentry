import { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    homeType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="pt-20">
      <SEO
        title="Contact Us | Singapore Carpentry"
        description="Get a free quotation for your renovation project. Contact Singapore Carpentry for kitchen cabinets, wardrobes, countertops, and electrical rewiring services across Singapore."
        path="/contact"
      />
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/30535632/pexels-photo-30535632.jpeg"
            alt="Contact Singapore Carpentry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6">Contact Us</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Get in touch for a free consultation and quotation. We respond promptly
              to all enquiries for carpentry and electrical projects in Singapore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <p className="text-charcoal-600 text-lg mb-8">
                Whether you are planning a complete kitchen renovation, need a new wardrobe,
                or have questions about electrical rewiring, we are here to help. Contact Singapore Carpentry
                through any of the methods below.
              </p>

              <div className="space-y-6 mb-12">
                <a
                  href="https://wa.me/6593485255?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-800 group-hover:text-[#25D366] transition-colors">
                      WhatsApp Us
                    </h3>
                    <p className="text-charcoal-600 text-sm">+65 8388 9596</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/6593485255?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-warm-50 rounded-xl hover:bg-warm-100 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-800 group-hover:text-brand-primary transition-colors">
                      Call Us
                    </h3>
                    <p className="text-charcoal-600 text-sm">+65 8388 9596</p>
                  </div>
                </a>



                <div className="flex items-center gap-4 p-4 bg-warm-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-700 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-800">Service Area</h3>
                    <p className="text-charcoal-600 text-sm">Singapore-wide coverage<br />HDB, Condo, Landed Homes</p>
                  </div>
                </div>
              </div>

            
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-800 mb-2">Message Received!</h3>
                  <p className="text-charcoal-600">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-800 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-800 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      placeholder="+65 XXXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-800 mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="">Select a project type</option>
                      <option value="kitchen">Kitchen Cabinet</option>
                      <option value="wardrobe">Bedroom Wardrobe</option>
                      <option value="tabletop">Tabletop / Countertop</option>
                      <option value="rewiring">Electrical Rewiring</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-800 mb-2">Home Type</label>
                    <select
                      name="homeType"
                      value={formData.homeType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="">Select home type</option>
                      <option value="hdb">HDB Flat</option>
                      <option value="condo">Private Condo</option>
                      <option value="landed">Landed Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-800 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-white mb-4">Serving All of Singapore</h2>
            <p className="text-charcoal-300 text-lg mb-8">
              We provide carpentry and electrical services across Singapore, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'HDB Towns Island-wide',
                'Central Singapore',
                'East Singapore',
                'West Singapore',
                'North Singapore',
                'North-East Singapore',
                'Private Condos',
                'Landed Properties',
              ].map((area) => (
                <div key={area} className="bg-charcoal-800 rounded-lg px-4 py-3">
                  <span className="text-white text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Prefer to Talk?</h2>
            <p className="text-charcoal-600 text-lg mb-8">
              We are ready to answer your questions and discuss your project needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6593485255?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </a>
              <a
                href="https://wa.me/6593485255?text=Hi,%20I%20found%20your%20website%20and%20would%20like%20a%20quotation%20for%20my%20renovation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
