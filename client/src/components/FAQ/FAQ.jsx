import { motion } from "framer-motion";
import Container from "../ui/Container";
import FAQItem from "./FAQItem";
import faqData from "./faqData";

const FAQ = () => {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Everything you need to know about AI SEO, Answer Engine Optimization,
            pricing and our workflow.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default FAQ;