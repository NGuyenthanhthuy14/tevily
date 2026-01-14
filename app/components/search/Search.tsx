"use client";

import { BsAirplaneFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { GiAbstract006 } from "react-icons/gi";
import { GoClock } from "react-icons/go";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { tours } from "@/app/data/tour";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

type SearchVariant = "desktop" | "mobile";
export default function Search({ variant = "desktop" }: { variant?: SearchVariant }) {
	const isMobileUI = variant === "mobile";

	const [form, setForm] = useState({
		destination: "",
		activity: "",
		date: "",
		price: 0,
		guests: 1,
		amenities: [] as string[]
	});
	const t = useTranslations();
	const [openDestination, setOpenDestination] = useState(false);
	const [openActivity, setOpenActivity] = useState(false);
	const [openJustify, setOpenJustify] = useState(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const router = useRouter();
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const queryParams = new URLSearchParams();
		if (form.destination) queryParams.set("destination", form.destination);
		if (form.activity) queryParams.set("activity", form.activity);
		if (form.date) queryParams.set("date", form.date);
		if (form.guests) queryParams.set("guests", form.guests.toString());
		if (form.price) queryParams.set("price", form.price.toString());
		if (form.amenities.length > 0) queryParams.set("amenities", form.amenities.join(","));

		const searchPath = `/tour?${queryParams.toString()}`;
		router.push(searchPath);
	};
	const handleAmenityChange = (amenity: string) => {
		if (form.amenities.includes(amenity)) {
			setForm({
				...form,
				amenities: form.amenities.filter((a) => a !== amenity),
			});
		} else {
			setForm({
				...form,
				amenities: [...form.amenities, amenity],
			});
		}
	}

	const destinations = [...new Set(tours.map(tour => tour.destination))];
	// console.log("Destination list:", destinations);
	const activities = [...new Set(tours.map(tour => tour.activity))];

	const amenities = [... new Set (tours.flatMap(tour => tour.Amenities))];
	// console.log("Amenities list:", amenities);
	return (
		<form
			onSubmit={handleSubmit}
						className={`
				bg-white rounded-xl shadow-lg
				${isMobileUI ? "p-4 flex flex-col gap-4 w-85" : "p-6 sm:flex block container items-center gap-6"}
			`}
		>
			<div className="relative">
				<div
					onClick={() => setOpenDestination(!openDestination)}
					className="flex items-center gap-3 sm:border-r pr-6 cursor-pointer"
				>
					<GiAbstract006 className="text-primary text-3xl" />

					<div className="flex flex-col w-full">
						<label className="text-xs text-gray-400 text-left">{t("Destination")}</label>
						<input
							value={form.destination || t("Where are you going?")}
							readOnly
							className="outline-none text-sm text-gray-600 cursor-pointer bg-transparent"
						/>
					</div>

					<ChevronDownIcon
						className={`ml-2 w-5 h-5 transition-transform ${openDestination ? "rotate-180" : ""
							}`}
					/>
				</div>

				<div className="border-b mx-5 my-3 text-text"></div>

				{openDestination && (
					<div className="absolute top-16 left-0 w-58 bg-white rounded-lg shadow-lg p-2 z-50">
						{destinations.map((item) => (
							<div
								key={item}
								onClick={() => {
									setForm({ ...form, destination: item });
									setOpenDestination(false);
								}}
								className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer rounded"
							>
								{item}
							</div>
						))}
					</div>
				)}
			</div>

			{/* ACTIVITY */}
			<div className="relative">
				<div
					onClick={() => setOpenActivity(!openActivity)}
					className="flex items-center gap-3 flex-1 sm:border-r pr-4 cursor-pointer justify-between">
					<div className="flex gap-4 items-center">
						<BsAirplaneFill className="text-primary text-2xl" />
						<div className="flex flex-col w-29 ">
							<label className="text-xs text-gray-400">{t("Activity Type")}</label>
							<input
								type="text"
								name="activity"
								readOnly
								value={form.activity || t("Activity")}
								className="outline-none text-sm text-gray-600"
							/>
						</div>
					</div>
					<ChevronDownIcon
						className={` ml-2 w-4 h-4 transition-transform ${openActivity ? "rotate-180" : ""
							}`}
					/>
				</div>
				<div className="border-b mx-5 my-3 text-text"></div>

				{openActivity && (
					<div className="absolute top-16 left-0 w-58 bg-white rounded-lg shadow-lg p-2 z-50">
						{activities.map((item) => (
							<div
								key={item}
								onClick={() => {
									setForm({ ...form, activity: item });
									setOpenActivity(false);
								}}
								className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer rounded"
							>
								{t(item)}
							</div>
						))}
					</div>
				)}

				

			</div>

			{/* DATE */}
			<div className="">
				<div className="flex items-center gap-3 flex-1 sm:border-r pr-6">
					<GoClock className="text-primary text-2xl" />
					<div className="flex flex-col w-full">
						<label className="text-xs text-gray-400">{t("When")}</label>
						<input
							type="date"
							name="date"
							value={form.date}
							onChange={handleChange}
							className="outline-none text-sm text-gray-600"
						/>
					</div>
				</div>
				<div className="border-b mx-5 my-3 text-text"></div>
			</div>

			{/* GUESTS */}
			<div className="">
				<div className="flex items-center gap-3 w-35">
					<FaUserGroup className="text-primary text-2xl" />
					<div className="flex flex-col w-full">
						<label className="text-xs text-gray-400">{t("Guests")}</label>
						<input
							type="number"
							min={1}
							name="guests"
							value={form.guests}
							onChange={handleChange}
							className="outline-none text-sm text-gray-600"
						/>
					</div>
				</div>
				<div className="border-b mx-5 my-3 text-text"></div>
			</div>

			{/* OPTIONS */}
			<div className="relative">
				<div
					onClick={() => setOpenJustify(!openJustify)}
					className={`text-primary text-2xl cursor-pointer  items-center justify-center pl-7 ${isMobileUI ? "hidden" : "sm:flex hidden"}`}
				>
					<FaAlignJustify />
				</div>

				{openJustify && (
					<div className="absolute top-12 -right-42 w-275 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-100">
						<div className="">

							<label className="block mb-3 font-medium text-gray-700 text-sm">
								Price: <span className="text-primary font-semibold">${form.price}</span>
							</label>

							<input
								type="range"
								min={39}
								max={1475}
								step={10}
								name="price"
								value={form.price}
								onChange={handleChange}
								className="w-full h-1 accent-primary cursor-pointer"
							/>

							<div className="flex justify-between text-xs text-gray-400 mt-2">
								<span>$39</span>
								<span>$1475</span>
							</div>
						</div>

						<div className="border mt-10 mb-5 border-gray-200"></div>
						<div className="">
							<label className="block mb-1 text-gray-700 text-xl font-bold">
								{t("Amenities")}
							</label>
							<div className="grid grid-cols-4 mt-5">
								{amenities.map((amenity) => (
									<div key={amenity} className="flex items-center mb-2">
										<input
											type="checkbox"
											checked={form.amenities.includes(amenity)}
											onChange={() => handleAmenityChange(amenity)}
											className="h-4 w-4 accent-primary cursor-pointer"
										/>

										<label className="ml-2 text-gray-600 text-sm cursor-pointer">
											{amenity}
										</label>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{isMobileUI && (
					<div className="">
						<div className="">
							<label className="block mb-3 font-medium text-gray-700 text-sm">
								Price: <span className="text-primary font-semibold">${form.price}</span>
							</label>

							<input
								type="range"
								min={39}
								max={1475}
								step={10}
								name="price"
								value={form.price}
								onChange={handleChange}
								className="w-full h-1 accent-primary cursor-pointer"
							/>

							<div className="flex justify-between text-xs text-gray-400 mt-2">
								<span>$39</span>
								<span>$1475</span>
							</div>
						</div>

						<div className="border mt-10 mb-5 border-gray-200"></div>
						<div className="">
							<label className="block mb-1 text-gray-700 text-xl font-bold">
								{t("Amenities")}
							</label>
							<div className="grid grid-cols-1 mt-5">
								{amenities.map((amenity) => (
									<div key={amenity} className="flex items-center mb-2">
										<input
											type="checkbox"
											checked={form.amenities.includes(amenity)}
											onChange={() => handleAmenityChange(amenity)}
											className="h-4 w-4 accent-primary cursor-pointer"
										/>

										<label className="ml-2 text-gray-500 text-sm cursor-pointer">
											{amenity}
										</label>
									</div>
								))}
							</div>
						</div>
					</div>
				)}


			</div>

			<button
				type="submit"
				onClick={() => {
					setOpenDestination(false);
					setOpenActivity(false);
					setOpenJustify(false);
				}}
				className="bg-primary hover:bg-primary/90 text-white px-10 py-3 rounded-lg font-semibold transition cursor-pointer mt-10 sm:mt-0 w-full"
			>
				{t("Search")}
			</button>
		</form>
	);
}
