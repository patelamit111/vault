import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const siteName = "Vault";
const siteDescription =
  "Upload important documents. Vault extracts the details and keeps everything in your Google Drive + Google Sheets.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vault.statphone.com"),
  title: {
    default: `${siteName} — Documents, extracted & organized`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${siteName} — Documents, extracted & organized`,
    description: siteDescription,
    siteName,
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Documents, extracted & organized`,
    description: siteDescription,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased bg-[#F7F7FB] text-[#0B1220]`}
      >
        {children}
      </body>
    </html>
  );
}
