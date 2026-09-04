import type { Metadata } from "next";
import EmergencyCard from "@/components/EmergencyCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Emergency Contacts",
  description: "Emergency helpline numbers for police, ambulance, fire, women helpline, child helpline, and other emergency services.",
};

const emergencyServices = [
  {
    service: "Ambulance (108)",
    number: "108",
    description: "Free emergency ambulance service - Available 24x7",
    available: "24x7",
    category: "Medical",
  },
  {
    service: "Police Emergency",
    number: "100",
    description: "Police emergency helpline - Immediate response",
    available: "24x7",
    category: "Police",
  },
  {
    service: "Fire Emergency",
    number: "101",
    description: "Fire brigade emergency - Fires, accidents, rescue",
    available: "24x7",
    category: "Fire",
  },
  {
    service: "Women Helpline",
    number: "181",
    description: "Women safety & distress helpline",
    available: "24x7",
    category: "Safety",
  },
  {
    service: "Child Helpline",
    number: "1098",
    description: "Child protection & rescue helpline",
    available: "24x7",
    category: "Safety",
  },
  {
    service: "Health Helpline",
    number: "104",
    description: "Medical advice & health information",
    available: "24x7",
    category: "Medical",
  },
  {
    service: "Veterinary Emergency",
    number: "1962",
    description: "Animal health emergency - Livestock distress",
    available: "24x7",
    category: "Veterinary",
  },
  {
    service: "Electricity Complaint",
    number: "1912",
    description: "Power outage & electrical emergency",
    available: "24x7",
    category: "Utilities",
  },
  {
    service: "Disaster Management",
    number: "1077",
    description: "District disaster control room",
    available: "24x7",
    category: "Disaster",
  },
  {
    service: "Anti-Corruption",
    number: "1064",
    description: "Report corruption in public services",
    available: "Working Hours",
    category: "Governance",
  },
  {
    service: "Railway Enquiry",
    number: "139",
    description: "Train timings, PNR, ticket enquiry",
    available: "24x7",
    category: "Transport",
  },
  {
    service: "Road Accident Emergency",
    number: "1073",
    description: "Highway accident response",
    available: "24x7",
    category: "Transport",
  },
];

const localEmergencyContacts = [
  {
    service: "Rampur Police Station",
    number: "+91-9454XXXXXX",
    altNumber: "100 / 112",
    inCharge: "SI Ramesh Babu",
    available: "24x7",
  },
  {
    service: "PHC Rampur (Emergency)",
    number: "+91-8455-2XXXXX",
    altNumber: "108",
    inCharge: "Dr. Rajesh Kumar (MO)",
    available: "24x7",
  },
  {
    service: "108 Ambulance (Rampur)",
    number: "108",
    altNumber: "+91-9450XXXXXX",
    inCharge: "Stationed at PHC Rampur",
    available: "24x7",
  },
  {
    service: "Sarpanch - Rampur",
    number: "+91-9440XXXXXX",
    altNumber: "+91-8455-2XXXXX",
    inCharge: "Smt. Lakshmi Reddy",
    available: "Working Hours",
  },
  {
    service: "Village Secretary",
    number: "+91-9441XXXXXX",
    altNumber: "+91-8455-2XXXXX",
    inCharge: "Sri. Venkatesh Goud",
    available: "Working Hours",
  },
  {
    service: "Fire Station (Medak)",
    number: "101",
    altNumber: "+91-8452-2XXXXX",
    inCharge: "Station Fire Officer",
    available: "24x7",
  },
];

export default function EmergencyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              🆘 Emergency Contacts
            </h1>
            <p className="text-lg text-red-100">
              Important emergency helpline numbers. Save these numbers on your phone.
              In case of emergency, call immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Dial - Top 3 */}
      <section className="bg-red-50 border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-lg font-bold text-red-800 mb-4 text-center">
            Quick Emergency Dial - Tap to Call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { number: "108", label: "🚑 Ambulance", desc: "Free Medical Emergency" },
              { number: "100", label: "👮 Police", desc: "Crime / Emergency" },
              { number: "101", label: "🚒 Fire", desc: "Fire / Rescue" },
            ].map((item) => (
              <a
                key={item.number}
                href={`tel:${item.number}`}
                className="block bg-white rounded-xl p-6 text-center border-2 border-red-200 hover:border-red-400 hover:shadow-lg transition-all"
              >
                <div className="text-2xl font-bold text-red-600">{item.number}</div>
                <div className="text-base font-semibold text-slate-900 mt-2">{item.label}</div>
                <div className="text-sm text-slate-600 mt-1">{item.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* National Emergency Numbers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle
          title="National Emergency Helplines"
          subtitle="Important numbers available across India"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {emergencyServices.map((item) => (
            <EmergencyCard
              key={item.number + item.service}
              service={item.service}
              number={item.number}
              description={item.description}
              available={item.available}
            />
          ))}
        </div>
      </section>

      {/* Local Emergency Contacts */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Local Emergency Contacts - Rampur"
            subtitle="Direct numbers for emergency services in and around Rampur Village"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localEmergencyContacts.map((item) => (
              <div
                key={item.service}
                className="bg-white rounded-xl shadow-sm border border-slate-100 p-5"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{item.service}</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${item.number.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary-600 transition-colors group"
                  >
                    <span>📞</span>
                    <span className="group-hover:underline font-medium">{item.number}</span>
                  </a>
                  {item.altNumber && (
                    <a
                      href={`tel:${item.altNumber.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center gap-2 text-sm text-slate-700 hover:text-primary-600 transition-colors group"
                    >
                      <span>📱</span>
                      <span className="group-hover:underline">{item.altNumber}</span>
                    </a>
                  )}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span>👤</span>
                    <span>{item.inCharge}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>🕐</span>
                    <span>{item.available}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do in emergencies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle title="What to Do in an Emergency" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">🚑 Medical Emergency</h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Call <strong>108</strong> (Ambulance) immediately</li>
              <li>Keep the patient calm and comfortable</li>
              <li>Do not move the patient if spinal injury suspected</li>
              <li>Go to PHC Rampur or District Hospital Medak</li>
              <li>Carry Aadhaar card and any medical documents</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">🔥 Fire Emergency</h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Call <strong>101</strong> (Fire Brigade) immediately</li>
              <li>Evacuate all people from the area</li>
              <li>Do not use elevators in building fires</li>
              <li>Use wet cloth to cover nose/smoke inhalation</li>
              <li>Move to safe assembly point</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">👮 Police Emergency</h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Call <strong>100</strong> or <strong>112</strong> (Unified Emergency)</li>
              <li>Stay safe and move away from danger</li>
              <li>Note details: location, people involved, vehicle numbers</li>
              <li>Call Rampur Police Station: +91-9454XXXXXX</li>
              <li>File FIR at nearest police station</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">🌊 Flood / Natural Disaster</h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Call <strong>1077</strong> (Disaster Control Room)</li>
              <li>Move to higher ground immediately</li>
              <li>Do not walk/drive through flood water</li>
              <li>Keep emergency kit ready (documents, water, medicine)</li>
              <li>Follow instructions from administration</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">👩 Women Safety</h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Call <strong>181</strong> (Women Helpline)</li>
              <li>Call <strong>100</strong> (Police) if in immediate danger</li>
              <li>Use Disha App for SOS alert</li>
              <li>Report to nearest police station</li>
              <li>NGO helpline available for counselling</li>
            </ol>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">👨‍👩‍👧 Child Emergency</h3>
            <ol className="space-y-2 text-sm text-slate-600 list-decimal list-inside">
              <li>Call <strong>1098</strong> (Childline)</li>
              <li>Report missing child to police (100)</li>
              <li>Child abuse: call 1098 or visit PHC</li>
              <li>Contact Anganwadi teacher for child welfare</li>
              <li>District Child Protection Unit available</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Save Numbers Tip */}
      <section className="bg-primary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">📌 Save These Numbers</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-6">
            Save these emergency numbers on your phone. Share this information with
            your family members. Being prepared can save lives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:108" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              📞 108 - Ambulance
            </a>
            <a href="tel:100" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              📞 100 - Police
            </a>
            <a href="tel:101" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              📞 101 - Fire
            </a>
            <a href="tel:181" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              📞 181 - Women
            </a>
            <a href="tel:1098" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              📞 1098 - Child
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}