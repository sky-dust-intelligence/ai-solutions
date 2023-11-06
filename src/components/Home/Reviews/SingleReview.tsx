import { Review } from "@/types/review";
import Image from "next/image";

const SingleReview = ({ review }: { review: Review }) => {
  return (
    <div className="user-border-gradient relative overflow-hidden px-8 py-9 rounded-[19px]">
      <div className="flex items-center gap-4.5">
        <div className="max-w-[48px] w-full h-12 relative rounded-full overflow-hidden">
          <Image
            src={review.userImage}
            alt={review.userName}
            width={48}
            height={48}
          />
        </div>
        <div>
          <h5 className="text-white text-sm font-medium">{review.userName}</h5>
          <p className="font-medium text-sm lowercase">
            {review.userDesignation}
          </p>
        </div>
      </div>

      <div className="user-divider relative my-6 w-full h-[1px]"></div>

      <p>{review.description}</p>

      {/* <!-- bg shapes --> */}
      <div className="absolute -z-10 pointer-events-none inset-0 overflow-hidden">
        <span className="absolute w-full h-full bg-[url(/images/blur/blur-18.svg)] bg-no-repeat bg-cover bg-center right-0 bottom-0 -z-1"></span>
      </div>
    </div>
  );
};

export default SingleReview;
