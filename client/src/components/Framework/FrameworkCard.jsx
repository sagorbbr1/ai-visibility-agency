import { motion } from "framer-motion";

const FrameworkCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .5,
        delay: index * .1,
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl"
    >
      {/* Gradient Glow */}

      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-300 via-orange-300 to-cyan-300 opacity-0 blur-3xl transition duration-500 group-hover:opacity-30" />

      {/* Letter */}

      <motion.div
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: .6,
        }}
        className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#111827] text-2xl font-bold text-white shadow-lg"
      >
        {item.letter}
      </motion.div>

      <h3 className="relative z-10 mt-8 text-2xl font-bold text-[#111827]">
        {item.title}
      </h3>

      <p className="relative z-10 mt-4 leading-8 text-gray-500">
        {item.description}
      </p>

      {/* Bottom Line */}

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-cyan-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default FrameworkCard;