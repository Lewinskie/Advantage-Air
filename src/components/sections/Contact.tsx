import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";

import { inputClass } from "../ui/Modal";

const INITIAL_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  type: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error" | "config-error"
  >("idle");

  const submitEnquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      VITE_EMAILJS_SERVICE_ID,
      VITE_EMAILJS_TEMPLATE_ID,
      VITE_EMAILJS_PUBLIC_KEY,
    } = import.meta.env;

    if (
      !VITE_EMAILJS_SERVICE_ID ||
      !VITE_EMAILJS_TEMPLATE_ID ||
      !VITE_EMAILJS_PUBLIC_KEY
    ) {
      setStatus("config-error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          type: form.type,
          from_name: form.name,
          reply_to: form.email,
          company: form.company,
          phone: form.phone,
          service_type: form.type,
          message: form.message,
        },
        { publicKey: VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  };

  const update =
    (k: string) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((p) => ({ ...p, [k]: e.target.value }));
      setStatus("idle");
    };

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
                text: "Titan Hanger, 3rd floor, Wilson Airport\nNairobi, P.O BOX 3753-0056, Kenya",
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
        <form onSubmit={submitEnquiry} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              className={inputClass}
              placeholder="Full Name"
              name="name"
              autoComplete="name"
              maxLength={120}
              required
              value={form.name}
              onChange={update("name")}
            />
            <input
              className={inputClass}
              placeholder="Company"
              name="company"
              autoComplete="organization"
              maxLength={120}
              value={form.company}
              onChange={update("company")}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              className={inputClass}
              placeholder="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
              required
              value={form.email}
              onChange={update("email")}
            />
            <input
              className={inputClass}
              placeholder="Phone Number"
              type="tel"
              name="phone"
              autoComplete="tel"
              maxLength={40}
              value={form.phone}
              onChange={update("phone")}
            />
          </div>
          <input
            className={inputClass}
            placeholder="Subject"
            name="subject"
            maxLength={180}
            required
            value={form.subject}
            onChange={update("subject")}
          />
          <select
            className={inputClass}
            value={form.type}
            onChange={update("type")}
            name="service_type"
            required
            style={{
              appearance: "none",
              backgroundColor: "#231F20",
              color: form.type ? "#F5F3EF" : "#7C7C7C",
            }}
          >
            <option
              value=""
              disabled
              style={{ backgroundColor: "#231F20", color: "#7C7C7C" }}
            >
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
              <option
                key={o}
                style={{ backgroundColor: "#231F20", color: "#F5F3EF" }}
              >
                {o}
              </option>
            ))}
          </select>
          <textarea
            className={inputClass}
            placeholder="Describe your flight requirement…"
            rows={5}
            name="message"
            maxLength={5000}
            required
            value={form.message}
            onChange={update("message")}
          />
          {status !== "idle" && (
            <p
              role={
                status === "error" || status === "config-error"
                  ? "alert"
                  : "status"
              }
              aria-live="polite"
              className={`text-sm ${
                status === "error" || status === "config-error"
                  ? "text-[#e57b70]"
                  : "text-[#D9AD27]"
              }`}
            >
              {status === "sending" && "Sending your enquiry…"}
              {status === "success" && "Your enquiry has been sent. Thank you."}
              {status === "error" &&
                "We couldn't send your enquiry. Please try again or email support@advantageairtravel.com."}
              {status === "config-error" &&
                "The contact form isn't configured yet. Please email support@advantageairtravel.com."}
            </p>
          )}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary self-start text-sm disabled:cursor-wait disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
