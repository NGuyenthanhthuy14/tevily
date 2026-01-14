"use client";


import Link from "next/link";
import CardNews from "../../components/cardNews.tsx/CardNews";
import { newSlug } from "../../data/news";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";



export default function NewsArticles() {
	const t = useTranslations();
	return (
		<section className="container px-6 py-20 relative">

			<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
				<div>
					<span className="text-primary italic text-2xl mb-2 block font-reey">
						{t("from_blog_posts")}
					</span>
					<h2 className="text-[42px] md:text-[48px] font-bold text-[#1e2236]">
						{t("news_articles")}
					</h2>
				</div>

				<Link href="/news" className="
          bg-primary hover:bg-[#1e2236]
          text-white font-bold
          py-4 px-8 rounded-xl
          transition-all duration-300
          uppercase text-[12px] tracking-widest
          shadow-lg shadow-orange-200
					w-50
        ">
					{t("view_all_posts")}
				</Link>
			</div>

			<Swiper
				modules={[Navigation, Autoplay]}
				slidesPerView={3}
				spaceBetween={30}
				loop
				autoplay={{ delay: 5000, disableOnInteraction: false }}
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className="mt-10"
			>
				{newSlug.map(item => (
					<SwiperSlide key={item.slug}>
						<CardNews
							slug={item.slug}
							title={item.title}
							day={item.day}
							month={item.month}
							image={item.image}
							author={item.author}
							excerpt={item.excerpt}
						/>
					</SwiperSlide>
				))}
			</Swiper>


		</section>
	);
}
