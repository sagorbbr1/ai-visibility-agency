import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import BlogForm from "../../components/admin/BlogForm";
import BlogEditor from "../../components/admin/BlogEditor";
import ImageUpload from "../../components/admin/ImageUpload";
import SEOSection from "../../components/admin/SEOSection";

const API = import.meta.env.VITE_API_URL;

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    tags: "",
    metaTitle: "",
    metaDescription: "",
    coverImage: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`${API}/api/blog/id/${id}`);
      console.log(data)

      setFormData({
        title: data.blog.title,
        slug: data.blog.slug,
        category: data.blog.category,
        excerpt: data.blog.excerpt,
        content: data.blog.content,
        tags: data.blog.tags,
        metaTitle: data.blog.metaTitle,
        metaDescription: data.blog.metaDescription,
        coverImage: data.blog.coverImage,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to load blog.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      data.append("title", formData.title);
      data.append("slug", formData.slug);
      data.append("category", formData.category);
      data.append("excerpt", formData.excerpt);
      data.append("content", formData.content);
      data.append("tags", formData.tags);
      data.append("metaTitle", formData.metaTitle);
      data.append("metaDescription", formData.metaDescription);

      if (image) {
        data.append("coverImage", image);
      }

      await axios.put(`${API}/api/blog/${id}`, data);

      toast.success("Blog updated successfully!");

      navigate("/admin/blogs");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">
            Edit Blog
          </h1>

          <p className="mt-2 text-slate-500">
            Update your blog post.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* Left */}

            <div className="space-y-6 lg:col-span-2">

              <BlogForm
                formData={formData}
                setFormData={setFormData}
              />

              <BlogEditor
                formData={formData}
                setFormData={setFormData}
              />

            </div>

            {/* Right */}

            <div className="space-y-6">

              <ImageUpload
                image={image}
                setImage={setImage}
              />

              {!image && formData.coverImage && (
                <div className="rounded-xl border bg-white p-4">

                  <p className="mb-3 text-sm font-medium">
                    Current Image
                  </p>

                  <img
                    src={formData.coverImage}
                    alt="Cover"
                    className="rounded-lg"
                  />

                </div>
              )}

              <SEOSection
                formData={formData}
                setFormData={setFormData}
              />

              <div className="rounded-xl border bg-white p-6">

                <button
                  disabled={loading}
                  className="w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white hover:bg-cyan-700 disabled:opacity-50"
                >
                  {loading ? "Updating..." : "Update Blog"}
                </button>

              </div>

            </div>

          </div>

        </form>

      </div>
    </main>
  );
};

export default EditBlog;