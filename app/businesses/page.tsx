"use client";

import { useState } from "react";
import { businesses, businessCategories } from "@/data/businesses";
import BusinessCard from "@/components/BusinessCard";

export default function BusinessesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBusinesses = businesses.filter((b) => {
    const matchesCategory =
      selectedCategory === "all" || b.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.services.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Local Business Directory
            </h1>
            <p className="text-lg text-primary-100">
              Shops, services, and businesses in and around Nammivanipeta Village
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Search */}
          <div className="mb-4">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search businesses or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
              <svg
                className="absolute left-3 top-3 h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {businessCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-primary-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <span className="text-xs">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-4 text-sm text-slate-600">
          Showing {filteredBusinesses.length} of {businesses.length} businesses
        </div>

        {filteredBusinesses.length === 0 ? (
          <div className="text-center py-16">
            <span className="text-4xl">🏪</span>
            <p className="mt-4 text-slate-600">
              No businesses found matching your search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 text-primary-600 hover:text-primary-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBusinesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </section>

      {/* Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-semibold text-blue-800 mb-2">
            ℹ️ Business Directory Information
          </h3>
          <p className="text-sm text-blue-700 leading-relaxed">
            This directory lists businesses that operate in Nammivanipeta Village.
            Information is provided for public reference only. Business owners
            can request updates or corrections by contacting the local administrative
            office. Always verify business details before visiting.
          </p>
        </div>
      </section>
    </div>
  );
}
