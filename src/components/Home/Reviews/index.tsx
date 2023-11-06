"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { useEffect, useState } from "react";
import SingleReview from "./SingleReview";
import reviewsData from "./reviewsData";

const Reviews = () => {
  const [showContent, setShowContent] = useState(false);
  const [scrollContent, setScrollContent] = useState(false);

  const handleScrollContent = () => {
    if (window.scrollY >= 500) {
      setScrollContent(true);
    } else {
      setScrollContent(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollContent);
  });

  return (
    <>
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Wall of love"
          title="What Our User Says"
          paragraph="Build SaaS AI applications using OpenAI and Next.js, this kit comes with pre-configured and pre-built examples, making it easier to quickly kickstart your AI startup."
        />

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5 ${
            !showContent ? "max-h-[855px] overflow-hidden" : ""
          }`}
        >
          <div className="space-y-7.5">
            {reviewsData.slice(0, 9).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="space-y-7.5 hidden sm:block">
            {reviewsData.slice(9, 18).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>

          <div className="space-y-7.5 hidden lg:block">
            {reviewsData.slice(18, 27).map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div
          className={`inset-x-0 bottom-20 flex justify-center bg-gradient-to-t from-dark pt-32 pb-8 pointer-events-none absolute ${
            scrollContent ? "!opacity-100" : ""
          } ${
            showContent
              ? "sticky -u-mt-52 transition-opacity duration-300 opacity-0"
              : ""
          }`}
        >
          <button
            type="button"
            onClick={() => setShowContent(!showContent)}
            className={`button-border-gradient hover:button-gradient-hover relative top-20 text-sm text-white font-semibold px-4.5 py-3 rounded-lg pointer-events-auto flex mx-auto -mt-7.5 ease-in duration-300 ${
              showContent ? "transition-transform translate-y-4" : ""
            } ${scrollContent ? "translate-y-0" : ""}`}
          >
            {showContent ? "Okay, I get the point" : "Show more..."}
          </button>
        </div>
      </div>
    </>
  );
};

export default Reviews;
