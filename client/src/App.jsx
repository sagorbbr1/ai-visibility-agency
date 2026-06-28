import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Framework from "./components/Framework/Framework";
import Blog from "./components/Blogs/Blog";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="pt-36">
      <Navbar />
      <Hero />
      <Framework />
      <Blog />
      <Pricing />
    </div>
  );
}

export default App;