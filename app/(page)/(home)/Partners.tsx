"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";

export default function Partners() {
  const partners = [
    { id: 1, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-4.png", logo: "BULLSEYE" },
    { id: 2, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-5.png", logo: "GOLDEN" },
    { id: 3, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-3.png", logo: "SWEETY" },
    { id: 4, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-1.png", logo: "FASTLANE" },
    { id: 5, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-2.png", logo: "NORCOLO" },
    { id: 6, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-1.png", logo: "TRAVELER" },
    { id: 7, icon: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/brand-1.png", logo: "VOYAGER" },
  ];

  const t = useTranslations();
  return (
    <section className="relative w-full bg-primary py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        <h2 className="text-white text-3xl md:text-4xl font-reey shrink-0">
          {t("our_partners")}
        </h2>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={5}
          spaceBetween={10}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center group cursor-pointer">
                <img
                  src={partner.icon}
                  alt={partner.logo}
                  className="
                    h-15 object-contain
                    opacity-70
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:scale-110
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
