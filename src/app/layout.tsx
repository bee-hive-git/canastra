import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-crimson-text",
});

export const metadata: Metadata = {
  title: "Canastra Ventures",
  description: "VC pre-seed especialista em IA",
  icons: {
    icon: "/elements/icon-window.png?v=2",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} antialiased`}>
        {/* começa na 2ª seção marcada (Hero é index 0, sem linhas) */}
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
