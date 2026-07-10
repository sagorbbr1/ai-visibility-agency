import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
   LinkIcon,
  Bot,
  Brain,
  CheckCircle2,
  ChevronDown,
  FileText,
  Sparkles,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "Why LinkedIn for AI visibility?",
    answer:
      "LinkedIn is one of the most trusted professional publishing platforms and AI systems frequently use structured public content when understanding brands.",
  },
  {
    question: "Are these AI-generated posts?",
    answer:
      "No. Every listicle is written naturally for humans while remaining AI-friendly.",
  },
  {
    question: "Why listicles?",
    answer:
      "Because AI models understand structured content much faster than long unstructured articles.",
  },
  {
    question: "Do you research my industry?",
    answer:
      "Yes. Every topic is planned around your niche, audience and competitors.",
  },
];

const LinkedInListicles = () => {

const [open,setOpen]=useState(0);

return(

<div className="bg-white"> <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

LINKEDIN AI CONTENT

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

LinkedIn Listicles

<span className="text-cyan-600">

For AI Citations

</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

Get your brand noticed by ChatGPT,
Google AI,
Gemini,
Claude and Perplexity with structured LinkedIn content designed for AI visibility.

</p>

<Button className="mt-10">

Build My AI Presence

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>
<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

SEO Alone

<span className="text-cyan-600">

Isn't Enough

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

Search has changed.

People now ask AI tools instead of browsing dozens of websites.

</p>

<p>

If your brand isn't part of the information AI understands,

it won't recommend your business.

</p>

<p>

That's why we create LinkedIn Listicles specifically designed for AI visibility.

</p>

<p className="font-bold text-slate-900">

Clear content.

Better understanding.

More AI citations.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Why

<span className="text-cyan-600">

LinkedIn?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

LinkedIn is one of the world's most trusted professional publishing platforms.

Its structured content makes it easier for AI systems to understand your expertise.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

<div className="rounded-3xl bg-white p-10 shadow">

<LinkIcon className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Professional Authority

</h3>

<p className="mt-5 leading-8 text-slate-600">

Build credibility on a platform trusted by professionals worldwide.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

AI-Friendly Format

</h3>

<p className="mt-5 leading-8 text-slate-600">

Simple headings and structured lists help AI understand your content faster.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow">

<Bot className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

More AI Citations

</h3>

<p className="mt-5 leading-8 text-slate-600">

Increase your chances of being referenced inside AI-generated answers.

</p>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

How It Improves

<span className="text-cyan-600">

AI Visibility

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2">

{[
"AI understands your topics more clearly",
"Your brand becomes easier to reference",
"Better visibility inside AI answers",
"Increased authority in your niche"
].map((item)=>(

<div

key={item}

className="flex items-center gap-5 rounded-3xl border p-8"

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

WHAT YOU GET

</span>

<h2 className="mt-8 text-5xl font-black">

50 LinkedIn

<span className="text-cyan-600">

AI-Friendly Listicles

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

Every post is designed to increase your visibility,
authority and chances of being cited by AI systems.

</p>

</div>

<div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{[
"50 LinkedIn Posts",
"AI-Friendly Structure",
"Powerful Headlines",
"Industry Topics",
"Natural Keywords",
"Professional Tone",
"Human Written",
"Ready To Publish"
].map(item=>(

<div
key={item}
className="rounded-3xl bg-white p-8 shadow-sm border"
>

<FileText className="text-cyan-600"/>

<h3 className="mt-6 text-xl font-bold">

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

Not Just

<span className="text-cyan-600">

Content Writing

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl border border-red-100 bg-red-50 p-10">

<h3 className="text-2xl font-bold text-red-700">

Most Writers

</h3>

<ul className="mt-8 space-y-5 text-slate-600">

<li>Random topics</li>

<li>Generic AI text</li>

<li>No strategy</li>

<li>No AI optimization</li>

<li>Forgettable content</li>

</ul>

</div>

<div className="rounded-3xl border border-cyan-100 bg-cyan-50 p-10">

<h3 className="text-2xl font-bold text-cyan-700">

Our Process

</h3>

<ul className="mt-8 space-y-5 text-slate-700">

<li>Research-driven topics</li>

<li>AI-friendly formatting</li>

<li>Authority building</li>

<li>Industry positioning</li>

<li>Designed for AI citations</li>

</ul>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

<Container>

<div className="mx-auto max-w-5xl text-center">

<h2 className="text-5xl font-black">

Why This

<span className="text-cyan-600">

Matters Today

</span>

</h2>

<p className="mt-8 text-xl leading-9 text-slate-600">

People aren't only searching Google anymore.

They're asking AI which company they should trust.

If your content isn't structured for AI,
your competitors will own those recommendations.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"Lost Traffic",
"Lost Leads",
"Lost Opportunities"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-10 text-center shadow-sm"
>

<Bot className="mx-auto text-cyan-600"/>

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

Who Is

<span className="text-cyan-600">

This For?

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

{[
"Startups",
"Business Owners",
"Marketing Agencies",
"Consultants",
"Personal Brands",
"E-commerce Companies"
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

<div className="grid gap-20 lg:grid-cols-2 lg:items-center">

<div>

<h2 className="text-5xl font-black">

The Results

<span className="text-cyan-600">

You'll Get

</span>

</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">

Consistent LinkedIn publishing builds long-term AI visibility,
industry authority and stronger brand recognition.

</p>

</div>

<div className="space-y-5">

{[
"Easier for AI to understand",
"Better AI visibility",
"Stronger authority",
"More trusted brand",
"Higher chance of AI citations",
"Future-proof online presence"
].map(item=>(

<div
key={item}
className="flex items-center gap-4 rounded-2xl border bg-white p-6"
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

Everything you need to know before getting started.

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

AI CONTENT STRATEGY

</span>

<h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

Create Content

<span className="block text-cyan-400">

That AI Understands

</span>

</h2>

<p className="mt-8 text-xl leading-9 text-slate-300">

Search is changing faster than ever.

Businesses that publish structured,

AI-friendly content today will become the brands AI recommends tomorrow.

</p>

<Button className="mt-12">

Start My LinkedIn Strategy

<ArrowRight className="ml-2 inline"/>

</Button>

<p className="mt-8 text-slate-400">

50 professionally written LinkedIn listicles designed to improve AI visibility,

authority,

and future search performance.

</p>

</div>

</Container>

</section>

</div>

);

};

export default LinkedInListicles;