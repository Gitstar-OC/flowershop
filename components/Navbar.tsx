import Wrapper from "./Wrapper";
import Link from "next/link";
import { buttonVariants } from "./Button";

const Navbar = () => {
    return (  
        <Wrapper>
            <nav className="">
                Navbar
                <Link href="/">Home</Link>
                <Link href="/contact" className={buttonVariants({})}>Contact</Link>
            </nav>
        </Wrapper>  
    );
}

export default Navbar;