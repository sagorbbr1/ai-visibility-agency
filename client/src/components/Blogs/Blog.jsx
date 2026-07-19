import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

import Container from "../ui/Container";
import BlogCard from "./BlogCard";

const API = import.meta.env.VITE_API_URL;

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${API}/api/blog`);

      setBlogs(data.blogs || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

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

          <h2 className="mt-6 text-3xl font-black text-[#111827] lg:text-4xl">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
              AEO, GEO, LLMs Optimization & AI SEO
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Be with our latest updates with Answer Engine Optimization,
            Generative Engine Optimization and LLMs Optimization.
          </p>
        </motion.div>

        <div className="mt-20">
          {loading ? (
            <div className="text-center text-lg font-semibold">
              Loading...
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center text-lg font-semibold">
              No blogs found.
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {blogs.slice(0, 3).map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/blogs"
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold shadow transition hover:bg-[#111827] hover:text-white"
          >
            View All Blog Posts
            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blog;