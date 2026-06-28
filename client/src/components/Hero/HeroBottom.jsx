import Container from "../ui/Container";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroBottom = () => {
  return (
    <section className="pb-24 bg-[#f8fafc]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <HeroLeft />

          <HeroRight />

        </div>
      </Container>
    </section>
  );
};

export default HeroBottom;