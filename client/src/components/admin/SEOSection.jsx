const SEOSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        SEO Settings
      </h2>

      {/* Meta Title */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Meta Title
        </label>

        <input
          type="text"
          name="metaTitle"
          value={formData.metaTitle}
          onChange={handleChange}
          placeholder="Enter SEO title..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
        />

      </div>

      {/* Meta Description */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Meta Description
        </label>

        <textarea
          rows={4}
          name="metaDescription"
          value={formData.metaDescription}
          onChange={handleChange}
          placeholder="Write SEO description..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
        />

      </div>

      {/* Tags */}

      <div>

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Tags
        </label>

        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="AI SEO, GEO, AEO"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-500"
        />

        <p className="mt-2 text-xs text-slate-500">
          Separate tags with commas (,)
        </p>

      </div>

    </div>
  );
};

export default SEOSection;