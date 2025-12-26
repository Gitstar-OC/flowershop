import Wrapper from "./Wrapper";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="mt-7.5 mb-10">
        <div className="border-b border-border pb-4">
          <div className="flex justify-between items-center">
            <Image
              src="/assets/Logo.png"
              width={200}
              height={25}   
              alt="Logo"
              className="h-6"
            />
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="h-5.5 w-6"
                  style={{
                    fill: "url(#ig-gradient)",
                  }}
                />
                <svg width="0" height="0">
                  <linearGradient
                    id="ig-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="30%" stopColor="#FEDA77" />
                    <stop offset="60%" stopColor="#DD2A7B" />
                    <stop offset="100%" stopColor="#8134AF" />
                  </linearGradient>
                </svg>
              </a>

              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="h-5 w-5 text-black" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="h-5 w-5 text-[#0A66C2]" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-2">
          <p className="text-xs">© 2025 FlowerShop. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className="text-xs font-medium tracking-wider hover:underline"
            >
              Terms of Use
            </Link>
            <Link
              href="/privacy"
              className="text-xs font-medium tracking-wider hover:underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
