
"use client";

import { portfolioSlug } from "@/app/data/portfolio";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

type Category = "all" | "adventure" | "family-friendly" | "wildlife";





export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("all");
	const t = useTranslations();
	const filters: { key: Category; label: string }[] = [
		{ key: "all", label: t("all") },
		{ key: "adventure", label: t("adventure") },
		{ key: "family-friendly", label: t("family-friendly") },
		{ key: "wildlife", label: t("wildlife") },
	];
  const filtered =
    active === "all" ? portfolioSlug : portfolioSlug.filter((item) => item.category === active);
		

  return (
    <main className="bg-white text-secondary">
      <section className="bg-[url('/bg-1.jpg')] bg-cover bg-center py-16 md:py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("Portfolio Page")}</h2>
          <ol className="flex items-center gap-2 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                {t("Home")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-200">{t("Portfolio Page")}</li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-primary font-reey tracking-[0.25em] mb-2 text-2xl">
              {t("usepofo")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 leading-tight">
              {t("pofo")}
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors
                  ${
                    active === f.key
                      ? "bg-primary border-primary text-white"
                      : "bg-white border-gray-200 text-secondary hover:border-primary hover:text-primary"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {filtered.map((item) => (
              <div
                key={item.slug}
                className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white group"
              >
                <div className="relative w-full h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mb-1">
                    {item.categoryLabel}
                  </p>
                  <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
                    <Link href={`/portfolio/${item.slug}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}