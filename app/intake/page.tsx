"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FadeUp } from "@/components/ui/AnimatedText";
import { intakeSchema, type IntakeFormData } from "@/lib/schemas/intake";
import { StepOne } from "@/components/intake/StepOne";
import { StepTwo } from "@/components/intake/StepTwo";
import { StepThree } from "@/components/intake/StepThree";
import { CheckCircle, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

export default function IntakePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
    mode: "onBlur",
  });

  const {
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = methods;

  const contactMethod = watch("contactMethod");

  const nextStep = async () => {
    let fieldsToValidate: (keyof IntakeFormData)[] = [];

    if (step === 1) {
      fieldsToValidate = ["fullName", "email", "phone", "role"];
    } else if (step === 2) {
      fieldsToValidate = ["serviceNeeded", "projectDescription", "hasDomain", "budgetRange"];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: IntakeFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      alert("Something went wrong. Please try again or contact us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <CustomCursor />
        <Navbar />
        <main className="min-h-screen pt-32 pb-20 flex items-center justify-center">
          <div className="max-w-xl mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-lime/20 flex items-center justify-center"
            >
              <CheckCircle className="w-10 h-10 text-lime" />
            </motion.div>
            <h1 className="font-bebas text-5xl md:text-6xl tracking-wide mb-4">Thank You!</h1>
            <p className="text-lg text-white/70 mb-2">
              We&apos;ll contact you within 24 hours on {contactMethod || "your preferred method"}.
            </p>
            <p className="text-sm text-white/50 mb-8">
              Keep an eye on your inbox (and spam folder, just in case).
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Panel */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <FadeUp>
                <h1 className="font-bebas text-5xl md:text-6xl tracking-wide mb-4">
                  Let&apos;s Build<br />
                  <span className="text-lime">Together</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-white/70 mb-8">
                  Fill out this form and we&apos;ll get back to you within 24 hours with next steps.
                </p>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="space-y-4 mb-8">
                  <h3 className="font-bebas text-xl tracking-wide">What happens next:</h3>
                  <ul className="space-y-3 text-sm text-white/60">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-lime/10 text-lime flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      We review your project details
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-lime/10 text-lime flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      Schedule a discovery call (if needed)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded bg-lime/10 text-lime flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      Send you a tailored proposal
                    </li>
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="p-4 bg-card border border-[#ffffff15] rounded">
                  <p className="text-sm text-white/60 mb-2">Urgent inquiry?</p>
                  <a
                    href="https://wa.me/201284744633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lime font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Quick WhatsApp
                  </a>
                </div>
              </FadeUp>
            </div>

            {/* Right Panel - Form */}
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-[#ffffff15] rounded p-6 lg:p-8">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 rounded transition-colors ${
                        s <= step ? "bg-lime" : "bg-white/10"
                      }`}
                    />
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && <StepOne key="step1" />}
                  {step === 2 && <StepTwo key="step2" />}
                  {step === 3 && <StepThree key="step3" />}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors text-sm"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-black font-bold uppercase tracking-wide rounded hover:bg-lime/90 transition-colors text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
