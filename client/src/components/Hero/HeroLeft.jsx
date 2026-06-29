import AiPlatforms from "../Shared/AiPlatforms";
import FeatureItem from "./FeatureItem";

const HeroLeft = () => {
  return (
    <div>

      <span className="inline-block rounded-full border border-sky-300 bg-sky-50 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-sky-700">

        FREE • 60 Seconds • No Credit Card

      </span>

      <h2 className="heading mt-6 text-4xl font-extrabold leading-none lg:text-5xl">

      Is LLMs Sending Customers to Your Business {" "}
       
        <span className=" text-cyan-600">

           - or to Your Competitors?

        </span>

      </h2>

      <p className="mt-3 max-w-xl text-lg leading-8 text-gray-600">

     Every day, B2B buyers ask LLMs who to trust before they buy. If your business isn't showing up in those conversations, your competitors probably are. Discover how your brand performs across today's leading AI platforms and uncover the opportunities you're missing.
      </p>

      <div className="mt-8 space-y-4">

        <FeatureItem>
          AI Brand Visibility Score - check 0–100 score in all LLMs Engines
        </FeatureItem>

        <FeatureItem>
Competitive AI Snapshot - See which brands AI mentions first

        </FeatureItem>

        <FeatureItem>
         Missed Opportunity Report- Estimate the potential leads and revenue you're losing
        </FeatureItem>

        <FeatureItem>
         Platforms AI Analysis- ChatGPT, Gemini, Claude, and Perplexity 
        </FeatureItem>

      </div>

     <div className="flex justify-start opacity-50">
  <AiPlatforms title="Supported AI Platforms" />
</div>
    </div>
  );
};

export default HeroLeft;