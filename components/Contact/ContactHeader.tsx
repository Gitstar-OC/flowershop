import Wrapper from "../Wrapper";
import Offices from "./Offices";
import Image from "next/image";
import Form from "./Form";

const LOGOS = [
  "/assets/logo1.png",
  "/assets/logo2.png",
  "/assets/logo3.png",
  "/assets/logo4.png",
];

const EMAIL = "help@flowershop.com";

const ContactHeader = () => {
  return (
    <div className="py-12 relative">
      <div
        className="
          absolute
          left-0
          right-0
          bottom-0
          h-[94%]
          bg-[linear-gradient(to_bottom,#fcfcfc_0%,#fcfcfc_30%,white_100%)]
          input
          -z-1
        "
      />

      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="max-w-xl space-y-4 pt-12">
              <h1 className="heading">
                Join the list of brands that advertise with us!
              </h1>
              <p className="subheading">
                Tell us about your business and our team will get back to you
                shortly.
              </p>
            </div>

            <ul className="flex gap-6">
              {LOGOS.map((src, i) => (
                <li key={i} className="w-16 h-10">
                  <Image
                    src={src}
                    alt={`Brand logo ${i + 1}`}
                    width={64}
                    height={40}
                    className="object-contain opacity-70"
                  />
                </li>
              ))}
            </ul>

            <div className="pt-20 space-y-2">
              <h3 className="subheading">Are you a member of the press?</h3>
              <p className="input-label text-[#666]">
                Contact us on our press center
              </p>
              <div className="text-sm underline decoration-dotted flex gap-4">
                <a href={`mailto:${EMAIL}`}>Advertiser Help Center</a>
                <a href={`mailto:${EMAIL}`}>Publisher Help Center</a>
                <a href={`mailto:${EMAIL}`}>Report an Ad</a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="w-full max-w-130 bg-white rounded-2xl shadow p-8">
              <Form />
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="mt-20">
        <Wrapper>
          <Offices />
        </Wrapper>
      </div>
    </div>
  );
};

export default ContactHeader;
