import FeatureItem from "./FeatureItem";

const HeroLeft = () => {
  return (
    <div>

      <span className="inline-block rounded-full border border-sky-300 bg-sky-50 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-sky-700">

        FREE • 60 Seconds • No Credit Card

      </span>

      <h1 className="heading mt-6 text-5xl font-bold leading-tight lg:text-6xl">

        See How Often AI
        <br />

        Recommends You.

        <span className="block text-cyan-600">

          And Who It Picks Instead.

        </span>

      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">

        80% of buyers ask AI before making a purchase.

        Discover whether ChatGPT, Gemini and Perplexity
        recommend your business.

      </p>

      <div className="mt-10 space-y-4">

        <FeatureItem>
          AI Visibility Score
        </FeatureItem>

        <FeatureItem>
          Competitor Comparison
        </FeatureItem>

        <FeatureItem>
          Revenue Risk Estimate
        </FeatureItem>

        <FeatureItem>
          Platform Breakdown
        </FeatureItem>

      </div>

    </div>
  );
};

export default HeroLeft;