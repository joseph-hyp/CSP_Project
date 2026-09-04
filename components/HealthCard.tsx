import { HealthFacility } from "@/data/health";

interface HealthCardProps {
  facility: HealthFacility;
}

export default function HealthCard({ facility }: HealthCardProps) {
  const typeColors = {
    phc: "bg-blue-100 text-blue-800",
    chc: "bg-purple-100 text-purple-800",
    hospital: "bg-red-100 text-red-800",
    "sub-centre": "bg-green-100 text-green-800",
    vet: "bg-orange-100 text-orange-800",
    diagnostic: "bg-cyan-100 text-cyan-800",
    pharmacy: "bg-pink-100 text-pink-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-slate-900 leading-tight">
          {facility.name}
        </h3>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${typeColors[facility.type]}`}
        >
          {facility.type.toUpperCase()}
        </span>
      </div>

      {/* Hours */}
      <div className="space-y-1 mb-3 text-sm">
        <div className="flex items-center gap-2 text-slate-600">
          <span>🕐</span>
          <span>{facility.workingHours}</span>
        </div>
        <div className="flex items-center gap-2 text-green-700 font-medium">
          <span>🚑</span>
          <span>{facility.emergencyHours}</span>
        </div>
      </div>

      {/* Staff */}
      <div className="bg-slate-50 rounded-lg p-3 mb-3">
        <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Staff Strength
        </dt>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-slate-600">
            👨‍⚕️ Doctors: <span className="font-medium">{facility.staff.doctors}</span>
          </span>
          <span className="text-slate-600">
            👩‍⚕️ Nurses: <span className="font-medium">{facility.staff.nurses}</span>
          </span>
          <span className="text-slate-600">
            🏥 Paramedics: <span className="font-medium">{facility.staff.paramedics}</span>
          </span>
          <span className="text-slate-600">
            👥 Others: <span className="font-medium">{facility.staff.others}</span>
          </span>
        </div>
      </div>

      {/* Services */}
      <div className="mb-3">
        <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Services Available
        </dt>
        <ul className="space-y-1">
          {facility.services.slice(0, 5).map((service, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-primary-500 mt-0.5">✓</span>
              {service}
            </li>
          ))}
          {facility.services.length > 5 && (
            <li className="text-xs text-primary-600 font-medium ml-5">
              +{facility.services.length - 5} more services
            </li>
          )}
        </ul>
      </div>

      {/* Facilities */}
      <div className="mb-3">
        <dt className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Infrastructure
        </dt>
        <div className="flex flex-wrap gap-1.5">
          {facility.facilities.slice(0, 4).map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md"
            >
              {item}
            </span>
          ))}
          {facility.facilities.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium">
              +{facility.facilities.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Notes */}
      {facility.notes && (
        <div className="bg-yellow-50 rounded-lg p-3 mb-3">
          <p className="text-xs text-yellow-800">{facility.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 space-y-2">
        <div className="flex items-start gap-2 text-sm text-slate-600">
          <span className="mt-0.5">📍</span>
          <span>{facility.distanceFromVillageCenter} from village center</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>👨‍⚕️</span>
          <span>{facility.inCharge}</span>
        </div>
        <a
          href={`tel:${facility.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
        >
          📞 {facility.phone}
        </a>
        {facility.ambulance && facility.ambulancePhone && (
          <a
            href={`tel:${facility.ambulancePhone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            🚑 Ambulance: {facility.ambulancePhone}
          </a>
        )}
      </div>
    </div>
  );
}