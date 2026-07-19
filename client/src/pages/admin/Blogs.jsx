import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Edit, Trash2, Plus, Search } from "lucide-react";

const API = import.meta.env.VITE_API_URL;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  
   const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${API}/api/blog`);

      setBlogs(data.blogs);
      setFilteredBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredBlogs(filtered);
  }, [search, blogs]);

 
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`${API}/api/blog/${id}`);

      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Blogs
            </h1>

            <p className="mt-1 text-slate-500">
              Manage all published blogs.
            </p>
          </div>

          <Link
            to="/admin/create-blog"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-5 py-3 font-medium text-white transition hover:bg-cyan-700"
          >
            <Plus size={18} />
            Create Blog
          </Link>

        </div>

        {/* Search */}

        <div className="mb-6 relative">

          <Search
            className="absolute left-4 top-3.5 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search blog..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-cyan-500"
          />

        </div>

        {/* Table */}

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-6 py-4 text-left">Image</th>

                <th className="px-6 py-4 text-left">Title</th>

                <th className="px-6 py-4 text-left">Category</th>

                <th className="px-6 py-4 text-left">Views</th>

                <th className="px-6 py-4 text-left">Date</th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan={6}
                    className="py-10 text-center"
                  >
                    Loading...
                  </td>

                </tr>

              ) : filteredBlogs.length === 0 ? (

                <tr>

                  <td
                    colSpan={6}
                    className="py-10 text-center text-slate-500"
                  >
                    No blogs found.
                  </td>

                </tr>

              ) : (

                filteredBlogs.map((blog) => (

                  <tr
                    key={blog._id}
                    className="border-t"
                  >

                    <td className="px-6 py-4">

                      <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-16 w-24 rounded-lg object-cover"
                      />

                    </td>

                    <td className="px-6 py-4 font-medium">
                      {blog.title}
                    </td>

                    <td className="px-6 py-4">
                      {blog.category}
                    </td>

                    <td className="px-6 py-4">
                      {blog.views}
                    </td>

                    <td className="px-6 py-4">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4">

                      <div className="flex justify-center gap-3">

                        <Link
                          to={`/admin/edit-blog/${blog._id}`}
                          className="rounded-lg bg-cyan-50 p-2 text-cyan-600 hover:bg-cyan-100"
                        >
                          <Edit size={18} />
                        </Link>

                        <button
                          onClick={() =>
                            handleDelete(blog._id)
                          }
                          className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
};

export default Blogs;