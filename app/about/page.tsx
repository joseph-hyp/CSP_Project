import type { Metadata } from "next";
import { village } from "@/data/village";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";

export const metadata: Metadata = {
  title: "About Village",
  description: `Learn about ${village.name} village — ${village.mandal}, ${village.district}, ${village.state}. Population, facilities, governance, and more.`,
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
          <InfoCard icon="📍" title="Location" value={`${village.mandal}, ${village.district}, ${village.state}`} />
          <InfoCard icon="📮" title="Pincode" value={village.pincode} />
          <InfoCard icon="👥" title="Population" value={village.population} />
          <InfoCard icon="📐" title="Area" value={village.area} />
          <InfoCard icon="🏛️" title="Governance" value={village.governance} />
          <InfoCard icon="📅" title="Established" value={village.established} />
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">About Our Village</h2>
          <p className="text-slate-700 leading-relaxed mb-4">{village.description}</p>
          <p className="text-slate-700 leading-relaxed">
            {village.name} is located in {village.mandal}, {village.district} District, {village.state}.
            The village falls under the pincode {village.pincode} and is governed by a Gram Panchayat with
            a Sarpanch and 12 elected Ward Members. The village has a population of approximately {village.population}.
          </p>
        </div>
      </section>

      {/* Main Occupations */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Main Occupations" subtitle="Livelihoods and economic activities of Rampur residents" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {village.mainOccupations.map((occupation, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-start gap-3">
                <span className="text-2xl mt-0.5">💼</span>
                <div>
                  <p className="text-base font-medium text-slate-900">{occupation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Village Facilities" subtitle="Key infrastructure and public services available" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {village.facilities.map((facility, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-start gap-3">
              <span className="text-primary-500 text-xl mt-0.5">✓</span>
              <p className="text-base text-slate-700">{facility}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Map */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Location & Map" />
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Village Address</h3>
                  <p className="text-slate-600">{village.contact.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Coordinates</h3>
                  <p className="text-slate-600">
                    Latitude: {village.location.latitude}° N, Longitude: {village.location.longitude}° E
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Postal Address</h3>
                  <p className="text-slate-600">
                    {village.name}, {village.mandal}, {village.district} District, {village.state} - {village.pincode}
                  </p>
                </div>
                <a
                  href={village.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  🗺️ View on Google Maps
                </a>
              </div>
              <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <span className="text-4xl">🗺️</span>
                  <p className="mt-2 text-sm">Map view available online</p>
                  <a
                    href={village.location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-800 text-sm font-medium"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Village Contact" />
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <a href={`mailto:${village.contact.email}`} className="text-primary-600 hover:text-primary-800 text-sm">
                  {village.contact.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-semibold text-slate-900">Phone</h3>
                <a href={`tel:${village.contact.phone}`} className="text-primary-600 hover:text-primary-800 text-sm">
                  {village.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-semibold text-slate-900">Address</h3>
                <p className="text-slate-600 text-sm">{village.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}