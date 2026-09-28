import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/Layout';
import { FloatingButtons } from '../components/UI';
import ScrollToTop from '../utils/ScrollToTop';

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-warm-50">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
}
