import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="container-custom pt-4 pb-2" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-charcoal-500">
        <li>
          <Link to="/" className="hover:text-brand-primary flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4" />
            {item.path ? (
              <Link to={item.path} className="hover:text-brand-primary">
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
