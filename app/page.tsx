import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

//    <Link
//                     href="/"
//                     className={cn(
//                         buttonVariants({ variant: "secondary" }),
//                         "group" // make the button a hover group
//                     )}
//                 >
//                     Secondary
//                     <ArrowRight
//                         className="ml-1 transition-transform duration-200 group-hover:translate-x-[2px]"
//                     />
// </Link>
