import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Brain,
  Network,
  GitBranch,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Search,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "What is a Fan-Out Query?",
    answer:
      "A Fan-Out Query is the process where AI expands one search into multiple related questions before generating an answer.",
  },
  {
    question: "Does this replace SEO?",
    answer:
      "No. It enhances SEO by helping your content match AI search behavior instead of only traditional keyword rankings.",
  },
  {
    question: "Which AI platforms benefit?",
    answer:
      "Google AI Overviews, ChatGPT, Gemini, Perplexity and other modern AI search engines.",
  },
  {
    question: "Why is this important now?",
    answer:
      "Because AI search focuses on topic coverage and intent instead of single keywords.",
  },
];

const FanOutQueries = () => {

const [open,setOpen]=useState(0);

return(

<div className="bg-white">

    <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

FAN-OUT QUERY STRATEGY

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

Rank In

<span className="text-cyan-600">

ChatGPT & Google AI

</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

Modern AI doesn't search the way Google used to.

It expands questions,

understands intent,

and builds answers from connected topics.

</p>

<Button className="mt-10">

Optimize My Content

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

Search Has

<span className="text-cyan-600">

Changed

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

Most websites aren't losing visibility because of poor SEO.

They're losing visibility because AI search works differently.

</p>

<p>

Traditional SEO focuses on keywords.

AI focuses on understanding complete topics.

</p>

<p>

If your content only answers one question,

AI often ignores it.

</p>

<p className="font-bold text-slate-900">

The future belongs to content that answers every related question.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

What Are

<span className="text-cyan-600">

Fan-Out Queries?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

Instead of answering one question directly,

AI breaks it into many smaller questions,

finds information for each,

then combines everything into one complete answer.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

<div className="rounded-3xl bg-white p-10 shadow">

<Search className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Understand Intent

</h3>

<p className="mt-5 leading-8 text-slate-600">

AI first analyzes what users actually want to know.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<GitBranch className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Expand Questions

</h3>

<p className="mt-5 leading-8 text-slate-600">

The main query is expanded into multiple supporting questions.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Generate Answers

</h3>

<p className="mt-5 leading-8 text-slate-600">

AI combines every branch into one complete response.

</p>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="mx-auto max-w-5xl">

<div className="text-center">

<h2 className="text-5xl font-black">

Simple

<span className="text-cyan-600">

Example

</span>

</h2>

</div>

<div className="mt-20 rounded-3xl border bg-white p-10 shadow-sm">

<div className="rounded-xl bg-cyan-50 p-6">

<p className="text-lg font-semibold">

Seed Query

</p>

<p className="mt-2 text-2xl font-bold text-cyan-700">

"Best SEO Strategy for Europe"

</p>

</div>

<div className="mt-10 grid gap-5 md:grid-cols-2">

{[
"What is SEO strategy?",
"What works in Europe?",
"How does multilingual SEO work?",
"European ranking factors",
"Best SEO tools",
"Language optimization"
].map((item)=>(

<div
key={item}
className="flex items-center gap-4 rounded-2xl border p-5"
>

<Network className="text-cyan-600"/>

<span>{item}</span>

</div>

))}

</div>

<div className="mt-10 rounded-xl bg-slate-900 p-8 text-center text-white">

AI combines all these answers into one complete response.

</div>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        WHY IT MATTERS

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Why Fan-Out Queries
        <span className="text-cyan-600"> Matter</span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        Traditional SEO focuses on one keyword.
        AI search focuses on answering an entire topic.

      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      {[
        "Cover Multiple Search Intents",
        "Improve Topic Authority",
        "Increase AI Citations"
      ].map((item) => (

        <div
          key={item}
          className="rounded-3xl border bg-white p-10 shadow-sm"
        >

          <Sparkles className="text-cyan-600" />

          <h3 className="mt-6 text-2xl font-bold">

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

How AI

<span className="text-cyan-600">

Evaluates Content

</span>

</h2>

</div>

<div className="mt-20 grid gap-6 md:grid-cols-2">

{[
"Topic Depth",
"Semantic Relationships",
"Supporting Subtopics",
"Content Completeness",
"Logical Structure",
"Clear Explanations"
].map(item=>(

<div
key={item}
className="flex items-center gap-4 rounded-2xl border bg-white p-7"
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

Why Most Content

<span className="text-cyan-600">

Fails

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl border border-red-100 bg-red-50 p-10">

<h3 className="text-2xl font-bold text-red-700">

Old SEO Thinking

</h3>

<ul className="mt-8 space-y-5">

<li>One keyword per article</li>

<li>Surface-level explanations</li>

<li>No topic clusters</li>

<li>No intent expansion</li>

<li>Thin content</li>

</ul>

</div>

<div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-10">

<h3 className="text-2xl font-bold text-cyan-700">

Modern AI SEO

</h3>

<ul className="mt-8 space-y-5">

<li>Topic clusters</li>

<li>Semantic coverage</li>

<li>Intent matching</li>

<li>Question expansion</li>

<li>Complete topical authority</li>

</ul>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Benefits Of

<span className="text-cyan-600">

Fan-Out Strategy

</span>

</h2>

</div>

<div className="mx-auto mt-20 max-w-5xl grid gap-6 md:grid-cols-2">

{[
"Covers more user intents",
"Better AI understanding",
"Higher AI visibility",
"More AI citations",
"Greater topical authority",
"Future-proof SEO"
].map(item=>(

<div
key={item}
className="flex items-center gap-5 rounded-2xl border bg-white p-7"
>

<CheckCircle2 className="text-cyan-600"/>

<span>

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

How We Build

<span className="text-cyan-600">

Fan-Out Strategy

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-5">

{[
["01","Analyze Seed Topic"],
["02","Expand User Intent"],
["03","Generate Fan-Out Queries"],
["04","Build Topic Clusters"],
["05","Content Optimization"]
].map(([num,title])=>(

<div
key={num}
className="rounded-3xl border bg-white p-8 text-center shadow-sm"
>

<div className="text-5xl font-black text-cyan-600">

{num}

</div>

<h3 className="mt-6 text-xl font-bold">

{title}

</h3>

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

Real

<span className="text-cyan-600">

Example

</span>

</h2>

</div>

<div className="mt-20 rounded-3xl border bg-white p-10 shadow-sm">

<p className="text-lg font-semibold">

Seed Keyword

</p>

<h3 className="mt-3 text-3xl font-black text-cyan-600">

Reliable SEO Services for European Languages

</h3>

<div className="mt-10 grid gap-5 md:grid-cols-2">

{[
"What are multilingual SEO services?",
"How does multilingual SEO work?",
"Best SEO tools for Europe",
"Country-specific SEO",
"European language optimization",
"International SEO strategy"
].map(item=>(

<div
key={item}
className="flex items-center gap-4 rounded-2xl border p-5"
>

<GitBranch className="text-cyan-600"/>

<span>{item}</span>

</div>

))}

</div>

<p className="mt-10 rounded-xl bg-cyan-50 p-6 text-lg text-slate-700">

Covering these related questions helps AI understand your expertise and increases the chances of appearing in AI-generated answers.

</p>

</div>

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

        AI SEO STRATEGY

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

        Stop Writing

        <span className="block text-cyan-400">

          For Keywords Alone

        </span>

      </h2>

      <p className="mt-8 text-xl leading-9 text-slate-300">

        AI search rewards content that answers complete topics—not isolated keywords.

        Our Fan-Out Query Strategy helps your content match the way ChatGPT,

        Google AI, Gemini and future AI search engines actually think.

      </p>

      <Button className="mt-12">

        Build My Fan-Out Strategy

        <ArrowRight className="ml-2 inline"/>

      </Button>

      <p className="mt-8 text-slate-400">

        Create topic clusters, cover user intent, and become the answer AI chooses.

      </p>

    </div>

  </Container>

</section>

</div>

);

};

export default FanOutQueries;