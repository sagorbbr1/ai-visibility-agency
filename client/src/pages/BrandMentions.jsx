import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
ArrowRight,
Quote,
Building2,
Globe,
ShieldCheck,
CheckCircle2,
ChevronDown,
Newspaper,
Star
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

const BrandMentions=()=>{

const [open,setOpen]=useState(0);

const faqs=[
{
question:"What are Brand Mentions?",
answer:"Brand Mentions are references to your business across trusted websites, even without backlinks."
},
{
question:"Do Brand Mentions help SEO?",
answer:"Yes. They improve authority, trust signals and overall brand recognition."
},
{
question:"Are these spam links?",
answer:"No. We only focus on real editorial mentions from relevant websites."
},
{
question:"How long before I see results?",
answer:"Brand awareness begins immediately while SEO authority grows over time."
}
];

return(

<div className="bg-white"><section className="bg-gradient-to-b from-cyan-50 to-white py-24">

<Container>

<div className="max-w-4xl">

<span className="inline-block rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

BRAND MENTIONS

</span>

<h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

Brand Mentions

<span className="text-cyan-600">

On Reputable Platforms

</span>

</h1>

<p className="mt-8 text-xl leading-9 text-slate-600">

Most brands don't fail because they're bad.

They fail because nobody talks about them in the places that matter.

</p>

<Button className="mt-10">

Build My Brand Authority

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>
<section className="py-24">

<Container>

<div className="mx-auto max-w-4xl">

<h2 className="text-5xl font-black">

People Trust

<span className="text-cyan-600">

Brands They See.

</span>

</h2>

<div className="mt-10 space-y-8 text-lg leading-9 text-slate-600">

<p>

Customers compare.

They research.

They choose businesses they've already seen mentioned online.

</p>

<p>

If your brand isn't appearing across reputable platforms,

people hesitate.

</p>

<p>

Real editorial mentions create credibility long before someone visits your website.

</p>

<p className="font-bold text-slate-900">

Recognition builds trust.

Trust drives sales.

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

Brand Mentions?

</span>

</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

A Brand Mention is when your business is referenced on another trusted website—
with or without a backlink.

</p>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

{[
"Industry Blogs",
"News Publications",
"Comparison Articles",
"Expert Roundups",
"Business Directories",
"Trusted Forums"
].map(item=>(

<div

key={item}

className="rounded-3xl border bg-white p-8 text-center"

>

<Newspaper className="mx-auto text-cyan-600"/>

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

Why They

<span className="text-cyan-600">

Matter

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-3">

<div className="rounded-3xl border p-10">

<ShieldCheck className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Instant Trust

</h3>

<p className="mt-5 leading-8 text-slate-600">

People trust brands they repeatedly see on reputable websites.

</p>

</div>

<div className="rounded-3xl border p-10">

<Globe className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Better Search Signals

</h3>

<p className="mt-5 leading-8 text-slate-600">

Search engines use brand mentions as authority signals.

</p>

</div>

<div className="rounded-3xl border p-10">

<Star className="text-cyan-600"/>

<h3 className="mt-6 text-2xl font-bold">

Higher Conversions

</h3>

<p className="mt-5 leading-8 text-slate-600">

Customers convert faster when they already recognize your name.

</p>

</div>

</div>

</Container>

</section>

<section className="bg-slate-50 py-24">

  <Container>

    <div className="text-center">

      <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

        REPUTABLE PLATFORMS

      </span>

      <h2 className="mt-8 text-5xl font-black">

        Where We Get You
        <span className="text-cyan-600"> Mentioned</span>

      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

        We focus on quality over quantity. Every mention is placed where it can
        build real authority for your brand.

      </p>

    </div>

    <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        "High-Authority Blogs",
        "Digital News Publications",
        "Industry Websites",
        "Top 10 Lists",
        "Comparison Articles",
        "Business Directories",
        "Editorial Features",
        "Expert Roundups",
        "Trusted Community Sites",
      ].map((item) => (

        <div
          key={item}
          className="rounded-3xl border bg-white p-7 shadow-sm"
        >

          <CheckCircle2 className="text-cyan-600" />

          <h3 className="mt-5 text-xl font-bold">

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

</div>

<div className="mt-20 grid gap-8 lg:grid-cols-5">

{[
["01","Brand Analysis"],
["02","Platform Selection"],
["03","Content Placement"],
["04","Publication"],
["05","Reporting"]
].map(([number,title])=>(

<div
key={number}
className="rounded-3xl border bg-white p-8 text-center shadow-sm"
>

<div className="text-5xl font-black text-cyan-600">

{number}

</div>

<h3 className="mt-6 text-xl font-bold">

{title}

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

Why
<span className="text-cyan-600">

Choose Us

</span>

</h2>

</div>

<div className="mx-auto mt-20 max-w-5xl grid gap-6 md:grid-cols-2">

{[
"Real editorial content",
"Relevant industry websites",
"Natural brand integration",
"Long-term SEO value",
"White-hat strategies",
"No spam or low-quality placements"
].map((item)=>(

<div
key={item}
className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm"
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

<div className="text-center">

<h2 className="text-5xl font-black">

Who This Service Is
<span className="text-cyan-600">

For

</span>

</h2>

</div>

<div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

{[
"Startups",
"Growing Businesses",
"SEO Agencies",
"Local Companies",
"E-commerce Brands",
"Personal Brands"
].map((item)=>(

<div
key={item}
className="rounded-3xl border bg-white p-8 text-center shadow-sm"
>

<Building2 className="mx-auto text-cyan-600"/>

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

The Results You'll
<span className="text-cyan-600">

See

</span>

</h2>

<p className="mt-8 text-lg leading-8 text-slate-600">

Consistent brand mentions create stronger authority,
better visibility,
and increased customer trust.

</p>

</div>

<div className="space-y-5">

{[
"More branded Google searches",
"Higher customer trust",
"Better conversion rates",
"Improved industry authority",
"Stronger online reputation",
"Greater brand recognition"
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

<section className="bg-[#081120] py-28 text-white">

<Container>

<div className="mx-auto max-w-4xl text-center">

<span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.3em] text-cyan-300">

BUILD YOUR REPUTATION

</span>

<h2 className="mt-8 text-5xl font-black leading-tight">

Become The Brand
<span className="block text-cyan-400">

People Already Trust

</span>

</h2>

<p className="mt-8 text-xl leading-9 text-slate-300">

The strongest brands aren't just visible—they're talked about everywhere that matters.

Let's get your business featured on trusted platforms and build lasting authority.

</p>

<Button className="mt-12">

Start Building Brand Authority

<ArrowRight className="ml-2 inline"/>

</Button>

</div>

</Container>

</section>

</div>

);

};

export default BrandMentions;