"use client";

import { PlayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiDeer } from "react-icons/gi";       
import { FaParachuteBox } from "react-icons/fa"; 
import { CiMountain1 } from "react-icons/ci";     
import { TbToolsKitchen } from "react-icons/tb";
import { useTranslations } from "next-intl";

export default function VideoFeatures() {
  const t = useTranslations();
  const tourCategories = [
  {
    id: 1,
    title: t("wildlife_tours"),
    icon: <GiDeer className="h-15 w-15 stroke-current" />,
  },
  {
    id: 2,
    title: t("paragliding_tours"),
    icon: <FaParachuteBox className="h-15 w-15" />,
  },
  {
    id: 3,
    title: t("adventure_tours"),
    icon: <CiMountain1 className="h-15 w-15" />,
  },
  {
    id: 4,
    title: t("hang_gliding_tours"),
    icon: <TbToolsKitchen className="h-15 w-15" />,
  },
];
  const [open, setOpen] = useState(false);
  return (
    <section className="relative w-full min-h-150 flex items-center overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/bg-1.jpg')",
        }}
      >
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full flex flex-col lg:flex-row items-center gap-14">

        <motion.div
          className="w-full lg:w-2/3"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="relative w-20 h-20 mb-8 cursor-pointer group"
          >
            <div className="absolute inset-0 border border-white/30 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform" />
            <div
              onClick={() => setOpen(true)}
              className="relative w-20 h-20 bg-[#f45e49] rounded-lg flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-105 transition"
            >
              <PlayIcon className="h-8 w-8" />
            </div>




          </motion.div>

          <p className="text-[#f45e49] font-reey italic text-2xl mb-4">
              {t("ready_to_travel")}
            </p>

          <h2 className="text-white text-[42px] md:text-[55px] font-bold leading-[1.1] tracking-wide">
            {t("platform_description")}
          </h2>
        </motion.div>

        <motion.div
          className="w-full lg:w-150 grid grid-cols-2 gap-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {tourCategories.map((item) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl"
              whileHover="hover"
            >
              <motion.div
                variants={{
                  initial: { y: "-100%" },
                  hover: { y: "0%" },
                }}
                initial="initial"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0  z-0"
              />

              <div className="relative group overflow-hidden rounded-2xl">
              <div className="
                absolute inset-0 
                bg-primary 
                -translate-y-full 
                group-hover:translate-y-0
                transition-transform duration-500 ease-in-out
              " />

              <div className="relative z-10 h-full border border-white/15 rounded-2xl p-10 flex flex-col items-center justify-center gap-4 cursor-pointer">
                <span className="text-primary text-5xl transition-colors duration-300 group-hover:text-white">
                  {item.icon}
                </span>

                <h3 className="text-white font-semibold text-[16px] text-center leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {open && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-white text-xl z-10"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/MtCMtC50gwY?autoplay=1"
              title="Travel Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
