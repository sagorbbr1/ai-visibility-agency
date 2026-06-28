import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * .15,
      }}
      whileHover={{ y: -10 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition"
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={post.image}
          alt={post.title}
          className="h-60 w-full object-cover duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        <span className="absolute left-5 top-5 rounded-full bg-white px-3 py-1 text-xs font-semibold">
          {post.category}
        </span>

      </div>

      {/* Content */}

      <div className="p-7">

        <div className="flex items-center gap-3 text-sm text-gray-400">

          <span>{post.date}</span>

          <span>•</span>

          <span>{post.readTime}</span>

        </div>

        <h3 className="mt-5 text-2xl font-bold leading-snug text-[#111827] transition group-hover:text-blue-600">

          {post.title}

        </h3>

        <p className="mt-4 leading-8 text-gray-500">

          {post.description}

        </p>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <p className="text-sm text-gray-400">

              By

            </p>

            <h5 className="font-semibold">

              {post.author}

            </h5>

          </div>

          <button className="flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 font-semibold transition group-hover:bg-[#111827] group-hover:text-white">

            Read More

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </motion.div>
  );
};

export default BlogCard;