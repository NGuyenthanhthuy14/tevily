
	
export default function Header({ title }: { title: string }) {

	return (
		<div className="bg-[url('/bg-1.jpg')] bg-cover bg-center">
			<div className="container mx-auto px-6 py-15 text-center text-white">
				<h1 className="text-4xl md:text-6xl font-reey mb-4">{title}</h1>
			</div>
    </div>
  );
}
