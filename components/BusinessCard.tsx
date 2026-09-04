"use client";

import { Business } from "@/data/businesses";

interface BusinessCardProps {
  business: Business;
}

export default function BusinessCard({ business }: BusinessCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base font-semibold text-slate-900 leading-tight">
          {business.name}
        </h3>
        {business.rating && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-full whitespace-nowrap">
            ⭐ {business.rating}
          </span>
        )}
      </div>

      {/* Category & Owner */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="inline-flex items-center px-2.5 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
          {business.category}
        </span>
        <span className="text-sm text-slate-500">by {business.owner}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-3 leading-relaxed">
        {business.description}
      </p>

      {/* Services */}
      <div className="mb-3">
        <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
          Services
        </dt>
        <div className="flex flex-wrap gap-1.5">
          {business.services.slice(0, 4).map((service, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md"
            >
              {service}
            </span>
          ))}
          {business.services.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium">
              +{business.services.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-3">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
          Payment:{" "}
        </span>
        <span className="text-xs text-slate-600">
          {business.paymentMethods.join(", ")}
        </span>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 space-y-2">
        <div className="flex items-start gap-2 text-sm text-slate-600">
          <span className="mt-0.5">📍</span>
          <span>{business.address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>🕐</span>
          <span>{business.workingHours}</span>
        </div>
        <a
          href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
        >
          📞 {business.phone}
        </a>
      </div>
    </div>
  );
}