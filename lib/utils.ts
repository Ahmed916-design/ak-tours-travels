// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BUSINESS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function whatsappLink(message: string): string {
  const phone = BUSINESS.whatsapp;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}