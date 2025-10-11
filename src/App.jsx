import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Workflow from "./components/Workflow";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
const App = () => {
  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeaturesSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;

