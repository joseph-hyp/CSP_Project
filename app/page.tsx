import Link from "next/link";
import { village } from "@/data/village";

const quickLinks = [
  {
    href: "/schemes",
    icon: "📋",
    title: "Govt. Schemes",
    description: "View all central and state government schemes available for villagers",
    color: "bg-blue-50 hover:bg-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    href: "/contacts",
    icon: "📞",
    title: "Important Contacts",
    description: "Panchayat, revenue, education, health and police contacts",
    color: "bg-green-50 hover:bg-green-100",
    iconBg: "bg-green-100",
  },
  {
    href: "/schools",
    icon: "🏫",
    title: "Schools",
    description: "Government schools, high schools, and educational institutions",
    color: "bg-purple-50 hover:bg-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    href: "/health",
    icon: "🏥",
    title: "Health Services",
    description: "PHC, sub-centres, hospitals, and health programs",
    color: "bg-red-50 hover:bg-red-100",
    iconBg: "bg-red-100",
  },
  {
    href: "/businesses",
    icon: "🏪",
    title: "Local Businesses",
    description: "Shops, services, and local business directory",
    color: "bg-yellow-50 hover:bg-yellow-100",
    iconBg: "bg-yellow-100",
  },
  {
    href: "/emergency",
    icon: "🆘",
    title: "Emergency",
    description: "Police, ambulance, fire, and emergency helpline numbers",
    color: "bg-red-50 hover:bg-red-100",
    iconBg: "bg-red-100",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-lg">🏘️</span>
              Rampur Village • Rampur Mandal • Medak • Telangana
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-yellow-300">Rampur</span>
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 leading-relaxed">
              {village.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-lg"
              >
                Explore Village Information
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/emergency"
                className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
              >
                🆘 Emergency Contacts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.population}</div>
              <div className="text-sm text-slate-600 mt-1">Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.area}</div>
              <div className="text-sm text-slate-600 mt-1">Area</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.facilities.length}</div>
              <div className="text-sm text-slate-600 mt-1">Key Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.established}</div>
              <div className="text-sm text-slate-600 mt-1">Established</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Village Information Hub
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find everything you need about Rampur Village in one place
          </p>
          <div className="mt-3 h-1 w-16 bg-primary-600 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:shadow-md ${link.color}`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${link.iconBg} text-2xl mb-4`}>
                {link.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {link.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Village Highlights */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main Occupations */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Our Village at a Glance
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">📍 Location</h3>
                  <p className="text-sm text-slate-600">
                    {village.name}, {village.mandal}, {village.district} District, {village.state} - {village.pincode}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">🏛️ Governance</h3>
                  <p className="text-sm text-slate-600">{village.governance}</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <h3 className="font-semibold text-slate-900 mb-2">💰 Main Occupations</h3>
                  <ul className="space-y-1">
                    {village.mainOccupations.map((occ, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-primary-500">•</span>
                        {occ}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Key Facilities */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Facilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {village.facilities.map((facility, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-slate-100 text-sm text-slate-700"
                  >
                    <span className="text-primary-500">✓</span>
                    {facility}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Quick Access */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Emergency Contacts</h2>
            <p className="text-red-100">Important numbers you should always have</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "108", label: "Ambulance" },
              { number: "100", label: "Police" },
              { number: "101", label: "Fire" },
              { number: "181", label: "Women Helpline" },
            ].map((item) => (
              <a
                key={item.number}
                href={`tel:${item.number}`}
                className="block bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl font-bold">{item.number}</div>
                <div className="text-sm text-red-100 mt-1">{item.label}</div>
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/emergency"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              View All Emergency Numbers
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            About This Portal
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            This Village Information Portal is a Community Service Project (CSP) designed to bring
            all important village information to one accessible place. It is built to serve the
            residents of Rampur and surrounding areas.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Learn More About Rampur
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}