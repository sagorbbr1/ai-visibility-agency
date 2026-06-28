import { motion } from "framer-motion";

const StatsCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * .12,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm hover:shadow-xl"
    >
      <h2 className="text-5xl font-black text-[#111827]">
        {item.value}
      </h2>

      <p className="mt-3 text-gray-500">
        {item.label}
      </p>
    </motion.div>
  );
};

export default StatsCard;