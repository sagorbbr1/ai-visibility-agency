import { useEffect } from "react";

const BlogForm = ({ formData, setFormData }) => {

  useEffect(() => {
    const slug = formData.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    setFormData((prev) => ({
      ...prev,
      slug,
    }));
  }, [formData.title]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-6 rounded-xl border bg-white p-6">

      <div>
        <label className="mb-2 block font-medium">
          Blog Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          placeholder="What is AI SEO?"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Slug
        </label>

        <input
          type="text"
          value={formData.slug}
          readOnly
          className="w-full rounded-lg border bg-slate-100 p-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
        >
          <option value="">Select Category</option>
          <option>AI SEO</option>
          <option>GEO</option>
          <option>AEO</option>
          <option>LLM Optimization</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Excerpt
        </label>

        <textarea
          rows={4}
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          className="w-full rounded-lg border p-3"
          placeholder="Short description..."
        />
      </div>

    </div>
  );
};

export default BlogForm;