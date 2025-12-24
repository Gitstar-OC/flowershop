import Header from "../Header";
import { ButtonGroup } from "../Button";

const FooterCTA = () => {
  return (
    <div className="flex flex-col lg:h-120 justify-center border-y border-shadow gap-3.75">
      <Header
        title="Ready to take your 
brand to the next level. "
        description="Choose your campaign goal and we’ll help you launch compliant ads that reach real cannabis consumers"
      />
      <ButtonGroup
        primaryButtonChildren="Get Started"
        secondaryButtonChildren="See Resources"
        primaryButtonHref="/Contact"
        secondaryButtonHref="/Resources"
      />
    </div>
  );
};

export default FooterCTA;
