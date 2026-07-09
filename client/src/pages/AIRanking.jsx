import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Search,
  Trophy,
  Database,
  Network,
  CheckCircle2,
  ChevronDown,
  Target,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "What is AI Ranking?",
    answer:
      "AI Ranking is how prominently AI platforms like ChatGPT, Gemini and Google AI recommend your business when someone asks about your service.",
  },
  {
    question: "Is AI Ranking the same as SEO?",
    answer:
      "No. SEO helps you rank on search engines. AI Ranking helps you become one of the businesses AI recommends inside its answers.",
  },
  {
    question: "How long does it take?",
    answer:
      "Technical improvements can appear within weeks, while authority and AI recommendations usually strengthen over 2–4 months.",
  },
  {
    question: "Do I still need SEO?",
    answer:
      "Absolutely. SEO remains your foundation, while AI Ranking builds on top of it.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "ChatGPT, Google AI Overviews, Gemini, Claude, Perplexity and Microsoft Copilot.",
  },
];

const services = [
  {
    icon: Brain,
    title: "AI Readable Content",
    text: "We rewrite pages into clear, structured information AI understands.",
  },
  {
    icon: Trophy,
    title: "Authority Signals",
    text: "Build trust signals so AI recognizes your brand as credible.",
  },
  {
    icon: Bot,
    title: "AI Crawlers",
    text: "Optimize robots.txt, llms.txt and crawler accessibility.",
  },
  {
    icon: Database,
    title: "Structured Data",
    text: "Schema helps AI understand exactly who you are.",
  },
  {
    icon: Network,
    title: "Platform Optimization",
    text: "Different AI engines rank differently. We optimize for each one.",
  },
];

const AIRanking = () => {

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

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

AI RANKING

</span>

<h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 lg:text-7xl">

Get Ranked Inside
<span className="text-cyan-600">

AI Answers,

</span>

Not Just Google

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

The new #1 position isn't Google's first page anymore.

It's inside ChatGPT, Gemini, Perplexity and AI Overviews.

We help your business earn that spot.

</p>

<div className="mt-10">

<Button>

Get My AI Ranking Check

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</motion.div>

</Container>

</section>

{/* STORY */}

<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

There's A New

<span className="text-cyan-600">

#1 Spot.

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

For years everyone fought to reach Google's first page.

Today, customers ask AI a question and receive one trusted answer.

</p>

<p>

ChatGPT, Gemini, Perplexity and Google's AI don't show ten blue links first.

They recommend only a handful of businesses.

</p>

<p>

AI Ranking is the work that puts your business inside those recommendations.

</p>

<p className="text-xl font-bold text-slate-900">

It's where the next generation of visibility begins.

</p>

</div>

</div>

</Container>

</section>

{/* WHAT IS AI RANKING */}

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

What Is

<span className="text-cyan-600">

AI Ranking?

</span>

</h2>

<p className="mt-6 text-lg text-slate-600">

Being one of the businesses AI trusts enough to recommend.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl bg-white p-10 shadow">

<Search className="text-cyan-600"/>

<h3 className="mt-6 text-3xl font-bold">

Traditional SEO

</h3>

<p className="mt-5 leading-8 text-slate-600">

Google ranks web pages.

People browse multiple links before making a decision.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<Target className="text-cyan-600"/>

<h3 className="mt-6 text-3xl font-bold">

AI Ranking

</h3>

<p className="mt-5 leading-8 text-slate-600">

AI silently ranks trusted businesses and recommends only the best few.

Your goal is to become one of them.

</p>

</div>

</div>

</Container>

</section>

{/* WHY GOOGLE ISN'T ENOUGH */}

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Google Ranking
<span className="text-cyan-600">

Isn't Enough

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-4">

{[
"AI answers appear above search results.",
"People trust AI recommendations.",
"Google ranking doesn't guarantee AI mentions.",
"AI Ranking gets your business chosen."
].map((item,index)=>(

<div
key={index}
className="rounded-3xl border p-8"
>

<div className="text-5xl font-black text-cyan-600">

0{index+1}

</div>

<p className="mt-6 text-lg leading-8">

{item}

</p>

</div>

))}

</div>

</Container>

</section>

{/* WHAT WE DO */}

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        HOW WE DO IT

      </span>

      <h2 className="mt-8 text-5xl font-black">

        How We Get You Ranked
        <span className="text-cyan-600">
          Inside AI
        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        AI doesn't randomly recommend businesses.
        We improve the signals AI uses to decide who deserves the top spot.

      </p>

    </div>

    <div className="mt-20 grid gap-8 lg:grid-cols-2">

      {services.map((service,index)=>{

        const Icon=service.icon;

        return(

          <motion.div

          key={index}

          whileHover={{y:-8}}

          className="rounded-3xl bg-white p-8 shadow transition"

          >

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">

              <Icon className="text-cyan-600"/>

            </div>

            <h3 className="mt-6 text-2xl font-bold">

              {service.title}

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              {service.text}

            </p>

          </motion.div>

        )

      })}

    </div>

  </Container>

</section>
<section className="py-24">

<Container>

<div className="grid gap-20 lg:grid-cols-2 lg:items-center">

<div>

<span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-700">

BENEFITS

</span>

<h2 className="mt-8 text-5xl font-black">

What Better
<span className="text-cyan-600">

AI Ranking

</span>

Gets You

</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">

Ranking inside AI answers means your customers already trust you before they ever visit your website.

</p>

</div>

<div className="space-y-6">

{[
"Your name appears inside AI answers.",
"Customers arrive already trusting your brand.",
"A competitive advantage most businesses don't have yet.",
"Long-term AI visibility as AI search continues to grow."
].map((item)=>(

<div

key={item}

className="flex items-center gap-4 rounded-2xl border p-6"

>

<CheckCircle2 className="text-cyan-600"/>

<span className="text-lg">

{item}

</span>

</div>

))}

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

How It

<span className="text-cyan-600">

Works

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

<div className="rounded-3xl bg-white p-10 shadow">

<div className="text-6xl font-black text-cyan-600">

01

</div>

<h3 className="mt-8 text-2xl font-bold">

Measure

</h3>

<p className="mt-5 leading-8 text-slate-600">

We check exactly where your business ranks inside ChatGPT,
Gemini,
Perplexity,
and Google AI.

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
authority signals,
and AI accessibility.

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

Monitor AI rankings continuously and keep improving your visibility.

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

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >

            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              className="flex w-full items-center justify-between p-7 text-left"
            >

              <h3 className="text-xl font-bold">

                {faq.question}

              </h3>

              <ChevronDown
                className={`transition duration-300 ${
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

<section className="bg-[#07111f] py-28 text-white">

  <Container>

    <div className="mx-auto max-w-4xl text-center">

      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">

        READY TO RANK WHERE IT MATTERS?

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

        The New #1 Spot
        <span className="block text-cyan-400">

          Lives Inside AI.

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">

        Your competitors are still fighting for Google's blue links.

        You can win the recommendation that customers actually see first.

      </p>

      <Button className="mt-12">

        Get My AI Ranking Check

        <ArrowRight className="ml-2 inline" />

      </Button>

      <p className="mt-8 text-slate-400">

        We'll show exactly where AI ranks your business today,
        what's holding you back,
        and the fastest path to higher AI visibility.

      </p>

    </div>

  </Container>

</section>

</div>

);

};

export default AIRanking;