interface EmergencyCardProps {
  service: string;
  number: string;
  description: string;
  available: string;
}

export default function EmergencyCard({
  service,
  number,
  description,
  available,
}: EmergencyCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-red-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{service}</h3>
          <p className="text-sm text-slate-600 mt-1">{description}</p>
        </div>
        <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full whitespace-nowrap">
          {available}
        </span>
      </div>
      <a
        href={`tel:${number.replace(/[^0-9]/g, "")}`}
        className="inline-flex items-center justify-center gap-2 w-full bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors"
      >
        📞 Call {number}
      </a>
    </div>
  );
}