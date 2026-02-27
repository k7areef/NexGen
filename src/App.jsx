import { Route, Routes } from "react-router-dom";
// Pages:
import HomePage from "@pages/HomePage";
import ServicesPage from "@pages/ServicesPage";
import ProjectsPage from "@pages/ProjectsPage";
import AboutPage from "@pages/AboutPage";
import CareersPage from "@pages/CareersPage";
import BlogsPage from "@pages/BlogsPage";
import BlogDetailsPage from "@pages/BlogDetailsPage";
import ContactPage from "@pages/ContactPage";
// Common Components:
import NavigationBar from "@components/layout/NavigationBar";
import Testimonials from "@components/common/Testimonials";
import Faqs from "@components/common/Faqs";
import Footer from "@components/layout/Footer";

function App() {
  return (
    <div className="App bg-dark-06 text-white min-h-screen">
      {/* NavigationBar */}
      <NavigationBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {/* Testimonials */}
      <Testimonials />
      {/* Faqs */}
      <Faqs />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App;