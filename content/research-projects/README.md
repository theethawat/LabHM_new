# Research Projects Markdown Content Guide

## Purpose

This folder stores the **detail page content** for each research project.
The API still provides brief metadata used for listing and linking (title, tags, SDGs, funding reference, related members).
The full readable content for each research — background, methods, results, images — lives here in markdown.

## Folder Structure

Each research project gets its **own subfolder** named after its `slug` (the same `id` returned by the API):

```
content/
  research-projects/
    {slug}/
      en.md          ← English content
      jp.md          ← Japanese content
```

Images for each project should be placed in:

```
public/
  images/
    research-projects/
      {slug}/
        overview.png
        background.png
        ...
```

In your markdown files, reference images with an absolute path from `/public`:

```md
![Overview](/images/research-projects/{slug}/overview.png)
```

## File Naming Rules

| File    | Language |
| ------- | -------- |
| `en.md` | English  |
| `jp.md` | Japanese |

The subfolder name **must match the `id`** (slug) returned by the API for that research project.

## Markdown Structure

Use this section order so the page renders correctly.
The `## Overview` section is extracted and highlighted at the top of the page.

### Required Structure

```md
# Research Title

## Overview

Brief 1–2 sentence overview of the research.

- **Principal Investigator**: Thi Thi Zin
- **Period**: April 2023 – March 2026
- **Tags**: AI, Medical

## Background and Objectives

Explain the problem this research addresses and its goals.

![Background image](/images/research-projects/{slug}/background.png)

## Research Method

Describe the approach, datasets, models, and techniques used.

![Method diagram](/images/research-projects/{slug}/method.png)

## Results

Describe experimental results and evaluation metrics.

## Future Perspectives

Describe the next steps and societal impact.
```

### Optional Sections

Add any section you need with `##` headings — the page will render all of them. You are not limited to the sections above.

```md
## Experimental Environment

## Social Impact

## Related Publications
```

## Notes

- Section headings can differ between `en.md` and `jp.md` — they are rendered independently per language.
- The `## Overview` section (English) / `## 概要` section (Japanese) is highlighted in a card at the top of the page. All other sections render in the body below.
- The title shown in the page header still comes from the API metadata, not the `#` H1 in this file.
- If a markdown file is missing for a language, the page will fallback to the other language's content.
