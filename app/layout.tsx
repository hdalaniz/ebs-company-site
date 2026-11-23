import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.companyName} | Turn Missed Demand Into Booked Revenue`,
    template: `%s | ${site.companyName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.companyName,
    title: `${site.companyName} | Turn Missed Demand Into Booked Revenue`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.companyName} | Turn Missed Demand Into Booked Revenue`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-warm font-sans text-ink">
        <SiteShell>{children}</SiteShell>
        <Analytics />
      </body>
    </html>
  );
}
