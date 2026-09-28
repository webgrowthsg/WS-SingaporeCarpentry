import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import {
  Home,
  HomePage,
  AboutPage,
  ServicesPage,
  KitchenCabinetPage,
  BedroomWardrobePage,
  TabletopPage,
  WholeUnitRewiringPage,
  ProjectsPage,
  AdvicePage,
  FAQPage,
  ContactPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/kitchen-cabinets" element={<KitchenCabinetPage />} />
          <Route path="/services/custom-wardrobes" element={<BedroomWardrobePage />} />
          <Route path="/services/tabletop" element={<TabletopPage />} />
          <Route path="/services/electrical-services" element={<WholeUnitRewiringPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/advice" element={<AdvicePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
