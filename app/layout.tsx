import { cookies } from "next/headers";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await cookies()).get("locale")?.value ?? "vi";
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <Header />
          <Navbar />

          <main>{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
