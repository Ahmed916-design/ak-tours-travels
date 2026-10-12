// components/RouteCard.tsx
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { RouteData } from "@/lib/routes-data";

export default function RouteCard({ route }: { route: RouteData }) {
  return (
    <Link href={`/routes/${route.slug}`} className="group card block">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <MapPin className="h-4 w-4 text-green-600" />
        <span>{route.distance} km</span>
        <span>•</span>
        <span>{route.duration}</span>
      </div>
      <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-green-600">
        {route.from} → {route.to}
      </h3>
      <div className="mt-4 flex items-center justify-between border-t pt-4">
        <div className="text-sm font-semibold text-green-700">
          💰 Best Price — Call Now
        </div>
        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition" />
      </div>
    </Link>
  );
}