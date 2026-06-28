import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {item.question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
        >
          <ChevronDown size={22} />
        </motion.div>
      </button>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-slate-200 px-6 py-5 text-gray-600 leading-8">
              {item.answer}
            </div>
          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
};

export default FAQItem;