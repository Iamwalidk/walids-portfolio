"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export function CopyToClipboardButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={onCopy}
      className="h-9 rounded-sm border-[var(--border)] bg-white text-xs"
    >
      {copied ? "Copied" : label}
    </Button>
  );
}
