"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const fadeLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0 },
};



export default function Plan() {
  const t = useTranslations();
  const router = useRouter()

  const features: string[] = [
    t("invest_neighborhood"),
    t("support_people"),
    t("largest_global_business"),
  ];
  return (
    <section className="container px-6 py-20 flex flex-col lg:flex-row items-center gap-20 overflow-hidden">

      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full lg:w-1/2"
      >
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/image-6-600x557.jpg"
            alt="Travel"
            className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </motion.div>

        <motion.div
          className="absolute top-8 right-0 rotate-12 text-right"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="block text-primary text-6xl font-reey italic leading-none">
            30%
          </span>
          <span className="block text-secondary text-4xl font-bold">
            {t("discount")}
          </span>
        </motion.div>

        <motion.div
          className="absolute bottom-16 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-500 text-[11px] font-bold uppercase tracking-widest">
            {t("book_tour_now")}
          </p>
          <p className="text-secondary text-2xl font-bold mt-1">
            6688 8000
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex flex-col gap-6"
      >
        <span className="text-primary italic text-2xl font-reey">
          {t("get_to_know_us")}
        </span>

        <h2 className="text-[42px] font-bold text-secondary leading-tight">
          {t("plan_trip_with_tevily")}
        </h2>

        <p className="text-gray-600 leading-relaxed">
          {t("hero_description")}
        </p>

        <ul className="flex flex-col gap-4 mt-2">
          {features.map((item: string, index: number) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex items-center gap-3"
            >
              <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <CheckBadgeIcon className="w-4 h-4 text-white" />
              </span>
              <span className="text-secondary font-semibold">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/tour")}
          className="mt-6 w-fit bg-primary hover:bg-secondary text-white font-bold py-5 px-10 rounded-lg uppercase text-[13px] tracking-widest transition-colors"
        >
          {t("book_with_us_now")}
        </motion.button>
      </motion.div>
    </section>
  );
}
