# How to Export FINAL_REPORT.md to PDF

There are several methods to convert the Markdown report to PDF format:

---

## Method 1: VS Code Extension (Recommended)

### Install Extension

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "Markdown PDF"
4. Install extension by yzane

### Export to PDF

1. Open `FINAL_REPORT.md` in VS Code
2. Right-click in the editor
3. Select "Markdown PDF: Export (pdf)"
4. PDF will be generated in the same directory

---

## Method 2: Browser Print-to-PDF

### Steps

1. Install VS Code extension "Markdown Preview Enhanced"
2. Open `FINAL_REPORT.md`
3. Press `Ctrl+K V` (or `Cmd+K V` on Mac) to open preview
4. Right-click in preview pane → "Open in Browser"
5. In browser, press `Ctrl+P` (or `Cmd+P`)
6. Select "Save as PDF" as destination
7. Adjust settings:
   - **Layout:** Portrait
   - **Margins:** Default
   - **Background graphics:** Enabled
8. Click "Save"

---

## Method 3: Command Line (Node.js)

### Install markdown-pdf

```bash
npm install -g markdown-pdf
```

### Convert

```bash
markdown-pdf FINAL_REPORT.md -o docs/FINAL_REPORT.pdf
```

---

## Method 4: Online Converter

### Steps

1. Go to <https://www.markdowntopdf.com/>
2. Upload `FINAL_REPORT.md`
3. Click "Convert"
4. Download the generated PDF

**Note:** Be cautious with sensitive information when using online tools.

---

## Method 5: Pandoc (Advanced)

### Install Pandoc

- **Windows:** Download from <https://pandoc.org/installing.html>
- **Mac:** `brew install pandoc`
- **Linux:** `sudo apt-get install pandoc`

### Convert with Custom Styling

```bash
pandoc FINAL_REPORT.md -o FINAL_REPORT.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in \
  -V fontsize=11pt
```

---

## Recommended Settings for Best Output

### Font Settings

- **Font:** Arial or Times New Roman
- **Size:** 11pt or 12pt
- **Line spacing:** 1.15 or 1.5

### Margins

- **Top:** 1 inch
- **Bottom:** 1 inch
- **Left:** 1 inch
- **Right:** 1 inch

### Page Settings

- **Size:** Letter (8.5" x 11")
- **Orientation:** Portrait
- **Header/Footer:** Include page numbers

---

## After Exporting

### Verify PDF

- ✅ All headings render correctly
- ✅ Code blocks are formatted properly
- ✅ Images display (if screenshots added)
- ✅ Table of contents links work
- ✅ No text cutoff at page breaks
- ✅ Page numbers present

### Final Location

Save the PDF as:

```
docs/submission/FINAL_REPORT.pdf
```

or

```
docs/FINAL_REPORT.pdf
```

---

## Quick Guide (TL;DR)

**Easiest method:**

1. Install "Markdown PDF" extension in VS Code
2. Open FINAL_REPORT.md
3. Right-click → "Markdown PDF: Export (pdf)"
4. Done! ✅

**File will be created:** `FINAL_REPORT.pdf` (same directory as .md file)
