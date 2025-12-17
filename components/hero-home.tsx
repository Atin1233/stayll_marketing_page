export default function HeroHome() {
  return (
    <section id="hero">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Transform Leases Into Verified Financial Data
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-4 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Commercial Real Estate Lease Abstraction & Financial Data Platform
              </p>
              <p className="mb-4 text-lg text-blue-200/80" data-aos="fade-up" data-aos-delay={300}>
                Extract rent schedules, escalation clauses, renewal options, and compliance obligations from lease documents with audit-grade accuracy. Built for asset managers, portfolio accountants, and CFOs managing 500–5,000 leases. &lt;2% error rate guarantee.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
                    href="#cta"
                  >
                    <span className="relative inline-flex items-center">
                      Request a Pilot →
                    </span>
                  </a>
                </div>
              </div>
              <p className="mt-4 text-sm text-blue-200/60" data-aos="fade-up" data-aos-delay={500}>
                Eliminate financial leakage and automate portfolio analytics with clause-level evidence for auditors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
