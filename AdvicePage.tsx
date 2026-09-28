import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';

const articles = [
  {
    id: 1,
    title: 'How to Choose a Kitchen Cabinet Layout for Your HDB Flat',
    excerpt: 'L-shaped, U-shaped, galley, or single-wall? Choosing the right kitchen layout depends on your HDB flat size, cooking habits, and storage needs. Here is how to decide.',
    category: 'Kitchen Cabinet',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/10758468/pexels-photo-10758468.jpeg',
  },
  {
    id: 2,
    title: 'Bedroom Wardrobe Ideas for Singapore Homes',
    excerpt: 'From compact HDB bedrooms to spacious landed home master suites, we share practical wardrobe ideas that maximise space and suit individual styles.',
    category: 'Wardrobe',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/7060824/pexels-photo-7060824.jpeg',
  },
  {
    id: 3,
    title: 'Quartz vs Solid Surface: Which Countertop is Right for You?',
    excerpt: 'Both are popular choices for Singapore kitchens, but they have different strengths. We compare Quartz and Solid Surface countertops to help you decide.',
    category: 'Tabletop',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/7828187/pexels-photo-7828187.jpeg',
  },
  {
    id: 4,
    title: 'Signs Your Singapore Home Needs Whole Unit Rewiring',
    excerpt: 'Older HDB flats and resale properties may have wiring that is no longer safe or adequate. Here are warning signs you should not ignore.',
    category: 'Rewiring',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/5767595/pexels-photo-5767595.jpeg',
  },
  {
    id: 5,
    title: 'Carpentry Renovation Checklist for HDB Homeowners',
    excerpt: 'Planning a carpentry renovation for your HDB flat? Use this checklist to ensure you cover all the essential steps, from design to final inspection.',
    category: 'Kitchen Cabinet',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/5973969/pexels-photo-5973969.jpeg',
  },
  {
    id: 6,
    title: 'Sliding vs Swing Wardrobe Doors: Making the Right Choice',
    excerpt: 'Sliding doors save space while swing doors offer full access. We explain the pros and cons of each to help you choose the best option for your bedroom.',
    category: 'Wardrobe',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/36887757/pexels-photo-36887757.jpeg',
  },
];

const categories = ['All', 'Kitchen Cabinet', 'Wardrobe', 'Tabletop', 'Rewiring'];

const featuredPost = {
  title: 'Complete Guide to Kitchen Cabinet Renovation in Singapore',
  excerpt: 'Everything you need to know about renovating your kitchen cabinets in Singapore. From planning and design to material selection and installation, this comprehensive guide covers all aspects of creating your dream kitchen.',
  category: 'Kitchen Cabinet',
  readTime: '10 min read',
  image: 'https://images.pexels.com/photos/19520994/pexels-photo-19520994.jpeg',
};

export default function AdvicePage() {
  return (
    <main className="pt-20">
      <SEO
        title="Renovation Advice & Tips | Singapore Carpentry"
        description="Expert guides and tips for kitchen cabinets, wardrobes, and home rewiring in Singapore. Practical advice for HDB, condo, and landed property renovations."
        path="/advice"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7489135/pexels-photo-7489135.jpeg"
            alt="Singapore home renovation advice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6">Renovation Advice</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Practical tips and guides for Singapore homeowners planning carpentry
              and electrical renovations. Based on our experience with hundreds of projects.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Featured Guide</h2>
            <p className="text-charcoal-600 text-lg">
              Our most comprehensive resource for Singapore homeowners.
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{featuredPost.title}</h3>
                <p className="text-charcoal-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-charcoal-500 text-sm mb-6">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Link to="/services/kitchen-cabinets" className="btn-primary w-fit">
                  Read Full Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">All Articles</h2>
            <p className="text-charcoal-600 text-lg">
              Helpful guides and insights for your renovation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="card overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-charcoal-500 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-600 text-sm mb-4">{article.excerpt}</p>
                  <Link
                    to={
                      article.category === 'Kitchen Cabinet' ? '/services/kitchen-cabinets' :
                      article.category === 'Wardrobe' ? '/services/custom-wardrobes' :
                      article.category === 'Tabletop' ? '/services/tabletop' :
                      '/services/electrical-services'
                    }
                    className="inline-flex items-center gap-1 text-brand-primary font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="mb-4">Quick Tips</h2>
            <p className="text-charcoal-600 text-lg">
              Bite-sized advice for common renovation questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-warm-50 rounded-xl p-6">
              <h3 className="font-semibold text-charcoal-800 mb-2">Measure Before You Plan</h3>
              <p className="text-charcoal-600 text-sm">
                Always get an accurate site measurement before finalising any design. Small errors in measurements can cause big problems during installation.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6">
              <h3 className="font-semibold text-charcoal-800 mb-2">Think About Hardware Early</h3>
              <p className="text-charcoal-600 text-sm">
                Soft-close hinges and drawer runners add value to any carpentry project. Include them in your budget from the start.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6">
              <h3 className="font-semibold text-charcoal-800 mb-2">Light Colours Open Spaces</h3>
              <p className="text-charcoal-600 text-sm">
                In compact Singapore kitchens and bedrooms, light-coloured cabinets and wardrobes make spaces feel larger and more open.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6">
              <h3 className="font-semibold text-charcoal-800 mb-2">Plan Electrical Points Together</h3>
              <p className="text-charcoal-600 text-sm">
                If doing carpentry and rewiring, plan electrical points alongside cabinet design to ensure outlets are in the right positions.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6">
              <h3 className="font-semibold text-charcoal-800 mb-2">Get Multiple Quotes</h3>
              <p className="text-charcoal-600 text-sm">
                Always compare quotations item-by-item, not just totals. Understand what is included and what might be additional.
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6">
              <h3 className="font-semibold text-charcoal-800 mb-2">Factor in Removal Costs</h3>
              <p className="text-charcoal-600 text-sm">
                If replacing existing cabinets or wardrobes, ask if removal and disposal are included in your quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Have Questions About Your Renovation?"
        subtitle="Contact Kevin for a consultation. We are happy to answer your questions and provide guidance, even before you commit to a project."
      />
    </main>
  );
}
