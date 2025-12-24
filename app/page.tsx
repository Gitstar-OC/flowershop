import TrackingPixel from "@/components/Home/TrackingPixel/TrackingPixel";
import Campaigns from "@/components/Home/Campaigns";
import StayInformed from "@/components/Home/StayInformed";
import FooterCTA from "@/components/Home/FooterCTA";          

export default function Home() {
  return (
    <div>
      <TrackingPixel />
      <Campaigns />
      <StayInformed />
      <FooterCTA />
    </div>
  );
}
