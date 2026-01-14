"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Title from "../../components/title/Title";

type DestinationCardProps = {
  image: string;
  title: string;
  subtitle: string;
  tours: string;
  span: string;
  link: string;
  id: string;
  index: number;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
    },
  }),
};

const DestinationCard = ({
  image,
  title,
  subtitle,
  tours,
  span,
  link,
  index,
}: DestinationCardProps) => {
  const t = useTranslations();

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      custom={index}
      whileHover={{ y: -6 }}
      className={`relative overflow-hidden rounded-xl group cursor-pointer h-70 ${span}`}
    >

      <Link href={link} className="block h-full w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 right-4 bg-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider"
        >
          {tours} {t("Tours")}
        </motion.div>

        <div className="absolute bottom-6 left-6 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-reey text-xl italic -mb-1.5 opacity-90"
          >
            {subtitle}
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white text-3xl font-bold tracking-tight"
          >
            {title}
          </motion.h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default function ExoticPlace() {
  const t = useTranslations();
  return (
    <section className="container mb-15 sm:mt-40 mt-55">
      <Title title={t("destination_lists")} desc={t("go_exotic_places")} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-10">
        <DestinationCard
          index={0}
          image="/image-2.jpg"
          title="Morocco"
          subtitle="Wildlife"
          tours="3"
          link="/location/morocco"
          span="md:col-span-1"
          id="Morocco"
        />

        <DestinationCard
          index={1}
          image="/image-1.jpg"
          title="United Kingdom"
          subtitle="Wildlife"
          tours="6"
          link="/location/united-kingdom"
          span="md:col-span-2"
          id="UnitedKingdom"
        />

        <DestinationCard
          index={2}
          image="/image-3.jpg"
          title="Singapore"
          subtitle="Wildlife"
          tours="3"
          link="/location/singapore"
          span="md:col-span-1"
          id="Singapore"
        />

        <DestinationCard
          index={3}
          image="/image-4.jpg"
          title="Hungary"
          subtitle="Wildlife"
          tours="3"
          link="/location/hungary"
          span="md:col-span-2"
          id="Hungary"
        />

        <DestinationCard
          index={4}
          image="/image-5.jpg"
          title="Italy"
          subtitle="Adventure"
          tours="3"
          link="/location/italy"
          span="md:col-span-2"
          id="Italy"
        />
      </div>
    </section>
  );
}
