import Image from "next/image";
import Link from "next/link";
import Highlighter from "./HighLighter";

const FeaturesList = () => {
  return (
    <section className="pt-12.5">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="grid sm:grid-cols-12 gap-7.5">
          {/* <!-- features item --> */}
          <div className="sm:col-span-12">
            <Highlighter>
              <div className="relative rounded-3xl features-box-border">
                <div className="relative overflow-hidden rounded-3xl p-10 xl:p-15 box-hover">
                  <div className="flex items-center justify-between relative z-20">
                    <div className="max-w-[477px] w-full">
                      <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
                        <Image
                          src="/images/hero/icon-title.svg"
                          alt="icon"
                          width={16}
                          height={16}
                        />

                        <span className="hero-subtitle-text">
                          Kickstart your AI Startup
                        </span>
                      </span>
                      <h3 className="text-white mb-4.5 font-bold text-heading-4">
                        Seamless OpenAI Integration
                      </h3>
                      <p className="font-medium mb-10">
                      Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup.
                      </p>
                      <Link
                        href="/#"
                        className="features-button-gradient relative inline-flex items-center gap-1.5 rounded-full py-3 px-6 text-white text-sm ease-in duration-300 hover:shadow-button"
                      >
                        Learn more
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3992 5.60002L8.22422 0.350024C7.99922 0.125024 7.64922 0.125024 7.42422 0.350024C7.19922 0.575024 7.19922 0.925025 7.42422 1.15002L11.6242 5.42503H0.999219C0.699219 5.42503 0.449219 5.67502 0.449219 5.97502C0.449219 6.27502 0.699219 6.55003 0.999219 6.55003H11.6742L7.42422 10.875C7.19922 11.1 7.19922 11.45 7.42422 11.675C7.52422 11.775 7.67422 11.825 7.82422 11.825C7.97422 11.825 8.12422 11.775 8.22422 11.65L13.3992 6.40002C13.6242 6.17502 13.6242 5.82502 13.3992 5.60002Z"
                            fill="white"
                          />
                        </svg>
                      </Link>
                    </div>

                    <div className="max-w-[428px] relative aspect-square w-full hidden sm:block">
                      <Image
                        src="/images/features/big-icon.svg"
                        alt="icon"
                        fill
                      />
                    </div>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28">
                    <span className="absolute right-0 bottom-0">
                      <Image
                        src="/images/features/shape-01.png"
                        alt="shape"
                        width={282}
                        height={226}
                      />
                    </span>
                    <span className="absolute left-0 top-0 w-full aspect-[1170/192]">
                      <Image
                        src="/images/features/shape-02.svg"
                        alt="shape"
                        fill
                      />
                    </span>
                    <span className="absolute w-full h-full left-1/2 -translate-x-1/2 bottom-0">
                      <Image
                        src="/images/blur/blur-03.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute w-full h-full left-1/2 -translate-x-1/2 bottom-0">
                      <Image
                        src="/images/blur/blur-04.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute max-w-[530px] w-full aspect-[530/270] left-1/2 -translate-x-1/2 bottom-0">
                      <Image
                        src="/images/blur/blur-05.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute max-w-[580px] aspect-[580/430] w-full right-0 top-0">
                      <Image
                        src="/images/features/shape-03.svg"
                        alt="shape"
                        fill
                        className="max-w-none"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* <!-- features item --> */}
          <div className="sm:col-span-7">
            <Highlighter>
              <div className="relative rounded-3xl features-box-border">
                <div className="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
                  <div className="relative z-20">
                    <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                      <Image
                        src="/images/features/icon-05.svg"
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    </span>

                    <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                      All Essential SaaS Pages
                    </h3>
                    <p className="font-medium">
                    Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart.
                    </p>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                    <span className="absolute w-full h-full bg-[url(/images/blur/blur-06.svg)] bg-no-repeat bg-cover bg-center left-0 bottom-0"></span>

                    <span className="absolute w-full h-full bg-[url(/images/blur/blur-07.svg)] bg-no-repeat bg-cover bg-center right-0 top-0"></span>

                    <span className="absolute right-[16%] top-[16%]">
                      <Image
                        src="/images/features/shape-04.svg"
                        alt="shape"
                        width={250}
                        height={135}
                      />
                    </span>
                    <span className="absolute aspect-[521/335] max-w-[521px] w-full left-0 bottom-0">
                      <Image
                        src="/images/blur/blur-08.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute aspect-[287/256] max-w-[287px] w-full left-0 bottom-0">
                      <Image
                        src="/images/blur/blur-09.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>

          {/* <!-- features item --> */}
          <div className="sm:col-span-5">
            <Highlighter>
              <div className="relative rounded-3xl features-box-border">
                <div className="relative overflow-hidden rounded-3xl px-11 pt-12.5 pb-14 box-hover box-hover-small">
                  <div className="relative z-20">
                    <span className="icon-border relative max-w-[80px] w-full h-20 rounded-full inline-flex items-center justify-center mb-13.5 mx-auto">
                      <Image
                        src="/images/features/icon-07.svg"
                        alt="icon"
                        width={32}
                        height={32}
                      />
                    </span>

                    <h3 className="text-white mb-4.5 font-semibold text-heading-6">
                      Highly Customizable
                    </h3>
                    <p className="font-medium">
                    Build SaaS AI applications using OpenAI and Next.js, quickly kickstart your AI startup.
                    </p>
                  </div>

                  {/* <!-- bg shapes --> */}
                  <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
                    <span className="absolute right-[14%] top-[17%]">
                      <Image
                        src="/images/features/shape-05.svg"
                        alt="shape"
                        width={178}
                        height={102}
                      />
                    </span>

                    <span className="absolute left-0 bottom-0 w-full h-full bg-[url(/images/blur/blur-10.svg)] bg-no-repeat bg-cover bg-center"></span>

                    <span className="absolute max-w-[394px] w-full aspect-[394/336] top-0 right-0">
                      <Image
                        src="/images/blur/blur-11.svg"
                        alt="blur"
                        fill
                        className="max-w-none"
                      />
                    </span>
                    <span className="absolute top-0 right-0">
                      <Image
                        src="/images/blur/blur-12.svg"
                        alt="blur"
                        className="max-w-none"
                        width={160}
                        height={303}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesList;
