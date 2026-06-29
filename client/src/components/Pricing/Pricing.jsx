import { motion } from "framer-motion";

import Container from "../ui/Container";
import PricingCard from "./PricingCard";
import pricingData from "./pricingData";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#0b1120] py-16">

      <Container>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-slate-700 px-5 py-2 text-sm uppercase tracking-widest text-yellow-400">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-black text-white">

            Proven Results.

            <span className="text-yellow-400">
              {" "}Pricing
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Transparent pricing designed for startups,
            growing businesses and enterprise teams.
          </p>

        </motion.div>

   <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
  {pricingData.map((plan, index) => (
    <PricingCard
      key={plan.id}
      plan={plan}
      index={index}
    />
  ))}
</div>

      </Container>

    </section>
  );
};

export default Pricing;