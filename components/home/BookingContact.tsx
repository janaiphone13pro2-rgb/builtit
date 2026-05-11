"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { cn } from "@/lib/utils";

const timeSlots = ["10:00 AM", "12:30 PM", "3:00 PM", "5:30 PM", "7:00 PM"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const projectTypes: ContactFormData["projectType"][] = [
  "E-Commerce",
  "Web Application",
  "Mobile App",
  "ERP / CRM",
  "Landing Page",
  "UI/UX Design",
];

const budgets: ContactFormData["budget"][] = [
  "Under $2,000",
  "$2,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
];

type BookingFormState = Omit<ContactFormData, "selectedDate" | "selectedTime">;

const initialForm: BookingFormState = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "ERP / CRM" as ContactFormData["projectType"],
  budget: "$2,000 - $5,000" as ContactFormData["budget"],
  message: "",
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function displayDate(dateKey: string) {
  return new Date(`${dateKey}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

export function BookingContact() {
  const [today, setToday] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const now = startOfDay(new Date());
    setToday(now);
    setCurrentMonth(new Date(now.getFullYear(), now.getMonth(), 1));
  }, []);

  const calendarDays = useMemo(() => {
    if (!currentMonth) {
      return [];
    }

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const leadingSlots = firstDay.getDay();
    const days: Array<Date | null> = Array.from({ length: leadingSlots }, () => null);

    for (let day = 1; day <= daysInMonth; day += 1) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [currentMonth]);

  const canGoPrevious = useMemo(() => {
    if (!today || !currentMonth) {
      return false;
    }

    return (
      currentMonth.getFullYear() > today.getFullYear() ||
      currentMonth.getMonth() > today.getMonth()
    );
  }, [currentMonth, today]);

  const handleChange = <Field extends keyof BookingFormState>(
    field: Field,
    value: BookingFormState[Field]
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setError("");

    const payload = {
      ...form,
      selectedDate,
      selectedTime,
    };

    const result = contactSchema.safeParse(payload);

    if (!result.success) {
      const firstError = Object.values(result.error.flatten().fieldErrors).flat()[0];
      setError(firstError || "Please check the form and try again.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please message us on WhatsApp or try again.");
    }
  };

  return (
    <section id="booking" className="bg-[#080a12] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-lime">
            Booking / Contact
          </p>
          <h2 className="text-balance text-4xl font-black tracking-normal text-white md:text-6xl">
            Let&apos;s Start Your Project.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Pick a date and time, then send the details. We will reply with a clear
            next step and a one-time-payment project path.
          </p>
          <a
            href="https://wa.me/201284744633"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-lime/35 bg-lime/10 px-5 py-3 text-sm font-black uppercase tracking-wide text-lime transition hover:bg-lime/15"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <div className="grid gap-5">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-lime" />
                <h3 className="text-xl font-black text-white">Choose a date</h3>
              </div>
              {currentMonth && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentMonth(
                        new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
                      )
                    }
                    disabled={!canGoPrevious}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/60 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Previous month"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <span className="min-w-32 text-center font-mono text-sm text-white/65">
                    {currentMonth.toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentMonth(
                        new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/60 transition hover:text-white"
                    aria-label="Next month"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            {!today || !currentMonth ? (
              <div className="h-72 animate-pulse rounded-md bg-white/[0.04]" />
            ) : (
              <>
                <div className="mb-2 grid grid-cols-7 gap-2">
                  {weekDays.map((day) => (
                    <div
                      key={day}
                      className="py-2 text-center font-mono text-[11px] uppercase tracking-wider text-white/35"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((date, index) => {
                    if (!date) {
                      return <div key={`blank-${index}`} className="aspect-square" />;
                    }

                    const dateKey = formatDateKey(date);
                    const disabled = startOfDay(date).getTime() < today.getTime();
                    const selected = selectedDate === dateKey;

                    return (
                      <button
                        key={dateKey}
                        type="button"
                        disabled={disabled}
                        aria-label={`Select ${displayDate(dateKey)}`}
                        aria-pressed={selected}
                        onClick={() => {
                          setSelectedDate(dateKey);
                          setSelectedTime("");
                        }}
                        className={cn(
                          "aspect-square rounded-md border text-sm font-semibold transition",
                          selected
                            ? "border-lime bg-lime text-slate-950"
                            : "border-white/10 bg-slate-950/45 text-white/70 hover:border-lime/60 hover:text-white",
                          disabled && "cursor-not-allowed opacity-25 hover:border-white/10"
                        )}
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          <AnimatePresence>
            {selectedDate && (
              <motion.div
                className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
              >
                <h3 className="mb-4 text-xl font-black text-white">
                  Available times for {displayDate(selectedDate)}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      aria-pressed={selectedTime === time}
                      className={cn(
                        "min-h-11 rounded-md border px-3 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition",
                        selectedTime === time
                          ? "border-lime bg-lime text-slate-950"
                          : "border-white/10 bg-slate-950/45 text-white/65 hover:border-lime/50 hover:text-white"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {selectedDate && selectedTime && (
              <motion.form
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
              >
                <div className="mb-5 flex items-center gap-3 text-lime">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-mono text-sm uppercase tracking-wider">
                    {displayDate(selectedDate)} at {selectedTime}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    value={form.fullName}
                    onChange={(event) => handleChange("fullName", event.target.value)}
                    placeholder="Full name"
                    aria-label="Full name"
                    className="min-h-12 rounded-md border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    placeholder="Email address"
                    aria-label="Email address"
                    className="min-h-12 rounded-md border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
                  />
                  <input
                    value={form.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    placeholder="Phone / WhatsApp"
                    aria-label="Phone or WhatsApp"
                    className="min-h-12 rounded-md border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
                  />
                  <input
                    value={form.company}
                    onChange={(event) => handleChange("company", event.target.value)}
                    placeholder="Company"
                    aria-label="Company"
                    className="min-h-12 rounded-md border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
                  />
                  <select
                    value={form.projectType}
                    onChange={(event) =>
                      handleChange(
                        "projectType",
                        event.target.value as ContactFormData["projectType"]
                      )
                    }
                    aria-label="Project type"
                    className="min-h-12 rounded-md border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition focus:border-lime"
                  >
                    {projectTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                  <select
                    value={form.budget}
                    onChange={(event) =>
                      handleChange("budget", event.target.value as ContactFormData["budget"])
                    }
                    aria-label="Budget"
                    className="min-h-12 rounded-md border border-white/10 bg-slate-950/70 px-4 text-white outline-none transition focus:border-lime"
                  >
                    {budgets.map((budget) => (
                      <option key={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  value={form.message}
                  onChange={(event) => handleChange("message", event.target.value)}
                  placeholder="Tell us what you want to build"
                  aria-label="Project message"
                  rows={5}
                  className="mt-4 w-full rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-lime"
                />

                {status === "error" && (
                  <p className="mt-4 text-sm text-red-200" aria-live="polite">
                    {error}
                  </p>
                )}

                {status === "success" && (
                  <p className="mt-4 text-sm text-lime" aria-live="polite">
                    Your request was sent. We will contact you shortly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime px-6 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-lime/90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      Send Project Request
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
