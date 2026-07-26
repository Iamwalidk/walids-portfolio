import type { Metadata } from "next";

import { ContactPanel } from "@/components/contact-panel";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct email, resume, and profile links for backend, ML/AI, data, automation, QA automation, and technical business analyst opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        crumbs={[{ label: "~" }, { label: "contact" }]}
        title="Contact"
        description="Reach out directly for backend, ML/AI, data, automation, QA automation, or technical business analyst opportunities."
      />
      <ContactPanel />
    </div>
  );
}
