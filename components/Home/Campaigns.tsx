import Header from "../Header";
import Wrapper from "../Wrapper";
import { ArrowRight } from "../Vector";

const Campaigns = () => {
  return (
    <section className="relative">
      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          h-[70%]
          bg-[#fafafa]
          z-0
        "
      />

      <Wrapper>
        <div className="relative z-10 flex flex-col">
          <div className="flex items-center pt-15 pb-12">
            <Header width="full" title="Our Campaigns define who we are." />
          </div>

          <div
            className="
              flex
              flex-row
              justify-between
              p-20
              bg-white
              input
              rounded-t-2xl
            "
          >
            <div className="max-w-xl input-label text-[#222] flex flex-col space-y-6">
              <p>
                One of our recent campaign
                <span className="font-['Playfair_Display'] text-3xl italic font-bold mx-1">
                  “Happy Munkey”
                </span>
                showcases our ability to craft targeted, high-impact strategies
                that drive engagement and conversions.
              </p>

              <p>
                Over 17 days, this campaign captivated audiences and delivered
                outstanding results for our client’s dispensary locations.
              </p>

              <p>Curious about the full impact?</p>

              <a
                className="flex items-center gap-2 underline"
                href="https://your-report-link.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Report <ArrowRight />
              </a>
            </div>

            <div className="flex items-center justify-center ml-12">
              <div className="relative">
                {/* LEFT vertical stroke */}
                <span className="absolute right-0 -top-7 -bottom-7 w-px bg-border" />

                {/* RIGHT vertical stroke */}
                <span className="absolute -top-7 -bottom-7 w-px bg-border" />

                {/* TOP horizontal stroke */}
                <span className="absolute -left-7 -right-7 top-0 h-px bg-border" />

                {/* BOTTOM horizontal stroke */}
                <span className="absolute -left-7 -right-7 bottom-0 h-px bg-border" />

                <div className="w-80 h-80 bg-white flex flex-col items-center justify-center">
                  <span className="text-6xl mt-4 font-medium tracking-tight">
                    30x
                  </span>

                  <div className="flex mt-4 paragraph space-x-2 text-sm tracking-wide text-black">
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
    </section>
  );
};

export default Campaigns;
