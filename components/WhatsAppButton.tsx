// components/WhatsAppButton.tsx
"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function WhatsAppButton({
  message = "Hi, I want to book a cab",
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  const link = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
}