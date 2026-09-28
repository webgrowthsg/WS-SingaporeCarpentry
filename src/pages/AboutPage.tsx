import {
  Award,
  Users,
  Home,
  Clock,
  Shield,
  Heart,
  CheckCircle,
} from 'lucide-react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description:
      'Every cut, joint, and finish is executed with care. We do not cut corners, because your home deserves better.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description:
      'Your home is your sanctuary. We listen, advise, and build according to your lifestyle and preferences.',
  },
  {
    icon: Clock,
    title: 'Reliable Delivery',
    description:
      'Clear timelines and consistent updates. When we promise a completion date, we work to meet it.',
  },
  {
    icon: Award,
    title: 'Skilled Craftsmanship',
    description:
      'Our team brings years of experience in custom carpentry, from simple wardrobes to complex kitchen builds.',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '500+', label: 'Homes Transformed' },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      <SEO
        title="About Us | Singapore Carpentry"
        description="Experienced carpentry and electrical team serving Singapore homeowners. Quality craftsmanship, reliable delivery, and customer-focused service for HDB, condo, and landed homes."
        path="/about"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
            alt="Singapore carpentry workshop"
            className="w-full h-full object-cover"
           loading='lazy' />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6">About Us</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Singapore Carpentry is built on a foundation of honest work, skilled craftsmanship,
              and a genuine commitment to helping Singapore homeowners create spaces they love.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-4">Our Story</h2>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  Singapore Carpentry began with a simple belief: that every Singapore home
                  deserves well-built, thoughtfully designed carpentry. From HDB flats to
                  private condos and landed homes, we have spent over a decade refining our
                  craft and building trust with homeowners across the island.
                </p>
                <p>
                  What started as a small workshop has grown into a full-service carpentry
                  and renovation team. Along the way, we added electrical rewiring services
                  because we saw how often homeowners needed both done together. Today, we
                  handle kitchen cabinets, bedroom wardrobes, tabletops, and complete
                  whole-unit rewiring.
                </p>
                <p>
                  We are not the biggest name in Singapore. And we like it that way. Being
                  mid-sized means we can maintain our standards, communicate directly with
                  every customer, and ensure each project receives the attention it deserves.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/19345424/pexels-photo-19345424.jpeg"
                  alt="HDB kitchen cabinet Singapore"
                  className="w-full h-full object-cover"
                 loading='lazy' />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/20653852/pexels-photo-20653852.jpeg"
                  alt="Condo bedroom wardrobe Singapore"
                  className="w-full h-full object-cover"
                 loading='lazy' />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5691590/pexels-photo-5691590.jpeg"
                  alt="Singapore electrical work"
                  className="w-full h-full object-cover"
                 loading='lazy' />
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/27390284/pexels-photo-27390284.jpeg"
                  alt="Singapore carpentry details"
                  className="w-full h-full object-cover"
                 loading='lazy' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">What We Stand For</h2>
            <p className="text-charcoal-600 text-lg">
              Our values guide every project, from the first phone call to the final handover.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-charcoal-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-charcoal-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-lg">
                <img
                  src="https://images.pexels.com/photos/10153052/pexels-photo-10153052.jpeg"
                  alt="Singapore carpentry team"
                  className="w-full h-full object-cover"
                 loading='lazy' />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="mb-4">Why Homeowners Trust Us</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">We Understand Singapore Homes</h4>
                    <p className="text-charcoal-600 text-sm">
                      HDB, condo, landed. We know the requirements, layouts, and what works in each setting.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">We Communicate Clearly</h4>
                    <p className="text-charcoal-600 text-sm">
                      No jargon, no vague promises. We explain the process, costs, and timeline upfront.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">We Work Clean</h4>
                    <p className="text-charcoal-600 text-sm">
                      We treat your home with respect. Dust sheets, daily clean-ups, and proper site protection.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">We Stand Behind Our Work</h4>
                    <p className="text-charcoal-600 text-sm">
                      Workmanship warranty for all carpentry. We return to fix issues because our reputation matters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">We Coordinate Everything</h4>
                    <p className="text-charcoal-600 text-sm">
                      From measurement to installation, we manage the process. You deal with one point of contact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Our Approach</h2>
            <p className="text-charcoal-600 text-lg mb-8">
              We are not a high-volume factory operation. We are a team of carpenters and electricians
              who take pride in each project. That means:
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-warm-50 rounded-xl p-6">
                <Home className="w-8 h-8 text-brand-primary mb-4" />
                <h4 className="font-semibold mb-2">Limited Projects at a Time</h4>
                <p className="text-charcoal-600 text-sm">
                  We schedule carefully so each home gets full attention, not rushed work.
                </p>
              </div>

              <div className="bg-warm-50 rounded-xl p-6">
                <Users className="w-8 h-8 text-brand-primary mb-4" />
                <h4 className="font-semibold mb-2">Direct Communication</h4>
                <p className="text-charcoal-600 text-sm">
                  You speak with the people doing the work, not a sales team. Answers come from experience.
                </p>
              </div>

              <div className="bg-warm-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-brand-primary mb-4" />
                <h4 className="font-semibold mb-2">After-Project Support</h4>
                <p className="text-charcoal-600 text-sm">
                  Question after handover? Adjustment needed? We are still here. We do not disappear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Ready to Discuss Your Project?"
        subtitle="Let us understand your space and needs. We will propose practical solutions with clear pricing."
      />
    </main>
  );
}
