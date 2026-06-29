import { motion } from "framer-motion";

import chatgpt from "../../assets/logos/chatgpt.avif";
import claude from "../../assets/logos/claude.avif";
import gemini from "../../assets/logos/gemini.avif";
import perplexity from "../../assets/logos/perplexity.avif";

const logos = [
  chatgpt,
  claude,
  gemini,
  perplexity,
];

const AiPlatforms = ({
  title = "OPTIMIZED FOR TODAY'S LEADING AI ENGINES",
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-6">

      <h4 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
        {title}
      </h4>

      <div className="flex flex-wrap items-center justify-center gap-8">

        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="AI Platform"
            className="h-6 w-auto object-contain opacity-80 transition duration-300 hover:scale-110 hover:opacity-100"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
            }}
          />
        ))}

      </div>

    </div>
  );
};

export default AiPlatforms;