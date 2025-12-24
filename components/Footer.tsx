import Wrapper from "./Wrapper";
import Link from "next/link";
import { Instagram } from "lucide-react";
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
            <div className="flex gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">     
              <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">     
              <BsTwitterX className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">        
              <BsLinkedin className="h-5 w-5" />
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
