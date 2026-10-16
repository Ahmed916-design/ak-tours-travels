// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollTopButton from "@/components/ScrollTopButton";
import { BUSINESS, SEO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.siteUrl),
  title: {
    default: SEO.defaultTitle,
    template: `%s | ${BUSINESS.name}`,
  },
  description: SEO.defaultDesc,
  keywords: [...SEO.keywords],
  openGraph: {
    title: SEO.defaultTitle,
    description: SEO.defaultDesc,
    url: SEO.siteUrl,
    siteName: BUSINESS.name,
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    icons: {
    icon: [
      { url: "/icon-v3.png", type: "image/png" },
    ],
    apple: "/icon-v3.png",
    shortcut: "/icon-v3.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <SchemaOrg />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollTopButton />
      </body>
    </html>
  );
}