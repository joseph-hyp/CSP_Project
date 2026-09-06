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
    description: "Education, health, police and utility emergency contacts",
    color: "bg-green-50 hover:bg-green-100",
    iconBg: "bg-green-100",
  },
  {
    href: "/schools",
    icon: "🏫",
    title: "Schools",
    description: "Government schools and educational institutions",
    color: "bg-purple-50 hover:bg-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    href: "/health",
    icon: "🏥",
    title: "Health Services",
    description: "Health facilities, emergency numbers, and health programs",
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
              Nammivanipeta &bull; Bheemunipatnam/Bheemili &bull; Visakhapatnam &bull; Andhra Pradesh
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-yellow-300">Nammivanipeta</span>
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

      {/* Quick Stats - CSP Field Survey Data */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-4">
            <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
              CSP Field Survey Data
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.population}</div>
              <div className="text-sm text-slate-600 mt-1">Population</div>
              <div className="text-xs text-slate-400 mt-0.5">CSP Field Survey</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.households}</div>
              <div className="text-sm text-slate-600 mt-1">Households</div>
              <div className="text-xs text-slate-400 mt-0.5">CSP Field Survey</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.voters}</div>
              <div className="text-sm text-slate-600 mt-1">Registered Voters</div>
              <div className="text-xs text-slate-400 mt-0.5">CSP Field Survey</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">{village.governmentSchools}</div>
              <div className="text-sm text-slate-600 mt-1">Govt. Schools</div>
              <div className="text-xs text-slate-400 mt-0.5">CSP Field Survey</div>
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
            Find everything you need about Nammivanipeta in one place
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

      {/* Village at a Glance - Community Infrastructure */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Village at a Glance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key statistics from the CSP field survey
            </p>
            <div className="mt-3 h-1 w-16 bg-primary-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Community Infrastructure */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Community Infrastructure</h3>
              <div className="space-y-3">
                {[
                  { label: "Overhead Tank", value: "1" },
                  { label: "Public Taps", value: "16" },
                  { label: "Household Taps", value: "240" },
                  { label: "Hand Pumps", value: "16" },
                  { label: "Apartments", value: "21" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
                    <span className="text-sm text-slate-700">{item.label}</span>
                    <span className="text-lg font-bold text-primary-600">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-400">CSP Field Survey</div>
            </div>

            {/* Household Services */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Household Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Pucca Houses", value: "1,380" },
                  { label: "Kutcha Houses", value: "75" },
                  { label: "Electricity Connections", value: "1,320" },
                  { label: "LPG Connections", value: "1,345" },
                  { label: "Rice Cards", value: "920" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
                    <span className="text-sm text-slate-700">{item.label}</span>
                    <span className="text-lg font-bold text-primary-600">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-400">CSP Field Survey</div>
            </div>

            {/* Electoral Profile */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Electoral Profile</h3>
              <div className="space-y-3">
                {[
                  { label: "Registered Voters", value: "1,307" },
                  { label: "Male Voters", value: "654" },
                  { label: "Female Voters", value: "653" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-slate-50 rounded-lg px-4 py-3">
                    <span className="text-sm text-slate-700">{item.label}</span>
                    <span className="text-lg font-bold text-primary-600">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs text-slate-400">CSP Field Survey</div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 text-sm mb-2">Location</h4>
                <p className="text-sm text-green-700">
                  Nammivanipeta, Sangivalasa<br />
                  Bheemunipatnam/Bheemili area<br />
                  Visakhapatnam, Andhra Pradesh<br />
                  PIN: 531162
                </p>
              </div>
            </div>
          </div>

          {/* Data Note */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">
              Data Note
            </h3>
            <p className="text-sm text-yellow-700 leading-relaxed">
              Village-level figures shown on this portal are based primarily on information collected for the Community Service Project field survey and selected publicly available government sources. Some figures may require verification with the relevant local authority before being used for official purposes.
            </p>
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
            residents of Nammivanipeta and surrounding areas using field-survey information and
            publicly available government data.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Learn More About Nammivanipeta
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
