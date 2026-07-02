const escapeHtmlAttribute = (value: string) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

/**
 * Converts markdown image attribute-list syntax to raw HTML image tags.
 * Example:
 * ![Alt](/img.png){ .w-1/4 .mx-auto }
 */
export const transformImageAttributeListSyntax = (markdown: string) => {
  const imageWithAttrsPattern =
    /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*\{\s*([^}]*)\s*\}/g;

  return markdown.replace(
    imageWithAttrsPattern,
    (_match, altText: string, src: string, title: string, attrs: string) => {
      const classNames = attrs
        .split(/\s+/)
        .map((token) => token.trim())
        .filter(Boolean)
        .map((token) => (token.startsWith(".") ? token.slice(1) : token))
        .filter(Boolean)
        .join(" ");

      const altAttr = escapeHtmlAttribute(altText || "");
      const srcAttr = escapeHtmlAttribute(src || "");
      const titleAttr = title ? ` title="${escapeHtmlAttribute(title)}"` : "";
      const classAttr = classNames
        ? ` class="${escapeHtmlAttribute(classNames)}"`
        : "";

      return `<img src="${srcAttr}" alt="${altAttr}"${titleAttr}${classAttr} />`;
    },
  );
};
