import ReactQuill from "react-quill-new";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],

    ["bold", "italic", "underline", "strike"],

    [{ list: "ordered" }, { list: "bullet" }],

    ["blockquote", "code-block"],

    ["link", "image"],

    [{ align: [] }],

    [{ color: [] }, { background: [] }],

    ["clean"],
  ],
};

const formats = [
  "header",

  "bold",
  "italic",
  "underline",
  "strike",

  "list",
  "bullet",

  "blockquote",
  "code-block",

  "link",
  "image",

  "align",

  "color",
  "background",
];

const BlogEditor = ({ formData, setFormData }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold text-slate-900">
        Blog Content
      </h2>

      <ReactQuill
        theme="snow"
        value={formData.content}
        modules={modules}
        formats={formats}
        onChange={(value) =>
          setFormData((prev) => ({
            ...prev,
            content: value,
          }))
        }
        placeholder="Start writing your blog..."
        className="min-h-[400px]"
      />

    </div>
  );
};

export default BlogEditor;