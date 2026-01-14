"use client";

import { ArrowUpIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookSquare, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { LiaMailBulkSolid } from "react-icons/lia";

export default function Footer() {
	const t = useTranslations();
	const [email, setEmail] = useState("");

	const handleSubscribe = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;
		console.log("Subscribe:", email);
		setEmail("");
	};

	const topScoll = () => {
		window.scroll({
			top: 0,
			behavior: "smooth"
		})
	}

	return (
		<footer className="bg-[#2d2e3d] text-white pt-16">
			<div className="max-w-7xl mx-auto px-6 md:px-12">

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

					{/* ABOUT */}
					<div className="">
						<div className="">
							<img src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/logo-white.png" className="h=full w-40" />
						</div>
						<p className="text-text mt-5 ">
							{t("Description")}
						</p>

						<div className="border-t mt-3 text-text"></div>

						<div className="space-y-3 mt-4 text-text">
							<div className="flex gap-2 items-center">
								<PhoneIcon className="text-primary h-5 w-5" />
								<span>666 888 0000</span>
							</div>
							<div className="flex gap-2 items-center">
								<LiaMailBulkSolid className="text-primary" />
								<span>contact@example.com</span>
							</div>
							<div className="flex gap-2 items-center">
								<MapPinIcon className="text-primary h-5 w-5" />
								<span>{t("Address")}</span>
							</div>
						</div>


					</div>

					{/* COMPANY */}
					<div>
						<h3 className="text-xl font-bold mb-6">{t("Company")}</h3>
						<ul className="space-y-3 text-[#a5a6aa] ">
							<li><Link href="/about" className="hover:text-primary">{t("About")}</Link></li>
							<li><Link href="/gallery" className="hover:text-primary">{t("Gallery")}</Link></li>
							<li><Link href="/careers" className="hover:text-primary">{t("Careers")}</Link></li>
							<li><Link href="/contact" className="hover:text-primary">{t("Contact")}</Link></li>
						</ul>
					</div>

					{/* EXPLORE */}
					<div>
						<h3 className="text-xl font-bold mb-6">{t("Explore")}</h3>
						<ul className="space-y-3 text-[#a5a6aa] ">
							<li><Link href="/privacy" className="hover:text-primary">{t("Privacy")}</Link></li>
							<li><Link href="/affiliate" className="hover:text-primary">{t("Affiliate")}</Link></li>
							<li><Link href="/partner" className="hover:text-primary">{t("Partner")}</Link></li>
							<li><Link href="/events" className="hover:text-primary">{t("Events")}</Link></li>
						</ul>
					</div>

					{/* NEWSLETTER */}
					<div>
						<h3 className="text-xl font-bold mb-6">{t("Newsletter")}</h3>
						<form onSubmit={handleSubscribe} className="space-y-4">
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={t("EmailPlaceholder")}
								className="w-full bg-[#1e2236] p-4 rounded-md text-sm outline-none focus:ring-2 focus:ring-primary"
							/>
							<button
								type="submit"
								className="w-full bg-primary py-3 rounded-md font-bold hover:bg-primary/90 transition"
							>
								{t("Subscribe")}
							</button>
						</form>
					</div>

				</div>
			</div>

			{/* COPYRIGHT */}
			<div className="sm:ml-30 flex bg-white rounded-tl-2xl ">

				{/* BACK TO TOP */}
				<button className="cursor-pointer bg-primary rounded-tl-2xl px-10 flex items-center justify-center py-7 "
				onClick={topScoll}
				>
					<ArrowUpIcon className="h-10 w-10 text-white" />
				</button>

				{/* SOCIAL ICONS */}
				<div className="flex items-center gap-3 px-6">

					<button className="w-11 h-11 flex items-center justify-center rounded-full 
      bg-gray-100 text-gray-700
      hover:bg-primary hover:text-white
      transition-all duration-300 ease-in-out
      shadow-sm hover:shadow-md">
						<FaFacebookSquare className="h-5 w-5" />
					</button>

					<button className="w-11 h-11 flex items-center justify-center rounded-full 
      bg-gray-100 text-gray-700
      hover:bg-primary hover:text-white
      transition-all duration-300 ease-in-out
      shadow-sm hover:shadow-md">
						<FaSquareInstagram className="h-5 w-5" />
					</button>

					<button className="w-11 h-11 flex items-center justify-center rounded-full 
      bg-gray-100 text-gray-700
      hover:bg-primary hover:text-white
      transition-all duration-300 ease-in-out
      shadow-sm hover:shadow-md">
						<FaTwitter className="h-5 w-5" />
					</button>

					<button className="w-11 h-11 flex items-center justify-center rounded-full 
      bg-gray-100 text-gray-700
      hover:bg-primary hover:text-white
      transition-all duration-300 ease-in-out
      shadow-sm hover:shadow-md">
						<FaPinterest className="h-5 w-5" />
					</button>

				</div>

				{/* COPYRIGHT */}
				<div className="sm:flex hidden items-center px-6 ml-140">
					<div className="text-gray-500 text-sm">
						© Copyright 2021 by Gaviasthemes
					</div>
				</div>

			</div>


		</footer>
	);
}
