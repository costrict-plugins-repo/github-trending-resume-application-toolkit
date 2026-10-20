# Job Application Instructions

This is the single source of truth for building your job applications. Claude reads this file before doing anything when a job ad is pasted. Fill in every section with your own information. Sections marked [FILL IN] require your input. Sections marked [METHODOLOGY] contain the application methodology and should generally be left as-is.

---

## Who I Am

[FILL IN: Write 3-5 sentences describing yourself. Include your name, location, current role, years of experience, and what you are looking for. Be direct — this is not a bio, it is context for Claude to understand your positioning. Example structure below.]

Name. Location. Citizenship/work rights status (if relevant to your market).

Currently at [Company] ([Start Date] - Present) as [Title]. Before that, [Previous Company] ([Dates]), and prior roles at [Earlier Companies].

[X] years in [your field] across [sectors/industries]. [Any distinctive background — military, career change, specialisation]. [Key credentials or qualifications].

[What you are seeking — type of role, type of organisation, what matters to you. Be honest about motivation. Do not be defensive about career transitions.]

---

## Employer and Client Mappings

[FILL IN: List your employers in reverse chronological order. Include dates and any clients or projects you delivered for each. This table helps Claude accurately attribute work to the right employer.]

| Employer | Dates | Clients/Projects |
|----------|-------|-------------------|
| [Current Employer] | [Start] - Present | [Client 1], [Client 2] |
| [Previous Employer] | [Start] - [End] | [Client 1], [Client 2] |
| [Earlier Employer] | [Start] - [End] | [Client 1], [Client 2] |
| [Earliest Relevant Employer] | [Start] - [End] | [Description of work] |

[FILL IN: Note any employer consolidation rules — for example, if you worked through an agency but want to present the work under a different employer name, or if a company was acquired/renamed.]

---

## Workflow — When a Job Ad Is Pasted

[METHODOLOGY — do not change this section]

1. **Positioning analysis** (3-4 sentences). What to emphasise, what to tone down, any risks.
2. **Create application folder** in workspace. Save the position description into it.
3. **Keywords.md** — extract recruiter keywords from the ad. Categories: Role-Specific Phrases, Domain/Technical Terms, Capability/Competency Phrases, Seniority Markers. Build a placement map assigning each phrase to exactly one location across the resume and cover letter. Each distinctive phrase appears NO MORE THAN TWICE across both documents combined. Basic technical terms that naturally recur in your field are exceptions.
4. **Resume** (.docx) — tailored using the structure below.
5. **Cover letter** (.docx) — tailored using the structure below.
6. **KSC responses** (if the ad requires them) — STAR method, separate .md file.
7. **Keyword Verification** — after generating both documents, run verification checks:
   - A. Each distinctive keyword phrase appears exactly once across both documents (use flexible matching for phrases with commas/conjunctions)
   - B. Cover letter body is under 300 words (~250 target)
   - C. No phrase of 5+ words appears verbatim in both the cover letter and resume (beyond keyword placements)
   Fix any issues and regenerate until all checks pass.
8. **Add to Job Tracker** (if one exists) — company, role title, category, employment type, salary estimate, status (Draft until user confirms Applied).

---

## Resume Structure

All resumes use this structure. Generated via docx-js (npm).

### Layout

[METHODOLOGY — these formatting specs can be customised to your preference, but the defaults produce a clean, professional document]

- Name: centred, bold, Arial 16pt, colour #1F4E79
- Contact line: centred, Arial 9pt, grey #666666
- Section headings: uppercase, bold, Arial 11pt, colour #1F4E79, bottom border
- Body text: Arial 10.5pt (size 21 in half-points)
- Page margins: 1080 twips (narrow)
- Notable Project descriptions: indented 0.5 inch (left indent)

### Sections

**1. Name and contact details**

[FILL IN: Your full name, phone, email, LinkedIn URL, city.]

**2. PROFESSIONAL SUMMARY**

[FILL IN: Write a 4-paragraph base professional summary. This will be adapted for each role, but having a strong base saves time. Structure:]

> Paragraph 1: "I am a [ROLE CONTEXT] professional with [X] years' experience leading [ROLE DOMAIN] across [sectors]."
> [ROLE CONTEXT] and [ROLE DOMAIN] change per role — Claude will adapt these.
>
> Paragraph 2: Your core value proposition in 1-2 sentences. What you bring together. Keep close to base each time.
>
> Paragraph 3: Three activities that describe your day-to-day work. These flex per role type:
> - For operations roles: activities focused on process review, requirements, coordination
> - For project management roles: activities focused on planning, governance, reporting
> - For analyst roles: activities focused on mapping, workshops, acceptance criteria
> [Write your default version and note how it should flex for different role types]
>
> Paragraph 4: Your passion/motivation statement. 1-2 sentences. Stays close to base each time.

**3. CORE SKILLS**

[FILL IN: Write 6-8 competency lines in "Label: Description" format. These will be reordered and reworded per role. Each should map to real work you have done.]

> Example format:
> Delivery Leadership: Experienced running discovery workshops, scoping requirements, and planning end-to-end delivery.
> Governance and Reporting: Experienced building status reports that highlight milestone progress, inflight risks and constraints.
> [Add your own competency lines here]

**4. EXPERIENCE**

[FILL IN: For each employer, provide the following. Employers should be in reverse chronological order.]

For each employer, write:
- A **short** (2-sentence) and **long** (2-paragraph) introduction. Use the short version when the employer provides background context. Use the long version only when the employer is the primary anchor for the role.
- For your most recent 2-3 employers, include **Notable Projects** — individual project descriptions with bold italic names and indented descriptions.

> **[Employer Name]** ([Start Date] - [End Date or Present])
> *Short:* [2-sentence summary of your role and responsibilities]
> *Long:* [2-paragraph version with more detail about your impact and approach]
>
> Notable Projects:
>
> **[Project/Client Name]:** [Describe what you delivered, your specific role, the approach you took, and the measurable outcome. Write in first person, past tense. Be specific about numbers and results.]

[Repeat for each employer]

**5. EARLIER CAREER**

[FILL IN: A single line listing earlier roles that do not need full descriptions. Format: "Company (dates) | Company (dates) | Company (dates)"]

**6. MILITARY SERVICE / VOLUNTEER / OTHER EXPERIENCE**

[FILL IN: Optional. If you have military service, significant volunteer roles, or other experience that adds to your professional narrative, include it here. If not applicable, delete this section and note below that the resume should have 7 sections instead of 8.]

**7. EDUCATION**

[FILL IN: List qualifications and certifications with year of completion. Most recent first.]

**8. ADDITIONAL**

[FILL IN: Optional. Brief line covering interests, community involvement, or anything that rounds out your profile. If not applicable, delete this section.]

[NOTE: If you removed sections 6 or 8, list the sections your resume should include here, so Claude always generates all of them.]

---

## Cover Letter Structure

Generated via docx-js. Left-aligned name header (bold, #2E5090, 14pt), grey contact line (#666666), then body paragraphs. Margins 1440 twips. Arial 11pt body text (size 22).

No greeting. No date block. No addressee. No work rights line.

**Total body text must not exceed ~300 words.** Most paragraphs should be 1-3 sentences. The cover letter should feel like a focused conversation, not a structured essay.

### The Five-Paragraph Pattern

[METHODOLOGY — this pattern is the backbone of every cover letter]

Write a gold standard cover letter that will serve as the base for every application. Every cover letter starts from this literal base text and adapts the marked sections. Do not start from scratch each time.

**YOUR GOLD STANDARD BASE TEXT:**

[FILL IN: Write one complete cover letter for a role that represents your target market. This becomes the template that Claude adapts for every subsequent application. Follow the 5-paragraph pattern below. Mark each paragraph so Claude knows what to adapt.]

> Re: [Role Title] - [Company]
>
> **Paragraph 1 — Hook + Why This Role (3-4 sentences):**
> [Opening sentence about your experience. Then describe the specific challenge THIS role exists to solve — not a generic company compliment.]
>
> **Paragraph 2 — Proof Point 1 (3-5 sentences):**
> [Your strongest, most recent project example. Lead with the insight or challenge, NOT "At [Company], I led..." Show: context, insight, specific action, result.]
>
> **Paragraph 3 — Proof Point 2 (3-5 sentences):**
> [Open with a belief or principle. Show a different project that demonstrates a different capability. The closing sentence MUST connect back to something specific in the job ad.]
>
> **Paragraph 4 — Career Thread (2-4 sentences):**
> [Pull a common thread across two different projects. This paragraph gets rewritten fresh each time — same concept, different words and examples per application.]
>
> **Paragraph 5 — Close (1 sentence only):**
> [Reference the specific team or goal from the ad. One sentence. No generic availability language.]
>
> [Sign-off],
> [Your Name]

**WHAT TO ADAPT PER ROLE:**

- Paragraph 1: Keep opening sentence. Change everything after "the specific challenge of this role:" to match the target.
- Paragraph 2: Keep or swap the proof point. Always lead with insight, not "At [Company], I led..."
- Paragraph 3: Keep or swap. Opening belief should match the role's theme. Closing connection MUST reference the job ad.
- Paragraph 4: Pull a different thread each time. Change the example projects. Write fresh wording — do not reuse phrases verbatim across applications.
- Paragraph 5: Change company, team, and goal. Keep to one sentence.
- Sign-off: Calibrate formality ("Best regards," for formal, "Thanks," for casual).

### Voice Rules for Cover Letters

[METHODOLOGY — do not change these]

- **Do NOT start proof paragraphs with "At [Company], I led..."** Lead with the insight, the challenge, or a belief. The employer name can come second.
- **Do NOT include a separate "working style" paragraph.** Working style should be demonstrated through the proof points, not stated.
- **Do NOT use the phrase "I would welcome the opportunity to discuss how my experience could contribute to the role."** Or any variation. Close with one specific sentence.
- **Vary sentence openings.** If two consecutive sentences start with "I", rewrite one.
- **Use connective tissue between proof points.** Each paragraph should connect back to the role, not just narrate what happened.
- **Write the career thread paragraph fresh each time.** Same idea, different words across applications.

---

## Key Achievements Bank

[FILL IN: List your key achievements. For each, include the project/context, your specific role, the approach you took, and the measurable outcome. These are the raw material Claude draws from when tailoring applications. Write them in first person, with enough detail that Claude can adapt them to different contexts.]

Draw from these selectively. Only use what maps to the target role.

- [Project/Achievement Name] — [Description with specific metrics and outcomes. Write 2-4 sentences covering: what it was, what you did, how you did it, what the measurable result was.]
- [Project/Achievement Name] — [Description]
- [Project/Achievement Name] — [Description]
- [Project/Achievement Name] — [Description]

[Add as many as you have. More is better — Claude will select the most relevant ones for each application.]

---

## STAR Method Examples

[FILL IN: For each key achievement, write a brief STAR summary. These are used for KSC responses, cover letter proof points, and interview prep.]

- **[Project/Company]:** [Situation]. [Task]. [Action — this should be the longest part, ~60% of the response]. [Result with metric].
- **[Project/Company]:** [STAR summary]
- **[Project/Company]:** [STAR summary]

---

## Writing Style

[FILL IN the personal sections. METHODOLOGY sections should be left as-is.]

**Language variant:** [FILL IN: e.g., Australian English, British English, American English. Note any specific conventions like "organisation" vs "organization", "program" vs "programme".]

**Do not use contractions.** "I've", "I'm", "it's", "can't", "haven't", "isn't", "don't" — do not use these. Do not force formal phrasing either — keep sentences natural and direct without contractions.

**Banned phrases:** [METHODOLOGY — these are universally weak and should never appear]
"I am excited to apply", "leveraging my expertise", "proven track record", "results-driven professional", "strategic thinker", "adept at", "well-versed in", "orchestrated", "pioneered", "in today's fast-paced environment", "dynamic", "innovative", "cutting-edge", "navigate complex environments", "I would welcome the opportunity to discuss", "fast-paced, complex environments"

**Your additional banned phrases:** [FILL IN: Add any phrases you personally want to avoid — overused industry jargon, phrases that do not sound like you, etc.]

**Overuse warnings:** [FILL IN: List phrases that are good but become verbal tics if they appear in every application. Claude will use the same idea but different words each time.]

> Example: If you tend to write "a focus on safe landing" in every cover letter, list it here so Claude knows to vary the phrasing.

**Tone:** [FILL IN: Describe your natural professional voice in a few words. Examples: "Confident, not arrogant. Direct, not blunt. Warm, not soft." This helps Claude match your authentic voice.]

**Voice:** First person always. Short and clear sentences. Vary length. Most under 20 words. Start some with "And" or "But."

---

## Language Calibration

[FILL IN: Create a table mapping the language you want to use vs language to avoid. This calibrates Claude to your professional level and avoids language that sounds either too junior or too inflated.]

| Write this | Not this |
|---|---|
| [Your preferred term] | [Term to avoid] |
| [Your preferred term] | [Term to avoid] |

[FILL IN: If you apply to different sectors (e.g., government vs private), add a separate calibration table for each sector showing how to adjust language.]

---

## Government/Institutional Applications

[METHODOLOGY — adapt if relevant to your market. Delete if not applicable.]

For government or institutional roles, follow these additional rules:

- STAR method for KSC responses. Action = 60% of each response.
- Translate industry jargon into plain English.
- Frame motivation through purpose and public value, not career ambition.
- Calibrate language to the classification/level of the role.
- Respect word limits precisely.

---

## Salary Guidance

[FILL IN: Research your market and fill in salary ranges for the types of roles you target. This helps Claude estimate salary for the job tracker when ads do not list one.]

| Role Type | Salary Range |
|---|---|
| [Role type 1] | $[range] |
| [Role type 2] | $[range] |
| [Role type 3] | $[range] |

When unsure, pitch lower-to-mid.

---

## Quality Checklist

[METHODOLOGY — do not change]

Before presenting documents to the user, verify all of the following:

1. Keywords.md has placement map with each phrase assigned once
2. Resume follows exact formatting spec (fonts, sizes, colours, indentation)
3. Cover letter follows formatting spec (no greeting, no date)
4. Cover letter body is under 300 words (~250 target)
5. Cover letter follows 5-paragraph pattern (Hook, Proof 1, Proof 2, Career Thread, Close)
6. No proof paragraph starts with "At [Company], I led..."
7. No separate "working style" paragraph in cover letter
8. Close is one sentence, no generic availability language
9. Keyword verification passes clean
10. Cross-document repetition check passes (no 5+ word phrases shared verbatim)

---

## Technical Notes

[METHODOLOGY — do not change unless you want to use different tools]

- Documents generated via Node.js using the `docx` npm package.
- Job Tracker maintained as .xlsx using openpyxl (Python).
- Keyword verification via Python script reading docx XML.
- All JS generator files stored in session working directory, output to application folder.
