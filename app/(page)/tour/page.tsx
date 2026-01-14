import Partners from "../(home)/Partners";
import BannerTitle from "../../components/bannerTitle/BannerTitle";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";


export default function Tour() {
	return (
		<div>
			<BannerTitle title="Explore The Worlds" desc="People Don’t Take, Trips Take People" />
			<div className="container">
				<div className="my-15 flex gap-10">
					<ContentLeft />
					<ContentRight />
				</div>
			</div>
			<Partners />
		</div>
	)
}
