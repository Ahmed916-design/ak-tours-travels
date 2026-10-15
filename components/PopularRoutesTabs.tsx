// components/PopularRoutesTabs.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RouteCard from "./RouteCard";
import SectionHeading from "./SectionHeading";
import { POPULAR_CATEGORIES } from "@/lib/popular-routes-data";
import { ROUTES } from "@/lib/routes-data";

export default function PopularRoutesTabs() {
  const [activeTab, setActiveTab] = useState(POPULAR_CATEGORIES[0].id);

  const activeCategory = POPULAR_CATEGORIES.find((c) => c.id === activeTab);
  const activeRoutes = activeCategory
    ? ROUTES.filter((r) => activeCategory.routes.includes(r.slug))
    : [];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Most Popular Routes"
          title="Choose Your Journey Type"
          subtitle="From quick nearby getaways to All India tours — we cover everything"
        />

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {POPULAR_CATEGORIES.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-premium scale-105"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                <span className="text-base">{category.emoji}</span>
                <span>{category.label}</span>
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-xs font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {category.routes.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Description */}
        {activeCategory && (
          <p className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
            {activeCategory.description}
          </p>
        )}

        {/* Routes Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activeRoutes.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link href="/routes" className="btn-secondary">
            View All Routes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}