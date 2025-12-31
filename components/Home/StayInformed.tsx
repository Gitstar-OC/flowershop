import Header from "../Header";
import Wrapper from "../Wrapper";

const StayInformed = () => {
  return (
    <div className="bg-surface">
      <Wrapper>
        <div className="bg-white flex flex-col lg:h-125 justify-between input">
          <div className=" flex flex-1 items-center">
            <Header
              width="full"
              variant="small"
              title="Stay informed while keeping pace with compliance and category growth."
            />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <MetricCard number="42" text="Compliance Metrics" />
            <MetricCard number="73" text="Growth Rate" />
            <MetricCard number="89" text="Category Expansion" />
            <MetricCard number="56" text="User Engagement" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default StayInformed;

import { Star } from "lucide-react";

interface MetricCardProps {
  icon?: React.ReactNode;
  number: string;
  text: string;
}

const MetricCard = ({
  icon = <Star className="w-6 h-6" />,
  number,
  text,
}: MetricCardProps) => {
  return (
    <div className="border-t first:border-l-0 border-l border-r last:border-r-0 bg-[#fafafa] border-border aspect-square p-1">
      <div className="border border-border h-full w-full flex flex-col items-center justify-center bg-white relative rounded sm:rounded-lg md:rounded-xl lg:rounded-2xl p-4">
        <div className="absolute top-2 left-2">{icon}</div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-normal">
          {number}
        </div>
        <p className="paragraph text-center absolute bottom-0 mb-4">{text}</p>
      </div>
    </div>
  );
};
