export type Tour = {
  slug: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  destination?: string;
  activity?: string;
  time: string;
  guest: number;
  address: string
  description: string;
  Amenities?: string[];
};
export const tours = [
  {
    title: "Discover the Ancient City of Hoi An",
    destination: "Hoi An",
    location: "Hoi An, Vietnam",
    address: "morocco",
    price: 120,
    activity: "City Tour",
    rating: 4.8,
    guest: 2,
    time: "5 days",
    Amenities: ["WiFi", "Breakfast", "Parking"],
    image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-2.jpg",
    description:
      "Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.",
  },
  {
    title: "Halong Bay Cruise Adventure",
    destination: "Ha Long",
    location: "Halong Bay, Vietnam",
    price: 200,
    rating: 4.9,
    address: "united-kingdom",
    activity: "Cruise",
    guest: 2,
    time: "7 days",
    Amenities: ["WiFi", "Breakfast", "Parking"],
    image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-5.jpg",
    description:
      "Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.",
  },
  {
    title: "Sapa Trekking Experience",
    destination: "Sapa",
    location: "Sapa, Vietnam",
    price: 150,
    activity: "Hiking",
    rating: 4.7,
    address: "singapore",
    guest: 2,
    time: "5 days",
    Amenities: ["WiFi", "Breakfast", "Parking"],
    image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-15.jpg",
    description:
      "Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.",
  },
  {
    title: "Mekong Delta Boat Tour",
    destination: "Mekong Delta",
    location: "Mekong Delta, Vietnam",
    price: 100,
    rating: 4.6,
    activity: "Boat Tour",
    guest: 2,
    time: "4 days",
    address: "hungary",
    Amenities: ["Accepts Credit Cards", "Reservations", "Outdoor Seating"],
    image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-16.jpg",
    description:
      "Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.",
  },
  {
    title: "Phu Quoc Island Getaway",
    destination: "Phu Quoc",
    location: "Phu Quoc, Vietnam",
    price: 180,
    rating: 4.8,
    activity: "Beach",
    address: "italy",
    guest: 4,
    time: "6 days",
    Amenities: ["Smoking Allowed", "Restaurant", "Free Coupons"],
    image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-17.jpg",
    description:
      "Lorem ipsum available isn but the majority have suffered alteratin in some or form injected. Lorem Ipsum. Proin gravida nibh vel velit auctor aliqueenean sollicitudin, lorem quis bibendum auctor consequat.",
  },

  {
    title: "Da Lat Mountain Retreat",
    destination: "Da Lat",
    location: "Da Lat, Vietnam",
    price: 140,
    rating: 4.7,
    activity: "Hiking",
    guest: 6,
    address: "lao",
    time: "5 days",
    Amenities: ["Accepts Credit Cards", "Car Parking", "Wireless Internet"],
    image: "https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-18.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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

export const tour: Tour[] = tours.map(item => ({
  ...item,
  slug: slugify(item.title, nameSlugs),
}));
