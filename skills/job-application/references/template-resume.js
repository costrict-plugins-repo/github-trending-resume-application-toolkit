// ============================================================
// RESUME FORMATTING TEMPLATE — Job Application Toolkit
// ============================================================
// This file defines the FORMATTING and STRUCTURE for resumes.
// It contains NO personal content. All content comes from the
// user's INSTRUCTIONS.md file.
//
// HOW THIS FILE IS USED:
// 1. Claude reads this file to understand the docx-js patterns,
//    helper functions, and document structure.
// 2. Claude reads INSTRUCTIONS.md for all text content.
// 3. Claude creates a new JS file (create_{company}_resume.js)
//    combining this structure with tailored content.
// 4. The new JS file is run to generate the .docx.
//
// Users should NOT edit this file. Claude uses it as a
// formatting reference automatically.
// ============================================================

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, AlignmentType, TabStopType, TabStopPosition, BorderStyle, convertInchesToTwip } = require("docx");

// ── Formatting constants ────────────────────────────────────
// These can be customised in INSTRUCTIONS.md if the user wants
// different colours. Defaults produce a clean professional look.
const COLOUR = "1F4E79";   // Heading blue
const GREY = "666666";     // Contact line grey
const INDENT = convertInchesToTwip(0.5);  // Project description indent

// ── Helper functions ────────────────────────────────────────
// These create consistently formatted document elements.
// Copy these exactly into every generated resume file.

function heading(text) {
  return new Paragraph({
    spacing: { before: 240, after: 80 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: COLOUR, space: 4 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, font: "Arial", size: 22, color: COLOUR })],
  });
}

function employer(name, dates) {
  return new Paragraph({
    spacing: { before: 160, after: 40 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: name, bold: true, font: "Arial", size: 21 }),
      new TextRun({ text: `\t${dates}`, font: "Arial", size: 21 }),
    ],
  });
}

function employerIntro(text) {
  return new Paragraph({
    spacing: { before: 0, after: 40 },
    children: [new TextRun({ text, font: "Arial", size: 21 })],
  });
}

function notableProjects() {
  return new Paragraph({
    spacing: { before: 80, after: 40 },
    children: [new TextRun({ text: "Notable Projects", bold: true, font: "Arial", size: 21 })],
  });
}

function projectName(text) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, bold: true, italics: true, font: "Arial", size: 21 })],
  });
}

function projectDesc(text) {
  return new Paragraph({
    spacing: { before: 0, after: 80 },
    indent: { left: INDENT },
    children: [new TextRun({ text, font: "Arial", size: 21 })],
  });
}

function competency(label, desc) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: label + ": ", bold: true, font: "Arial", size: 21 }),
      new TextRun({ text: desc, font: "Arial", size: 21 }),
    ],
  });
}

function competencyPlain(text) {
  return new Paragraph({
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, font: "Arial", size: 21 })],
  });
}

function bodyPara(text) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    children: [new TextRun({ text, font: "Arial", size: 21 })],
  });
}

// ── Document Structure ──────────────────────────────────────
// This shows the SECTION ORDER and FORMATTING for each part.
// All text content below is placeholder — Claude replaces it
// with content from INSTRUCTIONS.md when generating a resume.

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },          // A4
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },  // Narrow
      },
    },
    children: [
      // ── HEADER ────────────────────────────────────────────
      // CONTENT: User's name from INSTRUCTIONS.md
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "[USER NAME]", bold: true, font: "Arial", size: 32, color: COLOUR })],
      }),
      // CONTENT: User's contact details from INSTRUCTIONS.md
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: "[PHONE]  |  [EMAIL]  |  [LINKEDIN]  |  [CITY]", font: "Arial", size: 18, color: GREY })],
      }),

      // ── PROFESSIONAL SUMMARY ──────────────────────────────
      // CONTENT: 4 paragraphs from INSTRUCTIONS.md Professional Summary section
      // Paragraphs 1 and 3 are adapted per role. Paragraphs 2 and 4 stay close to base.
      heading("Professional Summary"),
      bodyPara("[PARAGRAPH 1: Role context and domain — adapted per role]"),
      bodyPara("[PARAGRAPH 2: Core value proposition — stays close to base]"),
      bodyPara("[PARAGRAPH 3: Three activities matching role type — adapted per role]"),
      bodyPara("[PARAGRAPH 4: Passion/motivation — stays close to base]"),

      // ── CORE SKILLS ───────────────────────────────────────
      // CONTENT: 6-8 competency lines from INSTRUCTIONS.md Core Skills section
      // Reordered and reworded per role to prioritise what the ad asks for.
      heading("Core Skills"),
      competency("[Skill Label 1]", "[Description from INSTRUCTIONS.md]"),
      competency("[Skill Label 2]", "[Description]"),
      competency("[Skill Label 3]", "[Description]"),
      competency("[Skill Label 4]", "[Description]"),
      competency("[Skill Label 5]", "[Description]"),
      competency("[Skill Label 6]", "[Description]"),
      competencyPlain("[Tools line if applicable]"),

      // ── EXPERIENCE ────────────────────────────────────────
      // CONTENT: Employers from INSTRUCTIONS.md in reverse chronological order.
      // Each employer gets: name + dates, intro paragraph(s), optional Notable Projects.
      heading("Experience"),

      // Employer 1 (most recent)
      employer("[EMPLOYER 1 NAME]", "[START] \u2013 Present"),
      // Use short or long intro from INSTRUCTIONS.md based on relevance
      employerIntro("[EMPLOYER 1 INTRODUCTION — from INSTRUCTIONS.md]"),

      // Notable Projects (if applicable for this employer)
      notableProjects(),
      projectName("[Project/Client Name]"),
      projectDesc("[Project description from INSTRUCTIONS.md achievements bank — tailored to role]"),

      // Employer 2
      employer("[EMPLOYER 2 NAME]", "[START] \u2013 [END]"),
      employerIntro("[EMPLOYER 2 INTRODUCTION]"),

      notableProjects(),
      projectName("[Project/Client Name]"),
      projectDesc("[Project description]"),
      projectName("[Project/Client Name]"),
      projectDesc("[Project description]"),

      // Employer 3
      employer("[EMPLOYER 3 NAME]", "[START] \u2013 [END]"),
      employerIntro("[EMPLOYER 3 INTRODUCTION]"),

      notableProjects(),
      projectName("[Project/Client Name]"),
      projectDesc("[Project description]"),

      // Employer 4 (if applicable)
      employer("[EMPLOYER 4 NAME]", "[START] \u2013 [END]"),
      employerIntro("[EMPLOYER 4 INTRODUCTION]"),

      // ── EARLIER CAREER ────────────────────────────────────
      // CONTENT: Single line from INSTRUCTIONS.md Earlier Career section
      heading("Earlier Career"),
      bodyPara("[EARLIER CAREER LINE — from INSTRUCTIONS.md]"),

      // ── OPTIONAL: MILITARY SERVICE / VOLUNTEER / OTHER ────
      // CONTENT: From INSTRUCTIONS.md. Include only if the user has this section.
      heading("[SECTION TITLE from INSTRUCTIONS.md]"),
      bodyPara("[CONTENT from INSTRUCTIONS.md]"),

      // ── EDUCATION ─────────────────────────────────────────
      // CONTENT: Qualifications from INSTRUCTIONS.md Education section
      heading("Education"),
      bodyPara("[QUALIFICATION 1 (YEAR)]"),
      bodyPara("[QUALIFICATION 2 (YEAR)]"),
      bodyPara("[QUALIFICATION 3 (YEAR)]"),

      // ── ADDITIONAL ────────────────────────────────────────
      // CONTENT: From INSTRUCTIONS.md Additional section. Include only if the user has this section.
      heading("Additional"),
      bodyPara("[ADDITIONAL CONTENT from INSTRUCTIONS.md]"),
    ],
  }],
});

// ── Output ──────────────────────────────────────────────────
// Path and filename adapted per application
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("[OUTPUT_PATH]/[USER NAME] Resume [ROLE TITLE].docx", buffer);
  console.log("Resume created successfully");
});
