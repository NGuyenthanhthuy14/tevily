
import { useTranslations } from "next-intl";
import Banner from "../../components/banner/Banner";
import ExoticPlace from "./ExoticPlace";
import Plan from "./Plan";
import PopularTours from "./PopularTours";
import VideoFeatures from "./VideoFeatures";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import ChooseTevily from "./ChooseTevily";
import NewsArticles from "./NewsArticles";
import MemberYet from "./MemberYet";


export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Banner />
      <div className="container">
        <ExoticPlace />
        <Plan />
        <PopularTours />
      </div>
      <VideoFeatures />
      <Partners />
      <Testimonials />
      <ChooseTevily />
      <NewsArticles />
      <MemberYet />
    </>
  );
}
