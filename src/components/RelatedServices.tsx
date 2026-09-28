import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  description: string;
  path: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="section-padding bg-warm-50">
      <div className="container-custom">
        <h2 className="mb-8">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-soft-lg transition-shadow group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-brand-primary">
                {service.title}
              </h3>
              <p className="text-charcoal-600 text-sm mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
