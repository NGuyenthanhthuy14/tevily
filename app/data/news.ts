export type News = {
    slug: string;
		title: string;
		day: string;
		month: string;
    image: string;
    author: string
    excerpt: string;
};
export const news = [
	{
		title: "Exploring the Hidden Gems of Vietnam",
		day: "12",
		month: "Aug",
		image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/post-1-580x450.jpg",
		author: "Admin",
		excerpt: "There are many variations of but the majority have simply free text available not suffered.",
	},
	{
		title: "Top 10 Beaches to Visit This Summer",
		day: "25",
		month: "Jul",
		image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/post-2-580x450.jpg",
		author: "Admin",
		excerpt: "There are many variations of but the majority have simply free text available not suffered.",
	},
	{
		title: "A Culinary Journey Through Italy",
		day: "15",
		month: "Jun",
		image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/post-3-580x450.jpg",
		author: "Admin",
		excerpt: "There are many variations of but the majority have simply free text available not suffered.",
	},
	{
		title: "The Ultimate Guide to Backpacking",
		day: "05",
		month: "May",
		image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/post-4-580x450.jpg",
		author: "Admin",
		excerpt: "There are many variations of but the majority have simply free text available not suffered.",
	},
	{
		title: "Discovering the Ancient Ruins of Greece",
		day: "22",
		month: "Apr",
		image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/post-5-580x450.jpg",
		author: "Admin",
		excerpt: "There are many variations of but the majority have simply free text available not suffered.",
	},
	{
		title: "Wildlife Safari: Top Destinations ",
		day: "10",
		month: "Mar",
		image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2020/12/post-1-580x450.jpg",
		author: "Admin",
		excerpt: "There are many variations of but the majority have simply free text available not suffered.",
	},
];

const slugify = (text: string, existingSlugs: Set<string>) => {
	const baseSlug = text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-");

	let slug = baseSlug;
	let count = 1;

	while (existingSlugs.has(slug)) {
		slug = `${baseSlug}-${count++}`;
	}

	existingSlugs.add(slug);
	return slug;
};

const nameSlugs = new Set<string>();

export const newSlug: News[] = news.map(item => ({
	...item,
	slug: slugify(item.title, nameSlugs),
}));



