"use client"
import { newSlug } from "@/app/data/news";
import { useParams } from "next/navigation";
import Header from "./components/Header";
import ContentLeft from "./components/ContentLeft";
import ContentRight from "./components/ContentRight";

export default function DetaiNews() {
	const { slug } = useParams<{ slug: string }>();
	const newsContent = newSlug.find(item => item.slug === slug);
	return (
		<div>
			<Header title={newsContent?.title || ''} />

			<div className="py-20 container flex gap-10">
				<ContentLeft image={newsContent?.image || ''} author={newsContent?.author || ''}  title={newsContent?.title || ''} />
				<ContentRight />
			</div>
		</div>
	)
}
