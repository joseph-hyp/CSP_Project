import type { Metadata } from "next";
import { schools, nearbySchools } from "@/data/schools";
import SchoolCard from "@/components/SchoolCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Schools",
  description: "List of government schools, high schools, and educational institutions in and around Nammivanipeta.",
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
              serving the students of Nammivanipeta
            </p>
          </div>
        </div>
      </section>

      {/* Schools in Village */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionTitle
          title="Schools & Educational Institutions"
          subtitle="Nammivanipeta and nearby area"
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">2</div>
            <div className="text-sm text-slate-600 mt-1">Govt. Schools</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">1,307</div>
            <div className="text-sm text-slate-600 mt-1">Context: CSP Field Survey voters</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">2</div>
            <div className="text-sm text-slate-600 mt-1">Anganwadi Centres</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
            <div className="text-2xl font-bold text-primary-600">GVMC & Ameya</div>
            <div className="text-sm text-slate-600 mt-1">Educational Institutions</div>
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
            subtitle="Higher education institutions accessible from Nammivanipeta"
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
              (Classes I-V). Cooked meals served on all working days as per MDM guidelines.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <h3 className="font-semibold text-slate-900 mb-3">📚 Scholarships</h3>
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
