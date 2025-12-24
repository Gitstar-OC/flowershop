import Header from "../Header";
import { ButtonGroup } from "../Button";

const TrackingPixel = () => {
  return (
    <div className="flex flex-col lg:h-150 justify-center border-y border-shadow gap-3.75">
      <Header
        title="Track Every Sale. 
      Measure Every Success."
        description="Understand the full journey of your customers — from first click to final purchase. Improve your campaigns with real data, not guesses."
      />
      <ButtonGroup
        primaryButtonChildren="Purchase Pixel"
        secondaryButtonChildren="Learn More"
        primaryButtonHref="/Contact"
        secondaryButtonHref="/Conversion"
      />
    </div>
  );
};

export default TrackingPixel;
