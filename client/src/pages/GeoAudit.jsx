import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Search,
  Sparkles,
  ShieldCheck,
  FileSearch,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import GeoAuditImg from "../assets/images/geoaudit.png";
const faqs = [
  {
    question: "What is a GEO Audit?",
    answer:
      "A GEO Audit evaluates how well your website is optimized for AI-powered search engines like ChatGPT, Gemini, Claude, and Perplexity.",
  },
  {
    question: "How is GEO different from SEO?",
    answer:
      "SEO focuses on traditional search rankings. GEO focuses on helping AI systems understand, trust, and reference your website.",
  },
  {
    question: "Will I receive a report?",
    answer:
      "Yes. You'll receive a comprehensive report with findings, AI visibility insights, technical issues, and prioritized recommendations.",
  },
  {
    question: "Who needs a GEO Audit?",
    answer:
      "Businesses, SaaS companies, agencies, bloggers, local businesses, eCommerce stores, and anyone who wants stronger AI visibility.",
  },
];

const GeoAudit = () => {

const [open,setOpen]=useState(0);

return(

<div className="bg-white">

    <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

GEO AUDIT • AI SEARCH

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

GEO Audit for

<span className="text-cyan-600">

AI Search & LLM Visibility

</span>

</h1>

<div className="mt-8 text-lg leading-9 text-slate-600">
  <img className="mx-auto" src={GeoAuditImg} alt="GEO Audit" />
</div>

<p className="mt-8 text-xl leading-9 text-slate-600">

Find out why AI search engines aren't recommending your website—and discover exactly what needs to change to improve your visibility across ChatGPT, Gemini, Claude, Perplexity, and future AI platforms.

</p>

<Button className="mt-10">

Get My GEO Audit

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

Is Your Website Ready For

<span className="text-cyan-600">

AI Search?

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

People are no longer relying only on Google. Millions now ask ChatGPT, Gemini, Claude, and Perplexity for recommendations before making decisions.

</p>

<p>

If your website isn't optimized for Generative Engine Optimization (GEO), AI systems may never mention your business—even if your content ranks well in traditional search.

</p>

<p>

That means missed visibility, fewer qualified leads, and lost opportunities while competitors become the brands AI recommends.

</p>

<p className="font-bold text-slate-900">

Traditional SEO helps you rank.

GEO helps AI recognize, understand, and recommend your business.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

What Is

<span className="text-cyan-600">

My GEO Audit?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

This isn't a standard SEO audit. It's an AI-focused evaluation designed to uncover the issues preventing your website from being cited, trusted, and recommended by modern AI systems.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

AI Analysis

</h3>

<p className="mt-5 leading-8 text-slate-600">

Deep AI-assisted analysis of your website using custom workflows.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Bot className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Claude Skills

</h3>

<p className="mt-5 leading-8 text-slate-600">

Custom Claude Skills and Claude Code workflows reveal hidden GEO opportunities.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<FileSearch className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Technical Review

</h3>

<p className="mt-5 leading-8 text-slate-600">

Analyze structured data, technical SEO, content quality, and AI readability.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Search className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Visibility Score

</h3>

<p className="mt-5 leading-8 text-slate-600">

Measure your current AI visibility and identify your biggest opportunities.

</p>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Why Choose

<span className="text-cyan-600">

Our GEO Audit?

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2">

{[
"Custom Claude Skills",
"Claude Code Workflows",
"Semantic Content Analysis",
"AI Citability Evaluation",
"Technical GEO Analysis",
"LLM Visibility Assessment"
].map(item=>(

<div
key={item}
className="flex items-center gap-5 rounded-3xl border bg-white p-8 shadow-sm"
>

<CheckCircle2 className="text-cyan-600"/>

<p className="text-lg">

{item}

</p>

</div>

))}

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        AUDIT COVERAGE

      </span>

      <h2 className="mt-8 text-5xl font-black">

        What You'll

        <span className="text-cyan-600">

          Get

        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        Every audit includes a detailed review of the most important AI visibility signals that influence how modern LLMs understand and recommend your website.

      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {[
        "AI Citability Analysis",
        "Brand Authority Review",
        "Content Quality & E-E-A-T",
        "Technical GEO Issues",
        "Schema & Structured Data",
        "Platform Optimization Score",
        "Semantic Content Analysis",
        "AI Visibility Opportunities",
        "GEO Growth Recommendations",
        "Prioritized Action Plan",
      ].map((item) => (

        <div
          key={item}
          className="flex items-center gap-5 rounded-3xl border bg-white p-8 shadow-sm"
        >

          <CheckCircle2 className="text-cyan-600"/>

          <p className="text-lg font-medium">

            {item}

          </p>

        </div>

      ))}

    </div>

  </Container>

</section>

<section className="py-24">

  <Container>

    <div className="mx-auto max-w-5xl">

      <div className="text-center">

        <h2 className="text-5xl font-black">

          Easy-To-Understand

          <span className="text-cyan-600">

            GEO Report

          </span>

        </h2>

      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border bg-white p-10 shadow-sm">

          <ShieldCheck className="text-cyan-600"/>

          <h3 className="mt-6 text-2xl font-bold">

            Problems Identified

          </h3>

          <p className="mt-5 leading-8 text-slate-600">

            We identify both major and minor issues affecting your AI visibility, explain why they matter, and prioritize them based on impact.

          </p>

        </div>

        <div className="rounded-3xl border bg-white p-10 shadow-sm">

          <Sparkles className="text-cyan-600"/>

          <h3 className="mt-6 text-2xl font-bold">

            Clear Recommendations

          </h3>

          <p className="mt-5 leading-8 text-slate-600">

            Every issue comes with practical, step-by-step recommendations so you know exactly what to improve and where to start.

          </p>

        </div>

      </div>

    </div>

  </Container>

</section>

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <h2 className="text-5xl font-black">

        What You'll

        <span className="text-cyan-600">

          Receive

        </span>

      </h2>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        "Comprehensive GEO Audit",
        "AI Visibility Score",
        "Technical GEO Analysis",
        "Schema Review",
        "Content Assessment",
        "AI Citability Report",
        "Action Plan",
        "Growth Opportunities",
      ].map((item) => (

        <div
          key={item}
          className="rounded-3xl border bg-white p-8 text-center shadow-sm"
        >

          <CheckCircle2 className="mx-auto text-cyan-600"/>

          <h3 className="mt-5 font-bold">

            {item}

          </h3>

        </div>

      ))}

    </div>

  </Container>

</section>

<section className="py-24">

  <Container>

    <div className="text-center">

      <h2 className="text-5xl font-black">

        Who Is This

        <span className="text-cyan-600">

          Service For?

        </span>

      </h2>

    </div>

    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {[
        "Business Websites",
        "E-commerce Stores",
        "SaaS Companies",
        "Marketing Agencies",
        "Bloggers",
        "Local Businesses",
        "Coaches & Consultants",
        "Growing Brands",
      ].map((item) => (

        <div
          key={item}
          className="rounded-3xl border bg-white p-8 text-center shadow-sm"
        >

          <Bot className="mx-auto text-cyan-600"/>

          <h3 className="mt-5 text-lg font-bold">

            {item}

          </h3>

        </div>

      ))}

    </div>

  </Container>

</section>

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <h2 className="text-5xl font-black">

        Our GEO Audit

        <span className="text-cyan-600">

          Process

        </span>

      </h2>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

      {[
        "Analyze Website",
        "Run AI Workflows",
        "Review Technical GEO",
        "Prepare Report",
        "Provide Action Plan",
      ].map((step, index) => (

        <div
          key={step}
          className="rounded-3xl border bg-white p-8 shadow-sm"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">

            {index + 1}

          </div>

          <h3 className="mt-6 text-xl font-bold">

            {step}

          </h3>

        </div>

      ))}

    </div>

  </Container>

</section>

<section className="py-24">

  <Container>

    <div className="mx-auto max-w-4xl">

      <div className="text-center">

        <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

          FAQ

        </span>

        <h2 className="mt-8 text-5xl font-black">

          Frequently Asked

          <span className="text-cyan-600">

            Questions

          </span>

        </h2>

        <p className="mt-6 text-lg text-slate-600">

          Everything you need to know about our GEO Audit service.

        </p>

      </div>

      <div className="mt-16 space-y-5">

        {faqs.map((faq,index)=>(

          <div
            key={index}
            className="overflow-hidden rounded-2xl border bg-white"
          >

            <button

              onClick={()=>setOpen(open===index?-1:index)}

              className="flex w-full items-center justify-between p-7 text-left"

            >

              <h3 className="text-xl font-bold">

                {faq.question}

              </h3>

              <ChevronDown

                className={`transition-transform duration-300 ${
                  open===index ? "rotate-180":""
                }`}

              />

            </button>

            <AnimatePresence>

              {open===index&&(

                <motion.div

                  initial={{height:0,opacity:0}}

                  animate={{height:"auto",opacity:1}}

                  exit={{height:0,opacity:0}}

                  transition={{duration:.3}}

                  className="overflow-hidden"

                >

                  <p className="px-7 pb-7 leading-8 text-slate-600">

                    {faq.answer}

                  </p>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        ))}

      </div>

    </div>

  </Container>

</section>

<section className="bg-[#081120] py-28 text-white">

  <Container>

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">

        GEO AUDIT • AI VISIBILITY

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

        Prepare Your Website

        <span className="block text-cyan-400">

          For The Future of AI Search

        </span>

      </h2>

      <p className="mt-8 text-xl leading-9 text-slate-300">

        Search is evolving beyond traditional rankings. Our GEO Audit uncovers the technical, semantic, and authority gaps preventing your website from being cited by ChatGPT, Claude, Gemini, Perplexity, and other AI-powered search platforms.

      </p>

      <Button className="mt-12">

        Book My GEO Audit

        <ArrowRight className="ml-2 inline"/>

      </Button>

      <p className="mt-8 text-slate-400">

        Discover exactly how AI sees your website, fix the issues that matter most, and build a stronger foundation for long-term AI visibility.

      </p>

    </div>

  </Container>

</section>

</div>

);

};

export default GeoAudit;