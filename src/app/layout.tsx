import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
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
  metadataBase: new URL("https://kafrasignal.ezos.my"),
  icons: {
    icon: "/kafra-logo-nav.png",
    shortcut: "/kafra-logo-nav.png",
    apple: "/kafra-logo-nav.png",
  },
  openGraph: {
    title: "KAFRA SIGNAL",
    description: "Profitable Discipline Starts Here",
    url: "https://kafrasignal.ezos.my",
    siteName: "KAFRA SIGNAL",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
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
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

