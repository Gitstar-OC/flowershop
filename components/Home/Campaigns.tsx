import Header from "../Header";
import Wrapper from "../Wrapper";
import { ArrowRight } from "../Vector";

const Campaigns = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-between">
        <div className="flex flex-1 pt-15 pb-12 items-center">
          <Header width="full" title="Our Campaigns define who we are." />
        </div>
        <div className="flex flex-row p-20 border-shadow rounded-t-2xl h-full items-center justify-between">
          <div className="max-w-xl text-balance input-label text-[#222] flex flex-col space-y-6">
            <div>
                One of our recent campaign 
                <span
                  className="font-['Playfair_Display'] text-3xl leading-7 font-bold italic align-top mx-1 inline-block"
                >
                  “Happy Munkey”
                </span>
                showcases our ability to
                craft targeted, high-impact strategies that drive engagement and
                conversions.
            </div>
            <div>
              Over 17 days, this campaign captivated audiences and delivered
              outstanding results for our client’s dispensary locations.
            </div>
            <div>
              Curious about the full impact? Check out the detailed breakdown.
            </div>
            <a
              className="flex items-center gap-2 underline "
              href="https://your-report-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Report{" "}
              <span className="mt-0.5">
                <ArrowRight />
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center justify-center ml-12">
            <div className="relative">
              {/* LEFT vertical spine */}
              <span
                className="absolute 
      right-0
      -top-7
      -bottom-7
      w-px

      bg-black/30"
              ></span>

              {/* RIGHT vertical spine */}
              <span
                className="absolute 
      -top-7 
      -bottom-7
      w-px 
      bg-black/30"
              ></span>

              {/* TOP horizontal stroke */}
              <span
                className="absolute 
      -left-7
     -right-7 
      top-0
      h-px
      bg-black/30"
              ></span>

              {/* BOTTOM horizontal stroke */}
              <span
                className="absolute 
      -left-7
     -right-7 
      bottom-0 
      h-px
      bg-black/30"
              ></span>

              {/* CARD */}
              <div className="w-80 h-80 bg-white flex flex-col items-center justify-center">
                <span className="text-6xl font-medium tracking-tight">30x</span>

                <div className="flex flex-row mt-4 space-x-2 text-sm paragraph font-medium tracking-wide text-black/70">
                  <span>Return</span>
                  <span>On</span>
                  <span>Ad</span>
                  <span>Spend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Campaigns;
