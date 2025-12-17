import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Differentiation() {
  return (
    <section id="differentiation" className="relative">
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text text-transparent">
                Why Stayll
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Key Differentiators: Built for CFO Sign-Off and External Audits
            </h2>
          </div>

          {/* Comparison table */}
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-700/50 bg-gray-900/50">
                      <th className="px-6 py-4 text-left font-nacelle text-sm font-semibold text-gray-200">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-center font-nacelle text-sm font-semibold text-blue-300">
                        <div className="flex flex-col items-center">
                          <span>Stayll</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-nacelle text-sm font-semibold text-gray-400">
                        Offshore Abstractors
                      </th>
                      <th className="px-6 py-4 text-center font-nacelle text-sm font-semibold text-gray-400">
                        Generic AI Tools
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700/30">
                      <td className="px-6 py-4 text-sm text-gray-300">Accuracy SLA</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                          &lt;2% error rate guarantee
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">No guarantee</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">No guarantee</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="px-6 py-4 text-sm text-gray-300">Financial Reconciliation</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                          Deterministic validation of rent schedules
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">None</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">None</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="px-6 py-4 text-sm text-gray-300">Audit Trail</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                          Clause-level evidence for auditors
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">None</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">Limited</td>
                    </tr>
                    <tr className="border-b border-gray-700/30">
                      <td className="px-6 py-4 text-sm text-gray-300">Multi-Model AI</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                          Sonnet 4.5, Gemini 3 Pro, GPT-5.1
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">Single model</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">Single model</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-300">Enterprise-Grade</td>
                      <td className="px-6 py-4 text-center">
                        <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
                          Built for CFO sign-off and external audits
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">Manual processes</td>
                      <td className="px-6 py-4 text-center text-sm text-gray-500">Not audit-ready</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-lg text-blue-200/80">
              <strong className="text-white">STAYLL AI</strong> transforms lease document management from manual, error-prone processes into an automated, auditable financial data system for commercial real estate portfolios.
            </p>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              This platform eliminates financial leakage and automates portfolio analytics with clause-level evidence for auditors. Built for asset managers, portfolio accountants, and CFOs managing 500–5,000 leases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
