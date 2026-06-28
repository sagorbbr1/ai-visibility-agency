import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "../ui/Container";
import BlogCard from "./BlogCard";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest shadow">
            Latest Insights
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#111827] lg:text-5xl">
            Learn About
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}AEO, GEO & AI SEO
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Stay ahead with our latest guides on Answer Engine
            Optimization, Generative Engine Optimization,
            and AI-powered search strategies.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {blogData.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow transition hover:bg-[#111827] hover:text-white">
            View All Blog Posts
            <ArrowRight size={18} />
          </button>
        </div>

      </Container>
    </section>
  );
};

export default Blog;