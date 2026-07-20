import Container from "../ui/Container";
import StatsCard from "./StatsCard";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";
import axios from "axios";
import statsData from "./statsData";
import testimonialData from "./testimonialData";

const API = import.meta.env.VITE_API_URL;


const Results = () => {
  const [reviews, setReviews] = useState([]);

useEffect(() => {
  // eslint-disable-next-line react-hooks/immutability
  fetchReviews();
}, []);

const fetchReviews = async () => {
  const { data } = await axios.get(`${API}/api/reviews`);
  setReviews(data.reviews);
};
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-28">

      <Container>

        <div className="text-center">

          <span className="rounded-full border px-5 py-2 text-xs uppercase tracking-widest text-blue-600">

            Trusted by Growth-Focused Brands

          </span>

          <h2 className="mt-8 text-5xl font-black">
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">  Results That Speak for Themselves</span>

          

          </h2>

        </div>

    

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {statsData.map((item, index) => (
            <StatsCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {reviews.map((item, index) => (
  <TestimonialCard
    key={item._id}
    item={item}
    index={index}
  />
))}

        </div>

      </Container>

    </section>
  );
};

export default Results;