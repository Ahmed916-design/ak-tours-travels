// components/ServiceCard.tsx
import {
  Car,
  Repeat,
  Plane,
  Train,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const ICONS: Record<string, any> = {
  Car,
  Repeat,
  Plane,
  Train,
  MapPin,
  Clock,
};

type ServiceCardProps = {
  service: {
    icon: string;
    title: string;
    desc: string;
  };
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = ICONS[service.icon] || Car;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:border-primary-200 hover:shadow-premium hover:-translate-y-1">
      {/* Gradient Glow (appears on hover) */}
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary-100 to-gold-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 transition-all duration-500 group-hover:from-primary-600 group-hover:to-primary-700 group-hover:scale-110 group-hover:shadow-premium">
          <Icon className="h-7 w-7 text-primary-700 transition-colors duration-500 group-hover:text-white" />
        </div>

        {/* Title */}
        <h3 className="mt-5 font-display text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-700">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {service.desc}
        </p>

        {/* Arrow Link */}
        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          <Link href="/contact#inquiry">Book Now</Link>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary-500 to-gold-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}