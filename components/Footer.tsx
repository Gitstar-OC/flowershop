import Wrapper from "./Wrapper";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="mt-7.5">
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
              <Instagram className="h-5 w-5" />
              <BsTwitterX className="h-5 w-5" />
              <BsLinkedin className="h-5 w-5" />
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
