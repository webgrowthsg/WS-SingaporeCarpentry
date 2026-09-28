import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, X } from 'lucide-react';
import { CTABanner } from '../components/UI';
import SEO from '../components/SEO';

const allProjects = [
  {
    id: 1,
    title: 'Modern L-Shaped HDB Kitchen',
    category: 'Kitchen Cabinet',
    homeType: 'HDB 4-Room',
    location: 'Tampines',
    materials: 'Matte white laminate, woodgrain accents, soft-close Blum hinges',
    description: 'Complete kitchen renovation with L-shaped layout, tall unit for oven housing, and corner pull-out storage. Light colours make the compact space feel open.',
    image: 'https://images.pexels.com/photos/6508353/pexels-photo-6508353.jpeg',
  },
  {
    id: 2,
    title: 'Condo Master Bedroom Wardrobe',
    category: 'Wardrobe',
    homeType: 'Private Condo',
    location: 'Bukit Timah',
    materials: 'Veneer finish, tinted glass sliding doors, LED strip lighting',
    description: 'Full-height sliding wardrobe with integrated lighting. Tinted glass panels add a premium touch while concealing contents.',
    image: 'https://images.pexels.com/photos/32331030/pexels-photo-32331030.png',
  },
  {
    id: 3,
    title: 'Quartz Kitchen Island',
    category: 'Tabletop',
    homeType: 'Landed Terrace',
    location: 'Serangoon',
    materials: 'Calacatta quartz, waterfall edge, 40mm thickness',
    description: 'Statement kitchen island with dramatic waterfall sides. The quartz pattern creates visual interest while being highly practical for daily use.',
    image: 'https://images.pexels.com/photos/6835092/pexels-photo-6835092.jpeg',
  },
  {
    id: 4,
    title: 'HDB Resale Full Rewiring',
    category: 'Rewiring',
    homeType: 'HDB 5-Room',
    location: 'Ang Mo Kio',
    materials: 'New cables, 63A DB box, LAN points in all rooms',
    description: 'Complete electrical overhaul for 30-year-old flat. Circuit planning for air-con, kitchen appliances, and work-from-home setup.',
    image: 'https://images.pexels.com/photos/5691493/pexels-photo-5691493.jpeg',
  },
  {
    id: 5,
    title: 'Compact HDB Bedroom Wardrobe',
    category: 'Wardrobe',
    homeType: 'HDB 3-Room',
    location: 'Punggol',
    materials: 'White laminate, full-height design, mirrored sliding doors',
    description: 'Space-maximising wardrobe for a small bedroom. Full-height storage with mirrored sliding doors that make the room feel larger.',
    image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
  },
  {
    id: 6,
    title: 'Galley Kitchen Renovation',
    category: 'Kitchen Cabinet',
    homeType: 'HDB 4-Room',
    location: 'Woodlands',
    materials: 'Acrylic high-gloss doors, solid surface countertop',
    description: 'Galley kitchen with high-gloss cabinets for a modern look. Solid surface countertop includes integrated sink with seamless joins.',
    image: 'https://images.pexels.com/photos/12270142/pexels-photo-12270142.jpeg',
  },
  {
    id: 7,
    title: 'Walk-in Wardrobe Suite',
    category: 'Wardrobe',
    homeType: 'Landed Semi-D',
    location: 'Holland Village',
    materials: 'Custom veneer, open shelving, accessory drawers',
    description: 'Luxury walk-in wardrobe with dedicated sections for hanging, folded clothes, shoes, and accessories. Central island with jewellery drawer.',
    image: 'https://images.pexels.com/photos/11701120/pexels-photo-11701120.jpeg',
  },
  {
    id: 8,
    title: 'Solid Surface Kitchen Top',
    category: 'Tabletop',
    homeType: 'Condo',
    location: 'Jurong',
    materials: 'Solid surface with integrated sink, coved backsplash',
    description: 'Seamless solid surface with integrated sink and coved backsplash. No visible joins mean easy cleaning and a clean look.',
    image: 'https://images.pexels.com/photos/38310833/pexels-photo-38310833.jpeg',
  },

];

const categories = ['All', 'Kitchen Cabinet', 'Wardrobe', 'Tabletop', 'Rewiring'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <main className="pt-20">
      <SEO
        title="Our Projects | Singapore Carpentry"
        description="View our completed kitchen cabinet, wardrobe, and rewiring projects across Singapore. Real HDB, condo, and landed home renovations with quality craftsmanship."
        path="/projects"
      />
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8146322/pexels-photo-8146322.jpeg"
            alt="Our Singapore carpentry projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/50" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-white mb-6">Our Projects</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              See our work across HDB flats, private condos, and landed homes in Singapore.
              Every project reflects our commitment to quality carpentry and electrical work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-charcoal-100 sticky top-20 z-30">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-brand-primary text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="card overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
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
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-charcoal-100 text-charcoal-600 text-xs font-medium rounded-full">
                      {project.homeType}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-charcoal-500 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-charcoal-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-sm font-medium rounded-full">
                  {selectedProject.category}
                </span>
                <span className="px-3 py-1 bg-charcoal-100 text-charcoal-600 text-sm font-medium rounded-full">
                  {selectedProject.homeType}
                </span>
                <span className="px-3 py-1 bg-charcoal-100 text-charcoal-600 text-sm font-medium rounded-full">
                  {selectedProject.location}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{selectedProject.title}</h2>
              <p className="text-charcoal-600 mb-6">{selectedProject.description}</p>

              <div className="bg-warm-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-charcoal-800 mb-2">Materials Used</h4>
                <p className="text-charcoal-600 text-sm">{selectedProject.materials}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/6593485255?text=Hi%20Kevin,%20I%20saw%20your%20project%20"${selectedProject.title}"%20and%20I'm%20interested%20in%20a%20similar%20project.%20Can%20I%20get%20a%20quotation?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Phone className="w-5 h-5" />
                  Call Kevin
                </a>
                <Link
                  to={selectedProject.category === 'Kitchen Cabinet' ? '/services/kitchen-cabinets' :
                      selectedProject.category === 'Wardrobe' ? '/services/custom-wardrobes' :
                      selectedProject.category === 'Tabletop' ? '/services/tabletop' :
                      '/services/electrical-services'}
                  className="btn-secondary"
                >
                  Learn About This Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-charcoal-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">500+</div>
              <div className="text-charcoal-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">10+</div>
              <div className="text-charcoal-400">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">98%</div>
              <div className="text-charcoal-400">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">500+</div>
              <div className="text-charcoal-400">Homes Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Browse our work for inspiration, then contact Kevin to discuss your own renovation. Free consultation and transparent quotation."
      />
    </main>
  );
}
