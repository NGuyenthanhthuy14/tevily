"use client"
import MemberYet from "@/app/(page)/(home)/MemberYet";
import PopularTours from "@/app/(page)/(home)/PopularTours";
import { tour } from "@/app/data/tour";
import { useParams } from "next/navigation";

export default function Location() {
  const { slug } = useParams<{ slug: string }>();
  const location = tour.find(item => item.address === slug)
  console.log(slug)
  console.log(location)
  return (
    <div className=" ">
      <div className="bg-[#fbf7f0]  py-16 px-4">
        <div className="container flex flex-col lg:flex-row gap-10 items-center">

          <div className="w-full lg:w-1/2">
            <div className="relative h-120 rounded-2xl overflow-hidden shadow-2xl border-10 border-white">
              <img
                src={location?.image}
                alt={location?.title || ""}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">

            <div className="mb-6">
              <h2 className="text-4xl font-bold text-[#1e2236] mb-2">
                {location?.title || ""}
              </h2>
              <div className="w-12 h-0.5 bg-primary"></div>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              {location?.description || ""}
            </p>
            <div className="space-y-5">
              <div className="flex gap-30 border-b border-gray-200 pb-4">
                <span className="font-semibold text-[#1e2236]">Country</span>
                <span className="text-gray-500">Americas</span>
              </div>
              <div className="flex gap-10 border-b border-gray-200 pb-4">
                <span className="font-semibold text-[#1e2236]">Languages Spoken</span>
                <span className="text-gray-500">English</span>
              </div>
              <div className="flex gap-10 border-b border-gray-200 pb-4">
                <span className="font-semibold text-[#1e2236]">Visa Requirements</span>
                <span className="text-gray-500">Personal Documents Required</span>
              </div>
              <div className="flex gap-25">
                <span className="font-semibold text-[#1e2236]">Area (km2)</span>
                <span className="text-gray-500">88.000 km2</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="container my-30">
        <PopularTours />
      </div>
      <MemberYet />
    </div>
  );
}
