import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white px-6">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
          Error 404
        </span>

        <h1 className="mt-8 text-7xl font-black text-slate-900 lg:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-4xl font-black text-slate-900 lg:text-5xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Looks like this page has disappeared into the AI universe.
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1023] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-slate-900"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-sm text-slate-500">
          AI Visibility Agency • Helping businesses get found in AI Search
        </div>
      </motion.div>
    </section>
  );
};

export default NotFound;