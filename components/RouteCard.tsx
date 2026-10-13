// components/RouteCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import type { RouteData } from "@/lib/routes-data";

export default function RouteCard({ route }: { route: RouteData }) {
  return (
    <Link
      href={`/routes/${route.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-premium hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={route.image}
          alt={`${route.from} to ${route.to} taxi`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Distance + Duration Pills (Top) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-soft">
            <MapPin className="h-3 w-3 text-primary-600" />
            {route.distance} km
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-soft">
            <Clock className="h-3 w-3 text-primary-600" />
            {route.duration}
          </span>
        </div>

        {/* "Best Rate" Gold Badge */}
        <div className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 px-2.5 py-1 text-xs font-bold text-white shadow-gold">
          <Star className="h-3 w-3 fill-white" />
          Best Rate
        </div>

        {/* Route Name on Image (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-xs font-medium uppercase tracking-wider text-gold-300 mb-1">
            From {route.from}
          </div>
          <h3 className="font-display text-xl font-bold text-white drop-shadow-lg leading-tight">
            {route.to}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Highlights Preview */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {route.description}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between">
          <div className="text-sm font-semibold text-primary-700 group-hover:text-primary-800">
            Get Best Price
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 transition-all duration-300 group-hover:bg-primary-600">
            <ArrowRight className="h-4 w-4 text-primary-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}