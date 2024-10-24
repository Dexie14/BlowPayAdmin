import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Pagination, Navigation } from "swiper/modules";
import ATMCard from "@/assets/images/ATMCard.png";

import { useState } from "react";
import { BoxLeftIcon, BoxRightIcon } from "@/assets/svgComp/General";

const WalletCard = () => {
  const testimonials = [
    {
      name: "US Dollar",
      image: ATMCard,
      amount: 5000,
    },
    {
      name: "Pounds",
      image: ATMCard,
      amount: 10000,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <div className="border border-lightGray bg-white rounded-[12px] py-4 px-3 w-full lg:h-[248px]">
        <aside className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h4 className="text-xl font-bold">Wallet</h4>
            <p className="text-disabledText text-xs">
              Cards | {`${currentSlide + 1} out of ${testimonials?.length}`}
            </p>
          </div>
          <div className="flex gap-2 items-center ">
            <div className="prev-button cursor-pointer">
              <BoxLeftIcon />
            </div>
            <div className="next-button cursor-pointer">
              <BoxRightIcon />
            </div>
          </div>
        </aside>
        <section
          className="w-[90%] h-full flex items-center"
          data-aos="zoom-in"
        >
          <Swiper
            navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
            spaceBetween={30}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination, Navigation]}
            loop={true}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center ">
                  <div className="">
                    <img src={testimonial?.image} alt="ATMCard" />
                  </div>
                  <hr className="mx-7 h-[130px] border border-lightGray" />
                  <div className="flex flex-col gap-10 justify-between">
                    <div>
                      <p className="text-sm text-disabledText">Balance</p>
                      <h3 className="text-xl font-bold">
                        $
                        {testimonial?.amount
                          ? testimonial.amount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : "0.00"}
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm text-disabledText">Currency</p>
                      <h3 className="text-xl font-bold text-nowrap">
                        {testimonial?.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
};

export default WalletCard;
