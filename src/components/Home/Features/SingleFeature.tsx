import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3">
      <div className="group relative overflow-hidden text-center py-8 sm:py-10 xl:py-15 px-4 lg:px-8 xl:px-13">
        <span
          className={`group-hover:opacity-100 opacity-0 features-bg absolute w-full h-full left-0 top-0 -z-1 ${
            feature?.rotate && "rotate-180"
          }`}
        ></span>
        <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-8 mx-auto">
          <Image src={feature.icon} alt="icon" width={32} height={32} />
        </span>
        <h4 className="font-semibold text-lg text-white mb-4">
          {feature.title}
        </h4>
        <p className="font-medium">{feature.description}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
