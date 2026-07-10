import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const services = [
  "AEO & GEO",
  "AI Ranking",
  "LLM Visibility",
  "Brand Mentions",
  "AI Listicles",
  "Fan Out Queries",
  "Brand Prompt Research",
  "AI Link Building",
  "Local GBP Ranking",
  "Geo Audit",
];

const company = [
  "About",
  "Book Discovery Call",
  "AI Visibility Guide",
  "The ANSWER Framework",
  "Blog",
  "Case Studies",
  "Digital PR",
  "AEO Teardowns",
  "Demo",
  "Why We Win",
  "Best GEO Agencies",
];

const industries = [
  "B2B SaaS",
  "Cybersecurity",
  "FinTech",
  "Healthcare / MedTech",
  "HR Tech",
  "MarTech",
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top */}

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400 font-black text-black">
                AI
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  AI Visibility
                </h2>

                <p className="text-sm text-slate-400">
                  Agency
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              We help brands become the answer AI recommends.
              AI SEO, GEO, citations, entity building and
              answer engine optimization for modern businesses.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:bg-white hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:bg-white hover:text-black"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:bg-white hover:text-black"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-700 p-3 transition hover:bg-white hover:text-black"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Services
            </h3>

            <ul className="space-y-4">

              {services.map((item) => (

                <li key={item}>

                  <Link
                    to={`services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-400 transition hover:text-yellow-400"
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Company
            </h3>

            <ul className="space-y-4">

              {company.map((item) => (

                <li key={item}>

                  <Link
                    to="/"
                    className="text-slate-400 transition hover:text-yellow-400"
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Industries */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Industries
            </h3>

            <ul className="space-y-4">

              {industries.map((item) => (

                <li key={item}>

                  <Link
                    to="/"
                    className="text-slate-400 transition hover:text-yellow-400"
                  >
                    {item}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-slate-800" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AI Visibility Agency.
            All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              to="/privacy-policy"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/cookies"
              className="text-sm text-slate-500 transition hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;