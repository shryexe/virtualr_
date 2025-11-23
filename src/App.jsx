import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/herosection";
import Navbar from "./components/Navbar";
import Workflow  from "./components/Workflow";
import pricing from "./components/pricing";
import testimonials from "./components/testimonials";
import footer from "./components/footer";
const App = () => {
  return (
    <div >
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6" />
      <HeroSection />
      <FeaturesSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <footer />
    </div>
  );
}

export default App;
