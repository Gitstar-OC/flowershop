import MainHeader from "@/components/Home/MainHeader/MainHeader";   
import Services from "@/components/Home/Services";
import TrackingPixel from "@/components/Home/TrackingPixel/TrackingPixel";
import Campaigns from "@/components/Home/Campaigns";
import StayInformed from "@/components/Home/StayInformed";
import FooterCTA from "@/components/Home/FooterCTA";   
import Solutions from "@/components/Home/Solutions/Solutions";


export default function Home() {
  return (
    <div>
      <MainHeader />      
      <Solutions />
      <Services />
      <TrackingPixel />
      <Campaigns />
      <StayInformed />
      <FooterCTA />
    </div>
  );
}
