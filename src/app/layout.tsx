import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAFRA SIGNAL",
  description: "Profitable Discipline Starts Here",
  metadataBase: new URL("https://signal.kafra.ai"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand-tab-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand-tab-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "KAFRA SIGNAL",
    description: "Profitable Discipline Starts Here",
    url: "https://signal.kafra.ai",
    siteName: "KAFRA SIGNAL",
    images: [
      {
        url: "/kafra-logo.png",
        width: 1200,
        height: 1200,
        alt: "KAFRA SIGNAL | Profitable Discipline Starts Here",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAFRA SIGNAL",
    description: "Profitable Discipline Starts Here",
    images: ["/kafra-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

