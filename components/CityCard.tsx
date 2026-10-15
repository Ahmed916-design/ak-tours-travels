// components/CityCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Route } from "lucide-react";
import type { CityData } from "@/lib/cities-data";

type CityCardProps = {
  city: CityData;
  image: string;
};

export default function CityCard({ city, image }: CityCardProps) {
  return (
    <Link
      href={`/cities/${city.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`Cab service in ${city.name}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

        {/* City State Badge (Top Left) */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-soft">
          <MapPin className="h-3 w-3 text-primary-600" />
          {city.state}
        </div>

        {/* Routes Count Badge (Top Right) */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-2.5 py-1 text-xs font-bold text-white shadow-gold">
          <Route className="h-3 w-3" />
          {city.popularRoutes.length}+ Routes
        </div>

        {/* City Name on Image (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg leading-tight">
            {city.name}
          </h3>
          <p className="mt-1 text-sm text-white/90 font-medium line-clamp-1">
            {city.tagline}
          </p>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        <p className="text-sm text-gray-600 line-clamp-2">{city.description}</p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between">
          <div className="text-sm font-semibold text-primary-700 group-hover:text-primary-800">
            Explore {city.name}
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-600">
            <ArrowRight className="h-4 w-4 text-primary-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}