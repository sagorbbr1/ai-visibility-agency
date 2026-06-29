import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Framework from "./components/Framework/Framework";
import Blog from "./components/Blogs/Blog";
import Pricing from "./components/Pricing/Pricing";
import Results from "./components/Results/Results";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="pt-36">
      <Navbar />
      <Hero />
      <Framework />
      <Blog />
      <Pricing />
      <Results />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;