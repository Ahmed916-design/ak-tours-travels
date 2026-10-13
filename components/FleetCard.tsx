// components/FleetCard.tsx
import Image from "next/image";
import { Users, Snowflake, Phone, MessageCircle, Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { whatsappLink } from "@/lib/utils";

type FleetCardProps = {
  car: {
    id: string;
    name: string;
    type: string;
    seats: number;
    ac: boolean;
    image: string;
    features: readonly string[];
    popular: boolean;
  };
};

export default function FleetCard({ car }: FleetCardProps) {
  const bookMsg = `Hi, I want to book ${car.name}. Please share the best rate.`;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-premium hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={car.image}
          alt={`${car.name} cab in Palanpur`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Popular Badge — Gold */}
        {car.popular && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1 text-xs font-bold text-white shadow-gold">
            <Star className="h-3 w-3 fill-white" />
            POPULAR
          </div>
        )}

        {/* Rating Badge — Top Right */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-soft">
          <Star className="h-3 w-3 fill-gold-500 text-gold-500" />
          4.8
        </div>

        {/* Car Name on Image (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-xl font-bold text-white drop-shadow-lg">
            {car.name}
          </h3>
          <p className="text-sm text-white/90 font-medium">{car.type}</p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
            <Users className="h-3.5 w-3.5" />
            {car.seats} Seats
          </span>
          {car.ac && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
              <Snowflake className="h-3.5 w-3.5" />
              AC
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700">
            💰 Best Rate
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="mt-5 flex gap-2">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary-600 px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-premium active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={whatsappLink(bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1ebe57] hover:shadow-premium active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}