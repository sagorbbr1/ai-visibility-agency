import React from "react";
import jakariyaPhoto from "../assets/images/jakariya.jpg";
const Contact = () => {
  return (
    <main className="bg-slate-50 py-20">
      <div className="container mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Contact AI Visibility Agency
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            We'd love to hear from you. Whether you have a question, feedback,
            or simply want to say hello, we're here to help.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Welcome to AI Visibility Agency
            </h2>

            <p className="leading-8 text-slate-600">
              We're always eager to hear from you. Whether you want to share
              feedback, ask questions, or simply say hello, we're here and
              ready to listen.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              At <strong>AI Visibility Agency</strong>, your thoughts and
              suggestions help us grow, improve, and deliver a better
              experience.
            </p>

            <h3 className="mt-10 mb-5 text-2xl font-bold text-slate-900">
              You Can Contact Us For
            </h3>

            <ul className="space-y-5 text-slate-600">

              <li>
                ✅ <strong>Website Feedback</strong> — Share your thoughts
                about our website, design, or functionality.
              </li>

              <li>
                ✅ <strong>Content Queries</strong> — Ask questions about
                our articles or services.
              </li>

              <li>
                ✅ <strong>Corrections & Updates</strong> — Report outdated
                or incorrect information.
              </li>

              <li>
                ✅ <strong>Design Suggestions</strong> — Recommend ideas to
                improve our website.
              </li>

              <li>
                ✅ <strong>Improvement Suggestions</strong> — Suggest new
                tools, features, or content.
              </li>

              <li>
                ✅ <strong>Technical Issues</strong> — Report bugs or
                technical problems.
              </li>

            </ul>

            <div className="mt-10 rounded-2xl bg-cyan-50 p-6">

              <h3 className="text-xl font-bold text-slate-900">
                Get In Touch
              </h3>

              <p className="mt-5">
                📧{" "}
                <a
                  href="mailto:geo@aivisibilityagency.net"
                  className="font-medium text-cyan-600 hover:underline"
                >
                  geo@aivisibilityagency.net
                </a>
              </p>

              <p className="mt-3">
                📞{" "}
                <a
                  href="tel:+8801877448297"
                  className="font-medium text-cyan-600 hover:underline"
                >
                  +880 1877-448297
                </a>
              </p>

            </div>

            <p className="mt-8 leading-8 text-slate-600">
              We look forward to assisting you! Thank you for being a part
              of our community and helping us grow.
            </p>

          </div>

          {/* RIGHT IMAGE */}

          <div className="sticky top-28">

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

              <img
                src={jakariyaPhoto}
                alt="AI Visibility Agency"
                className="h-full w-full object-cover"
              />

            </div>

            <div className="mt-6 rounded-2xl bg-cyan-600 p-6 text-white">

              <h3 className="text-2xl font-bold">
                Let's Build Your AI Visibility
              </h3>

              <p className="mt-4 leading-8 text-cyan-100">
                Whether you need AI SEO, GEO, Brand Mentions, Entity
                Building, or AI Visibility consulting, we'd love to discuss
                your project.
              </p>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default Contact;