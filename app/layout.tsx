import type React from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LanguageProvider } from "@/contexts/language-context";
import { HtmlLangUpdater } from "@/components/layout/html-lang-updater";
import { getImagePath } from "@/lib/utils";
import { metadataTranslations } from "@/translations/metadata";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
});

// Use Japanese as default metadata (will be updated client-side based on user's language selection)
const defaultMetadata = metadataTranslations.ja;

export const metadata: Metadata = {
  title: defaultMetadata.title,
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <link rel="icon" href={getImagePath("/icon.png")} sizes="any" />
      <body className={`${notoSansJP.variable} ${caveat.variable} font-sans`}>
        <LanguageProvider>
          <HtmlLangUpdater />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

import "./globals.css";
