// components/InquiryForm.tsx
"use client";

import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { FLEET } from "@/lib/constants";

type TripType = "one-way" | "round-trip" | "local";

export default function InquiryForm({
  defaultCar = "",
  defaultRoute = "",
  compact = false,
}: {
  defaultCar?: string;
  defaultRoute?: string;
  compact?: boolean;
}) {
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pickup: "",
    drop: defaultRoute || "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    carType: defaultCar,
    passengers: "",
    notes: "",
  });

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.phone || !form.pickup || !form.drop || !form.pickupDate) {
      alert("Please fill all required fields (Name, Phone, Pickup, Drop, Date)");
      return;
    }

    // Build WhatsApp message
    const lines = [
      `🚕 *New Inquiry — A K Tours and Travels*`,
      ``,
      `👤 *Name:* ${form.name}`,
      `📞 *Phone:* ${form.phone}`,
      `📍 *Pickup:* ${form.pickup}`,
      `🎯 *Drop:* ${form.drop}`,
      `🔄 *Trip Type:* ${tripType === "one-way" ? "One-way" : tripType === "round-trip" ? "Round-trip" : "Local (8hr/80km)"}`,
      `📅 *Pickup Date:* ${form.pickupDate}`,
    ];

    if (form.pickupTime) lines.push(`⏰ *Pickup Time:* ${form.pickupTime}`);
    if (tripType === "round-trip" && form.returnDate) {
      lines.push(`📅 *Return Date:* ${form.returnDate}`);
    }
    if (form.carType) lines.push(`🚗 *Car Type:* ${form.carType}`);
    if (form.passengers) lines.push(`👥 *Passengers:* ${form.passengers}`);
    if (form.notes) lines.push(`📝 *Notes:* ${form.notes}`);

    lines.push(``, `_Sent from website_`);

    const message = lines.join("\n");
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 XXXXX XXXXX"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      {/* Pickup + Drop */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location *
          </label>
          <input
            type="text"
            required
            value={form.pickup}
            onChange={(e) => update("pickup", e.target.value)}
            placeholder="e.g., Palanpur"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Drop Location *
          </label>
          <input
            type="text"
            required
            value={form.drop}
            onChange={(e) => update("drop", e.target.value)}
            placeholder="e.g., Ambaji"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      {/* Trip Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Trip Type *
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: "one-way", label: "One-way" },
            { value: "round-trip", label: "Round-trip" },
            { value: "local", label: "Local (8h/80km)" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setTripType(option.value as TripType)}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition ${
                tripType === option.value
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-gray-300 bg-white text-gray-700 hover:border-green-300"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Dates */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Date *
          </label>
          <input
            type="date"
            required
            value={form.pickupDate}
            onChange={(e) => update("pickupDate", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Time
          </label>
          <input
            type="time"
            value={form.pickupTime}
            onChange={(e) => update("pickupTime", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      {/* Return Date — sirf round-trip pe */}
      {tripType === "round-trip" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Return Date
          </label>
          <input
            type="date"
            value={form.returnDate}
            onChange={(e) => update("returnDate", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
      )}

      {/* Car Type + Passengers */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Type
          </label>
          <select
            value={form.carType}
            onChange={(e) => update("carType", e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          >
            <option value="">Any / Not sure</option>
            {FLEET.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name} ({car.seats} seats)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Passengers
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={form.passengers}
            onChange={(e) => update("passengers", e.target.value)}
            placeholder="e.g., 4"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes (optional)
        </label>
        <textarea
          rows={compact ? 2 : 3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Any special requests? (AC required, extra luggage, etc.)"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
        />
      </div>

      {/* Submit */}
      <button type="submit" className="btn-whatsapp w-full text-base py-4">
        <Send className="h-5 w-5" />
        Send Inquiry via WhatsApp
      </button>

      <p className="text-center text-xs text-gray-500">
        Click karte hi WhatsApp khulega — aapko hum turant reply karenge{" "}
        {BUSINESS.phoneDisplay} se
      </p>
    </form>
  );
}