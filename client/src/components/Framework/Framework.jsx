import { motion } from "framer-motion";
import frameworkData from "./frameworkData";
import FrameworkCard from "./FrameworkCard";
import Container from "../ui/Container";

const Framework = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-200 opacity-20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200 opacity-20 blur-[140px]" />

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="text-center"
        >
          <span className="rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold uppercase tracking-widest text-slate-700 shadow">

            OUR METHODOLOGY

          </span>

          <h2 className="mt-8 text-3xl font-black text-[#111827] lg:text-4xl">

            Our{" "}

            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">

             AI Visibility
            </span>

            {" "}Framework

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-7 text-gray-500">

            A proven six-step framework that transforms your brand into an AI-ready authority in just 90 days.

          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-6">

          {frameworkData.map((item, index) => (
            <FrameworkCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

   

      </Container>

    </section>
  );
};

export default Framework;