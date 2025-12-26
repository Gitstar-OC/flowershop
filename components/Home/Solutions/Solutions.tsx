import Header from "@/components/Header";
import BrowserWindow from "./BrowserWindow";
import Wrapper from "@/components/Wrapper";
import { BrowserWindowStack } from "./BrowserWindowStack";

const Solutions = () => {
  return (
    <Wrapper>
      <div className="flex flex-col min-h-screen gap-16">
        <Header
          title="Measurable results. Real impact."
          description="Outcomes our clients achieved using our platform."
        />

        <BrowserWindowStack>
          <BrowserWindow
            windowTitle="Revenue Summary Report"
            stats={[
              {
                miniTitle: "Over",
                title: "$8000k+",
                description: "In Revenue",
              },
            ]}
            statsPosition="floating-left"
            insidePercentage={30}
            atPercent={35}
          >
            <div className="h-full w-full rounded-md bg-gray-100" />
          </BrowserWindow>

          <BrowserWindow
            windowTitle="SKU & Dispensary Tracking"
            stats={[
              {
                miniTitle: "Over",
                title: "4M+",
                description: "SKUs Mapped",
              },
            ]}
            statsPosition="floating-right"
            insidePercentage={20}
            atPercent={40}
          >
            <div className="h-full w-full rounded-md bg-gray-100" />
          </BrowserWindow>

          <BrowserWindow
            windowTitle="Return on Ad Spend Graph"
            stats={[
              {
                miniTitle: "Up to",
                title: "35x",
                description: "Return on Ad Spend",
              },
            ]}
            statsPosition="floating-left"
            insidePercentage={10}
            atPercent={45}
          >
            <div className="h-full w-full rounded-md bg-gray-100" />
          </BrowserWindow>
        </BrowserWindowStack>
      </div>
    </Wrapper>
  );
};

export default Solutions;
