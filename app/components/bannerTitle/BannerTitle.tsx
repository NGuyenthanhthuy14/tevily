type BannerTitleProps = {
	title: string,
	desc: string,
}
export default function BannerTitle({ title, desc }: BannerTitleProps) {
	return (
		<div className="bg-[url('https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/10/bg-5.jpg')] bg-cover bg-center">
			<div className="container mx-auto px-6 py-25 text-center text-white">
				<div className="text-4xl md:text-6xl font-bold mb-4">{title}</div>
				<div className="text-xl md:text-2xl font-light">{desc}</div>
			</div>
		</div>
	)
}
