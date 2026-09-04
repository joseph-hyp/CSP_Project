import { Scheme } from "@/data/schemes";

interface SchemeCardProps {
  scheme: Scheme;
}

export default function SchemeCard({ scheme }: SchemeCardProps) {
  const categoryColors = {
    central: "bg-blue-100 text-blue-800",
    state: "bg-green-100 text-green-800",
    local: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-lg font-semibold text-slate-900 leading-tight">
          {scheme.name}
        </h3>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[scheme.category]}`}
        >
          {scheme.category === "central" ? "Central" : scheme.category === "state" ? "State" : "Local"}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {scheme.description}
      </p>

      {/* Details */}
      <div className="space-y-3">
        <div className="bg-slate-50 rounded-lg p-3">
          <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
            Eligibility
          </dt>
          <dd className="text-sm text-slate-700">{scheme.eligibility}</dd>
        </div>

        <div className="bg-green-50 rounded-lg p-3">
          <dt className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
            Benefit
          </dt>
          <dd className="text-sm text-slate-700">{scheme.benefit}</dd>
        </div>

        <div className="bg-blue-50 rounded-lg p-3">
          <dt className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
            Apply At
          </dt>
          <dd className="text-sm text-slate-700">{scheme.applyAt}</dd>
        </div>

        {/* Documents */}
        <div>
          <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
            Required Documents
          </dt>
          <ul className="space-y-1">
            {scheme.documents.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-primary-500 mt-0.5">✓</span>
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
        {scheme.website && (
          <a
            href={scheme.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
          >
            🌐 Official Website
          </a>
        )}
        {scheme.contactPhone && (
          <a
            href={`tel:${scheme.contactPhone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
          >
            📞 {scheme.contactPhone}
          </a>
        )}
      </div>
    </div>
  );
}