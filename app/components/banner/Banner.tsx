"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import Search from "../search/Search";
import { useTranslations } from "next-intl";

export default function Banner() {
	const t = useTranslations();
	const slides = [
		{
			image: "/slider-5.jpg",
			title: t("Travel & Adventures"),
			subtitle: t("Where Would You Like To Go?")	
		},
		{
			image: "/slider-1.jpg",
			title: t("Explore the world"),
			subtitle: t("Discover Amazing Places With Us")
		},
	];

	return (
		<>
			<section className="relative h-[60vh] w-full overflow-hidden">
				<Swiper
					modules={[Navigation, Autoplay]}
					slidesPerView={1}
					loop
					autoplay={{ delay: 5000 }}
					navigation={{
						prevEl: ".banner-prev",
						nextEl: ".banner-next",
					}}
					className="h-full"
				>
					{slides.map((item, index) => (
						<div className="" key={index}	>
							<SwiperSlide key={index}>
								<BannerSlide
									bg={item.image}
									title={item.title}
									subtitle={item.subtitle}
								/>
							</SwiperSlide>
						</div>
					))}
				</Swiper>

				{/* Custom arrows */}
				<button className="banner-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-primary text-white flex items-center justify-center transition">
					<ChevronLeftIcon className="h-6 w-6" />
				</button>

				<button className="banner-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-primary text-white flex items-center justify-center transition">
					<ChevronRightIcon className="h-6 w-6" />
				</button>
			</section>

			<div className="absolute sm:bottom-30 bottom-10 left-1/2 -translate-x-1/2 w-full px-4 z-10">
				<Search variant="desktop"/>
			</div>
		</>
	);
}


function BannerSlide({
	bg,
	title,
	subtitle,
}: {
	bg: string;
	title: string;
	subtitle: string;
}) {
	return (
		<div className="relative h-full w-full">
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${bg})` }}
			/>

			<div className="absolute inset-0 bg-black/35" />

			<div className="relative z-10 flex h-full items-center justify-center text-center px-4">
				<div className="max-w-4xl">
					<h1 className="text-[48px] md:text-[72px]  italic tracking-wide text-[#f45e49] relative inline-block font-reey">
						{title}
						<span className="absolute left-0 -bottom-2 w-full h-0.75 bg-white opacity-70" />
					</h1>

					<p className="mt-6 text-white text-xl md:text-2xl tracking-wide">
						{subtitle}
					</p>
				</div>
			</div>
		</div>
	);
}
