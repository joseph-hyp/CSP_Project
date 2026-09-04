import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rampur Village Information Portal",
    template: "%s | Rampur Village Portal",
  },
  description:
    "Official information portal for Rampur Village — Government schemes, schools, health services, contacts, local businesses, and emergency numbers.",
  keywords: [
    "Rampur village",
    "village information",
    "government schemes",
    "rural development",
    "panchayat",
    "Telangana villages",
    "community service project",
    "CSP",
  ],
  authors: [{ name: "CSP Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rampur-village-portal.vercel.app",
    siteName: "Rampur Village Portal",
    title: "Rampur Village Information Portal",
    description:
      "Comprehensive information about Rampur Village — schemes, schools, health, contacts, and local businesses.",
    images: [
      {
        url: "/images/village-og.jpg",
        width: 1200,
        height: 630,
        alt: "Rampur Village Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rampur Village Information Portal",
    description:
      "Comprehensive information about Rampur Village — schemes, schools, health, contacts, and local businesses.",
    images: ["/images/village-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rampur-village-portal.vercel.app",
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