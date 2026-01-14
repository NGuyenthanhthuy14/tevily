import Image from "next/image";
import Link from "next/link";
import Partners from "../(home)/Partners";
import MemberYet from "../(home)/MemberYet";
import Testimonials from "../(home)/Testimonials";
import { useTranslations } from "next-intl";

export default function AboutPage() {
	const t = useTranslations();
  return (
    <main className="bg-white text-secondary">
      <section className="bg-[url('/bg-1.jpg')] bg-cover bg-center py-16 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t("About")}</h2>
          <ol className="flex flex-wrap items-center gap-2 text-sm md:text-base">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                {t("Home")}
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-200">{t("About")}</li>
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-50">
        <div className="container mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
          <div className="relative w-full h-[420px] md:h-[520px]">
            <img
              src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/10/image-13.jpg"
              alt="Tevily Agency"
              className="object-cover rounded-xl"
            />
          </div>

          <div>
            <p className="text-primary font-medium uppercase tracking-[0.2em] mb-2">
              Learn about us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
              Dare to Explore with Tevily Agency
            </h2>
            <p className="text-text leading-relaxed mb-8">
              We are trusted by our clients and have a reputation for the best
              services in the field. Lorem ipsum is simply free text dolor sit
              amet consectetur adipiscing elit. It is a long established fact
              that a reader will be distracted by the readable content of a
              page.
            </p>

            {/* Progress bars */}
            <div className="space-y-5 mb-6">
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium text-secondary">
                  <span>Best Services</span>
                  <span>88%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[88%] bg-primary rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium text-secondary">
                  <span>Tour Agents</span>
                  <span>75%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-[#313041]" />
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <span className="text-primary">/</span>
                Get Right Solutions
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
              >
                <span className="text-primary">/</span>
                Expert Architecture
              </a>
            </div>
          </div>
        </div>
      </section>

			<Partners />
			<Testimonials />
			<MemberYet />
    </main>
  );
}