import { motion } from "framer-motion";
import Button from "../ui/Button";
import AiPlatforms from "../Shared/AiPlatforms";

const HeroTop = () => {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-4xl mx-auto text-center"
        >

       <span className="border px-4 py-2 rounded-full text-[10px] sm:text-xs uppercase tracking-wide whitespace-nowrap">
  AI Visibility Agency. AEO. GEO. LLMs Optimization
</span>

          <h1 className="text-5xl lg:text-6xl font-black mt-8 leading-tight">



             Make {" "}
             
           <span className="bg-linear-to-r from-yellow-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">AI Recommend</span>   <br /> Your Business 
        

          </h1>

          <p className="text-xl text-gray-500 mt-8 leading-9 max-w-3xl mx-auto">

            
Your next customer starts with AI. We help them find you first.
We prepare your business to be understood, trusted, and recommended by AI with proven audits, schema, and AEO & AI optimization. 


          </p>

          <Button className="mt-10 px-10 py-5" onClick={() => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}>

           Unlock AI Visibility →

          </Button>

          <p className="text-gray-400 mt-5">

            $2800 one-time · No contract · 90-day engagement

          </p>
          <AiPlatforms
  title="TRUSTED BY THE WORLD'S BEST AI PLATFORMS"
/>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroTop;