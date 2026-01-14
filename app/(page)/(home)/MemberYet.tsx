import { ArrowRightCircleIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export default function MemberYet (){
  const t = useTranslations();
  return (
    <section className="relative w-full bg-[#fbf7f0] py-16 md:py-24">
      <div className="container">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100' fill='none' stroke='black' stroke-width='1'/%3E%3Cpath d='M0 200 Q 50 150, 100 200 T 200 200 T 300 200 T 400 200' fill='none' stroke='black' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "800px 800px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between sm:gap-14 gap-1">

        <div className="w-full lg:w-1/2">
          <span className="text-[#f45e49] italic text-2xl mb-3 block font-reey">
            {t("join_us")}
          </span>

          <h2 className="text-[40px] md:text-[54px] font-bold text-[#1e2236] leading-tight mb-6">
            {t("not_member_yet")}
          </h2>

          <p className="text-[#666] text-lg mb-10 max-w-lg">
            {t("join_member_desc")}
          </p>

          <div className="flex flex-wrap gap-5">
            <button
              className="
                flex items-center gap-3
                bg-[#f45e49] hover:bg-[#1e2236]
                text-white font-bold
                py-4 px-8 rounded-lg
                uppercase text-xs tracking-widest
                transition-all duration-300
                shadow-[0_12px_30px_rgba(244,94,73,0.35)]
                hover:-translate-y-1
              "
            >
              <ArrowRightCircleIcon className="h-5 w-5" />
            {t("sign_in")}
            </button>

            <button
              className="
                flex items-center gap-3
                bg-white hover:bg-gray-50
                text-[#1e2236] font-bold
                py-4 px-8 rounded-lg
                uppercase text-xs tracking-widest
                transition-all duration-300
                border border-gray-200
                shadow-sm hover:shadow-md
                hover:-translate-y-1
              "
            >
              <UserPlusIcon className="h-5 w-5" />
              {t("register")}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-end h-105">
          <div className="relative group">
						<img src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/10/image-app.png" alt="App Mockup" className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto" />
          </div>
        </div>
      </div>
			</div>
    </section>
  );
};

