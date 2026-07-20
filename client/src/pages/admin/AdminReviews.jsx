import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);

  const [image, setImage] = useState(null);

  const [form, setForm] = useState({
    name: "",
    company: "",
    review: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data } = await axios.get(`${API}/api/reviews`);

    setReviews(data.reviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", form.name);
    data.append("company", form.company);
    data.append("review", form.review);
    data.append("image", image);

    await axios.post(`${API}/api/reviews`, data);

    setForm({
      name: "",
      company: "",
      review: "",
    });

    setImage(null);

    fetchReviews();
  };

  const deleteReview = async (id) => {
    await axios.delete(`${API}/api/reviews/${id}`);

    fetchReviews();
  };

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Reviews
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border p-6"
      >

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <input
          placeholder="Company"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <textarea
          placeholder="Review"
          rows={5}
          value={form.review}
          onChange={(e) =>
            setForm({
              ...form,
              review: e.target.value,
            })
          }
          className="w-full border p-3 rounded"
        />

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
        />

        <button className="rounded bg-cyan-600 px-6 py-3 text-white">
          Add Review
        </button>

      </form>

      <div className="mt-10 space-y-4">

        {reviews.map((item) => (

          <div
            key={item._id}
            className="flex items-center justify-between rounded-xl border p-4"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                className="h-14 w-14 rounded-full"
                alt=""
              />

              <div>

                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.company}
                </p>

              </div>

            </div>

            <button
              onClick={() => deleteReview(item._id)}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AdminReviews;