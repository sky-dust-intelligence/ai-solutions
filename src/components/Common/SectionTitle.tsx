import Image from "next/image";

type propsType = {
  subTitle?: string;
  title: string;
  paragraph: string;
  center?: boolean;
  icon?: string;
};

const SectionTitle = ({
  subTitle,
  title,
  paragraph,
  icon = "/images/hero/icon-title.svg",
}: propsType) => {
  return (
    <div className="wow fadeInUp mb-16 text-center relative z-10">
      <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
        <Image src={icon} alt="icon" width={16} height={16} />

        <span className="hero-subtitle-text"> {subTitle} </span>
      </span>
      <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
        {title}
      </h2>
      <p className="max-w-[714px] mx-auto font-medium">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
