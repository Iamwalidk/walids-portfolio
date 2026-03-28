import type { Metadata } from "next";

import { ContactPanel } from "@/components/contact-panel";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Contact",
  description: "Direct email, resume, and profile links for ML/AI/Data role opportunities and project collaboration.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Contact"
        description="Reach out directly for ML/AI/Data opportunities, project collaboration, or a portfolio walkthrough."
      />
      <ContactPanel />
    </div>
  );
}
