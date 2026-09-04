import type { Metadata } from "next";
import { schools, nearbySchools } from "@/data/schools";
import SchoolCard from "@/components/SchoolCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Schools",
  description: "List of government schools, high schools, and educational institutions in and around Rampur Village.",
};

export default function SchoolsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Schools & Education
            </h1>
            <p className="text-lg text-primary-100">
              Government schools, high schools, and educational institutions
              serving the students of Rampur Village
            </p>
          </div>
        </div>
      </section>

      {/* Schools in Village */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Schools in Rampur Village"
          subtitle={`${schools.length} educational institutions within the village`}
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">
              {schools.filter((s) => s.type === "government").length}
            </div>
            <div className="text-sm text-slate-600 mt-1">Govt. Schools</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">
              {schools.reduce((sum, s) => sum + parseInt(s.studentStrength), 0)}
            </div>
            <div className="text-sm text-slate-600 mt-1">Total Students</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">
              {schools.filter((s) => s.level === "pre-primary").length}
            </div>
            <div className="text-sm text-slate-600 mt-1">Anganwadi Centres</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">100%</div>
            <div className="text-sm text-slate-600 mt-1">SSC Pass (2023)</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </section>

      {/* Nearby Schools */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nearby Schools & Colleges"
            subtitle="Higher education institutions accessible from Rampur"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {nearbySchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle title="Education Programmes" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">📚 Mid-Day Meal (MDM)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Free nutritious lunch provided to all students in government schools
              (Classes I-X). Cooked meals served on all working days. Menu planned
              as per MDM guidelines with weekly variety including eggs, vegetables,
              and pulses.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">💻 Digital Education</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Smart class rooms with digital boards available in ZPHS and 3 MPPS
              schools. Computer labs with internet access. Digital India initiatives
              including DIKSHA platform and e-textbooks.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">🎓 Scholarships</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Various scholarships available for SC/ST/BC/Minority students including
              Post-Matric Scholarship, Pre-Matric Scholarship, and National Means
              Cum Merit Scholarship. Apply through MeeSeva or school office.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">👩‍🏫 Kasturba Gandhi Vidyalaya</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Residential school for girls from educationally backward blocks.
              Free boarding, lodging, and education from Class VI to X. Focus on
              quality education and all-round development of girl children.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}