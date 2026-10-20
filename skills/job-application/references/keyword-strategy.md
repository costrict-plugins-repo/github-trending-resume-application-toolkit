# Keyword Extraction and Placement Strategy

This is the most important part of the application pipeline. A well-executed keyword strategy ensures the resume and cover letter speak the recruiter's language without sounding like a parrot. The goal is natural distribution — every keyword appears where it makes contextual sense, and no phrase is overused.

## Why This Matters

Most applicant tracking systems (ATS) and recruiters scan for specific phrases from the job ad. If those phrases are missing, the application may never reach a human. But if they are stuffed in repeatedly, the documents read as artificial and desperate.

This strategy solves both problems: every recruiter keyword appears, but each one is placed deliberately and used sparingly.

## Step 1: Extract Keywords from the Job Ad

Read the job ad carefully and extract phrases into four categories:

### Category 1: Role-Specific Phrases
These describe what the role actually does. They are usually in the "responsibilities" or "what you will do" section of the ad.

Examples: "manage end-to-end delivery", "coordinate cross-functional teams", "lead process improvement initiatives", "develop stakeholder engagement plans"

### Category 2: Domain/Technical Terms
These are the tools, platforms, methodologies, and domain-specific language the ad mentions.

Examples: "Azure DevOps", "Agile", "SAFe", "Power BI", "ITIL", "data governance", "cloud migration"

### Category 3: Capability/Competency Phrases
These describe the skills and behaviours the organisation values. They are usually in the "about you", "what you bring", or "selection criteria" section.

Examples: "stakeholder management", "risk and issue management", "change management", "continuous improvement", "strategic thinking"

### Category 4: Seniority Markers
These signal the level of the role. They help calibrate language to the right altitude.

Examples: "senior leadership", "executive reporting", "portfolio oversight", "team of X", "budget management", "P&L responsibility"

## Step 2: Build the Placement Map

This is where the strategy becomes precise. For each extracted phrase, assign it to exactly ONE location across the resume and cover letter. This creates deliberate, non-overlapping coverage.

### The Core Rule

**Each distinctive phrase appears NO MORE THAN TWICE across both documents combined.**

Most phrases should appear exactly once. A select few high-priority phrases may appear twice — once in the resume and once in the cover letter — but only if both placements feel natural and contextually appropriate.

### Exceptions

Basic technical terms that naturally recur in the user's field are exceptions to the twice-maximum rule. For example, if someone works in cloud technology, terms like "Azure", "AWS", "Agile", or tool names like "Jira" will naturally appear multiple times across project descriptions. This is fine — the rule targets distinctive recruiter phrases, not common technical vocabulary.

### Placement Locations

When assigning phrases, distribute them across these document sections:

**Resume locations:**
- Professional Summary (high-impact — recruiters read this first)
- Core Skills (competency lines)
- Employer introductions
- Notable Project descriptions
- Other sections as contextually appropriate

**Cover Letter locations:**
- Hook paragraph (the "why this role" framing)
- Proof Point 1 (first project example)
- Proof Point 2 (second project example)
- Career Thread paragraph
- Close sentence

### Placement Principles

1. **Put the highest-priority phrases in the Professional Summary and Hook paragraph.** These are read first by both ATS and humans.

2. **Spread Domain/Technical Terms across project descriptions.** They read most naturally when tied to specific work.

3. **Place Capability phrases in Core Skills and Proof Points.** Demonstrate the capability, do not just claim it.

4. **Use Seniority Markers in employer introductions and the Career Thread.** They calibrate the reader's perception of level.

5. **Never force a phrase where it does not fit.** If a keyword cannot be placed naturally, note it as "unable to place" in the placement map and explain why. Forced placements damage credibility more than missing keywords.

## Step 3: Save the Placement Map

Save the complete keyword extraction and placement map as `Keywords.md` in the application folder. Use this format:

```markdown
# Keywords — {Company} {Role Title}

## Role-Specific Phrases
| Phrase | Placement Location | Document |
|--------|--------------------|----------|
| manage end-to-end delivery | Professional Summary | Resume |
| coordinate cross-functional teams | Slalom employer intro | Resume |
| lead process improvement | Proof Point 2 | Cover Letter |

## Domain/Technical Terms
| Phrase | Placement Location | Document |
|--------|--------------------|----------|
| Azure DevOps | Core Skills (Tools line) | Resume |
| data governance | IBAC project description | Resume |

## Capability/Competency Phrases
| Phrase | Placement Location | Document |
|--------|--------------------|----------|
| stakeholder management | Core Skills | Resume |
| risk and issue management | Proof Point 1 | Cover Letter |

## Seniority Markers
| Phrase | Placement Location | Document |
|--------|--------------------|----------|
| senior leadership | Career Thread | Cover Letter |
| budget management | Professional Summary | Resume |
```

## Step 4: Verify After Document Generation

After generating both the resume and cover letter, run verification checks:

### A. Keyword Placement Check
- Read both .docx files
- For each phrase in the placement map, confirm it appears in the designated location
- Flag any phrases that are missing or appear in unplanned locations
- Flag any distinctive phrase appearing more than twice across both documents

### B. Cross-Document Repetition Check
- Scan for any phrase of 5+ words that appears verbatim in both documents (beyond planned keyword placements)
- The cover letter should complement the resume, not echo it
- Flag matches for rewording

### C. Cover Letter Word Count
- Count words in cover letter body (excluding header and sign-off)
- Flag if over 300 words. Target is ~250.

### Verification Script Approach

Use Python to read the .docx files (via the docx XML or python-docx). For each keyword phrase:
- Use flexible regex matching that handles variations in punctuation and conjunctions (e.g., "risks, issues, and dependencies" should match "risks, issues and dependencies")
- Count occurrences across both documents
- Report: phrase, expected location, actual locations found, count

Fix any issues by editing the JS generator files and regenerating the .docx files. Do not present documents to the user until all checks pass clean.

## Anti-Parroting: Why This Works

The placement map approach prevents the most common resume-writing failure: keyword stuffing. When every phrase is assigned to exactly one location, the resulting documents read as naturally written by someone who genuinely has the experience the role requires. The keywords are present for the ATS, but invisible to the human reader because they are woven into authentic descriptions of real work.

This is the difference between a resume that gets through the ATS and a resume that also impresses the hiring manager.
