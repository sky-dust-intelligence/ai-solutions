import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45"
    >
      {/* <!-- Hero Bg Shapes --> */}
      <div className="max-w-7xl mx-auto">
        <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
          <div className="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"></div>
          <div className="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -u-z-10 max-w-[1204px] w-full aspect-[1204/394]">
            <Image
              src="/images/blur/blur-02.svg"
              alt="blur"
              fill
              className="max-w-none"
            />
          </div>
          <div className="absolute w-full h-full bg-[url(/images/blur/blur-01.svg)] bg-no-repeat bg-cover bg-top top-0 left-1/2 -translate-x-1/2 -u-z-10"></div>
        </div>
      </div>

      {/* <!-- Hero Content --> */}
      <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
        <div className="text-center">
          <span className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
            <Image
              src="/images/hero/icon-title.svg"
              alt="icon"
              width={16}
              height={16}
            />

            <span className="hero-subtitle-text">
              Launch Your AI Startup with
            </span>
          </span>
          <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1">
            OpenAI + Next.js SaaS Boilerplate and Starter Kit
          </h1>
          <p className="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
          Ideal for developers looking to build SaaS applications using OpenAI and Next.js, this starter kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
          </p>

          <Link
            href="/ai-examples"
            className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
          >
            Try AI Examples
          </Link>
        </div>
      </div>

      <div
        className="mt-17 aspect-[1170/411] relative max-w-[1170px] w-full mx-auto"
        data-wow-delay="0.1s"
      >
        <Image
          className="mx-auto"
          src="./images/hero/hero.svg"
          alt="hero"
          fill
        />
      </div>
    </section>
  );
};

export default Hero;
