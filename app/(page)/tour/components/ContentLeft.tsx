import Search from '@/app/components/search/Search'
import { tour } from '@/app/data/tour'
import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { BsStarHalf } from 'react-icons/bs'

export default function ContentLeft() {

	return (
		<div>
			<Search variant="mobile"/>
			<div className="max-w-87.5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mt-5">
      <h3 className="text-2xl font-bold text-[#1e2236] mb-6">
        Last Minute
      </h3>

      <div className="space-y-4">
        {tour.slice(0,4).map((tours, index) => (
          <div key={tours.slug}>
            {/* ITEM */}
            <div
              className="
                flex gap-4 p-3 rounded-xl cursor-pointer
                transition-all duration-300
                hover:bg-gray-50 hover:shadow-md
              "
            >
              {/* IMAGE */}
              <div className="w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                <img
                  src={tours.image}
                  alt={tours.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center flex-1">
                {/* Rating (giữ chiều cao cố định để không nhảy layout) */}
                <div className="h-4.5 mb-1">
                  {tours.rating > 0 && (
                    <div className="flex text-[#ffa801]">
                      {[...Array(Math.floor(tours.rating))].map((_, i) => (
                        <StarIcon key={i} className='h-4 w-4' fill="currentColor" stroke="none" />
                      ))}
                      {tours.rating % 1 !== 0 && (
                        <BsStarHalf  className='w-3 h-4' fill="currentColor" stroke="none" />
                      )}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h4 className="text-[16px] font-semibold text-[#1e2236] leading-snug line-clamp-2 hover:text-[#f45e49] transition-colors">
                  {tours.title}
                </h4>

                {/* Price */}
                <div className="text-sm text-gray-500 mt-1">
                  From{" "}
                  <span className="text-[#f45e49] font-bold">
                    ${tours.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index !== tour.length - 1 && (
              <hr className="mt-4 border-gray-100" />
            )}
          </div>
        ))}
      </div>
    </div>
		</div>
	)
}
