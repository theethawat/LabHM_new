"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { metadataTranslations } from "@/translations/metadata";

export function HtmlLangUpdater() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update html lang attribute
    document.documentElement.lang = language;

    // Update meta title
    const metadata =
      metadataTranslations[language as keyof typeof metadataTranslations];
    document.title = metadata.title;

    // Update or create description meta tag
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", metadata.description);

    // Update or create keywords meta tag
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute("content", metadata.keywords);
  }, [language]);

  return null;
}
