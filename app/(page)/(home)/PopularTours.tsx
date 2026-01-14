"use client"
import Title from '../../components/title/Title'
import BoxTour from '../../components/boxTour/BoxTour'
import { tour, tours } from '../../data/tour'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'

export default function PopularTours() {
	const t = useTranslations();
	return (
		<div>
			<Title title={t("featured_tours")} desc={t("most_popular_tours")} />

			<Swiper
				modules={[Navigation, Autoplay]}
				breakpoints={{
					0: {
						slidesPerView: 1, // mobile
					},
					640: {
						slidesPerView: 1, // sm
					},
					768: {
						slidesPerView: 2, // md
					},
					1024: {
						slidesPerView: 3, // lg trở lên
					},
				}}
				spaceBetween={10}
				loop
				autoplay={{ delay: 5000 }}
				navigation={{
					prevEl: ".banner-prev",
					nextEl: ".banner-next",
				}}
				preventClicks={false}
				className="h-full mt-10"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
					{tour.map((tours) => (
						<SwiperSlide key={tours.slug}>
							<BoxTour
								title={tours.title}
								location={tours.location}
								price={tours.price}
								image={tours.image}
								guest={tours.guest}
								time={tours.time}
								slug={tours.slug}
							/>
						</SwiperSlide>
					))}
				</div>

				<button className="banner-prev absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-primary text-white flex items-center justify-center transition">
					<ChevronLeftIcon className="h-6 w-6" />
				</button>

				<button className="banner-next absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-primary text-white flex items-center justify-center transition">
					<ChevronRightIcon className="h-6 w-6" />
				</button>
			</Swiper>



		</div>
	)
}
