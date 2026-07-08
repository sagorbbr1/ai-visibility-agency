import AiPlatforms from "../Shared/AiPlatforms";
import FeatureItem from "./FeatureItem";

const HeroLeft = () => {
  return (
    <div className="mx-auto max-w-5xl text-center">

    

      <h2 className="mt-6 text-3xl font-extrabold leading-tight lg:text-5xl">
        Are LLMs Sending Customers to
        <br />
        <span className="text-slate-900">Your Business</span>{" "}
        <span className="text-cyan-600">
          — or to Your Competitors?
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
        Every day, B2B buyers ask LLMs who to trust before they buy.
        If your business isn't showing up in those conversations,
        your competitors probably are. Discover how your brand performs
        across today's leading AI platforms and uncover the opportunities
        you're missing.
      </p>

      <div className="mx-auto mt-10 max-w-3xl space-y-4 text-left">

        <FeatureItem>
          AI Visibility Score — Get a 0–100 visibility score across today's leading AI platforms.
        </FeatureItem>

        <FeatureItem>
          Competitor AI Snapshot — See which brands AI recommends before yours.
        </FeatureItem>

        <FeatureItem>
          Missed Opportunity Report — Estimate the leads and revenue you're losing.
        </FeatureItem>

        <FeatureItem>
          Multi-Platform Analysis — ChatGPT, Gemini, Claude & Perplexity.
        </FeatureItem>

      </div>

      <div className="mt-12 flex justify-center">
        <AiPlatforms title="Supported AI Platforms" />
      </div>

    </div>
  );
};

export default HeroLeft;