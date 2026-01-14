type ContentLeftProps = {
  image: string;
  author: string;
  title: string;
};

export default function ContentLeft({
  image,
  author,
  title,
}: ContentLeftProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <span className="text-red-500">👤</span>
          <span>{author}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-red-500">📁</span>
        </div>
      </div>


      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
        {title}
      </h1>


      <p className="text-gray-600 font-light leading-relaxed mb-4">
        The Spring is a passionate and determined group of monthly givers on a
        mission to end the water crisis in our lifetime. People like you, from
        more than 100 countries around the world, giving anything they can to
        prove how unstoppable we are when we work together.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8 font-light">
        <span className="font-semibold">
          Clean water helps keep kids in school, especially girls.
        </span>{" "}
        Less time collecting water means more time in class. Clean water and
        proper toilets at school means teenage girls don&apos;t have to stay
        home for a week out of every month.
      </p>

      {/* Quote block */}
      <div className="border-l-4 border-red-400 bg-red-50 px-6 py-10 mb-10 font-light">
        <div className="text-4xl text-red-500 mb-4">❝</div>
        <p className="text-gray-700 italic leading-relaxed mb-6">
          Before Natalia&apos;s village had a clean water tap, she often
          didn&apos;t have time for school. Now, she goes to school every day
          and she&apos;s the President of her local Water Committee. And
          she&apos;s just getting started.
        </p>
        <p className="text-gray-800 font-semibold">said Polito</p>
      </div>

      {/* Heading tiếp theo */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        How do we tackle the water crisis?
      </h2>
      <p className="text-gray-600 leading-relaxed font-light">
        We work with local experts and community members to find the best
        sustainable solution in each place where we work, whether it&apos;s a
        well, a piped system, a BioSand Filter, or a system for harvesting
        rainwater. And with every water point we fund, our partners coordinate
        sanitation and hygiene training, and establish a local Water Committee
        to help keep water flowing for years to come.
      </p>
    </div>
  );
}