import { useState } from "react";

import { inputClass } from "../ui/Modal";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });

  const update =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <section id="contact" className="bg-[#1a1718] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <span className="section-label mb-4 block">Get in Touch</span>
          <h2
            className="font-display font-800 uppercase text-[#F5F3EF] leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Contact Our
            <br />
            Operations Team
          </h2>
          <span className="gold-rule mb-8" />
          <div className="flex flex-col gap-6 text-sm text-[#7C7C7C]">
            {[
              {
                label: "Head Office",
                text: "15 Aviation Boulevard, OR Tambo\nJohannesburg, 1627, South Africa",
              },
              {
                label: "Nairobi Hub",
                text: "Jomo Kenyatta International Airport\nNairobi, Kenya",
              },
              {
                label: "24/7 Operations",
                text: "+27 (0) 11 000 0000\nops@advantageairtravel.com",
              },
              {
                label: "Charter Sales",
                text: "+27 (0) 11 000 0001\ncharters@advantageairtravel.com",
              },
            ].map(({ label, text }) => (
              <div key={label}>
                <div className="font-mono-data text-[0.6rem] tracking-widest uppercase text-[#D9AD27] mb-1">
                  {label}
                </div>
                <p style={{ whiteSpace: "pre-line" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              className={inputClass}
              placeholder="Full Name"
              value={form.name}
              onChange={update("name")}
            />
            <input
              className={inputClass}
              placeholder="Company"
              value={form.company}
              onChange={update("company")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              className={inputClass}
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={update("email")}
            />
            <input
              className={inputClass}
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
            />
          </div>
          <select
            className={inputClass}
            value={form.type}
            onChange={update("type")}
            style={{ appearance: "none" }}
          >
            <option value="" disabled>
              Service Type
            </option>
            {[
              "Scheduled Passenger",
              "Executive Charter",
              "Air Cargo & Freight",
              "Medical Evacuation",
              "Government & Defence",
              "General Enquiry",
            ].map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <textarea
            className={inputClass}
            placeholder="Describe your flight requirement…"
            rows={5}
            value={form.message}
            onChange={update("message")}
          />
          <button type="submit" className="btn-primary text-sm self-start">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
