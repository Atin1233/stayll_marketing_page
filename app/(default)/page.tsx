export const metadata = {
  title: "STAYLL AI - Commercial Real Estate Lease Abstraction & Financial Data Platform",
  description: "Transforms commercial real estate leases into verified, auditable financial datasets. Extract rent schedules, escalation clauses, renewal options, and compliance obligations with <2% error rate guarantee. Built for asset managers, portfolio accountants, and CFOs managing 500–5,000 leases.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Differentiation from "@/components/differentiation";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Differentiation />
      <Pricing />
      <FAQ />
      <Cta />
    </>
  );
}
