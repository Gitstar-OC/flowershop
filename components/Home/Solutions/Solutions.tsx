import Header from "@/components/Header";
import BrowserWindow from "./BrowserWindow";
import Wrapper from "@/components/Wrapper";
import { BrowserWindowStack } from "./BrowserWindowStack";

const Solutions = () => {
  return (
    <Wrapper>
      <div id="solutions" className="scroll-mt-20"/>
      <div className="flex flex-col mt-20 min-h-screen">
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
            insidePercentage={70}
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
            insidePercentage={95}
            atPercent={50}
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
            insidePercentage={60}
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
