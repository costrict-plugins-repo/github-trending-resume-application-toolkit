# Job Application Toolkit

An automated job application pipeline for Cowork that produces keyword-optimised, professionally formatted resumes and cover letters.

## What It Does

Paste a job ad into Cowork and the toolkit handles the rest:

1. Analyses your positioning against the role
2. Extracts recruiter keywords and builds a strategic placement map
3. Generates a tailored resume (.docx) with precise formatting
4. Generates a tailored cover letter (.docx) following a proven 5-paragraph pattern
5. Verifies keyword coverage, word count, and cross-document repetition
6. Optionally writes STAR-method responses for Key Selection Criteria
7. Tracks applications in a spreadsheet

Every document is built from your single INSTRUCTIONS.md file, which contains your career history, achievements, writing style, and a gold standard cover letter. You fill it in once, then the toolkit tailors it for each application.

## Setup

1. Install the plugin in Cowork
2. Say "Help me set up my job application instructions" — Claude will walk you through populating your INSTRUCTIONS.md
3. Paste a job ad and say "new application"

See the Setup Guide in the skill references for detailed instructions.

## Components

| Component | Purpose |
|-----------|---------|
| **job-application skill** | Core pipeline — triggers on job ads and application requests |
| **keyword-strategy.md** | Keyword extraction and placement methodology |
| **instructions-template.md** | Blank template for your career data |
| **setup-guide.md** | First-time setup walkthrough |
| **template-resume.js** | Resume formatting reference (docx-js patterns) |
| **template-cover.js** | Cover letter formatting reference (docx-js patterns) |

## Requirements

- Cowork desktop app
- Node.js with the `docx` npm package (installed automatically in Cowork's sandbox)
- Python with openpyxl (for job tracker updates — optional)

## How the Keyword Strategy Works

The toolkit's keyword strategy is what sets it apart from generic resume builders. Instead of stuffing keywords or ignoring them, it:

1. Extracts phrases from the job ad into four categories (Role-Specific, Domain/Technical, Capability/Competency, Seniority Markers)
2. Assigns each phrase to exactly one location across both documents
3. Caps each distinctive phrase at two appearances maximum across resume and cover letter combined
4. Verifies placement programmatically after document generation

This produces documents that pass ATS keyword scans while reading naturally to human recruiters.

## Credits

Built by Michael Zajer. Methodology refined across 160+ real job applications.
