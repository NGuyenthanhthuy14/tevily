"use client"
import { tour } from "@/app/data/tour";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useParams } from "next/navigation";
import { BiPlanet } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DetailContent from "./components/DetailContent";
import Booking from "./components/Booking";

export default function TourDetail() {
  const { slug } = useParams<{ slug: string }>();
  const tourSlug = tour.find(item => item.slug === slug)
  console.log(tourSlug)
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/gallery-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/gallery-4.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/gallery-3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/gallery-4.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/gallery-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="/gallery-4.jpg" /></SwiperSlide>
      </Swiper>

      <div className="bg-[#fbf7f0] py-10 px-6 border-b border-gray-100">
        <div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          <div>
            <h1 className="text-[32px] md:text-[30px] font-bold text-[#1e2236] mb-3 leading-tight">
              {tourSlug?.title}
            </h1>
            <div className="flex items-center gap-2 text-[#666] text-lg">
              <MapPinIcon className="h-4 w-4 text-[#f45e49]" />
              <span>{tourSlug?.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 md:gap-12">

            <div className="flex items-center gap-4">
              <div className="text-[#f45e49]">
                <CgSmartphone className="h-10 w-10 text-[#f45e49]" />
              </div>
              <div>
                <p className="text-[#666] text-sm font-medium">From</p>
                <p className="text-[#1e2236] text-xl font-bold">${tourSlug?.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#f45e49]">
                <ClockIcon className="h-10 w-10 text-[#f45e49]" />
              </div>
              <div>
                <p className="text-[#666] text-sm font-medium">Duration</p>
                <p className="text-[#1e2236] text-xl font-bold">{tourSlug?.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[#f45e49]">
                <BiPlanet className="h-10 w-10 text-[#f45e49]" />
              </div>
              <div>
                <p className="text-[#666] text-sm font-medium">Tour Type</p>
                <p className="text-[#1e2236] text-xl font-bold">{tourSlug?.activity}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="container flex py-12 gap-10">
      <DetailContent/>
      <Booking/>
      </div>
      
    </div>
  )
}
