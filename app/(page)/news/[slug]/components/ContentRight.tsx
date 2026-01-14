import { newSlug } from "@/app/data/news";
import Link from "next/link";
import React from "react";

const categories = ["Bussiness", "Life Style", "Music", "Technology"];

export default function ContentRight() {
  return (
    <div className="space-y-8">

      <div className="rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-[#E8604C]" />
          <span>All Categories</span>
        </h2>
        <ul className="space-y-2 text-gray-600">
          {newSlug.map((cat) => (
            <li
              key={cat.slug}
              className="cursor-pointer text-base hover:text-[#E8604C] transition-colors"
            >
              {cat.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white px-6 py-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-[#E8604C]" />
          <span>Recent Posts</span>
        </h2>

        <div className="space-y-4">
          {newSlug.map((post) => (
            <div key={post.slug} className="flex gap-4">
              <img
                src={post.image}
                alt={post.slug}
                className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wide text-gray-500 mb-1 flex items-center gap-1">
                  <span className="text-[#E8604C]">💬</span>
                  <span>{0} comments</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 leading-snug hover:text-[#E8604C] cursor-pointer">
                  <Link href={`/news/${post.slug}`}>{post.title}</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}