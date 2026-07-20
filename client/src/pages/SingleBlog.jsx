import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const SingleBlog = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(
        `${API}/api/blog/${slug}`
      );

      setBlog(data.blog);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="py-40 text-center">
        Loading...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="py-40 text-center">
        Blog not found.
      </div>
    );
  }

  return (
    <main className="bg-slate-50 py-20">

      <div className="mx-auto max-w-5xl px-5">

        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-[420px] w-full rounded-3xl object-cover"
        />

        <div className="mt-10">

          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            {blog.category}
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            {blog.title}
          </h1>

          <div className="mt-6 flex gap-5 text-sm text-slate-500">

            <span>
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>

            <span>
              👁 {blog.views} Views
            </span>

          </div>

          <p className="mt-8 text-xl leading-9 text-slate-600">
            {blog.excerpt}
          </p>

          <hr className="my-12" />

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />

        </div>

      </div>

    </main>
  );
};

export default SingleBlog;