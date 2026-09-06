import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://csp-project-sage.vercel.app"),
  title: {
    default: "Nammivanipeta Village Information Portal",
    template: "%s | Nammivanipeta Village Portal",
  },
  description:
    "Community Service Project information portal for Nammivanipeta — Government schemes, schools, health services, contacts, local businesses, and emergency numbers.",
  keywords: [
    "Nammivanipeta village",
    "village information",
    "government schemes",
    "community service project",
    "CSP",
    "Andhra Pradesh villages",
  ],
  authors: [{ name: "CSP Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://csp-project-sage.vercel.app",
    siteName: "Nammivanipeta Village Portal",
    title: "Nammivanipeta Village Information Portal",
    description:
      "Community Service Project information portal for Nammivanipeta — schemes, schools, health, contacts, and local businesses.",
    images: [
      {
        url: "/images/village-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nammivanipeta Village Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nammivanipeta Village Information Portal",
    description:
      "Community Service Project information portal for Nammivanipeta — schemes, schools, health, contacts, and local businesses.",
    images: ["/images/village-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://csp-project-sage.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
