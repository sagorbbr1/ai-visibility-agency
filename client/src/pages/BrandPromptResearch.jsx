import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Brain,
  Bot,
  Search,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  Lightbulb,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "What is Brand Prompt Research?",
    answer:
      "It helps you understand how AI systems interpret and recommend your brand when users ask questions.",
  },
  {
    question: "Is this different from keyword research?",
    answer:
      "Yes. Instead of focusing only on keywords, it focuses on conversational prompts, AI intent, and brand understanding.",
  },
  {
    question: "Which AI platforms does it support?",
    answer:
      "ChatGPT, Google AI Overviews, Gemini, Claude, Perplexity and other AI search systems.",
  },
  {
    question: "Who needs this service?",
    answer:
      "Businesses, agencies, SaaS companies, startups and personal brands that want to improve AI visibility.",
  },
];

const BrandPromptResearch = () => {

const [open,setOpen]=useState(0);

return(

<div className="bg-white">

    <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

BRAND PROMPT RESEARCH

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

Understand How AI

<span className="text-cyan-600">

Thinks About Your Brand

</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

AI systems don't simply read websites.

They interpret prompts,

context,

entities,

and relationships before deciding which brands to recommend.

</p>

<Button className="mt-10">

Research My Brand

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>



<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

Search Is

<span className="text-cyan-600">

Prompt-Based

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

Traditional SEO was built around keywords.

Modern AI search is built around conversations.

</p>

<p>

People no longer search with two or three words.

They ask complete questions and expect complete answers.

</p>

<p>

If AI doesn't understand your brand,

it won't recommend it.

</p>

<p className="font-bold text-slate-900">

Visibility starts with understanding how AI interprets your business.

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

Brand Prompt Research?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

Brand Prompt Research studies how AI systems understand,

associate,

and recommend your business when users ask natural-language questions.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Search className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

User Prompts

</h3>

<p className="mt-5 leading-8 text-slate-600">

Understand the questions people actually ask AI.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

AI Context

</h3>

<p className="mt-5 leading-8 text-slate-600">

Learn how AI connects your brand with related topics.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Bot className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Brand Position

</h3>

<p className="mt-5 leading-8 text-slate-600">

See how your business appears inside AI-generated answers.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Lightbulb className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Prompt Strategy

</h3>

<p className="mt-5 leading-8 text-slate-600">

Discover prompt opportunities that improve AI visibility.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

AI ANALYSIS

</span>

<h2 className="mt-8 text-5xl font-black">

What We

<span className="text-cyan-600">

Analyze

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

We examine how AI systems currently understand your business and where new visibility opportunities exist.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"AI Search Prompts",
"Customer Questions",
"Competitor Visibility",
"Content Gaps",
"Prompt Opportunities",
"Entity Recognition"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-10 shadow-sm"
>

<Search className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

{item}

</h3>

<p className="mt-5 leading-8 text-slate-600">

Detailed research focused on improving AI visibility.

</p>

</div>

))}

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Business

<span className="text-cyan-600">

Benefits

</span>

</h2>

</div>

<div className="mt-20 grid gap-6 md:grid-cols-2">

{[
"Increase AI-generated brand mentions",
"Improve visibility across AI platforms",
"Understand customer search behavior",
"Build AI-friendly content strategy",
"Strengthen digital authority",
"Stay ahead of competitors"
].map(item=>(

<div
key={item}
className="flex items-center gap-5 rounded-2xl border bg-white p-7"
>

<CheckCircle2 className="text-cyan-600"/>

<span className="text-lg">

{item}

</span>

</div>

))}

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Traditional SEO

<span className="text-cyan-600">

vs AI Prompt Research

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl border border-red-100 bg-red-50 p-10">

<h3 className="text-2xl font-bold text-red-700">

Traditional Keyword Research

</h3>

<ul className="mt-8 space-y-5 text-slate-700">

<li>Keywords</li>

<li>Search Volume</li>

<li>Backlinks</li>

<li>SERP Rankings</li>

<li>Google Focus</li>

</ul>

</div>

<div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-10">

<h3 className="text-2xl font-bold text-cyan-700">

Brand Prompt Research

</h3>

<ul className="mt-8 space-y-5 text-slate-700">

<li>AI Understanding</li>

<li>Conversational Intent</li>

<li>Prompt Discovery</li>

<li>Entity Recognition</li>

<li>AI Answer Visibility</li>

</ul>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Who Is

<span className="text-cyan-600">

It For?

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

{[
"Businesses",
"SEO Agencies",
"Startups",
"Content Marketers",
"Personal Brands",
"Growing Companies"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-8 text-center shadow-sm"
>

<Sparkles className="mx-auto text-cyan-600"/>

<h3 className="mt-6 text-xl font-bold">

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

What You'll

<span className="text-cyan-600">

Receive

</span>

</h2>

</div>

<div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

{[
"AI Prompt Report",
"High-Value Prompt List",
"Competitor Analysis",
"Content Direction",
"AI Visibility Opportunities",
"Future Search Strategy"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-8 shadow-sm"
>

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-xl font-bold">

{item}

</h3>

<p className="mt-4 leading-7 text-slate-600">

Delivered in a practical roadmap that helps improve AI search visibility.

</p>

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

          Answers to common questions about Brand Prompt Research.

        </p>

      </div>

      <div className="mt-16 space-y-5">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl border bg-white"
          >

            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between p-7 text-left"
            >

              <h3 className="text-xl font-bold">

                {faq.question}

              </h3>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  open === index ? "rotate-180" : ""
                }`}
              />

            </button>

            <AnimatePresence>

              {open === index && (

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
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

        AI VISIBILITY STRATEGY

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

        Make Your Brand

        <span className="block text-cyan-400">

          Easy For AI To Recommend

        </span>

      </h2>

      <p className="mt-8 text-xl leading-9 text-slate-300">

        AI-powered search is driven by conversations, prompts, and context—not just keywords.
        Brand Prompt Research helps you understand how AI interprets your business so you can create content that earns more visibility, mentions, and recommendations.

      </p>

      <Button className="mt-12">

        Start My Brand Prompt Research

        <ArrowRight className="ml-2 inline" />

      </Button>

      <p className="mt-8 text-slate-400">

        Discover the prompts that matter, strengthen your AI presence,
        and position your brand for the future of search.

      </p>

    </div>

  </Container>

</section>
</div>

);

};

export default BrandPromptResearch;