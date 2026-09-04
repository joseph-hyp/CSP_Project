interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-slate-600 max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-3 h-1 w-16 bg-primary-600 rounded-full"></div>
    </div>
  );
}