"use client"
import { portfolioSlug } from "@/app/data/portfolio";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>();
  const item = portfolioSlug.find(item => item.slug === slug);
  const t = useTranslations();
  return (
  <main>
    <section className="bg-[url('/bg-1.jpg')] bg-cover bg-center py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{item?.title}</h2>
          <ol className="flex flex-wrap gap-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-white">
                {t("Home")}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/portfolio" className="hover:text-white">
                {t("Portfolio Page")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-white">{item?.title}</li>
          </ol>
        </div>
      </div>
    </section>
    <section className="py-16">
      <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
        {/* Ảnh lớn + mô tả */}
        <div>
          <div className="overflow-hidden rounded-3xl shadow-lg mb-8">
            <img
              src={item?.image}
              alt={item?.title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="max-w-3xl prose prose-slate">
            <h2 className="text-2xl font-semibold mb-4">{t("project_overview")}</h2>
            <p>
              {t("project_overview_description")}
              <strong>{item?.title}</strong>. {t("project_overview_description_2")}
              {t("project_overview_description_3")}
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">{t("project_info")}</h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">{t("category")}</dt>
                <dd className="font-medium text-right">{item?.categoryLabel}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">{t("client")}</dt>
                <dd className="font-medium text-right">Your Client Name</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">{t("location")}</dt>
                <dd className="font-medium text-right">City, Country</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-gray-500">{t("year")}</dt>
                <dd className="font-medium text-right">2024</dd>
              </div>
            </dl>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-secondary transition-colors"
          >
            ← {t("back_to_portfolio")}
          </Link>
        </aside>
      </div>
    </section>
  </main>
);
}