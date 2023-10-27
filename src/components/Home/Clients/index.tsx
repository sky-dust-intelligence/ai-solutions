"use client";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleClient from "./SingleClient";
import clientsData from "./clientsData";

const Clients = () => {
  return (
    <section className="py-19">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-10">
          <span className="max-w-[128px] w-full h-[37px] block inset-0 pointer-events-none absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-dark/0 to-dark/100"></span>
          <span className="max-w-[128px] w-full h-[37px] block inset-0 pointer-events-none absolute z-10 left-auto top-1/2 -translate-y-1/2 bg-gradient-to-r from-dark/0 to-dark/100"></span>
          <div className="clients-carousel">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              spaceBetween={64}
              loop={true}
              speed={5000}
              noSwiping={true}
              noSwipingClass="swiper-slide w-auto"
              autoplay={{
                delay: 0,
                disableOnInteraction: true,
              }}
            >
              {clientsData.map((client) => (
                <SwiperSlide key={client.id}>
                  <SingleClient client={client} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
