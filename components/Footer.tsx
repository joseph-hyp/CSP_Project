import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Village" },
  { href: "/schemes", label: "Govt. Schemes" },
  { href: "/contacts", label: "Contacts" },
  { href: "/schools", label: "Schools" },
  { href: "/health", label: "Health Services" },
  { href: "/businesses", label: "Local Businesses" },
  { href: "/emergency", label: "Emergency" },
];

const emergencyLinks = [
  { number: "108", label: "Ambulance" },
  { number: "100", label: "Police" },
  { number: "101", label: "Fire" },
  { number: "181", label: "Women Helpline" },
  { number: "1098", label: "Child Helpline" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Village Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏘️</span>
              <span className="text-xl font-bold text-white">Nammivanipeta Village</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              A comprehensive information portal for the residents and visitors of
              Nammivanipeta, Visakhapatnam, Andhra Pradesh.
            </p>
            <p className="text-sm text-slate-400">
              Built as a Community Service Project (CSP) to bridge the digital
              divide and improve access to public information.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Emergency Numbers</h3>
            <ul className="space-y-2">
              {emergencyLinks.map((link) => (
                <li key={link.number}>
                  <a
                    href={`tel:${link.number}`}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-400">📞</span>
                    <span>{link.label}:</span>
                    <span className="text-white font-semibold">{link.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-slate-500">
            <p>© 2026 Nammivanipeta Village Information Portal. Community Service Project.</p>
            <p>
              <a
                href="https://www.ap.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Government of Andhra Pradesh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
