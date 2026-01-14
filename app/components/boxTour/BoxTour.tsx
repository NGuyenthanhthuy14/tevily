"use client";

import { ArrowRightIcon, ClockIcon, HeartIcon, MapPinIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

type BoxTourProps = {
  slug: string;
	title: string;
	location: string;
	price: number;
	image: string;
	activity?: string;
	guest: number;
	time: string;
};
export default function BoxTour({ title, location, price, image, guest, time, slug } : BoxTourProps) {
  const router = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className=" bg-white rounded-[10px] shadow-sm overflow-hidden font-sans border border-gray-100 group"
    >
      <div className="relative h-65 overflow-hidden">
        <motion.img
          src={image}
          alt="North Island Adventure"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.7 }}
        />

        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-5 right-5 w-10 h-10 bg-black/20 hover:bg-primary backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
        >
          <HeartIcon className="h-5 w-5" />
        </motion.button>
      </div>

      <div className="p-7 relative bg-white">

        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4].map((s) => (
            <StarIcon key={s} fill="#ffa801" className="text-[#ffa801] h-5 w-5" />
          ))}
          <StarIcon className="text-gray-300 w-5 h-5" />
          <span className="text-gray-600 font-bold ml-2 text-[15px]">3.8</span>
        </div>

        <h3 className="text-[17px] font-bold text-secondary leading-tight mb-3 hover:text-primary transition-colors cursor-pointer">
          <Link href={`/tour/${slug}`}>
            {title}
          </Link>
        </h3>

        <div className="flex items-center gap-2 text-gray-500 mb-5">
          <MapPinIcon className="h-4 w-4 text-primary" />
          <span className="text-[14px]">
            {location}
          </span>
        </div>

        <div className="text-[15px] text-gray-500 font-medium mb-6">
          From
          <span className="text-primary text-2xl font-bold ml-2">
						${price}
          </span>
        </div>

        <div className="bg-[#f8f7f6] rounded-2xl py-4 px-5 flex items-center justify-between group/info">
          <div className="flex items-center gap-2.5">
            <ClockIcon className="h-4 w-4 text-primary" />
            <span className="text-[14px] font-bold text-secondary">
							{time}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <UsersIcon className="h-4 w-4 text-primary" />
            <span className="text-[14px] font-bold text-secondary">
							{guest} Guests
            </span>
          </div>

          <motion.button
            whileHover={{ x: 6 }}
            className="flex items-center gap-1 text-primary font-bold text-[14px]"
            onClick={() => router.push(`/tour/${slug}`)}
          >
            Explore <ArrowRightIcon className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
