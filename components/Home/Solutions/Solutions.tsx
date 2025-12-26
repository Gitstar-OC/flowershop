import Header from "@/components/Header";
import BrowserWindow from "./BrowserWindow";
import Wrapper from "@/components/Wrapper";

const Solutions = () => {
  return (
    <Wrapper>

      <div className="flex flex-col min-h-screen justify-center gap-3.75">
        <Header
          title="Measurable results. Real impact."
          description="Outcomes our clients achieved using our platform."
        />
        <BrowserWindow
          windowTitle="Revenue Summary Report"
          stats={[
            {
              miniTitle: "Over",
              title: "$8000k+",
              description: "In Revenue",
            },
          ]}
          statsPosition="bottom"
        >
          <div>

          </div>
        </BrowserWindow>


      </div>
    </Wrapper>
  );
};

export default Solutions;
