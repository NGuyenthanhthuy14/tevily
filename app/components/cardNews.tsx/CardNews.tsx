import { ArrowRightCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

type newProp = {
	slug: string;
	title: string;
	day: string;
	month: string;
	image: string;
	author: string
	excerpt: string;
}
export default function CardNews({ slug, title, day, month, image, author, excerpt }: newProp) {
	return (
		<div>
			<motion.article
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.15 }}
				className="group
								rounded-xl
								bg-white
								border
								border-gray-200
								hover:shadow-sm
								hover:-translate-y-1
								transition-all duration-300"
						>
				<div className="relative h-64 overflow-hidden">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110"
					/>

					<div className="absolute bottom-0 right-6 bg-primary text-white
                px-4 py-3 rounded-t-xl text-center">
						<span className="block text-lg font-bold leading-none">
							{day}
						</span>
						<span className="block text-[11px] font-bold tracking-widest">
							{month}
						</span>
					</div>
				</div>

				<div className="p-8 rounded-t-lg ">
					<div className="flex items-center gap-6 mb-4 text-gray-500 text-sm">
						<div className="flex items-center gap-2">
							<UserCircleIcon className="text-primary h-5 w-5" />
							{author}
						</div>
						<div className="flex items-center gap-2">
							<FiMessageCircle size={15} className="text-primary" />
							0 Comments
						</div>
					</div>

					<h3 className="
                text-xl font-bold text-[#1e2236]
                mb-4 leading-snug
                hover:text-primary transition cursor-pointer
              ">
						<Link href={`/news/${slug}`}>{title}</Link>
					</h3>

					<p className="text-gray-600 text-[15px] leading-relaxed mb-6">
						{excerpt}
					</p>

					<Link href={`/news/${slug}`} className="flex items-center gap-2 text-primary
                font-bold text-[13px] uppercase tracking-wider
                group/read">
						Read More
						<ArrowRightCircleIcon
							className="transition-transform group-hover/read:translate-x-1 w-5 h-5"
						/>
					</Link>
				</div>
			</motion.article>
		</div>
	)
}
