import React from "react";
import {
  Check,
  X,
  CreditCard,
  ParkingCircle,
  Ticket,
  Utensils,
  Wifi,
  Cigarette,
  Sofa,
} from "lucide-react";

export default function DetailContent() {
  return (
    <div className="flex-1 px-6  text-[#666]">

      {/* OVERVIEW */}
      <section className="mb-12">
        <h2 className="text-[30px] font-bold text-[#1e2236] mb-6">
          Overview
        </h2>
        <p className="text-md leading-relaxed">
				Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. 
				Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, 
				an pri novum possim deterruisset. Eum oratio reprehendunt cu. Nec te quem assum postea.
        </p>
      </section>

      {/* INCLUDED / EXCLUDED */}
      <section className="mb-16">
        <h2 className="text-[30px] font-bold text-[#1e2236] mb-8">
          Included / Exclude
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-">
          {/* INCLUDED */}
          <div className="space-y-4">
            <Item icon={<Check />} text="Pick and Drop Services" />
            <Item icon={<Check />} text="1 Meal Per Day" />
            <Item icon={<Check />} text="Cruise Dinner & Music Event" />
            <Item icon={<Check />} text="Visit 7 Best Places in the City" />
          </div>

          {/* EXCLUDED */}
          <div className="space-y-4">
            <Item icon={<X />} text="Additional Services" danger />
            <Item icon={<X />} text="Insurance" danger />
            <Item icon={<X />} text="Food & Drinks" danger />
            <Item icon={<X />} text="Tickets" danger />
          </div>
        </div>
      </section>

      <hr className="border-gray-100 mb-16" />

      {/* AMENITIES */}
      <section>
        <h2 className="text-[30px] font-bold text-[#1e2236] mb-10">
          Tour Amenities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
          <Amenity icon={<CreditCard size={32} />} label="Accepts Credit Cards" />
          <Amenity icon={<ParkingCircle size={32} />} label="Car Parking" />
          <Amenity icon={<Ticket size={32} />} label="Free Coupons" />
          <Amenity icon={<Sofa size={32} />} label="Outdoor Seating" />
          <Amenity icon={<Utensils size={32} />} label="Restaurant" />
          <Amenity icon={<Cigarette size={32} />} label="Smoking Allowed" />
          <Amenity icon={<Wifi size={32} />} label="Wireless Internet" />
        </div>
      </section>
    </div>
  );
}

/* ===== COMPONENT CON ===== */

function Item({
  icon,
  text,
  danger = false,
}: {
  icon: React.ReactNode;
  text: string;
  danger?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={danger ? "text-[#1e2236]" : "text-[#f45e49]"}>
        {icon}
      </span>
      <span className="text-md font-medium text-[#1e2236]/80">
        {text}
      </span>
    </div>
  );
}

function Amenity({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="text-[#f45e49] group-hover:scale-110 transition">
        {icon}
      </div>
      <span className="text-md font-bold text-[#1e2236]/80">
        {label}
      </span>
    </div>
  );
}
