import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.canastra.ventures"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Canastra Ventures",
    template: "%s | Canastra Ventures",
  },
  description:
    "Investimos e apoiamos founders na construção de startups de IA — do MVP ao go-to-market e fundraising.",
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Canastra Ventures",
    description:
      "Investimos e apoiamos founders na construção de startups de IA — do MVP ao go-to-market e fundraising.",
    url: "https://www.canastra.ventures/",
    siteName: "Canastra Ventures",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/elements/thumb-link.png",
        width: 1200,
        height: 630,
        alt: "Canastra Ventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canastra Ventures",
    description:
      "Investimos e apoiamos founders na construção de startups de IA — do MVP ao go-to-market e fundraising.",
    images: ["/elements/thumb-link.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Canastra Ventures",
    url: "https://www.canastra.ventures/",
  };

  const primaryNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      { "@type": "SiteNavigationElement", position: 1, name: "Home", url: "https://www.canastra.ventures/" },
      { "@type": "SiteNavigationElement", position: 2, name: "AIR", url: "https://www.canastra.ventures/air" },
      { "@type": "SiteNavigationElement", position: 3, name: "Time", url: "https://www.canastra.ventures/time" },
      { "@type": "SiteNavigationElement", position: 4, name: "Pitch Us!", url: "https://www.canastra.ventures/pitch-us" },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Recursos",
        url: "https://canastraventures.notion.site/floppy-by-canastra-ventures",
      },
    ],
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(primaryNavigationJsonLd) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
