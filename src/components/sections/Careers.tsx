import { useState } from "react";

import { DEFAULT_JOBS, type Job } from "../../data/siteData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Modal, inputClass } from "../ui/Modal";

export function Careers({ adminMode }: { adminMode: boolean }) {
  const [jobs, setJobs] = useLocalStorage<Job[]>("aat_jobs", DEFAULT_JOBS);
  const [selected, setSelected] = useState<Job | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [filterDept, setFilterDept] = useState("All");
  const [applyForm, setApplyForm] = useState({
    name: "",
    email: "",
    phone: "",
    cv: "",
    letter: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [newJob, setNewJob] = useState<Omit<Job, "id">>({
    title: "",
    department: "Flight Operations",
    location: "",
    type: "Full-Time",
    closing: "",
    description: "",
    requirements: [],
  });
  const [reqInput, setReqInput] = useState("");

  const departments = [
    "All",
    ...Array.from(new Set(jobs.map((j) => j.department))),
  ];
  const visible =
    filterDept === "All"
      ? jobs
      : jobs.filter((j) => j.department === filterDept);

  const addJob = () => {
    if (!newJob.title || !newJob.location || !newJob.closing) return;
    setJobs((prev) => [...prev, { id: Date.now().toString(), ...newJob }]);
    setNewJob({
      title: "",
      department: "Flight Operations",
      location: "",
      type: "Full-Time",
      closing: "",
      description: "",
      requirements: [],
    });
    setReqInput("");
    setAddOpen(false);
  };

  const removeJob = (id: string) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const submitApplication = () => {
    setSubmitted(true);
    setTimeout(() => {
      setApplyOpen(false);
      setSubmitted(false);
      setApplyForm({ name: "", email: "", phone: "", cv: "", letter: "" });
    }, 2500);
  };

  const addReq = () => {
    if (!reqInput.trim()) return;
    setNewJob((p) => ({
      ...p,
      requirements: [...p.requirements, reqInput.trim()],
    }));
    setReqInput("");
  };

  const daysUntilClose = (closing: string) => {
    const diff = Math.ceil(
      (new Date(closing).getTime() - Date.now()) / 86400000,
    );
    return diff > 0 ? `${diff} days remaining` : "Closed";
  };

  return (
    <section id="careers" className="bg-[#231F20] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label mb-4 block">Join Our Team</span>
            <h2
              className="font-display font-800 uppercase text-[#F5F3EF] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Careers at
              <br />
              Advantage Air Travel
            </h2>
            <p className="text-[#7C7C7C] text-sm mt-4 max-w-md">
              We recruit aviation professionals who share our commitment to
              safety, precision, and service excellence.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap items-center">
            {adminMode && (
              <button
                onClick={() => setAddOpen(true)}
                className="btn-outline text-xs px-4 py-2"
              >
                + Post a Job
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setFilterDept(d)}
              className="font-mono-data text-[0.65rem] tracking-widest uppercase px-3 py-2 border transition-colors"
              style={{
                borderColor:
                  filterDept === d ? "#871B1A" : "rgba(217,173,39,0.15)",
                color: filterDept === d ? "#F5F3EF" : "#7C7C7C",
                background: filterDept === d ? "#871B1A" : "transparent",
              }}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-[2fr_3fr] gap-4">
          <div className="flex flex-col gap-2">
            {visible.length === 0 && (
              <div className="p-8 border border-[rgba(217,173,39,0.1)] text-[#7C7C7C] text-sm text-center">
                No positions in this department.
              </div>
            )}
            {visible.map((job) => {
              const closed = new Date(job.closing) < new Date();
              return (
                <div
                  key={job.id}
                  onClick={() => setSelected(job)}
                  className="group p-5 border cursor-pointer transition-all"
                  style={{
                    borderColor:
                      selected?.id === job.id
                        ? "#D9AD27"
                        : "rgba(217,173,39,0.15)",
                    background:
                      selected?.id === job.id
                        ? "rgba(217,173,39,0.05)"
                        : "transparent",
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-700 uppercase text-[#F5F3EF] text-lg leading-tight group-hover:text-[#D9AD27] transition-colors">
                      {job.title}
                    </h3>
                    {adminMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeJob(job.id);
                        }}
                        className="text-[#871B1A] hover:text-[#a82221] text-xl leading-none shrink-0 transition-colors"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#7C7C7C] mb-3">
                    {job.department}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="font-mono-data text-[0.55rem] tracking-wide uppercase px-2 py-1 bg-[rgba(135,27,26,0.2)] text-[#a82221]">
                      {job.type}
                    </span>
                    <span className="font-mono-data text-[0.55rem] tracking-wide uppercase px-2 py-1 border border-[rgba(217,173,39,0.15)] text-[#7C7C7C]">
                      {job.location}
                    </span>
                    <span
                      className={`font-mono-data text-[0.55rem] tracking-wide uppercase px-2 py-1 ${closed ? "text-[#7C7C7C]" : "text-[#D9AD27]"}`}
                    >
                      {daysUntilClose(job.closing)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-[rgba(217,173,39,0.15)] p-8 min-h-64">
            {!selected ? (
              <div className="h-full flex items-center justify-center text-[#7C7C7C] text-sm">
                Select a position to view details
              </div>
            ) : (
              <div>
                <span className="section-label mb-3 block">
                  {selected.department}
                </span>
                <h3 className="font-display font-800 uppercase text-[#F5F3EF] text-3xl mb-2">
                  {selected.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="font-mono-data text-[0.55rem] tracking-wide uppercase px-2 py-1 bg-[rgba(135,27,26,0.2)] text-[#a82221]">
                    {selected.type}
                  </span>
                  <span className="font-mono-data text-[0.55rem] tracking-wide uppercase px-2 py-1 border border-[rgba(217,173,39,0.15)] text-[#7C7C7C]">
                    {selected.location}
                  </span>
                  <span className="font-mono-data text-[0.55rem] tracking-wide uppercase px-2 py-1 text-[#7C7C7C]">
                    Closes:{" "}
                    {new Date(selected.closing).toLocaleDateString("en-ZA", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <span className="gold-rule mb-6" />
                <p className="text-[#a8a8a8] text-sm leading-relaxed mb-6">
                  {selected.description}
                </p>
                <div className="mb-8">
                  <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#D9AD27] mb-3">
                    Requirements
                  </div>
                  <ul className="flex flex-col gap-2">
                    {selected.requirements.map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-[#a8a8a8]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#871B1A] shrink-0 mt-2" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setApplyOpen(true)}
                  className="btn-primary text-sm"
                >
                  Apply Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal
        open={applyOpen}
        onClose={() => {
          setApplyOpen(false);
          setSubmitted(false);
        }}
        title={`Apply — ${selected?.title ?? ""}`}
      >
        {submitted ? (
          <div className="text-center py-8">
            <div className="font-display font-700 uppercase text-[#D9AD27] text-3xl mb-3">
              Application Received
            </div>
            <p className="text-[#7C7C7C] text-sm">
              Thank you, {applyForm.name}. Our HR team will review your
              application and be in touch within 5 business days.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="section-label mb-2 block">Full Name</label>
                <input
                  className={inputClass}
                  placeholder="Your full name"
                  value={applyForm.name}
                  onChange={(e) =>
                    setApplyForm((p) => ({ ...p, name: e.target.value }))
                  }
                />
              </div>
              <div>
                <label className="section-label mb-2 block">Email</label>
                <input
                  className={inputClass}
                  placeholder="you@example.com"
                  type="email"
                  value={applyForm.email}
                  onChange={(e) =>
                    setApplyForm((p) => ({ ...p, email: e.target.value }))
                  }
                />
              </div>
            </div>
            <div>
              <label className="section-label mb-2 block">Phone Number</label>
              <input
                className={inputClass}
                placeholder="+27 …"
                type="tel"
                value={applyForm.phone}
                onChange={(e) =>
                  setApplyForm((p) => ({ ...p, phone: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="section-label mb-2 block">
                CV / Résumé Link
              </label>
              <input
                className={inputClass}
                placeholder="Link to your CV (Google Drive, Dropbox, etc.)"
                value={applyForm.cv}
                onChange={(e) =>
                  setApplyForm((p) => ({ ...p, cv: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="section-label mb-2 block">Cover Letter</label>
              <textarea
                className={inputClass}
                rows={5}
                placeholder="Tell us why you'd be a great fit for this role…"
                value={applyForm.letter}
                onChange={(e) =>
                  setApplyForm((p) => ({ ...p, letter: e.target.value }))
                }
              />
            </div>
            <button
              onClick={submitApplication}
              className="btn-primary text-sm self-start"
            >
              Submit Application
            </button>
          </div>
        )}
      </Modal>

      <Modal
        open={addOpen}
        onClose={() => setAddOpen(false)}
        title="Post a New Job"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label className="section-label mb-2 block">Job Title</label>
            <input
              className={inputClass}
              placeholder="e.g. Captain – ATR 72"
              value={newJob.title}
              onChange={(e) =>
                setNewJob((p) => ({ ...p, title: e.target.value }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="section-label mb-2 block">Department</label>
              <select
                className={inputClass}
                value={newJob.department}
                onChange={(e) =>
                  setNewJob((p) => ({ ...p, department: e.target.value }))
                }
                style={{ appearance: "none" }}
              >
                {[
                  "Flight Operations",
                  "Ground Handling",
                  "Commercial",
                  "Maintenance & Engineering",
                  "Charter & Special Missions",
                  "HR & Administration",
                  "Finance",
                ].map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="section-label mb-2 block">
                Employment Type
              </label>
              <select
                className={inputClass}
                value={newJob.type}
                onChange={(e) =>
                  setNewJob((p) => ({ ...p, type: e.target.value }))
                }
                style={{ appearance: "none" }}
              >
                {["Full-Time", "Part-Time", "Contract", "Internship"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  ),
                )}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="section-label mb-2 block">Location</label>
              <input
                className={inputClass}
                placeholder="e.g. Johannesburg, South Africa"
                value={newJob.location}
                onChange={(e) =>
                  setNewJob((p) => ({ ...p, location: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="section-label mb-2 block">Closing Date</label>
              <input
                className={inputClass}
                type="date"
                value={newJob.closing}
                onChange={(e) =>
                  setNewJob((p) => ({ ...p, closing: e.target.value }))
                }
              />
            </div>
          </div>
          <div>
            <label className="section-label mb-2 block">Job Description</label>
            <textarea
              className={inputClass}
              rows={3}
              placeholder="Describe the role and responsibilities…"
              value={newJob.description}
              onChange={(e) =>
                setNewJob((p) => ({ ...p, description: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="section-label mb-2 block">Requirements</label>
            <div className="flex gap-2 mb-2">
              <input
                className={inputClass}
                placeholder="Add a requirement and press +"
                value={reqInput}
                onChange={(e) => setReqInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addReq();
                  }
                }}
              />
              <button
                onClick={addReq}
                className="btn-outline text-xs px-4 shrink-0"
              >
                +
              </button>
            </div>
            {newJob.requirements.length > 0 && (
              <ul className="flex flex-col gap-1 mt-2">
                {newJob.requirements.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between text-xs text-[#a8a8a8] border border-[rgba(217,173,39,0.1)] px-3 py-2"
                  >
                    {r}
                    <button
                      onClick={() =>
                        setNewJob((p) => ({
                          ...p,
                          requirements: p.requirements.filter(
                            (_, j) => j !== i,
                          ),
                        }))
                      }
                      className="text-[#871B1A] ml-3 hover:text-[#a82221]"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button onClick={addJob} className="btn-primary text-sm self-start">
            Publish Job Listing
          </button>
        </div>
      </Modal>
    </section>
  );
}
