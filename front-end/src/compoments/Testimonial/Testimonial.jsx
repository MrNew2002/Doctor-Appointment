import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import pattientAvatar from "../../assets/images/default-user2.jpg";
import { HiStar } from "react-icons/hi";
const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] w-[60px]">
              <img src={pattientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leanding-[30px] font-semibold text-headingColor">
                James Smith
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "The navigation on this website is quite user-friendly. I was able
              to schedule an appointment with my doctor in just a few clicks."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] w-[60px]">
              <img src={pattientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leanding-[30px] font-semibold text-headingColor">
                Emily Johnson
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I'm very impressed with the efficiency of this online scheduling
              system. It saved me a lot of time compared to traditional
              methods."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] w-[60px]">
              <img src={pattientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leanding-[30px] font-semibold text-headingColor">
                David Williams
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "This website provides clear and concise information, which made
              it easy for me to find what I needed. Very convenient!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] w-[60px]">
              <img src={pattientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leanding-[30px] font-semibold text-headingColor">
                Sarah Brown
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              "My experience with booking an appointment on this website was
              seamless. The process was straightforward and hassle-free."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] w-[60px]">
              <img src={pattientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leanding-[30px] font-semibold text-headingColor">
                Michael Taylor
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I appreciate how this website made scheduling a doctor's
              appointment less stressful. I encountered no issues during the
              process."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px] w-[60px]">
              <img src={pattientAvatar} alt="" />
            </div>
            <div>
              <h4 className="text-[18px] leanding-[30px] font-semibold text-headingColor">
                Jessica Davis
              </h4>
              <div className="flex items-center gap-[2px]">
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
                <HiStar className="text-yellowColor w-[18px] h-5" />
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "The functionality of this website is commendable. It allowed me
              to book an appointment with my doctor without any trouble. Great
              job!"
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
