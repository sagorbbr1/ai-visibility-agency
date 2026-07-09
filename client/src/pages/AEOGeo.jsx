import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Search,
  Quote,
  Database,
  Network,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "Is AEO/GEO replacing SEO?",
    answer:
      "No. SEO remains the foundation. AEO helps you become the answer, while GEO helps AI platforms recommend your business.",
  },
  {
    question: "How is this different from normal SEO?",
    answer:
      "SEO focuses on rankings. AEO focuses on becoming the answer. GEO focuses on being recommended by AI systems.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Technical improvements can be recognized within weeks. Strong AI visibility usually grows over 2–4 months.",
  },
  {
    question: "Do I need this if I already rank on Google?",
    answer:
      "Yes. Ranking first and being cited by AI are now two different victories.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "Google AI Overviews, ChatGPT, Gemini, Claude, Perplexity and Microsoft Copilot.",
  },
];

const services = [
  {
    icon: Quote,
    title: "Make You Quotable",
    text: "We rewrite and structure your content so AI can easily cite your business.",
  },
  {
    icon: Bot,
    title: "AI Crawler Optimization",
    text: "We configure robots.txt, llms.txt and crawl accessibility.",
  },
  {
    icon: Network,
    title: "Entity Authority",
    text: "We strengthen your digital footprint across trusted sources.",
  },
  {
    icon: Database,
    title: "Schema Implementation",
    text: "Structured data helps AI understand your business correctly.",
  },
  {
    icon: Brain,
    title: "Platform Optimization",
    text: "Different strategies for ChatGPT, Gemini, Perplexity and AI Overviews.",
  },
];

const AEOGeo = () => {

const [open,setOpen]=useState(0);

return (

<div className="bg-white">

{/* HERO */}

<section className="bg-gradient-to-b from-sky-50 to-white py-24">

<Container>

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.6}}
className="max-w-4xl"
>

<span className="inline-block rounded-full bg-cyan-50 border border-cyan-200 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-700">

AEO & GEO SERVICES

</span>

<h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">

Get Found When People Ask AI,
<span className="text-cyan-600">
Not Just Google
</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

Your customers stopped Googling.

They started asking ChatGPT, Gemini, Claude and Perplexity.

Make sure your business becomes the answer AI recommends.

</p>

<div className="mt-10 flex flex-wrap gap-5">

<Button>

Get Your Free AI Visibility Audit

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</motion.div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-4xl font-black">

Your Customers
<span className="text-cyan-600">
Stopped Googling.
</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

Here's something nobody told you:

right now someone is typing your exact service into ChatGPT.

Someone else is asking Perplexity who they should hire.

Google is answering questions before people even scroll.

</p>

<p>

In many of those answers, your business isn't mentioned.

That's not a traffic problem.

It's a visibility problem.

</p>

<p>

Welcome to AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)—

the strategies that determine whether AI recommends your business or your competitor's.

</p>

<p className="text-xl font-bold text-slate-900">

We make sure it's yours.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-4xl font-black">

AEO vs GEO

</h2>

<p className="mt-5 text-slate-600">

One earns the answer.

One earns the recommendation.

You need both.

</p>

</div>

<div className="mt-16 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl bg-white p-10 shadow">

<Search className="text-cyan-600"/>

<h3 className="mt-6 text-3xl font-bold">

Answer Engine Optimization

</h3>

<p className="mt-5 leading-8 text-slate-600">

AEO helps your content become the direct answer inside Google AI Overviews,
voice search and featured snippets.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<Bot className="text-cyan-600"/>

<h3 className="mt-6 text-3xl font-bold">

Generative Engine Optimization

</h3>

<p className="mt-5 leading-8 text-slate-600">

GEO helps ChatGPT, Gemini, Claude and Perplexity recognize and recommend your brand.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        WHAT WE DO

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Real Work.
        <span className="text-cyan-600">

          Real Visibility.

        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        No jargon. No fake AI magic.
        We implement proven technical and content improvements
        that increase your visibility across AI search platforms.

      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {services.map((service, index) => {

        const Icon = service.icon;

        return (

          <motion.div

            key={index}

            whileHover={{ y: -8 }}

            className="rounded-3xl bg-white p-8 shadow-sm transition"

          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">

              <Icon className="text-cyan-600" />

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              {service.title}

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              {service.text}

            </p>

          </motion.div>

        );

      })}

    </div>

  </Container>

</section>

<section className="py-24">

  <Container>

    <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

      <div>

        <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

          RESULTS

        </span>

        <h2 className="mt-8 text-5xl font-black">

          What You
          <span className="text-cyan-600">

            Get

          </span>

        </h2>

        <p className="mt-8 text-lg leading-8 text-slate-600">

          Every optimization is focused on one thing:
          helping AI confidently recommend your business.

        </p>

      </div>

      <div className="space-y-6">

        {[
          "Your brand cited inside AI answers",
          "Higher trust before visitors reach your website",
          "Future-proof visibility across AI search",
          "Competitive advantage competitors can't copy overnight",
        ].map((item) => (

          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl border p-6"
          >

            <CheckCircle2 className="text-cyan-600" />

            <span className="text-lg">

              {item}

            </span>

          </div>

        ))}

      </div>

    </div>

  </Container>

</section>

{/* HOW IT WORKS */}

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        HOW IT WORKS

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Three Honest
        <span className="text-cyan-600">
          Steps
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        No confusing reports.
        No mystery.
        Just a simple process that improves your visibility in AI.

      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-3">

      <div className="rounded-3xl bg-white p-10 shadow">

        <div className="text-6xl font-black text-cyan-600">

          01

        </div>

        <h3 className="mt-8 text-2xl font-bold">

          Audit

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          We analyze how visible your business is across ChatGPT,
          Gemini, Perplexity and Google AI Overviews.

        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 shadow">

        <div className="text-6xl font-black text-cyan-600">

          02

        </div>

        <h3 className="mt-8 text-2xl font-bold">

          Optimize

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          We improve your content,
          schema,
          entity authority,
          crawlability and AI accessibility.

        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 shadow">

        <div className="text-6xl font-black text-cyan-600">

          03

        </div>

        <h3 className="mt-8 text-2xl font-bold">

          Track

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          We continuously measure AI mentions,
          citations and visibility improvements over time.

        </p>

      </div>

    </div>

  </Container>

</section>

{/* FAQ */}

<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<div className="text-center">

<h2 className="text-5xl font-black">

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

className="overflow-hidden rounded-2xl border"

>

<button

onClick={()=>setOpen(open===index?-1:index)}

className="flex w-full items-center justify-between p-7 text-left"

>

<h3 className="text-xl font-bold">

{faq.question}

</h3>

<ChevronDown

className={`transition ${
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

{/* CTA */}

<section className="bg-[#081120] py-28 text-white">

<Container>

<div className="mx-auto max-w-4xl text-center">

<span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">

READY TO BE THE ANSWER?

</span>

<h2 className="mt-8 text-5xl font-black leading-tight">

Your Competitors Are Still
Chasing Rankings.

<span className="block text-cyan-400">

You Can Own The Answer.

</span>

</h2>

<p className="mt-8 text-xl leading-9 text-slate-300">

Get your free AI Visibility Audit and discover exactly
where AI mentions your business,
where it doesn't,
and how to fix it.

</p>

<Button className="mt-12">

Book Your AI Visibility Audit

<ArrowRight className="ml-2 inline"/>

</Button>

<p className="mt-8 text-slate-400">

Because the future of search doesn't show a list.

It gives one answer.

Let's make it yours.

</p>

</div>

</Container>

</section>

</div>

);

};

export default AEOGeo;