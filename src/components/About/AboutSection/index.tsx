import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 py-20 lg:py-25 relative">
        <div className="absolute bottom-0 left-0 w-full h-[1px] about-divider-gradient"></div>

        <div className="flex gap-11 flex-wrap xl:flex-nowrap justify-between">
          <div className="wow fadeInLeft max-w-[570px] w-full">
            <span className="hero-subtitle-text font-semibold block mb-5">
              About Our App
            </span>

            <h2 className="text-white mb-5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
              10,000+ Writers, Marketers, & Business owners Love AI Tool.
            </h2>
            <p className="mb-9 font-medium">
            Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
            </p>

            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
            >
              Start Writing - It{`'`}s Free
            </a>
          </div>

          <div className="wow fadeInRight hidden xl:block w-full aspect-[556/401] relative">
            <Image src="/images/about/about.svg" alt="about" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
