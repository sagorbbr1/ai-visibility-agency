import { motion } from "framer-motion";

const HeroTop = () => {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="max-w-4xl mx-auto text-center"
        >

          <span className="border px-5 py-2 rounded-full text-sm uppercase tracking-widest">

            AI SEO Agency · Answer Engine Optimization

          </span>

          <h1 className="text-5xl lg:text-7xl font-black mt-8 leading-tight">

            Be{" "}

            <span className="text-yellow-500">

              The Answer

            </span>

            <br />

            AI Can't Stop Talking About.

          </h1>

          <p className="text-xl text-gray-500 mt-8 leading-9 max-w-3xl mx-auto">

            Your customers are asking AI—we make sure it recommends you.

            The first AI SEO agency that guarantees deliverables —
            audit, schema, and AI-readiness build.

          </p>

          <button className="mt-10 px-10 py-5 bg-[#0B1023] text-white rounded-xl font-semibold hover:scale-105 duration-300">

            Start Your AI Visibility Sprint →

          </button>

          <p className="text-gray-400 mt-5">

            $2,997 one-time · No contract · 90-day engagement

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroTop;