import Breadcrumb from "@/components/Breadcrumb";
import Faq from "@/components/Faq";
import PricingGrids from "@/components/Pricing/PricingGrids";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | ESG INTELLIGENCE PLATFORM",
  description: "This is Pricing page for ESG INTELLIGENCE PLATFORM",
  // other metadata
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Pricing" />
      <section className="pt-17.5 lg:pt-22.5 xl:pt-27.5 pb-20 lg:pb-25">
        <PricingGrids />
      </section>

      <Faq />
    </>
  );
};

export default PricingPage;
