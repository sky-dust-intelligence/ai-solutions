import { AiExample } from "@/types/aiExample";
import Image from "next/image";
import Link from "next/link";

const SingleExample = ({ example }: { example: AiExample }) => {
  return (
    <div className="relative aiExamples-border-gredient rounded-lg">
      <div className="group relative overflow-hidden py-9 px-8 rounded-lg ">
        <span
          className={`features-bg absolute w-full h-full left-0 top-0 -z-1 ${
            example?.rotate && "rotate-180"
          }`}
        ></span>
        <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-6 mx-auto">
          <Image src={example.icon} alt="icon" width={32} height={32} />
        </span>

        <h4 className="font-semibold text-2xl text-white mb-4">
          {example.title}
        </h4>
        <p className="font-medium">{example.description}</p>

        <Link
          href={example.path}
          aria-label="explore the tool"
          className="mt-9 inline-block button-border-gradient relative rounded-lg text-white text-sm  gap-1.5 py-3 px-6 shadow-button hover:button-gradient-hover hover:shadow-none"
        >
          Try it out!
        </Link>
      </div>
    </div>
  );
};

export default SingleExample;
