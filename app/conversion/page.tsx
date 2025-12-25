import ConversionHeader from "@/components/Conversion/ConversionHeader";
import ConversionCTA from "@/components/Conversion/ConversionCTA";

export default function ConversionPage() {
  return (
    <div className="relative">
      <ConversionHeader />
        <ConversionCTA
          firstParagraph="Conversion tracking allows you to assess the effectiveness of your advertising campaigns by tracking the actions taken by people after interacting with your ads."
          secondParagraph="These conversion events not only allow you to report on campaign performance, but can also be used to improve ad targeting and optimization."
        />
      </div>
  );
}
