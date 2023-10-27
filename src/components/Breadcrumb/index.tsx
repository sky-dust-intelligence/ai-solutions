const Breadcrumb = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <section className="relative z-10 pt-30 lg:pt-35 xl:pt-40 pb-18">
      <div className="absolute top-25 left-0 w-full flex flex-col gap-3 -z-1 opacity-50">
        <div className="w-full h-[1.24px] footer-bg-gradient"></div>
        <div className="w-full h-[2.47px] footer-bg-gradient"></div>
        <div className="w-full h-[3.71px] footer-bg-gradient"></div>
        <div className="w-full h-[4.99px] footer-bg-gradient"></div>
        <div className="w-full h-[6.19px] footer-bg-gradient"></div>
        <div className="w-full h-[7.42px] footer-bg-gradient"></div>
        <div className="w-full h-[8.66px] footer-bg-gradient"></div>
        <div className="w-full h-[9.90px] footer-bg-gradient"></div>
        <div className="w-full h-[13px] footer-bg-gradient"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-dark/0 to-dark -z-1"></div>

      <div className="text-center px-4">
        <h1 className="font-extrabold text-heading-2 text-white mb-5.5">
          {pageTitle}
        </h1>
        <ul className="flex items-center justify-center gap-2">
          <li className="font-medium">
            <a href="index.html">Home</a>
          </li>
          <li className="font-medium">/ {pageTitle}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
