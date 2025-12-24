import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrackingPixel from "@/components/Home/TrackingPixel";
import Campaigns from "@/components/Home/Campaigns";
import StayInformed from "@/components/Home/StayInformed";
import FooterCTA from "@/components/Home/FooterCTA";          

export default function Home() {
  return (
    <div>
      <Navbar />
      <TrackingPixel />
      <Campaigns />
      <StayInformed />
      <FooterCTA />
      <Footer />
    </div>
  );
}
