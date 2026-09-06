import type { Metadata } from "next";
import { healthFacilities, nearbyHospitals, emergencyNumbers, healthPrograms } from "@/data/health";
import HealthCard from "@/components/HealthCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Health Services",
  description: "PHC, health sub-centres, hospitals, emergency numbers, and health programmes available in and around Nammivanipeta.",
};

export default function HealthPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Health Services
            </h1>
            <p className="text-lg text-red-100">
              Primary health care services, emergency contacts, and
              health programmes serving Nammivanipeta and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Quick Access */}
      <section className="bg-red-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-4">
            <h2 className="font-semibold text-red-800 mb-3">🚨 Emergency Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {emergencyNumbers.slice(0, 5).map((item) => (
              <a
                key={item.number}
                href={`tel:${item.number.replace(/[^0-9]/g, "")}`}
                className="bg-white rounded-lg p-3 text-center border border-red-100 hover:shadow-md transition-shadow"
              >
                <div className="text-xl font-bold text-red-600">{item.number}</div>
                <div className="text-xs text-slate-600 mt-1">{item.service}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Health Facilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Health Facilities"
          subtitle="Primary health care services accessible from Nammivanipeta"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {healthFacilities.map((facility) => (
            <HealthCard key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      {/* Nearby Hospitals */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nearby Hospitals & Specialist Care"
            subtitle="For specialised treatment beyond local health centres"
          />
          <div className="space-y-6">
            {nearbyHospitals.map((hospital) => (
              <div key={hospital.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-semibold text-slate-900">{hospital.name}</h3>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full whitespace-nowrap">
                    {hospital.distanceFromVillageCenter}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">
                      Services
                    </dt>
                    <ul className="space-y-1">
                      {hospital.services.map((service, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="text-primary-500 mt-0.5">✓</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>📍</span>
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>📞</span>
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>🕐</span>
                      <span>{hospital.workingHours}</span>
                    </div>
                    {hospital.referralFrom && (
                      <div className="text-xs text-slate-500 mt-2">
                        Referred from: {hospital.referralFrom}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Health Programmes" subtitle="Government health initiatives available" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {healthPrograms.map((program, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">{program.name}</h3>
              <p className="text-sm text-slate-600 mb-3">{program.description}</p>
              <ul className="space-y-1">
                {program.keyComponents.map((comp, cidx) => (
                  <li key={cidx} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-primary-500 mt-0.5">•</span>
                    {comp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Health Tips */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Health Tips & Guidance" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">💧 Clean Water</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Always drink boiled or RO purified water. Use chlorine tablets if water
                source is uncertain. Clean water prevents waterborne diseases like
                cholera, typhoid, and diarrhoea.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">💉 Vaccination</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ensure all children receive immunisation as per the Universal
                Immunization Programme. Visit local health centre or Anganwadi on designated
                Vaccination Days (VHND). Adults should also get boosters as needed.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-2">🐛 Malaria Prevention</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Use mosquito nets while sleeping. Keep surroundings clean and dry.
                Report to health centre immediately if you have fever with chills. Get tested
                for malaria within 24 hours of fever onset.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
