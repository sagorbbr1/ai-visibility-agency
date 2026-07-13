import Hero from "../components/Hero/Hero";
import Blog from "../components/Blogs/Blog";
import Pricing from "../components/Pricing/Pricing";
import Results from "../components/Results/Results";
import FAQ from "../components/FAQ/FAQ";
import Frameworks from "../components/Framework/Frameworks";

const Home = () => {
  return (
    <>
      <Hero />
      <Frameworks />
      <Blog />
      <Pricing />
      <Results />
      <FAQ />
    </>
  );
};

export default Home;