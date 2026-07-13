import React from 'react';
import FrameworkHome from "./Framework"
import { motion } from "framer-motion";

export default function Frameworks() {
  return (
    <>
    
    <FrameworkHome />
    <div className="mt-20 flex justify-center">

          <motion.button onClick={() => window.location.href = "/framework"}
              whileHover={{
                  scale: 1.05,
              }}
              whileTap={{
                  scale: .95,
              }}
              className="rounded-xl border border-slate-300 bg-white px-10 py-4 text-lg font-semibold shadow transition hover:bg-[#111827] hover:text-white"
          >

              See the Full Framework →

          </motion.button>

      </div>
      
      </>
  )
}
