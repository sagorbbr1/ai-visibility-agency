import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Link2,
  Globe,
  Bot,
  Brain,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "What is AI Link-Building?",
    answer:
      "AI Link-Building combines authority signals, contextual mentions, entities, and high-quality backlinks to improve both SEO and AI visibility.",
  },
  {
    question: "Is this different from traditional link-building?",
    answer:
      "Yes. Instead of focusing only on backlinks, it strengthens your entire digital authority across trusted platforms.",
  },
  {
    question: "Which AI platforms benefit from this?",
    answer:
      "ChatGPT, Google AI Overviews, Gemini, Claude, Perplexity, Bing Copilot and future AI search engines.",
  },
  {
    question: "Is this safe?",
    answer:
      "Yes. We use white-hat, contextual and authority-focused strategies instead of spammy backlink techniques.",
  },
];

const AiLinkBuilding = () => {

const [open,setOpen]=useState(0);

return(

<div className="bg-white">

    <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

AI LINK BUILDING

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

Build Authority That

<span className="text-cyan-600">

AI Understands

</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

Traditional backlink building is no longer enough.

Modern AI systems evaluate brands through authority signals,
entity recognition,
mentions,
and contextual trust across the web.

</p>

<Button className="mt-10">

Build My Authority

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

Ranking is no longer determined only by backlinks.

AI systems analyze how your brand appears across the entire web.

</p>

<p>

Mentions,

entities,

context,

platform diversity,

and trust signals all influence AI recommendations.

</p>

<p>

If your brand exists only on your own website,

AI has very little evidence to trust it.

</p>

<p className="font-bold text-slate-900">

Authority is no longer built in one place.

It's built across the web.

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

AI Link-Building?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

AI Link-Building creates a complete authority ecosystem using contextual mentions,
entity signals,
trusted platforms,
and AI-friendly references.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Link2 className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Authority Links

</h3>

<p className="mt-5 leading-8 text-slate-600">

Build high-quality contextual backlinks.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Brain className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Entity Signals

</h3>

<p className="mt-5 leading-8 text-slate-600">

Strengthen how AI recognizes your brand.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Bot className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

AI Visibility

</h3>

<p className="mt-5 leading-8 text-slate-600">

Increase your chances of appearing in AI-generated answers.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Globe className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Platform Diversity

</h3>

<p className="mt-5 leading-8 text-slate-600">

Expand your authority across trusted websites.

</p>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Why It

<span className="text-cyan-600">

Matters

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2">

{[
"Search engines trust diversified authority.",
"AI evaluates brands using entity signals.",
"Contextual mentions improve recognition.",
"Community discussions strengthen trust.",
"Platform diversity creates stronger visibility.",
"Modern SEO is about authority ecosystems."
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

WHAT'S INCLUDED

</span>

<h2 className="mt-8 text-5xl font-black">

Everything Included In

<span className="text-cyan-600">

AI Link-Building

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

A complete authority-building system designed for modern search engines and AI platforms.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

{[
{
title:"Profile Entity Creation",
text:"Create optimized brand profiles across trusted platforms that strengthen entity recognition and establish your online identity."
},
{
title:"Blog Entity Mentions",
text:"Publish contextual blog content where your brand appears naturally as a trusted entity within your niche."
},
{
title:"Reddit Backlinks",
text:"Earn contextual Reddit mentions that improve trust signals, community engagement and AI visibility."
},
{
title:"Quora Brand Mentions",
text:"Answer relevant questions with natural brand references to build topical authority and visibility."
},
{
title:"AI-Powered Web 2.0",
text:"Create optimized Web 2.0 properties that support SEO, keyword clusters and AI understanding."
},
{
title:"Cloud Stacking",
text:"Build authority using trusted cloud properties that reinforce indexing, consistency and digital trust."
}
].map((item)=>(
<div
key={item.title}
className="rounded-3xl border bg-white p-10 shadow-sm"
>

<Sparkles className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

{item.title}

</h3>

<p className="mt-5 leading-8 text-slate-600">

{item.text}

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

Why This

<span className="text-cyan-600">

Works

</span>

</h2>

</div>

<div className="mt-20 grid gap-6 md:grid-cols-2">

{[
"Entity recognition",
"Brand mentions",
"Contextual relevance",
"User-generated discussions",
"Platform diversity",
"Natural authority growth"
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

Benefits Of

<span className="text-cyan-600">

AI Link-Building

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"Stronger Brand Authority",
"Better Google Rankings",
"Improved AI Visibility",
"More Brand Mentions",
"Higher Trust Signals",
"Diversified Link Profile"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-10 text-center shadow-sm"
>

<CheckCircle2 className="mx-auto text-cyan-600"/>

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

Who Is This

<span className="text-cyan-600">

For?

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

{[
"SEO Agencies",
"SaaS Companies",
"Affiliate Marketers",
"Local Businesses",
"Startups",
"Personal Brands"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-8 text-center shadow-sm"
>

<Bot className="mx-auto text-cyan-600"/>

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

<div className="mx-auto max-w-5xl text-center">

<h2 className="text-5xl font-black">

The

<span className="text-cyan-600">

Final Result

</span>

</h2>

<p className="mt-8 text-xl leading-9 text-slate-600">

Instead of relying on a single backlink strategy,
you build a complete authority ecosystem powered by profiles,
blog entities,
community discussions,
Web 2.0 properties,
cloud platforms,
and contextual mentions.

</p>

<div className="mt-16 grid gap-6 md:grid-cols-2">

{[
"Trusted Across Multiple Platforms",
"Recognized By AI Systems",
"Better Search Visibility",
"Long-Term Authority Growth"
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

        AI AUTHORITY BUILDING

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

        Build Authority That

        <span className="block text-cyan-400">

          Search Engines & AI Trust

        </span>

      </h2>

      <p className="mt-8 text-xl leading-9 text-slate-300">

        Modern SEO is no longer about collecting random backlinks.
        It's about building a complete authority ecosystem with entity signals,
        contextual mentions, trusted platforms, and AI-readable brand footprints.

      </p>

      <Button className="mt-12">

        Start My AI Link-Building Strategy

        <ArrowRight className="ml-2 inline"/>

      </Button>

      <p className="mt-8 text-slate-400">

        Grow your authority, improve AI visibility, and create long-term rankings
        that are built for the future of search.

      </p>

    </div>

  </Container>

</section>

</div>

);

};

export default AiLinkBuilding;