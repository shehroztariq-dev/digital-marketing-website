import Brands from "@/components/Brands";
import { Faq } from "@/components/homepage-components/Faq";
import GraphicDesign from "@/components/homepage-components/GraphicDesign";
import Hero from "@/components/Hero";
import Services from "@/components/homepage-components/Servcies";
import ShopifyStores from "@/components/homepage-components/ShopifyStores";
import SliderMain from "@/components/SliderMain";
import { Spotlight } from "@/components/ui/Spotlight";
import WebsiteDesign from "@/components/homepage-components/WebsiteDesign";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <SliderMain />
      <WebsiteDesign />
      <GraphicDesign />
      <ShopifyStores />
      <Brands />
      <Services />
      <Faq />
    </div>
  );
}
