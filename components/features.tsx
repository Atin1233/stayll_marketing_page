import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section id="problem-solution" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
        >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Complete Feature Set for Lease Abstraction & Portfolio Analytics
            </h2>
            <p className="text-lg text-blue-200/65">
              From batch document upload to portfolio analytics, STAYLL AI provides everything you need to transform lease documents into verified, auditable financial datasets.
            </p>
          </div>

          <div className="flex justify-center pb-8 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Stayll Demo"
            />
          </div>

          {/* Feature Categories */}
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">1. Document Management</h4>
                <p className="text-sm text-blue-200/65">Batch upload up to 500 PDFs per job, drag-and-drop interface, real-time progress tracking, secure storage with organization-level isolation</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">2. AI Data Extraction</h4>
                <p className="text-sm text-blue-200/65">Extracts 22 financial and legal fields with per-field confidence scoring, clause location tracking, multi-model AI stack (Sonnet 4.5, Gemini 3 Pro, GPT-5.1)</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">3. Financial Reconciliation</h4>
                <p className="text-sm text-blue-200/65">Rent roll generation, escalation projection engine, 5-year cashflow projections, 9 validation rules with discrepancy detection</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">4. Audit Trail & Evidence</h4>
                <p className="text-sm text-blue-200/65">Clause-level traceability with PDF page links, immutable edit log, confidence scoring with human-readable reason codes</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">5. QA Workflow</h4>
                <p className="text-sm text-blue-200/65">Side-by-side review interface, approve/reject/edit workflow, task timer & productivity tracking, keyboard shortcuts</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">6. Portfolio Analytics</h4>
                <p className="text-sm text-blue-200/65">Portfolio metrics dashboard, renewal alerts (90-day window), escalation alerts, rent roll analytics, compliance calendar</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">7. Compliance & Reporting</h4>
                <p className="text-sm text-blue-200/65">iCal export for renewals, CSV rent roll export, PDF audit package, portfolio exposure reports, escalation projection reports</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">8. Data Enrichment</h4>
                <p className="text-sm text-blue-200/65">Geocoding (Google Maps), currency conversion, FRED economic data (CPI), portfolio optimizer analytics</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">9. Subscription & Billing</h4>
                <p className="text-sm text-blue-200/65">Four tiers: Essential ($25K/year), Professional ($60K/year), Enterprise ($120K/year), Enterprise Plus (Custom). Stripe integration with usage limits</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">10. User Interface</h4>
                <p className="text-sm text-blue-200/65">Enterprise dashboard layout, sidebar navigation, responsive design. Pages: Dashboard, Contracts, Leases, Analytics, Compliance, Insights, Reports, Verification, Settings</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">11. Authentication & Security</h4>
                <p className="text-sm text-blue-200/65">Supabase authentication, organization-based multi-tenancy, Row Level Security (RLS) policies, cross-org access blocked</p>
              </article>
              <article className="border-l-4 border-blue-500/50 pl-6">
                <h4 className="mb-2 font-semibold text-gray-200">12. API Endpoints</h4>
                <p className="text-sm text-blue-200/65">V5 API routes for leases, analytics, compliance, QA. Stripe integration endpoints. Enrichment service APIs (geocode, exchange rates, FRED, portfolio optimizer)</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
