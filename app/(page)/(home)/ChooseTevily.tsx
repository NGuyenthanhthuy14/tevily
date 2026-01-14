"use client";

import { Plane, Map } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


export default function ChooseTevily() {
  const t = useTranslations();
  const features = [
  {
    icon: Plane,
    title: t("professional_certified"),
    desc: t("lorem_short"),
  },
  {
    icon: Map,
    title: t("instant_booking"),
    desc: t("lorem_short"),
  },
];

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-150 overflow-hidden">

      <motion.div
        className="relative w-full lg:w-1/2 h-105 lg:h-auto"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <img
          src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/bg-2.jpg"
          alt="Luxury Pool View"
          className="w-full h-full object-cover"
        />

        <span className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-64 bg-[#f45e49] rounded-l-full" />
      </motion.div>

      <motion.div
        className="relative w-full lg:w-1/2 bg-secondary text-white px-8 md:px-16 py-16 flex items-center overflow-hidden"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none scale-150 translate-x-1/4">
          <img
            src="https://www.transparenttextures.com/patterns/world-map.png"
            alt=""
            className="invert"
          />
        </div>

        <motion.div
          className="relative z-10 max-w-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          <motion.span
            className="text-[#f45e49] italic text-2xl block mb-3 font-reey"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            {t("benefit_lists")}
          </motion.span>

          <motion.h2
            className="text-[38px] md:text-[48px] font-bold leading-tight mb-6"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            {t("why_choose_tevily")}
          </motion.h2>

          <motion.p
            className="text-[#a5a6aa] text-[15px] leading-relaxed mb-12"
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          >
            {t("benefit_list")}
          </motion.p>

          {/* FEATURES */}
          <div className="space-y-10">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex gap-6 group"
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    className="
                      w-16 h-16 shrink-0
                      rounded-xl border border-white/10
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-[#f45e49]
                    "
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon
                      size={30}
                      className="text-[#f45e49] group-hover:text-white transition-colors"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#a5a6aa] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
