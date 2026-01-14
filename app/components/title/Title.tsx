type TitleProps = {
	title: string;
	desc: string;
}
export default function Title({ title, desc }: TitleProps) {
	return (
		<div className='container mt-10 text-center space-y-3 '>
			<div className="sm:text-2xl text-lg font-bold font-reey text-primary">{title}</div>
			<div className="sm:text-5xl text-3xl font-semibold">{desc}</div>
		</div>
	)
}
