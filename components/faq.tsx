"use client";

import { useState } from "react";

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What lease types does STAYLL AI support?",
      answer: "Commercial real estate leases only: office, retail, industrial, multifamily. We extract 22 financial and legal fields including rent schedules, escalation clauses, renewal options, and compliance obligations."
    },
    {
      question: "What is the accuracy guarantee?",
      answer: "&lt;2% error rate guarantee. Multi-model AI stack (Sonnet 4.5, Gemini 3 Pro, GPT-5.1) extracts 22 fields with per-field confidence scoring. Every field is clause-linked to source PDF pages. Financial reconciliation engine validates all rent schedules."
    },
    {
      question: "Who is STAYLL AI designed for?",
      answer: "Asset managers, portfolio accountants, and CFOs managing 500–5,000 leases. Built for organizations that need audit-grade financial data from lease documents with clause-level evidence for external audits."
    },
    {
      question: "What features are included?",
      answer: "Complete platform includes: batch document upload (500 PDFs/job), AI-powered extraction (22 fields), financial reconciliation engine, audit trail & evidence system, QA workflow, portfolio analytics, compliance calendar, data enrichment services, and API endpoints."
    },
    {
      question: "What are the subscription tiers?",
      answer: "Essential: 0–500 leases ($25K/year), Professional: 500–1,500 leases ($60K/year), Enterprise: 1,500–3,000 leases ($120K/year), Enterprise Plus: 3,000+ leases (Custom pricing). All include Stripe integration and usage limits."
    },
    {
      question: "Yardi/MRI integration?",
      answer: "Native API integration available for Enterprise Plus plans. CSV export works with all systems today. API endpoints available for direct integration with property management systems."
    },
    {
      question: "What is the implementation status?",
      answer: "85% complete. Core features functional: Phases 1-4 (Extraction, Reconciliation, Audit Trail, Batch Upload & QA) are complete. Remaining: User roles & permissions, External integrations (Yardi/MRI), Advanced analytics charts."
    },
    {
      question: "What export formats are available?",
      answer: "CSV rent roll (monthly/quarterly), PDF audit package (highlighted leases + edit log), iCal compliance calendar, Portfolio exposure reports, Escalation projection reports. API access for Enterprise plans."
    },
    {
      question: "How does the QA workflow work?",
      answer: "QA contractor interface with side-by-side review (PDF + field panel), approve/reject/edit workflow, task timer & productivity tracking, auto-advance to next task, keyboard shortcuts. Fetches fields needing review filtered by confidence/validation state."
    },
    {
      question: "What makes STAYLL AI different?",
      answer: "Five key differentiators: 1) &lt;2% error rate guarantee, 2) Financial reconciliation with deterministic validation, 3) Clause-level audit trail for auditors, 4) Multi-model AI stack for accuracy, 5) Enterprise-grade built for CFO sign-off and external audits."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                FAQ
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ items */}
          <div className="mx-auto grid max-w-sm gap-8 sm:max-w-none sm:grid-cols-2 lg:gap-x-14 md:gap-y-16">
            {faqs.map((faq, index) => (
              <article key={index} className="border-l-4 border-blue-500/50 pl-6">
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  {faq.question}
                </h3>
                <p className="text-blue-200/65">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>

          {/* CTA section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cta"
                className="btn bg-blue-600 hover:bg-blue-500 text-white"
              >
                Request a Pilot
              </a>
              <a
                href="mailto:hello@stayll.com"
                className="btn bg-gray-800 hover:bg-gray-700 text-gray-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
