import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPinned,
  Map,
  Navigation,
  CheckCircle2,
  ChevronDown,
  Sparkles,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const faqs = [
  {
    question: "What is AI-Driven Local GBP Ranking?",
    answer:
      "It's a Local SEO strategy that combines Google Business Profile optimization, location signals, authority backlinks, and AI-friendly optimization to improve local visibility.",
  },
  {
    question: "Can you guarantee Google Maps rankings?",
    answer:
      "No ethical SEO provider can guarantee rankings. We strengthen the signals that improve your chances of ranking higher over time.",
  },
  {
    question: "Who is this service for?",
    answer:
      "It's ideal for local businesses, agencies, restaurants, clinics, law firms, contractors, and any business targeting customers in a specific location.",
  },
  {
    question: "Does this help AI search too?",
    answer:
      "Yes. Strong local authority and consistent business signals improve visibility in both traditional search and AI-powered search experiences.",
  },
];

const LocalGBPRanking = () => {

const [open,setOpen]=useState(0);

return(

<div className="bg-white">

    <section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

LOCAL SEO • GOOGLE MAPS

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

AI-Driven

<span className="text-cyan-600">

Local GBP Ranking

</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

Build stronger visibility across Google Maps, Google Search, and AI-powered search platforms using modern Local SEO strategies, authority signals, and location optimization.

</p>

<Button className="mt-10">

Boost My Local Rankings

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

Local Search Has

<span className="text-cyan-600">

Changed

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

Customers no longer rely only on Google Maps listings.

They also ask ChatGPT, Gemini, Google AI, and Perplexity for local recommendations.

</p>

<p>

Modern local visibility depends on more than a complete Google Business Profile.

Authority, location consistency, brand trust, and AI-readable signals now matter more than ever.

</p>

<p>

Businesses with stronger local authority have a better chance of appearing in Maps, Search, and AI-generated recommendations.

</p>

<p className="font-bold text-slate-900">

Local SEO is no longer just about your address.

It's about proving your authority across the local web.

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

AI-Driven Local GBP Ranking?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

Our service combines Local SEO, Google Business Profile optimization, authority backlinks, geotagging, and AI-focused optimization into one complete strategy for long-term visibility.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-4">

<div className="rounded-3xl bg-white p-10 shadow-sm">

<MapPinned className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Google Business Profile

</h3>

<p className="mt-5 leading-8 text-slate-600">

Improve profile relevance, completeness, and local trust.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Map className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Location Signals

</h3>

<p className="mt-5 leading-8 text-slate-600">

Strengthen your geographic relevance with maps, pins, and local assets.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Navigation className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Authority Building

</h3>

<p className="mt-5 leading-8 text-slate-600">

Support local rankings with trusted backlinks and brand authority.

</p>

</div>

<div className="rounded-3xl bg-white p-10 shadow-sm">

<Sparkles className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

AI Visibility

</h3>

<p className="mt-5 leading-8 text-slate-600">

Prepare your business for AI-powered local search experiences.

</p>

</div>

</div>

</Container>

</section>

<section className="py-24">

<Container>

<div className="text-center">

<h2 className="text-5xl font-black">

Why This

<span className="text-cyan-600">

Matters

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2">

{[
"Google evaluates multiple local ranking signals.",
"AI systems trust businesses with stronger authority.",
"Consistent business information builds credibility.",
"Location relevance improves Maps visibility.",
"Quality backlinks strengthen local authority.",
"Brand trust influences AI recommendations."
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

Your Local SEO Package

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

We combine GBP optimization, geotagging, authority backlinks, and AI-ready local signals into one complete system.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-2">

{[
{
title:"Google Business Profile Optimization",
text:"Optimize business information, categories, services, descriptions, and local SEO best practices for better relevance."
},
{
title:"Google Geotagged Map",
text:"Create a custom geotagged map to reinforce your business location and improve geographic relevance."
},
{
title:"40 Geotagged Keyword Pins",
text:"Build keyword-focused location pins that connect your services with important local search areas."
},
{
title:"10 Driving Direction Points",
text:"Strengthen geographic relevance by creating strategic driving direction assets around your business."
},
{
title:"Google Photos Stacking",
text:"Optimize business photos with stronger location consistency and trust signals."
},
{
title:"DA 90+ Cloudflare Backlink",
text:"Add a high-authority Cloudflare backlink that supports indexing and strengthens website authority."
},
{
title:"DA 90+ GitHub Backlink",
text:"Create contextual GitHub assets that diversify your backlink profile naturally."
},
{
title:"Niche .Academy Backlink",
text:"Acquire relevant educational backlinks to improve topical authority whenever suitable opportunities exist."
},
{
title:"Niche .Institute Backlink",
text:"Strengthen subject relevance through contextual .institute backlinks in your industry."
},
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

Benefits Of

<span className="text-cyan-600">

Our Local SEO

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"Better Google Maps Visibility",
"Improved Local Rankings",
"Stronger Website Authority",
"Enhanced Geographic Relevance",
"Greater Brand Trust",
"Better AI Search Visibility"
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

<section className="bg-slate-50 py-24">

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
"Local Businesses",
"Medical Clinics",
"Law Firms",
"Real Estate Agencies",
"Restaurants",
"Home Service Providers",
"Contractors",
"Retail Stores",
"Growing Small Businesses"
].map(item=>(

<div
key={item}
className="rounded-3xl border bg-white p-8 text-center shadow-sm"
>

<MapPinned className="mx-auto text-cyan-600"/>

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

Our

<span className="text-cyan-600">

Process

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

A simple, transparent workflow focused on building long-term local authority.

</p>

</div>

<div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

{[
"Analyze your Google Business Profile",
"Research local competitors",
"Optimize GBP information",
"Build maps, pins & location assets",
"Create authority backlinks",
"Deliver a detailed completion report"
].map((step,index)=>(

<div
key={step}
className="rounded-3xl border bg-white p-10 shadow-sm"
>

<div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 font-bold text-white">

{index+1}

</div>

<h3 className="mt-6 text-2xl font-bold">

{step}

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

Build

<span className="text-cyan-600">

Stronger Local Authority

</span>

</h2>

<p className="mt-8 text-xl leading-9 text-slate-600">

Our AI-Driven Local GBP Ranking service combines Google Business Profile optimization, geotagged assets, authority backlinks, and local SEO best practices to strengthen your visibility across Google Search, Google Maps, and AI-powered search experiences.

</p>

<div className="mt-16 grid gap-6 md:grid-cols-2">

{[
"Google Maps Authority",
"Consistent Local Signals",
"Higher Business Trust",
"Future-Ready AI Visibility"
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

        <p className="mt-6 text-lg text-slate-600">

          Common questions about our AI-Driven Local GBP Ranking service.

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

        LOCAL SEO • GOOGLE MAPS

      </span>

      <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">

        Build Local Authority

        <span className="block text-cyan-400">

          That Customers & AI Trust

        </span>

      </h2>

      <p className="mt-8 text-xl leading-9 text-slate-300">

        Strong local rankings are built through accurate Google Business Profile optimization, geographic relevance, authority backlinks, and AI-ready business signals. We help create a stronger foundation that supports long-term growth across Google Maps, Search, and AI-powered search experiences.

      </p>

      <Button className="mt-12">

        Optimize My Google Business Profile

        <ArrowRight className="ml-2 inline" />

      </Button>

      <p className="mt-8 text-slate-400">

        Strengthen your local presence, attract more nearby customers,
        and prepare your business for the future of AI-driven local search.

      </p>

    </div>

  </Container>

</section>

</div>

);

};

export default LocalGBPRanking;