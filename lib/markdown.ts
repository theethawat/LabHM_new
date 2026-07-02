import { getImagePath } from "./utils";

const escapeHtmlAttribute = (value: string) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

const normalizeImageSrc = (src: string) => {
  const value = src.trim();

  // Keep absolute/external URLs unchanged.
  if (/^(https?:|data:|blob:|mailto:|#)/i.test(value)) {
    return value;
  }

  return getImagePath(value);
};

const renderImageTag = ({
  src,
  altText,
  title,
  classNames,
}: {
  src: string;
  altText: string;
  title?: string;
  classNames?: string;
}) => {
  const normalizedSrc = escapeHtmlAttribute(normalizeImageSrc(src || ""));
  const altAttr = escapeHtmlAttribute(altText || "");
  const titleAttr = title ? ` title="${escapeHtmlAttribute(title)}"` : "";
  const classAttr = classNames
    ? ` class="${escapeHtmlAttribute(classNames)}"`
    : "";

  return `<img src="${normalizedSrc}" alt="${altAttr}"${titleAttr}${classAttr} />`;
};

/**
 * Converts markdown image attribute-list syntax to raw HTML image tags.
 * Example:
 * ![Alt](/img.png){ .w-1/4 .mx-auto }
 */
export const transformImageAttributeListSyntax = (markdown: string) => {
  const imageWithAttrsPattern =
    /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*\{\s*([^}]*)\s*\}/g;
  const markdownImagePattern = /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g;

  const withAttrImages = markdown.replace(
    imageWithAttrsPattern,
    (_match, altText: string, src: string, title: string, attrs: string) => {
      const classNames = attrs
        .split(/\s+/)
        .map((token) => token.trim())
        .filter(Boolean)
        .map((token) => (token.startsWith(".") ? token.slice(1) : token))
        .filter(Boolean)
        .join(" ");

      return renderImageTag({
        src,
        altText,
        title,
        classNames,
      });
    },
  );

  return withAttrImages.replace(
    markdownImagePattern,
    (_match, altText: string, src: string, title: string) => {
      return renderImageTag({
        src,
        altText,
        title,
      });
    },
  );
};
