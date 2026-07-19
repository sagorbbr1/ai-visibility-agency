import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import "react-quill-new/dist/quill.snow.css";

import BlogForm from "../../components/admin/BlogForm";
import BlogEditor from "../../components/admin/BlogEditor";
import ImageUpload from "../../components/admin/ImageUpload";
import SEOSection from "../../components/admin/SEOSection";

const API = import.meta.env.VITE_API_URL;

const CreateBlog = () => {
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
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.slug ||
      !formData.category ||
      !formData.excerpt ||
      !formData.content
    ) {
      return toast.error("Please fill all required fields.");
    }

    if (!image) {
      return toast.error("Please select a cover image.");
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("coverImage", image);
      data.append("title", formData.title);
      data.append("slug", formData.slug);
      data.append("category", formData.category);
      data.append("excerpt", formData.excerpt);
      data.append("content", formData.content);
      data.append("tags", formData.tags);
      data.append("metaTitle", formData.metaTitle);
      data.append("metaDescription", formData.metaDescription);

      await axios.post(`${API}/api/blog`, data);

      toast.success("Blog published successfully!");

      setFormData({
        title: "",
        slug: "",
        category: "",
        excerpt: "",
        content: "",
        tags: "",
        metaTitle: "",
        metaDescription: "",
      });

      setImage(null);
    } catch (error) {
      console.log(error);

      toast.error("Failed to publish blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10">

      <div className="mx-auto max-w-7xl px-5">

        <div className="mb-10">

          <h1 className="text-3xl font-bold text-slate-900">
            Create New Blog
          </h1>

          <p className="mt-2 text-slate-500">
            Publish a new article for your website.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid gap-8 lg:grid-cols-3">

            {/* LEFT */}

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

            {/* RIGHT */}

            <div className="space-y-6">

              <ImageUpload
                image={image}
                setImage={setImage}
              />

              <SEOSection
                formData={formData}
                setFormData={setFormData}
              />

              <div className="rounded-xl border bg-white p-6">

                <button
                  disabled={loading}
                  className="w-full rounded-lg bg-cyan-600 py-3 font-semibold text-white transition hover:bg-cyan-700 disabled:opacity-50"
                >
                  {loading ? "Publishing..." : "Publish Blog"}
                </button>

              </div>

            </div>

          </div>

        </form>

      </div>

    </main>
  );
};

export default CreateBlog;