import { School } from "@/data/schools";

interface SchoolCardProps {
  school: School;
}

export default function SchoolCard({ school }: SchoolCardProps) {
  const typeColors = {
    government: "bg-green-100 text-green-800",
    private: "bg-purple-100 text-purple-800",
    aided: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base font-semibold text-slate-900 leading-tight">
          {school.name}
        </h3>
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${typeColors[school.type]}`}
        >
          {school.type.charAt(0).toUpperCase() + school.type.slice(1)}
        </span>
      </div>

      {/* Quick Info */}
      <div className="flex flex-wrap gap-3 mb-3 text-sm">
        <span className="text-slate-600">
          📚 Classes: <span className="font-medium text-slate-900">{school.classes}</span>
        </span>
        <span className="text-slate-600">
          👨‍🎓 Students: <span className="font-medium text-slate-900">{school.studentStrength}</span>
        </span>
        <span className="text-slate-600">
          👨‍🏫 Staff: <span className="font-medium text-slate-900">{school.staffCount}</span>
        </span>
      </div>

      {/* Medium */}
      <div className="mb-3">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Medium: </span>
        <span className="text-sm text-slate-700">{school.medium.join(", ")}</span>
      </div>

      {/* Facilities */}
      <div className="mb-3">
        <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
          Facilities
        </dt>
        <div className="flex flex-wrap gap-1.5">
          {school.facilities.slice(0, 5).map((facility, idx) => (
            <span
              key={idx}
              className="inline-flex items-center px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-md"
            >
              {facility}
            </span>
          ))}
          {school.facilities.length > 5 && (
            <span className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md font-medium">
              +{school.facilities.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Achievements */}
      {school.achievements && school.achievements.length > 0 && (
        <div className="mb-3">
          <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
            🏆 Achievements
          </dt>
          <ul className="space-y-1">
            {school.achievements.slice(0, 2).map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-yellow-500 mt-0.5">★</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="pt-3 border-t border-slate-100 space-y-1.5">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>📍</span>
          <span className="truncate">{school.distanceFromVillageCenter}</span>
          <span className="text-xs text-slate-500">from village center</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>👨‍💼</span>
          <span>{school.headmaster}</span>
        </div>
        <a
          href={`tel:${school.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
        >
          📞 {school.phone}
        </a>
      </div>
    </div>
  );
}