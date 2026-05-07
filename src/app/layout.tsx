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
  description: "Trading Disiplin, Arahan KAFRA.",
  metadataBase: new URL("https://kafrasignal.ezos.my"),
  icons: {
    icon: "/kafra-logo.png",
    shortcut: "/kafra-logo.png",
    apple: "/kafra-logo.png",
  },
  openGraph: {
    title: "KAFRA SIGNAL",
    description: "Trading Disiplin, Arahan KAFRA.",
    url: "https://kafrasignal.ezos.my",
    siteName: "KAFRA SIGNAL",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "KAFRA SIGNAL | Trading Disiplin, Arahan KAFRA.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAFRA SIGNAL",
    description: "Trading Disiplin, Arahan KAFRA.",
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

