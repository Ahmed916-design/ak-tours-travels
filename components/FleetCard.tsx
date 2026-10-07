// components/FleetCard.tsx
import Image from "next/image";
import { Users, Snowflake } from "lucide-react";
import { formatPrice, whatsappLink } from "@/lib/utils";

type FleetCardProps = {
  car: {
    id: string;
    name: string;
    type: string;
    seats: number;
    ac: boolean;
    pricePerKm: number;
    image: string;
    features: readonly string[];
    popular: boolean;
  };
};

export default function FleetCard({ car }: FleetCardProps) {
  const bookMsg = `Hi, I want to book ${car.name}. Please share details.`;

  return (
    <div className="group card overflow-hidden !p-0">
      <div className="relative aspect-video bg-gray-100">
        <Image
          src={car.image}
          alt={`${car.name} cab in Palanpur`}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {car.popular && (
          <span className="absolute top-3 left-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-gray-900">
            ⭐ Popular
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{car.name}</h3>
        <p className="text-sm text-gray-500">{car.type}</p>

        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Users className="h-4 w-4" /> {car.seats}
          </span>
          {car.ac && (
            <span className="flex items-center gap-1">
              <Snowflake className="h-4 w-4" /> AC
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <div>
            <div className="text-xl font-bold text-green-700">
              {formatPrice(car.pricePerKm)}
            </div>
            <div className="text-xs text-gray-500">per km</div>
          </div>
          <a
            href={whatsappLink(bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm py-2 px-4"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}