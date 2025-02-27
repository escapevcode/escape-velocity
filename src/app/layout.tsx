import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import Head from "next/head"; // Import Head for adding custom scripts
import NetworkStatusChecker from "./NetworkStatusChecker";
import { Toaster } from "react-hot-toast"; // Import Toaster

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Escape Velocity - Connecting Capital with Mission-Aligned Startups",
  description:
    "Escape Velocity helps investors and startups connect, fostering innovation and business growth across Africa. Explore funding opportunities and strategic partnerships.",
  generator:
    "Escape Velocity, startup investment, venture capital, funding, Africa startups, business growth, innovation, entrepreneurship, investor network",
  keywords: [
    "startup investment",
    "venture capital",
    "funding",
    "early-stage startups",
    "growth-stage startups",
    "business innovation",
    "impact investing",
    "entrepreneurship",
    "Africa startups",
    "Escape Velocity",
    "African venture capital",
    "tech startups in Africa",
    "African business funding",
    "fintech in Africa",
    "African startup ecosystem",
    "investing in Africa",
    "African entrepreneurs",
    "sustainable business in Africa",
    "scaling startups in Africa",
    "emerging markets investment",
    "African innovation hubs",
    "Africa-focused investors",
    "social impact startups Africa",
    "green energy startups Africa",
    "mobile technology in Africa",
    "agritech startups Africa",
    "healthtech startups Africa",
    "Africa-focused accelerator",
    "African diaspora investment",
    "Africa startups",
    "African venture capital",
    "tech startups in Africa",
    "African business funding",
    "fintech in Africa",
    "African startup ecosystem",
    "investing in Africa",
    "African entrepreneurs",
    "scaling startups in Africa",
    "emerging markets investment",
    "African innovation hubs",
    "Africa-focused investors",
    "African unicorn startups",
    "social impact startups Africa",
    "green energy startups Africa",
    "mobile technology in Africa",
    "agritech startups Africa",
    "healthtech startups Africa",
    "Africa-focused accelerator",
    "African diaspora investment",
    "emerging market investment opportunities",
    "high-growth market investments",
    "tech-driven economies",
    "global venture capital trends",
    "impact-driven investing",
    "sustainable investing",
    "venture capital in emerging markets",
    "climate tech investment",
    "cross-border investing",
    "scaling businesses in emerging markets",
    "innovation-driven economies",
    "next-gen entrepreneurs",
    "global fintech investments",
    "alternative asset investments",
    "ESG-focused startups",
    "future unicorn startups",
    "AI and deep tech startups",
    "blockchain and Web3 investments",
    "global expansion funding",
    "frontier market investing",
  ],

  applicationName: "Escape Velocity",
  openGraph: {
    title: "Escape Velocity - Connecting Capital with Mission-Aligned Startups",
    description:
      "Join Escape Velocity to discover and invest in high-potential startups. Connect with innovative entrepreneurs and scale impactful businesses across Africa.",
    url: "https://www.escapevelocity.com",
    siteName: "Escape Velocity",
    images: [
      {
        url: "https://res.cloudinary.com/dipwsq5cg/image/upload/v1740640203/Screenshot_2025-02-27_080849_t6c2iz.png",
        width: 1200,
        height: 630,
        alt: "Escape Velocity - Connecting Capital with Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@escapevelocity",
    title: "Escape Velocity - Connecting Capital with Mission-Aligned Startups",
    description:
      "Find the right investment opportunities in Africa’s startup ecosystem with Escape Velocity.",
    images:
      "https://res.cloudinary.com/dipwsq5cg/image/upload/v1740640203/Screenshot_2025-02-27_080849_t6c2iz.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add Cloudinary widget script */}
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        ></script>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F2YRYGXF65"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F2YRYGXF65');
            `,
          }}
        />
      </Head>
      <body className=" bg-[#f1efe8]-">
        <Toaster />
        {/* <NetworkStatusChecker /> */}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
