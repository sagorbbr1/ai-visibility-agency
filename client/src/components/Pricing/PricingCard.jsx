import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const PricingCard = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-slate-700
        bg-[#111827]
        p-8
        text-white
        transition
      "
    >
      {/* Title */}

      <h3 className="text-3xl font-bold">
        {plan.title}
      </h3>

      {/* Price */}

      <div className="mt-8">

        <span className="text-5xl font-black">
          {plan.price}
        </span>

      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-700" />

      {/* Features */}

      <div className="space-y-5">

        {plan.features.map((feature, index) => (

          <div
            key={index}
            className="flex items-start gap-3"
          >
            <Check
              size={18}
              className="mt-1 text-green-400"
            />

            <span className="text-slate-300">
              {feature}
            </span>

          </div>

        ))}

      </div>

      {/* Note */}

      {plan.note && (

        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-sm text-blue-300">
          {plan.note}
        </div>

      )}

      {/* Push button bottom */}

      <div className="mt-auto pt-8">

        <button onClick={() => navigation.navigate("/order")}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#ff6a00]
            py-4
            font-semibold
            text-white
            transition
            hover:bg-[#e45d00]
          "
        >
          {plan.button}

          <ArrowRight size={18} />

        </button>

      </div>

    </motion.div>
  );
};

export default PricingCard;