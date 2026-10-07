// components/CallButton.tsx
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function CallButton({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:${BUSINESS.phone}`} className={`btn-primary ${className}`}>
      <Phone className="h-5 w-5" />
      Call Now
    </a>
  );
}