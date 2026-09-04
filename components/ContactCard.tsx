import { Contact } from "@/data/contacts";

interface ContactCardProps {
  contact: Contact;
}

export default function ContactCard({ contact }: ContactCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-base font-semibold text-slate-900">
          {contact.name}
        </h3>
        <p className="text-sm text-primary-600 font-medium">
          {contact.designation}
        </p>
        <p className="text-xs text-slate-500 mt-0.5">{contact.department}</p>
      </div>

      {/* Contact Details */}
      <div className="space-y-2">
        <a
          href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary-600 transition-colors group"
        >
          <span className="text-base">📱</span>
          <span className="group-hover:underline">{contact.phone}</span>
        </a>

        {contact.phoneAlt && (
          <a
            href={`tel:${contact.phoneAlt.replace(/[^0-9+]/g, "")}`}
            className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary-600 transition-colors group"
          >
            <span className="text-base">📞</span>
            <span className="group-hover:underline">{contact.phoneAlt}</span>
          </a>
        )}

        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary-600 transition-colors group"
          >
            <span className="text-base">✉️</span>
            <span className="group-hover:underline truncate">{contact.email}</span>
          </a>
        )}

        <div className="flex items-start gap-2 text-sm text-slate-600">
          <span className="text-base mt-0.5">📍</span>
          <span>{contact.address}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>🕐</span>
          <span>{contact.workingHours}</span>
        </div>
      </div>
    </div>
  );
}