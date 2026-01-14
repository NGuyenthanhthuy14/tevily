"use client";

import { setLocale } from "@/app/action/setLocale";
import {
	ChevronDownIcon,
	XMarkIcon,
	Bars3Icon,
} from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
	const t = useTranslations();
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const [openMenu, setOpenMenu] = useState(false);
	const [openAbout, setOpenAbout] = useState(false);

	const navLinks = [
		{ name: t("Home"), link: "/" },
		{ name: t("Tour Page"), link: "/tour" },
		{ name: t("Destination"), link: "/destination" },
		{ name: t("News"), link: "/news" },
		{
			name: t("About"),
			children: [
				{ name: t("About"), link: "/about" },
				{ name: t("Portfolio Page"), link: "/portfolio" }

			],
		},
		{ name: t("Contact"), link: "/contact" },
	];

	const handleChange = async (lang: "vi" | "en") => {
		await setLocale(lang);
		router.refresh();
		setOpenMenu(false);
	};

	return (
		<header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
			<div className="container flex items-center justify-between h-20">
				{/* LOGO */}
				<Link href="/">
					<img
						src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/logo.png"
						className="h-10"
						alt="Tevily"
					/>
				</Link>

				{/* DESKTOP MENU */}
				<nav className="hidden lg:flex items-center gap-10 h-full">
					{navLinks.map((item, index) => (
						<div key={index} className="relative group h-full flex items-center">
							{item.link ? (
								<Link
									href={item.link}
									className={`font-medium transition
										${pathname === item.link
											? "text-primary"
											: "text-[#757783] hover:text-primary"
										}`}
								>
									{item.name}
								</Link>
							) : (
								<>
									<div className="flex items-center gap-1 cursor-pointer text-[#757783] hover:text-primary">
										{item.name}
										<ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition" />
									</div>

									<div className="absolute top-14 left-1/2 -translate-x-1/2 mt-6 w-72 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
										<div className="grid grid-cols-1 py-3">
											{item.children?.map((child, i) => (
												<Link
													key={i}
													href={child.link}
													className="px-5 py-2 text-[#757783] hover:bg-gray-100 hover:text-primary"
												>
													{child.name}
												</Link>
											))}
										</div>
									</div>
								</>
							)}
						</div>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<div className="hidden lg:block relative group">
						<button className="w-32 h-11 rounded-full bg-primary text-white flex items-center justify-center gap-1">
							{t("Language")}
							<ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition" />
						</button>

						<div className="absolute top-full  w-32 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
							<button
								onClick={() => handleChange("vi")}
								className={`block w-full px-4 py-2 text-left hover:bg-gray-100
									${locale === "vi" ? "text-primary" : ""}`}
							>
								{t("Vietnamese")}
							</button>
							<button
								onClick={() => handleChange("en")}
								className={`block w-full px-4 py-2 text-left hover:bg-gray-100
									${locale === "en" ? "text-primary" : ""}`}
							>
								{t("English")}
							</button>
						</div>
					</div>

					{/* HAMBURGER */}
					<button className="lg:hidden" onClick={() => setOpenMenu(true)}>
						<Bars3Icon className="w-7 h-7" />
					</button>
				</div>
			</div>

			{/* OVERLAY */}
			<div
				className={`fixed inset-0 bg-black/40 z-40 transition-opacity lg:hidden
					${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
				onClick={() => setOpenMenu(false)}
			/>

			{/* MOBILE MENU */}
			<div
				className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50
				transform transition-transform duration-300 lg:hidden
				${openMenu ? "translate-x-0" : "-translate-x-full"}`}
			>
				<div className="flex items-center justify-between px-6 h-20 border-b">
					<img
						src="https://gaviaspreview.com/wp/tevily/wp-content/plugins/tevily-themer/elementor/assets/images/logo.png"
						className="h-8"
						alt="Tevily"
					/>
					<button onClick={() => setOpenMenu(false)}>
						<XMarkIcon className="w-7 h-7" />
					</button>
				</div>

				<div className="px-6 py-6 space-y-4 overflow-y-auto">
					{navLinks.map((item, index) => (
						<div key={index}>
							{item.link ? (
								<Link
									href={item.link}
									onClick={() => setOpenMenu(false)}
									className="block py-2 font-medium"
								>
									{item.name}
								</Link>
							) : (
								<>
									<button
										onClick={() => setOpenAbout(!openAbout)}
										className="flex justify-between w-full py-2 font-medium"
									>
										{item.name}
										<ChevronDownIcon
											className={`w-4 h-4 ${openAbout && "rotate-180"}`}
										/>
									</button>

									{openAbout && (
										<div className="pl-4 grid grid-cols-2 gap-2">
											{item.children?.map((child, i) => (
												<Link
													key={i}
													href={child.link}
													onClick={() => setOpenMenu(false)}
													className="text-sm text-gray-600"
												>
													{child.name}
												</Link>
											))}
										</div>
									)}
								</>
							)}
						</div>
					))}

					<div className="pt-6 border-t space-y-2 flex flex-col">
						<button onClick={() => handleChange("vi")}>{t("Vietnamese")}</button>
						<button onClick={() => handleChange("en")}>{t("English")}</button>
					</div>
				</div>
			</div>
		</header>
	);
}
