import { useTranslations } from "next-intl";
import React from "react";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaPinterestP,
} from "react-icons/fa";

export default function Header () {
	const t = useTranslations()
	return (
		<div className="bg-secondary">

			<div className="flex items-center justify-between h-12 container">
				<div className="flex items-center gap-8 ml-10">
					<div className="sm:flex hidden items-center gap-2 text-secondary  transition-colors cursor-pointer text-[15px]">
						<FaPhoneAlt className="text-primary text-[15px]" />
						<span className="text-text hover:text-primary duration-300">666 888 0000</span>
					</div>

					<div className="sm:flex hidden items-center gap-2 text-secondary  transition-colors cursor-pointer text-[15px]">
						<FaEnvelope className="text-primary text-[15px]" />
						<span className="text-text hover:text-primary duration-300">contact@example.com</span>
					</div>
				</div>

				<div className="flex items-center h-full">
					<div className="flex items-center gap-7 px-6 text-white border-r border-black/20 h-full">
						<FaTwitter className="cursor-pointer  text-[15px] hover:text-primary duration-300" />
						<FaFacebookF className="cursor-pointer  text-[15px] hover:text-primary duration-300" />
						<FaInstagram className="cursor-pointer  text-[15px] hover:text-primary duration-300" />
						<FaPinterestP className="cursor-pointer text-[15px] hover:text-primary duration-300" />
					</div>

					<button className="bg-primary hover:opacity-90 text-white text-[12px] font-bold px-8 h-full sm:flex hidden items-center justify-center uppercase tracking-wider transition-all">
						{t("Become a Local Guide")}
					</button>
				</div>
			</div>
		</div>
	);
};


