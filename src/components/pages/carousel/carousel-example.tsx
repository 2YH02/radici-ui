import Carousel from "../../carousel/carousel";
import ExampleSection from "../../common/example-section";
import Section from "../../common/section";

const CarouselExample = () => {
  return (
    <Section title="Carousel Component Examples">
      {/* Centered Carousel */}
      <ExampleSection title="Centered Carousel">
        <Carousel className="h-32">
          <Carousel.Slide>
            <Carousel.Item>
              <div className="text-center">Item 1</div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">Item 2</div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-center">Item 3</div>
            </Carousel.Item>
          </Carousel.Slide>
          <Carousel.PrevButton>Prev</Carousel.PrevButton>
          <Carousel.NextButton>Next</Carousel.NextButton>
        </Carousel>
      </ExampleSection>
    </Section>
  );
};

export default CarouselExample;
