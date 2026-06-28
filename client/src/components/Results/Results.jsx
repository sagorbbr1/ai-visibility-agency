import Container from "../ui/Container";
import StatsCard from "./StatsCard";
import TestimonialCard from "./TestimonialCard";

import statsData from "./statsData";
import testimonialData from "./testimonialData";

const Results = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-28">

      <Container>

        <div className="text-center">

          <span className="rounded-full border px-5 py-2 text-xs uppercase tracking-widest text-blue-600">

            Trusted by Growth-Focused Brands

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Results That Speak for Themselves

          </h2>

        </div>

        {/* <div className="mt-16 flex justify-center">

          <img
            src="/logo.svg"
            alt="Client Logo"
            className="h-10"
          />

        </div> */}

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

          {testimonialData.map((item, index) => (
            <TestimonialCard
              key={item.id}
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