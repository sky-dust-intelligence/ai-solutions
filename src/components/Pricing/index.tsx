import Image from "next/image";
import PricingGrids from "./PricingGrids";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden pt-22.5 lg:pt-27.5 xl:pt-32.5 scroll-mt-17"
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- bg circles --> */}
        <div className="relative top-18">
          <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -my-55">
            <div className="absolute max-w-[925px] mx-auto aspect-square w-full left-1/2 -translate-x-1/2 top-0">
              <Image
                src="/images/blur/blur-13.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </div>
            <div className="absolute max-w-[778px] mx-auto aspect-square w-full left-1/2 -translate-x-1/2 top-0">
              <Image
                src="/images/blur/blur-14.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </div>
            <div className="absolute max-w-[584px] mx-auto aspect-square w-full left-1/2 -translate-x-1/2 top-0">
              <Image
                src="/images/blur/blur-15.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </div>
          </div>
          <div className="max-w-[830px] w-full h-[830px] rounded-full bg-dark absolute left-1/2 -translate-x-1/2 top-0 pricing-circle"></div>

          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>
        </div>

        {/* <!-- grid row --> */}
        <div className="flex justify-center gap-7.5 relative -z-1">
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
          <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
        </div>

        <PricingGrids />
      </div>
    </section>
  );
};

export default Pricing;
