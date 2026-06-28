import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * .15,
      }}
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl"
    >
      <Quote
        size={30}
        className="text-blue-500"
      />

      <p className="mt-6 leading-8 text-gray-600">
        {item.review}
      </p>

      <div className="mt-8 flex items-center gap-4 border-t pt-6">

        <img
          src={item.image}
          className="h-14 w-14 rounded-full"
          alt={item.name}
        />

        <div>

          <h4 className="font-bold">
            {item.name}
          </h4>

          <p className="text-sm text-gray-500">
            {item.company}
          </p>

        </div>

      </div>
    </motion.div>
  );
};

export default TestimonialCard;