"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactPage() {
	const t = useTranslations();
  return (
    <main className="bg-white text-secondary">
      <section className="bg-[url('/bg-1.jpg')] bg-cover bg-center py-16 md:py-20 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("Contact")}</h2>
          <ol className="flex items-center gap-2 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                {t("Home")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-200">{t("Contact")}</li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-primary font-reey text-3xl mb-3">
                {t("talk_with_our_team")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("any_question")} {t("feel_free_to_contact")}
            </h2>
            <p className="text-gray-500 mb-8">
              {t("lorem_ipsum")}
            </p>

            <div className="flex flex-wrap gap-3">
              {["Facebook", "Twitter", "Instagram", "Pinterest"].map((name) => (
                <button
                  key={name}
                  className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-sm text-secondary hover:bg-primary hover:border-primary hover:text-white transition-colors"
                  type="button"
                >
                  {name[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8 border border-gray-100">
            <form className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Write message"
                className="w-full rounded-3xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-sm font-semibold shadow-md hover:bg-secondary transition-colors"
              >
                {t("send_a_message")}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-6 grid gap-6 md:grid-cols-3">
          <div className="flex items-start gap-4 bg-gray-50 rounded-3xl p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
              A
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{t("address")}</h3>
              <p className="text-sm text-gray-500">
                88 Broklyn Street NY, USA
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-3xl p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
              P
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                <a href="tel:6668880000">{t("phone")}</a>
              </h3>
              <p className="text-sm text-gray-500">
                <a href="tel:6668880000" className="hover:text-primary">
                  666 888 0000
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-gray-50 rounded-3xl p-6">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
              E
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">
                <a href="mailto:contact@example.com">{t("email")}</a>
              </h3>
              <p className="text-sm text-gray-500">
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-primary"
                >
                  contact@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-20">
        <div className="w-full h-[350px] md:h-[450px]">
          <iframe
            title="London Eye, London, United Kingdom"
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=18&output=embed&iwloc=near"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}