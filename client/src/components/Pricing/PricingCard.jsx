import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const PricingCard = ({ plan, index }) => {
  const isDark = plan.dark === true;
  const isPurple = plan.dark === "purple";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className={`
        relative
        flex
        flex-col
        h-full
        rounded-3xl
        border
        p-8
        transition-all
        duration-500

        ${
          plan.featured
            ? "border-yellow-400 bg-white shadow-2xl scale-[1.03]"
            : ""
        }

        ${
          isDark
            ? "bg-[#0B1020] border-slate-700 text-white"
            : ""
        }

        ${
          isPurple
            ? "bg-[#241C54] border-indigo-700 text-white"
            : ""
        }

        ${
          !isDark && !isPurple && !plan.featured
            ? "bg-white border-slate-200 shadow-lg"
            : ""
        }
      `}
    >
      {/* Featured Badge */}

      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-yellow-400 px-5 py-2 text-xs font-bold text-black shadow-lg">
            👑 MOST POPULAR
          </span>
        </div>
      )}

      {/* Badge */}

      <span
        className={`inline-block w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase

        ${
          isDark || isPurple
            ? "border-slate-600 text-slate-300"
            : "border-slate-300 text-slate-600"
        }`}
      >
        {plan.badge}
      </span>

      {/* Title */}

      <h3 className="mt-6 text-3xl font-bold">
        {plan.title}
      </h3>

      <p
        className={`mt-2

        ${
          isDark || isPurple
            ? "text-slate-300"
            : "text-gray-500"
        }`}
      >
        {plan.subtitle}
      </p>

      {/* Price */}

      <div className="mt-8 flex items-end gap-2">

        <span className="text-4xl font-black">
          {plan.price}
        </span>

        <span
          className={`mb-1

          ${
            isDark || isPurple
              ? "text-slate-400"
              : "text-gray-500"
          }`}
        >
          {plan.period}
        </span>

      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-200 dark:bg-slate-700" />

      {/* Features */}

      <div className="space-y-5">

        {plan.features.map((feature, i) => (

          <div
            key={i}
            className="flex items-start gap-3"
          >

            <Check
              size={18}
              className="mt-1 text-green-500"
            />

            <span>{feature}</span>

          </div>

        ))}

      </div>

      {/* Note */}

      {plan.note && (

        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-blue-700">

          {plan.note}

        </div>

      )}

      {/* Spacer */}

      <div className="flex-grow" />

      {/* Button */}

      <button
        className={`
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          py-4
          font-semibold
          transition-all
          duration-300

          ${
            plan.featured
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : isDark
              ? "bg-yellow-500 text-black hover:bg-yellow-400"
              : isPurple
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-[#111827] text-white hover:bg-black"
          }
        `}
      >
        {plan.button}

        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
};

export default PricingCard;