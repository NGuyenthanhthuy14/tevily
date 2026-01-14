export type Portfolio = {
	slug: string;
	title: string;
	category: string;
	categoryLabel: string;
	image: string
};
type Category = "all" | "adventure" | "family-friendly" | "wildlife";
export const portfolio = [
	{
    title: "Luxury Art House",
    category: "adventure" as Category,
    categoryLabel: "Adventure",
    image:
      "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/04/portfolio-7-580x450.jpg",
  },
  {
    title: "Luxury House Interior",
    category: "family-friendly" as Category,
    categoryLabel: "Family Friendly",
    image:
      "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/04/portfolio-8-580x450.jpg",
  },
  {
    title: "Minimalist Art House",
    category: "wildlife" as Category,
    categoryLabel: "Wildlife",
    image:
      "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/04/portfolio-3-580x450.jpg",
  },
  {
    title: "White Luxury Villa",
    category: "family-friendly" as Category,
    categoryLabel: "Family Friendly",
    image:
      "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/04/portfolio-6-580x450.jpg",
  },
  {
    title: "Luxury Interior",
    category: "family-friendly" as Category,
    categoryLabel: "Family Friendly",
    image:
      "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/04/portfolio-2-580x450.jpg",
  },
  {
    title: "Private House",
    category: "adventure" as Category,
    categoryLabel: "Adventure",
    image:
      "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/04/portfolio-5-580x450.jpg",
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

export const portfolioSlug: Portfolio[] = portfolio.map(item => ({
	...item,
	slug: slugify(item.title, nameSlugs),
}));
