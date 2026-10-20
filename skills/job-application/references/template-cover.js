// ============================================================
// COVER LETTER FORMATTING TEMPLATE — Job Application Toolkit
// ============================================================
// This file defines the FORMATTING and STRUCTURE for cover letters.
// It contains NO personal content. All content comes from the
// user's INSTRUCTIONS.md file.
//
// HOW THIS FILE IS USED:
// 1. Claude reads this file to understand the docx-js patterns
//    and document structure.
// 2. Claude reads INSTRUCTIONS.md for the user's gold standard
//    base text and voice rules.
// 3. Claude creates a new JS file (create_{company}_cover.js)
//    starting from the user's gold standard text and adapting
//    the marked sections for the target role.
// 4. The new JS file is run to generate the .docx.
//
// Users should NOT edit this file. Claude uses it as a
// formatting reference automatically.
// ============================================================

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun } = require("docx");

// ── Formatting constants ────────────────────────────────────
const COLOUR = "2E5090";   // Name header blue
const GREY = "666666";     // Contact line grey

// ── Document Structure ──────────────────────────────────────
// This shows the FORMATTING for each element. All text content
// is placeholder — Claude replaces it with the user's gold
// standard base text (adapted per role) from INSTRUCTIONS.md.

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },          // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },  // Standard
      },
    },
    children: [
      // ── HEADER ────────────────────────────────────────────
      // CONTENT: User's name from INSTRUCTIONS.md
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "[USER NAME]", bold: true, font: "Arial", size: 28, color: COLOUR })],
      }),
      // CONTENT: User's contact details from INSTRUCTIONS.md
      new Paragraph({
        spacing: { after: 300 },
        children: [new TextRun({ text: "[PHONE]  |  [EMAIL]  |  [CITY]", font: "Arial", size: 18, color: GREY })],
      }),

      // ── RE: LINE ──────────────────────────────────────────
      // CONTENT: Role title and company name from the job ad
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "Re: [ROLE TITLE] \u2013 [COMPANY NAME]", font: "Arial", size: 22 })],
      }),

      // ── PARAGRAPH 1: Hook + Why This Role ─────────────────
      // CONTENT: From user's gold standard base text in INSTRUCTIONS.md
      // ADAPT: Keep opening sentence. Change the role-specific challenge.
      // Do not use generic company compliments.
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "[PARAGRAPH 1 — from gold standard base text, adapted per role. Opening sentence stays close to base. Everything after 'the specific challenge of this role:' changes to describe the real tension or problem THIS role exists to solve.]", font: "Arial", size: 22 })],
      }),

      // ── PARAGRAPH 2: Proof Point 1 ────────────────────────
      // CONTENT: From user's gold standard base text in INSTRUCTIONS.md
      // ADAPT: Keep or swap the proof point. Lead with insight/challenge,
      // NOT "At [Company], I led..."
      // Pattern: context > insight > specific action > result
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "[PARAGRAPH 2 — Proof Point 1 from gold standard base text, adapted to highlight the capability most relevant to this role.]", font: "Arial", size: 22 })],
      }),

      // ── PARAGRAPH 3: Proof Point 2 ────────────────────────
      // CONTENT: From user's gold standard base text in INSTRUCTIONS.md
      // ADAPT: Open with a belief or principle. Show a different project.
      // Closing sentence MUST reference something specific from the job ad.
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "[PARAGRAPH 3 — Proof Point 2 from gold standard base text. Opens with belief/principle. Closing sentence connects to specific requirement from the job ad.]", font: "Arial", size: 22 })],
      }),

      // ── PARAGRAPH 4: Career Thread ────────────────────────
      // CONTENT: Rewritten fresh each time from INSTRUCTIONS.md guidance
      // ADAPT: Pull a different common thread. Change example projects.
      // Write fresh wording — do not reuse phrases verbatim across applications.
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "[PARAGRAPH 4 — Career Thread. Different common thread each time. Two different project examples most relevant to this role. Fresh wording every application.]", font: "Arial", size: 22 })],
      }),

      // ── PARAGRAPH 5: Close ────────────────────────────────
      // CONTENT: One sentence only. Reference specific team/goal from ad.
      // Do NOT use "I would welcome the opportunity to discuss."
      new Paragraph({
        spacing: { before: 0, after: 200 },
        children: [new TextRun({ text: "[PARAGRAPH 5 — One sentence. References specific team or goal from the job ad. No generic language.]", font: "Arial", size: 22 })],
      }),

      // ── SIGN-OFF ──────────────────────────────────────────
      // Calibrate formality: "Best regards," for formal, "Thanks," for casual
      new Paragraph({
        spacing: { before: 0, after: 40 },
        children: [new TextRun({ text: "[SIGN-OFF],", font: "Arial", size: 22 })],
      }),
      // CONTENT: User's name from INSTRUCTIONS.md
      new Paragraph({
        spacing: { before: 0, after: 0 },
        children: [new TextRun({ text: "[USER NAME]", font: "Arial", size: 22 })],
      }),
    ],
  }],
});

// ── Output ──────────────────────────────────────────────────
// Path and filename adapted per application
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("[OUTPUT_PATH]/[USER NAME] Cover Letter [ROLE TITLE].docx", buffer);
  console.log("Cover letter created successfully");
});
