"use client";

const evaluationCriteria = [
  {
    name: "User-Friendliness",
    description:
      "Is the form intuitive, easy to navigate, and clearly labeled for fast completion?"
  },
  {
    name: "Completeness",
    description:
      "Does the form capture all required review details, stakeholders, and change requests?"
  },
  {
    name: "Efficiency",
    description:
      "Does the form reduce back-and-forth, clarify next steps, and accelerate approvals?"
  },
  {
    name: "Use of Reference Material",
    description:
      "Does the form reflect MVP thinking, quick iteration, and usability principles?"
  },
  {
    name: "Point of View from an Industry Expert",
    description:
      "Does the form reflect best-practice approval workflows used by senior editors?"
  },
  {
    name: "Overall Rating",
    description: "Overall quality and readiness for client-facing use."
  }
];

const postEvaluationOptions = [
  "1: 👍 Refine Based on Feedback",
  "2: 👀 Provide A More Stringent Evaluation",
  "3: 🙋‍♂️ Answer More Questions for Personalization",
  "4: 🧑‍🤝‍🧑 Emulate a Focus Group's Detailed Feedback",
  "5: 👑 Emulate a Group of Expert's Detailed Feedback",
  "6: ✨ Let's Get Creative and Try a Different Approach",
  "8: 💡 Request Modification of Format, Style, or Length",
  "9: 🤖 AutoMagically Make This a 10/10!"
];

export default function FinalVideoApprovalFormPage() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10">
        <header className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
            Final Video Approval Form
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            👋 I&apos;m{" "}
            <a
              className="text-amber-300 underline decoration-amber-400/70 underline-offset-4"
              href="http://www.aiforwork.co?utm_source=prompt&utm_medium=Create%20a%20Final%20Video%20Approval%20Form:AIforWork.co"
              target="_blank"
              rel="noreferrer"
            >
              AIforWork.co
            </a>
            , your expert level video-editor AI. Let&apos;s design the ideal Final Video Approval
            Form collaboratively.
          </h1>
          <p className="mt-4 text-base text-slate-300">
            To provide the highest quality work, please answer the questions below. Keep responses
            concise so we can ship faster and reduce revision cycles.
          </p>
          <ol className="mt-6 list-inside list-decimal space-y-2 text-slate-200">
            <li>What is the video title, format, and intended platform (e.g. YouTube, TV, social)?</li>
            <li>Who are the required stakeholders and what is their approval authority?</li>
            <li>What are the non-negotiable brand, legal, or compliance requirements?</li>
            <li>Are there specific moments or timecodes you want reviewed more closely?</li>
            <li>What is your ideal publication deadline and revision turnaround window?</li>
          </ol>
          <p className="mt-6 rounded-2xl border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-amber-200">
            PS: 📌📌{" "}
            <a
              className="underline"
              href="https://aiforwork.beehiiv.com/?utm_source=prompt&utm_medium=Create%20a%20Final%20Video%20Approval%20Form:%20Subscribe%20to%20the%20AI%20for%20Work%20Newsletter%20%F0%9F%A4%96"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe to the AI for Work Newsletter 🤖
            </a>
            . AI in creative is advancing so fast - you cannot afford to get left behind at this
            stage in your career. Gain an unfair advantage with advanced prompts, access to private
            resources, and need to know news sent directly to your inbox.{" "}
            <a
              className="underline"
              href="https://aiforwork.beehiiv.com/?utm_source=prompt&utm_medium=Create%20a%20Final%20Video%20Approval%20Form:%20Subscribe%20Now!"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe Now!
            </a>
            📌📌
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Project Overview</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <label className="block">
                <span className="font-medium text-slate-100">Video Title / Asset ID</span>
                <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Enter title or asset ID" />
              </label>
              <label className="block">
                <span className="font-medium text-slate-100">Primary Platform</span>
                <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="YouTube, Broadcast, Paid Social, etc." />
              </label>
              <label className="block">
                <span className="font-medium text-slate-100">Version / Cut</span>
                <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Final V3.2, Client Review, etc." />
              </label>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Timeline & Ownership</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <label className="block">
                <span className="font-medium text-slate-100">Approval Deadline</span>
                <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="MM/DD/YYYY" />
              </label>
              <label className="block">
                <span className="font-medium text-slate-100">Producer / Editor</span>
                <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Name + contact" />
              </label>
              <label className="block">
                <span className="font-medium text-slate-100">Distribution Owner</span>
                <input className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Name + contact" />
              </label>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Stakeholder Review Matrix</h2>
          <p className="mt-2 text-sm text-slate-300">
            Confirm who must sign off. Mark if their approval is required before publishing.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {["Client Lead", "Creative Director", "Legal/Compliance", "Brand Manager", "Product Marketing", "Executive Sponsor"].map(
              (stakeholder) => (
                <div key={stakeholder} className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                  <p className="text-sm font-semibold text-slate-100">{stakeholder}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                    <span>Approval Required</span>
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-600 bg-slate-900" />
                  </div>
                  <input
                    className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-100"
                    placeholder="Name + email"
                  />
                </div>
              )
            )}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">MVP Review Checklist</h2>
            <p className="mt-2 text-sm text-slate-300">
              Start with must-have checks. Add enhancements after the MVP is validated.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              {[
                "Audio mix balanced and clear across platforms.",
                "Visuals match brand guidelines and legal requirements.",
                "Call-to-action is accurate and placed intentionally.",
                "Captions, lower-thirds, and graphics are typo-free.",
                "Final runtime matches platform requirements.",
                "Music licensing and usage rights verified."
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-xl font-semibold text-white">Validated Learning Loop</h2>
            <p className="mt-2 text-sm text-slate-300">
              Use the Build → Measure → Learn loop to log feedback and reduce revision cycles.
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-200">
              <label className="block">
                <span className="font-medium text-slate-100">Build (what changed?)</span>
                <textarea className="mt-2 min-h-[96px] w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Describe edits since last review" />
              </label>
              <label className="block">
                <span className="font-medium text-slate-100">Measure (what feedback was received?)</span>
                <textarea className="mt-2 min-h-[96px] w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Summarize stakeholder feedback" />
              </label>
              <label className="block">
                <span className="font-medium text-slate-100">Learn (what will we adjust?)</span>
                <textarea className="mt-2 min-h-[96px] w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-slate-100" placeholder="Document decisions for next cut" />
              </label>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Timecode Feedback</h2>
          <p className="mt-2 text-sm text-slate-300">
            Add precise notes to reduce ambiguity and rework.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {["Timecode In", "Timecode Out", "Issue / Note", "Priority"].map((label) => (
              <input
                key={label}
                className="rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-100"
                placeholder={label}
              />
            ))}
          </div>
          <button className="mt-4 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">
            + Add another note
          </button>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Approval Decision</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {["Approved as Final", "Approved with Minor Revisions", "Changes Required"].map((label) => (
              <label key={label} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
                <input type="radio" name="approval" className="h-4 w-4 border-slate-600 bg-slate-900" />
                {label}
              </label>
            ))}
          </div>
          <textarea
            className="mt-4 min-h-[120px] w-full rounded-2xl border border-slate-700 bg-slate-950/60 p-4 text-sm text-slate-100"
            placeholder="If changes are required, list the exact edits needed to approve."
          />
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Expert Evaluation (Required)</h2>
          <p className="mt-2 text-sm text-slate-300">
            Use this rubric to evaluate the approval package. Ratings are out of 10.
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-200">
              <thead className="bg-slate-900/80 text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-4 py-3">Criteria</th>
                  <th className="px-4 py-3">Rating (0-10)</th>
                  <th className="px-4 py-3">Reasons</th>
                  <th className="px-4 py-3">Detailed Feedback</th>
                </tr>
              </thead>
              <tbody>
                {evaluationCriteria.map((criterion) => (
                  <tr key={criterion.name} className="border-t border-slate-800">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-100">{criterion.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{criterion.description}</p>
                    </td>
                    <td className="px-4 py-3">
                      <input className="w-20 rounded-lg border border-slate-700 bg-slate-950/60 p-2 text-center text-sm text-slate-100" placeholder="0-10" />
                    </td>
                    <td className="px-4 py-3">
                      <textarea className="min-h-[72px] w-full rounded-lg border border-slate-700 bg-slate-950/60 p-2 text-sm text-slate-100" placeholder="Why this score?" />
                    </td>
                    <td className="px-4 py-3">
                      <textarea className="min-h-[72px] w-full rounded-lg border border-slate-700 bg-slate-950/60 p-2 text-sm text-slate-100" placeholder="Actionable improvements" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Confirmation of rubric usage: <span className="font-semibold text-emerald-400">✅</span>
          </p>
          <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-200">
            <p className="font-semibold text-slate-100">Options</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              {postEvaluationOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Final Sign-Off</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-100" placeholder="Approver name + title" />
            <input className="rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-sm text-slate-100" placeholder="Signature / Date" />
          </div>
          <p className="mt-6 text-sm text-slate-200">
            🤖 Would You Like Me To Evaluate This Work ☝ and Provide Options to Improve It? Yes or
            No?
          </p>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Change Log 📝</h2>
          <p className="mt-2 text-sm text-slate-300">
            Document every revision to maintain clarity across iterations.
          </p>
          <textarea
            className="mt-4 min-h-[120px] w-full rounded-2xl border border-slate-700 bg-slate-950/60 p-4 text-sm text-slate-100"
            placeholder="List updates, who requested them, and resolution status."
          />
        </section>
      </div>
    </div>
  );
}
