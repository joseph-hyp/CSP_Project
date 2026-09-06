import type { Metadata } from "next";
import { village } from "@/data/village";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "About Village",
  description: `Learn about ${village.name} — ${village.area}, ${village.district}, ${village.state}. Population, field survey data, governance, and more.`,
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About {village.name}</h1>
            <p className="text-lg text-primary-100">{village.tagline}</p>
          </div>
        </div>
      </section>

      {/* Village Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Village Overview" />
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 mb-12">
          <p className="text-slate-700 leading-relaxed text-lg">{village.description}</p>
        </div>

        {/* Key Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <InfoCard icon={"\u{1F4CD}"} title="Location" value={village.area} />
          <InfoCard icon={"\u{1F4EE}"} title="Pincode" value={village.pincode} />
          <InfoCard icon={"\u{1F465}"} title="Population" value={`${village.population} (CSP Field Survey)`} />
          <InfoCard icon={"\u{1F3E0}"} title="Households" value={`${village.households} (CSP Field Survey)`} />
          <InfoCard icon={"\u{1F4CA}"} title="Registered Voters" value={`${village.voters} (CSP Field Survey)`} />
          <InfoCard icon={"\u{1F3EB}"} title="Government Schools" value={`${village.governmentSchools}`} />
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">About Our Village</h2>
          <p className="text-slate-700 leading-relaxed mb-4">{village.description}</p>
          <p className="text-slate-700 leading-relaxed">
            {village.name} is located in the {village.area} of {village.district} District, {village.state}.
            The village falls under the pincode {village.pincode} and is administered through local government
            bodies. The village has a population of approximately {village.population} with {village.households} households.
          </p>
        </div>
      </section>

      {/* Administrative Context */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Administrative Context" subtitle={"\u201CLocation\u201D details for Nammivanipeta"} />
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="space-y-3">
              {[
                { label: "Village", value: "Nammivanipeta" },
                { label: "Post", value: "Sangivalasa" },
                { label: "Area", value: "Bheemunipatnam / Bheemili" },
                { label: "District", value: "Visakhapatnam" },
                { label: "State", value: "Andhra Pradesh" },
                { label: "PIN", value: "531162" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3">
                  <span className="text-sm font-medium text-slate-500 w-24">{item.label}</span>
                  <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">
              Public records associate Nammivanipeta with Sangivalasa Post, Bheemunipatnam Mandal, Visakhapatnam District, Andhra Pradesh, PIN 531162.
            </p>
          </div>
        </div>
      </section>

      {/* Electoral Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Electoral Profile" subtitle="CSP field-survey voter data" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {[
            { label: "Registered Voters", value: "1,307" },
            { label: "Male Voters", value: "654" },
            { label: "Female Voters", value: "653" },
            { label: "Gender Ratio", value: "~50:50" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 text-center">
              <div className="text-2xl font-bold text-primary-600">{item.value}</div>
              <div className="text-sm text-slate-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">Source: CSP field survey record.</p>
      </section>

      {/* Household Profile */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Household Profile" subtitle="CSP field-survey household data" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {[
              { label: "Total Households", value: "1,455" },
              { label: "Pucca Houses", value: "1,380" },
              { label: "Kutcha Houses", value: "75" },
              { label: "Electricity Connections", value: "1,320" },
              { label: "LPG Connections", value: "1,345" },
              { label: "Rice Cards", value: "920" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
                <span className="text-sm text-slate-700">{item.label}</span>
                <span className="text-xl font-bold text-primary-600">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400">Source: CSP field survey record.</p>
        </div>
      </section>

      {/* Community Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Community Infrastructure" subtitle="CSP field-survey infrastructure data" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {[
            { label: "Overhead Tank", value: "1" },
            { label: "Public Taps", value: "16" },
            { label: "Household Taps", value: "240" },
            { label: "Hand Pumps", value: "16" },
            { label: "Apartments", value: "21" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
              <span className="text-sm text-slate-700">{item.label}</span>
              <span className="text-xl font-bold text-primary-600">{item.value}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">Source: CSP field survey record.</p>
      </section>

      {/* Social Security Pensions */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Social Security Pension Distribution" subtitle="CSP field-survey data" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {[
              { label: "Old Age Pensions", value: "146" },
              { label: "Widow Pensions", value: "36" },
              { label: "Disabled Pensions", value: "31" },
              { label: "Single Women", value: "6" },
              { label: "Other Category", value: "1" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
                <span className="text-sm text-slate-700">{item.label}</span>
                <span className="text-xl font-bold text-primary-600">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400">Source: CSP field survey record. Figures shown are based on the field-survey record provided for the Community Service Project and may require local administrative verification.</p>
        </div>
      </section>

      {/* Waste & Sanitation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Waste & Sanitation" subtitle="CSP field-survey data" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {[
            { label: "Garbage Collection Vehicle", value: "1" },
            { label: "Sanitation Workers", value: "6" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
              <span className="text-sm text-slate-700">{item.label}</span>
              <span className="text-xl font-bold text-primary-600">{item.value}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">Source: CSP field survey record.</p>
      </section>

      {/* Location & Map */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Location & Map" />
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Village Address</h3>
                <p className="text-slate-600">{village.contact.address}</p>
              </div>
              <a
                href={village.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                View Nammivanipeta on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Data Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="font-semibold text-yellow-800 mb-2">
            Data Note
          </h3>
          <p className="text-sm text-yellow-700 leading-relaxed">
            Village-level figures shown on this portal are based primarily on information collected for the Community Service Project field survey and selected publicly available government sources. Some figures may require verification with the relevant local authority before being used for official purposes.
          </p>
        </div>
      </section>
    </div>
  );
}
