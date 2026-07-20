import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

   <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

  <img
    src={post.coverImage}
    alt={post.title}
    className="h-56 w-full object-cover"
  />

  <div className="p-6">

    {/* Category & Date */}

    <div className="mb-4 flex items-center justify-between">

      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
        {post.category}
      </span>

      <span className="text-sm text-slate-500">
        {new Date(post.createdAt).toLocaleDateString()}
      </span>

    </div>

    {/* Title */}

    <h3 className="mb-3 line-clamp-2 text-2xl font-bold leading-snug text-slate-900">
      {post.title}
    </h3>

    {/* Excerpt */}

    <p className="mb-6 line-clamp-3 text-base leading-7 text-slate-600">
      {post.excerpt}
    </p>

    {/* Read More */}

    <Link to={`/blogs/${post.slug}`} className="font-semibold text-cyan-600 transition hover:text-cyan-700">
      Read More →
    </Link>

  </div>

</div>



    </motion.div>
  );
};

export default BlogCard;