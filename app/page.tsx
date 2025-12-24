import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingPixel from "@/components/Home/TrackingPixel";
import StayInformed from "@/components/Home/StayInformed";
import FooterCTA from "@/components/Home/FooterCTA";          

export default function Home() {
  return (
    <div>
      <Navbar />
      <TrackingPixel />
      <StayInformed />
      <FooterCTA />
      <Footer />
    </div>
  );
}
