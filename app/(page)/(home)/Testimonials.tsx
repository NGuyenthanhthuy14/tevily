"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Title from "../../components/title/Title";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations();
  const data = [
    {
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      name: "Shirley Smith",
      role: "Founder & CEO",
      rating: 5,
      content:
        "I loved every moment of the trip, especially the beautiful landscapes we visited.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      name: "John Carter",
      role: "Travel Blogger",
      rating: 4,
      content:
        "I loved every moment of the trip, especially the beautiful landscapes we visited.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400",
      name: "Michael Brown",
      role: "Adventure Seeker",
      rating: 4,
      content:
        "I loved every moment of the trip, especially the beautiful landscapes we visited.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400",
      name: "Emily Johnson",
      role: "Globetrotter",
      rating: 5,
      content:
        "I loved every moment of the trip, especially the beautiful landscapes we visited.",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
      name: "David Wilson",
      role: "Nature Lover",
      rating: 5,
      content:
        "I loved every moment of the trip, especially the beautiful landscapes we visited.",
    },
  ];


  return (
    <section className="py-20">
      <Title title={t("testimonials_reviews")} desc={t("what_they_say")} />
      <div className="container mx-auto px-4 mt-10">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-10 rounded-3xl text-center border border-gray-100 h-150 shadow-sm">
                <div className="mb-8">
                  <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-1 mb-6 text-[#ffa801]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < item.rating ? "currentColor" : "none"}
                      stroke={i < item.rating ? "none" : "currentColor"}
                      className={i < item.rating ? "" : "opacity-30"}
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  “{item.content}”
                </p>

                <div className="mt-8">
                  <h4 className="text-[#1e2236] text-lg font-bold">
                    {item.name}
                  </h4>
                  <span className="text-[#f45e49] text-xs font-bold uppercase tracking-widest">
                    {item.role}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
