import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import BlogCard from "../components/Blogs/BlogCard";

const API = import.meta.env.VITE_API_URL;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${API}/api/blog`);

      setBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}

      <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-white to-white py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="rounded-full border bg-white px-5 py-2 text-xs font-semibold uppercase tracking-widest shadow">
              AI Visibility Agency
            </span>

            <h1 className="mt-8 text-5xl font-black text-slate-900 lg:text-6xl">
              Our Blog
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              Stay updated with the latest insights on AI SEO,
              Generative Engine Optimization (GEO),
              Answer Engine Optimization (AEO),
              LLM Visibility, AI Search, and modern digital marketing.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Blogs */}

      <section className="py-24">
        <Container>
          {loading ? (
            <div className="text-center text-lg font-medium">
              Loading...
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center text-lg font-medium">
              No blogs found.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {blogs.map((post, index) => (
                <BlogCard
                  key={post._id}
                  post={post}
                  index={index}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Blogs;