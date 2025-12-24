import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ButtonGroup } from "@/components/Button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <ButtonGroup
        primaryChildren="Get in Touch"
        primaryHref="/Contact"
        secondaryChildren="Learn More"
        secondaryHref="#solutions"
        />


      </div>
      <Footer />
    </div>
  );
}