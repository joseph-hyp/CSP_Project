import Link from "next/link";
import { village } from "@/data/village";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export default function Hero({
  title,
  subtitle,
  showCTA = true,
  ctaText = "Explore Village Information",
  ctaLink = "/about",
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">🏘️</span>
            {village.name} &bull; {village.area} &bull; {village.district} &bull; {village.state}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-yellow-300">{village.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 leading-relaxed">
            {subtitle}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={ctaLink}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-lg"
              >
                {ctaText}
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
          )}
        </div>
      </div>
    </section>
  );
}
