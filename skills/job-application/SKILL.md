---
name: job-application
description: >
  Build tailored job applications with keyword-optimised resumes, cover letters, and optional key selection criteria responses. Use this skill whenever the user pastes a job ad, mentions applying for a role, asks to create a resume or cover letter for a specific position, or says anything like "here is the next one", "help me apply for this", or "new application". Also trigger when the user asks to verify keywords, regenerate application documents, or update the job tracker. This skill is the single entry point for all job application work.
version: 0.1.0
---

# Job Application Skill

This skill automates an end-to-end job application workflow. Every application follows the same pipeline, producing consistent, high-quality, keyword-optimised documents.

## First Step — Always

Read the user's master instructions file before doing anything:

```
Read {workspace}/INSTRUCTIONS.md
```

This file is the single source of truth. It contains the user's profile, employer history, achievements bank, resume structure, cover letter structure, writing style rules, keyword strategy, and any role-specific guidance. Follow it precisely.

**If INSTRUCTIONS.md does not exist or is incomplete**, read the setup guide and walk the user through first-time configuration:

```
Read ${CLAUDE_PLUGIN_ROOT}/skills/job-application/references/setup-guide.md
```

## The Pipeline

When a job ad is pasted, execute these steps in order:

### 1. Positioning Analysis

Write 3-4 sentences: what to emphasise, what to tone down, any risks (overqualified, missing experience, career-change framing). Share this with the user before proceeding.

### 2. Create Application Folder

Create a subfolder in the workspace named `{Company} {Role Title}`. Save the position description as `Position Description.txt` (or keep original format if PDF).

### 3. Keyword Extraction and Placement Map

This is the most critical step. Read the full keyword strategy:

```
Read ${CLAUDE_PLUGIN_ROOT}/skills/job-application/references/keyword-strategy.md
```

Extract recruiter keywords from the ad into four categories: Role-Specific Phrases, Domain/Technical Terms, Capability/Competency Phrases, Seniority Markers.

Build a placement map assigning each phrase to exactly one location across the resume and cover letter. Each distinctive phrase appears NO MORE THAN TWICE across both documents combined. Basic technical terms that naturally recur in the user's field are exceptions.

Save as `Keywords.md` in the application folder.

### 4. Resume (.docx)

Generate using Node.js with the `docx` npm package. Read the formatting reference template:

```
Read ${CLAUDE_PLUGIN_ROOT}/skills/job-application/references/template-resume.js
```

Follow the resume structure from INSTRUCTIONS.md for all content. The template file defines formatting patterns only — helper functions, fonts, colours, margins, section ordering. All text content comes from INSTRUCTIONS.md.

**Process:**
1. Read the template for formatting patterns and helper functions
2. Read INSTRUCTIONS.md for all content (profile, employers, achievements, competencies)
3. Create a new JS file (`create_{company}_resume.js`) combining the template structure with tailored content from the instructions
4. Adapt the Professional Summary, Core Skills, and project selections to match the target role
5. Run the JS file to generate the .docx

**Content completeness:** Include ALL sections defined in INSTRUCTIONS.md. Do not skip any employer, section, or project that the user has listed. Use full project descriptions — do not abbreviate or summarise.

Output to the application folder as `{User Name} Resume {Role Title}.docx`.

### 5. Cover Letter (.docx)

Generate using Node.js with the `docx` npm package. Read the formatting reference template:

```
Read ${CLAUDE_PLUGIN_ROOT}/skills/job-application/references/template-cover.js
```

Follow cover letter structure from INSTRUCTIONS.md. The template defines formatting only.

**Process:**
1. Read the template for formatting patterns
2. Read INSTRUCTIONS.md for the user's gold standard base text and voice rules
3. Create a new JS file (`create_{company}_cover.js`) starting from the user's base text
4. Adapt the marked sections to match the target role
5. Run the JS file to generate the .docx

**Critical rules:**
- Every cover letter starts from the user's base text and adapts it. Do not start from scratch.
- Five paragraphs: Hook + Why This Role, Proof Point 1, Proof Point 2, Career Thread, Close (1 sentence) + Sign-off.
- Total body text must not exceed ~300 words (~250 target).
- No greeting, no date block, no addressee.
- Follow all voice rules from INSTRUCTIONS.md.

Output to the application folder as `{User Name} Cover Letter {Role Title}.docx`.

### 6. KSC Responses (if required)

For government or institutional roles with Key Selection Criteria, write STAR method responses. Action = 60% of each response. Save as `Key Selection Criteria.md` in the application folder.

### 7. Keyword Verification

Run a Python script that reads both .docx files and performs three checks:

**A. Keyword placement:** Each distinctive phrase should appear exactly once across both documents. Use flexible regex matching for phrases with commas or conjunctions. Flag duplicates and missing keywords.

**B. Cover letter word count:** Count words in cover letter body (excluding header and sign-off). Flag if over 300 words. Target is ~250 words.

**C. Cross-document repetition:** Scan for any phrase of 5+ words appearing in both the cover letter and resume verbatim (beyond planned keyword placements). Flag for rewording — the cover letter should not echo the resume.

Fix any issues by editing the JS files and regenerating. Do not mark the application as complete until all three checks pass clean.

### 8. Job Tracker Update (if tracker exists)

If the user has a job tracker spreadsheet in their workspace, update it using Python (openpyxl): find next empty row, add company, role title, category, employment type, salary estimate, status. Status defaults to "Draft" unless user confirms "Applied".

## Writing Style

Follow the writing style rules in INSTRUCTIONS.md precisely. Key universal principles:

- Everything must sound like the user wrote it themselves. Direct and professional, not generic or templated.
- No contractions. Write "I am" not "I'm", "I have" not "I've", "do not" not "don't".
- Banned phrases (never use): "excited to apply", "leveraging", "proven track record", "results-driven", "strategic thinker", "adept at", "well-versed in", "spearheaded", "championed", "orchestrated", "pioneered", "dynamic", "innovative", "cutting-edge", "navigate complex environments", "I would welcome the opportunity to discuss".
- First person always. Short, clear sentences. Vary length. Most under 20 words.
- Do NOT start proof paragraphs with "At [Company], I led..." — lead with the insight or challenge.
- Do NOT include a separate "working style" paragraph in the cover letter.
- Close with one specific sentence, not generic availability language.

## Quality Checklist

Before presenting documents to the user, verify all of the following:

1. Keywords.md has placement map with each phrase assigned once
2. Resume follows exact formatting spec (fonts, sizes, colours, indentation)
3. Resume includes ALL sections defined in INSTRUCTIONS.md
4. Cover letter follows formatting spec (no greeting, no date)
5. Cover letter body is under 300 words (~250 target)
6. Cover letter follows 5-paragraph pattern (Hook, Proof 1, Proof 2, Career Thread, Close)
7. No proof paragraph starts with "At [Company], I led..."
8. No separate working style paragraph in cover letter
9. Close is one sentence, no generic availability language
10. No contractions anywhere in resume or cover letter
11. Keyword verification script passes clean
12. Cross-document repetition check passes (no 5+ word phrases shared verbatim)
13. Writing style rules from INSTRUCTIONS.md followed throughout
14. Achievement metrics match what is in INSTRUCTIONS.md exactly
