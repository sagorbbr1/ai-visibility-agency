import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Bot,
  Globe,
  Network,
  Building2,
  CheckCircle2,
  ChevronDown,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import LLMVisibilityImg from "../assets/images/llmvis.png";
const faqs = [
  {
    question: "What is LLM Visibility?",
    answer:
      "LLM Visibility is how frequently AI models like ChatGPT, Gemini, Claude and Perplexity recognize, trust and recommend your brand.",
  },
  {
    question: "Is this different from SEO?",
    answer:
      "Yes. SEO helps webpages rank in search engines. LLM Visibility helps your brand become part of AI-generated recommendations.",
  },
  {
    question: "What are Authority Mentions?",
    answer:
      "Authority Mentions are trusted references to your brand across news sites, industry blogs, directories, reviews and expert content.",
  },
  {
    question: "How long does it take?",
    answer:
      "Authority builds over time. Technical improvements happen quickly, while strong AI recognition usually grows over several months.",
  },
  {
    question: "Which AI models benefit?",
    answer:
      "ChatGPT, Google Gemini, Claude, Perplexity and other LLM-powered search experiences.",
  },
];

const services = [
  {
    icon: Globe,
    title: "Authority Mapping",
    text: "We identify where your brand is currently mentioned and how AI understands your business.",
  },
  {
    icon: Quote,
    title: "Mention Strategy",
    text: "Build a roadmap for earning mentions on trusted industry sources.",
  },
  {
    icon: Building2,
    title: "Authority Building",
    text: "Expand your presence across editorial websites, directories and trusted platforms.",
  },
  {
    icon: Network,
    title: "AI Pattern Reinforcement",
    text: "Keep your brand positioning consistent across the web so AI learns who you are.",
  },
  {
    icon: Brain,
    title: "Visibility Tracking",
    text: "Monitor how AI mentions your business and continuously improve your authority.",
  },
];

const LLMVisibility = () => {

const [open,setOpen]=useState(0);

return (

<div className="bg-white"> <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<motion.div

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:.6}}

className="max-w-4xl"

>

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

LLM VISIBILITY

</span>

<h1 className="mt-8 text-4xl font-black leading-tight lg:text-5xl">

Get Your Brand

<span className="text-cyan-600">

Recognized Inside

</span>

AI Answers

</h1>

<div className="mt-8 text-lg leading-9 text-slate-600">
  <img className="mx-auto" src={LLMVisibilityImg} alt="LLM Visibility" />
</div>

<p className="mt-8 text-xl leading-9 text-slate-600">

Customers no longer search the web.

They ask AI who to trust.

We make sure your brand becomes one of the answers.

</p>

<div className="mt-10">

<Button>

Improve My AI Visibility

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</motion.div>

</Container>

</section>
<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

AI Doesn't Browse.

<span className="text-cyan-600">

It Recommends.

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

People don't click ten search results anymore.

They ask ChatGPT,

Gemini,

Claude,

or Perplexity who they should trust.

</p>

<p>

If your brand isn't mentioned inside those answers,

you don't exist in that buying decision.

</p>

<p>

LLM Visibility is about making your business recognizable,

trusted,

and consistently recommended by AI.

</p>

<p className="text-xl font-bold text-slate-900">

Recognition becomes recommendation.

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

LLM Visibility?

</span>

</h2>

<p className="mt-6 text-lg text-slate-600">

Being recognized,

trusted,

and recommended by Large Language Models.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl bg-white p-10 shadow">

<Bot className="text-cyan-600"/>

<h3 className="mt-6 text-3xl font-bold">

Traditional SEO

</h3>

<p className="mt-5 leading-8 text-slate-600">

SEO focuses on webpages,

keywords,

and rankings.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-3xl font-bold">

LLM Visibility

</h3>

<p className="mt-5 leading-8 text-slate-600">

LLMs recommend brands they recognize,

trust,

and repeatedly encounter across credible sources.

</p>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Authority

<span className="text-cyan-600">

Mentions

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

Authority mentions are trusted references to your business across the web.

The more credible places your brand appears,

the stronger AI's confidence becomes.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"Industry Articles",
"News Websites",
"Review Platforms",
"Educational Resources",
"Expert Roundups",
"Trusted Directories"
].map((item,index)=>(

<div

key={index}

className="rounded-3xl border p-8 text-center"

>

<ShieldCheck className="mx-auto text-cyan-600"/>

<h3 className="mt-6 text-xl font-bold">

{item}

</h3>

</div>

))}

</div>

</Container>

</section>

{/* WHY AUTHORITY MENTIONS MATTER */}

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

WHY IT MATTERS

</span>

<h2 className="mt-8 text-5xl font-black">

Authority Mentions Build

<span className="text-cyan-600">

AI Trust

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

AI doesn't rank websites the way Google does.

It looks for patterns of credibility, consistency and authority.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

{[
"Recognize your brand as trustworthy",
"Recommend your company more often",
"Describe your expertise confidently",
"Prefer your business over unknown competitors"
].map((item,index)=>(

<div
key={index}
className="flex items-center gap-5 rounded-3xl bg-white p-8 shadow-sm"
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
<section className="py-24">

<Container>

<div className="mx-auto max-w-5xl">

<div className="text-center">

<h2 className="text-5xl font-black">

The Problem Most
<span className="text-cyan-600">

Businesses Face

</span>

</h2>

</div>

<div className="mt-16 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl border border-red-100 bg-red-50 p-10">

<h3 className="text-2xl font-bold text-red-700">

What Businesses Think

</h3>

<p className="mt-6 text-lg leading-8 text-slate-600">

"We have a website.

AI will eventually find us."

</p>

</div>

<div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-10">

<h3 className="text-2xl font-bold text-cyan-700">

Reality

</h3>

<p className="mt-6 text-lg leading-8 text-slate-600">

LLMs learn from repeated authority signals across trusted sources.

Without those signals,

your business remains invisible.

</p>

</div>

</div>

<div className="mt-16 grid gap-6 lg:grid-cols-2">

{[
"No AI mentions",
"Weak authority signals",
"Competitors recommended instead",
"Missing from AI answers"
].map(item=>(

<div
key={item}
className="rounded-2xl border p-6 flex items-center gap-4"
>

<CheckCircle2 className="text-cyan-600"/>

<span>

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

LLM Visibility

<span className="text-cyan-600">

Engineering

</span>

</h2>

<p className="mt-6 text-lg text-slate-600">

We engineer authority signals that help AI understand,

recognize and recommend your brand.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

{services.map((service,index)=>{

const Icon=service.icon;

return(

<motion.div

key={index}

whileHover={{y:-8}}

className="rounded-3xl bg-white p-8 shadow"

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

RESULTS

</span>

<h2 className="mt-8 text-5xl font-black">

What You

<span className="text-cyan-600">

Get

</span>

</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">

A stronger brand presence across AI platforms that grows over time.

</p>

</div>

<div className="space-y-6">

{[
"AI Visibility Audit",
"Authority Mention Gap Analysis",
"Competitor Visibility Breakdown",
"Custom Mention Strategy",
"Recognition Improvement Plan",
"Monthly AI Visibility Tracking"
].map(item=>(

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

SEO vs

<span className="text-cyan-600">

LLM Visibility

</span>

</h2>

</div>

<div className="mt-16 overflow-hidden rounded-3xl border">

<table className="w-full">

<thead className="bg-slate-900 text-white">

<tr>

<th className="p-6 text-left">

SEO

</th>

<th className="p-6 text-left">

LLM Visibility

</th>

</tr>

</thead>

<tbody>

<tr className="border-t">

<td className="p-6">

Google Rankings

</td>

<td className="p-6">

AI Answers

</td>

</tr>

<tr className="border-t">

<td className="p-6">

Keywords

</td>

<td className="p-6">

Brand Mentions

</td>

</tr>

<tr className="border-t">

<td className="p-6">

Clicks

</td>

<td className="p-6">

Recommendations

</td>

</tr>

<tr className="border-t">

<td className="p-6">

Web Pages

</td>

<td className="p-6">

Knowledge Patterns

</td>

</tr>

</tbody>

</table>

</div>

</Container>

</section>

{/* WHO THIS IS FOR */}

<section className="py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        WHO THIS IS FOR

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Built For Brands That
        <span className="text-cyan-600">

          Want AI Recognition

        </span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        If customers ask AI for recommendations in your industry,
        your business should be part of the answer.

      </p>

    </div>

    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        "SaaS Companies",
        "Digital Agencies",
        "Startups",
        "Local Service Businesses",
        "E-commerce Brands",
        "Personal Brands",
      ].map((item) => (

        <motion.div
          key={item}
          whileHover={{ y: -8 }}
          className="rounded-3xl border bg-white p-8 text-center shadow-sm"
        >

          <Sparkles className="mx-auto text-cyan-600" size={34} />

          <h3 className="mt-6 text-xl font-bold">

            {item}

          </h3>

        </motion.div>

      ))}

    </div>

  </Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Everything You Need To

<span className="text-cyan-600">

Increase AI Visibility

</span>

</h2>

</div>

<div className="mx-auto mt-20 max-w-5xl grid gap-6 md:grid-cols-2">

{[
"AI Visibility Audit",
"Authority Mention Gap Analysis",
"Competitor Visibility Breakdown",
"Custom Mention Building Strategy",
"AI Recognition Improvement Plan",
"Monthly Visibility Tracking"
].map((item)=>(

<div

key={item}

className="flex items-center gap-4 rounded-2xl border bg-white p-6"

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

<section className="bg-[#081120] py-28 text-white">

<Container>

<div className="mx-auto max-w-4xl text-center">

<span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">

LLM VISIBILITY

</span>

<h2 className="mt-8 text-5xl font-black leading-tight">

If AI Doesn't Know

<span className="block text-cyan-400">

Your Brand,

</span>

Your Customers Won't Either.

</h2>

<p className="mt-8 text-xl leading-9 text-slate-300">

The next generation of visibility isn't about ranking websites.

It's about becoming part of AI's trusted knowledge.

We help your brand become recognized,

trusted,

and recommended inside AI answers.

</p>

<Button className="mt-12">

Start Building AI Authority

<ArrowRight className="ml-2 inline"/>

</Button>

<p className="mt-8 text-slate-400">

Let's make your business one of the brands AI confidently recommends.

</p>

</div>

</Container>

</section>

</div>

);

};

export default LLMVisibility;