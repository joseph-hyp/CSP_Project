interface InfoCardProps {
  icon: string;
  title: string;
  value: string;
}

export default function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5">{icon}</span>
        <div>
          <dt className="text-sm font-medium text-slate-500 mb-1">{title}</dt>
          <dd className="text-base font-semibold text-slate-900">{value}</dd>
        </div>
      </div>
    </div>
  );
}