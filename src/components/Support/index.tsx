import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Support = () => {
  return (
    <section id="support" className="scroll-mt-17">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-999 overflow-hidden rounded-[30px] bg-dark pt-25 px-4 sm:px-20 lg:px-27.5">
          {/* <!-- grid row --> */}
          <div className="flex justify-center gap-7.5 absolute left-1/2 -translate-x-1/2 -top-[16%] max-w-[690px] w-full -z-1 opacity-40">
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-12"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-7"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-3"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-2"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-5"></div>
            <div className="max-w-[50px] w-full h-[250px] relative pricing-grid pricing-grid-border bottom-8"></div>
          </div>

          {/* <!-- stars --> */}
          <div className="max-w-[482px] w-full h-60 overflow-hidden absolute -z-1 -top-30 left-1/2 -translate-x-1/2">
            <div className="stars"></div>
            <div className="stars2"></div>
          </div>

          {/* <!-- bg shapes --> */}
          <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
            <span className="absolute w-full h-full bg-[url(/images/blur/blur-19.svg)] bg-no-repeat bg-cover bg-center left-1/2 top-0 -translate-x-1/2 -z-1"></span>

            <span className="absolute left-1/2 top-0 -translate-x-1/2 -z-1 w-full aspect-[1170/592]">
              <Image
                src="/images/blur/blur-20.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
            <span className="absolute max-w-[530px] w-full mx-auto aspect-[530/254] left-1/2 top-0 -translate-x-1/2 -z-1">
              <Image
                src="/images/blur/blur-21.svg"
                alt="blur"
                fill
                className="max-w-none"
              />
            </span>
          </div>

          <SectionTitle
            subTitle="Need Any Help?"
            title="Contact With Us"
            paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
          />

          {/* <!-- support form --> */}
          <div className="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15">
            <form
              action="https://formbold.com/s/unique_form_id"
              method="POST"
              className="relative z-10"
            >
              <div className="-mx-4 xl:-mx-10 flex flex-wrap">
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <div className="mb-9.5">
                    <label
                      htmlFor="name"
                      className="text-white mb-2.5 block font-medium"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      required
                      className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none text-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5 md:w-1/2">
                  <div className="mb-9.5">
                    <label
                      htmlFor="email"
                      className="text-white mb-2.5 block font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      required
                      className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-3 px-6 outline-none text-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="mb-10">
                    <label
                      htmlFor="message"
                      className="text-white mb-2.5 block font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Type your message"
                      rows={6}
                      required
                      className="rounded-lg border border-white/[0.12] bg-white/[0.05] focus:border-purple w-full py-5 px-6 outline-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 xl:px-5">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
