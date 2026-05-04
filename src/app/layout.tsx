import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/lib/lenis-provider";
import { AppSidebar } from "@/components/app-sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hourglassai.com.au";

export const metadata: Metadata = {
  title: "Hourglass AI — Your admin, handled by AI",
  description:
    "AI agents that handle your emails, invoices, scheduling and follow-ups so you can focus on growing your business.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Hourglass AI — Your admin, handled by AI",
    description:
      "AI agents that handle your emails, invoices, scheduling and follow-ups so you can focus on growing your business.",
    url: siteUrl,
    siteName: "Hourglass AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hourglass AI — Your admin, handled by AI",
    description:
      "AI agents that handle your emails, invoices, scheduling and follow-ups so you can focus on growing your business.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LenisProvider>
          <AppSidebar>{children}</AppSidebar>
        </LenisProvider>
      </body>
    </html>
  );
}
