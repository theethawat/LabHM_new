# Research Funding Markdown Writing Guide

Writer: GPT-5.3-Codex (GitHub Copilot)

## Purpose

This folder stores static markdown content for each research funding detail page.
Each funding item must have two files:

- Japanese content file
- English content file

## File Naming Rules

Use this exact naming pattern:

- `{contentKey}-jp.md` for Japanese
- `{contentKey}-en.md` for English

Examples:

- `jka2025-jp.md`
- `jka2025-en.md`
- `mic-jp.md`
- `mic-en.md`

`contentKey` must match `contentKey` in `translations/research-fund.ts`.

## Required Markdown Structure

Use this section order so the page parser and UI render correctly.

### 1) Main Title (required)

Use one H1 title:

```md
# JKA Research Grant (FY2025)
```

### 2) Current Project Section (required)

This section is extracted and highlighted at the top of the page.
Use this exact heading text by language:

- English: `## Current Project`
- Japanese: `## 現在のプロジェクト`

Recommended body format:

```md
## Current Project

### 2025M-424

- **Project Title**: DX Welfare Care Supporting the 100-Year Life Era: Privacy-Preserving Elderly Monitoring and Health Support System (FY2025)
- **Recipient**: University of Miyazaki
- **Principal Investigator**: Thi Thi Zin (University of Miyazaki, Faculty of Engineering)
```

Important rendering rules:

- Grant number can be written either as:
  - H3 line (example: `### 2025M-424`), or
  - Label line (example: `- **Grant Number**: 2025M-424`)
- Project title should use:
  - English: `- **Project Title**: ...` (or `**Research Topic**`)
  - Japanese: `- **事業名**: ...` (or `**研究課題**`)
- The UI displays:
  - `Grant Number: ...`
  - project title as emphasized text
  - other bullet items as supporting details

### 3) Additional Sections (recommended)

After `Current Project`, add any sections with H2 headings (`## ...`), such as:

- `## About JKA` / `## JKAについて`
- `## Research Overview` / `## 研究概要`
- `## Contribution to Society` / `## 社会への貢献`
- `## Related Press Release(s)` / `## 関連プレスリリース`

## Writing Guidelines

- Keep JP and EN content semantically aligned.
- Prefer plain markdown; avoid embedded HTML.
- Use absolute links for external press releases.

## Before Adding a New Funding Item

1. Add metadata entry in `translations/research-fund.ts` with a new `contentKey`.
2. Create two markdown files in this folder:
   - `{contentKey}-jp.md`
   - `{contentKey}-en.md`
3. Follow the required section structure above.
4. Verify the detail page route loads successfully.
