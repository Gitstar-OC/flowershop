import Wrapper from "./Wrapper";
import Link from "next/link";
import { buttonVariants } from "./Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <Wrapper>
      <nav className="flex justify-between items-center mt-2.5">
        <Image
          width={200}
          height={25}
          src="/assets/Logo.png"
          alt="Logo"
          className="h-6"
        />
        <div className="flex ">
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "px-1 md:px-2")}
          >
            Conversion
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost" }), "px-1 md:px-2")}
          >
            Resources
          </Link>
          <Link href="/" className={cn(buttonVariants({}), "ml-3")}>
            Contact
          </Link>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;
