"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { getCommandPaletteProjectItems, navItems, siteConfig } from "@/lib/site-config";

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectItems = useMemo(() => getCommandPaletteProjectItems(), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((current) => !current);
        return;
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const openExternal = (url: string) => {
    setOpen(false);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open command palette"
        onClick={() => setOpen(true)}
        className="hidden h-9 items-center gap-2 rounded-sm border border-[var(--border)] bg-white px-3 text-xs text-[var(--muted)] transition-colors duration-150 hover:bg-[var(--surface)] md:inline-flex"
      >
        <span>Search</span>
        <kbd className="rounded-sm border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px]">Ctrl+K</kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Jump to route, project, or action..." />
        <CommandList>
          <CommandEmpty>No command found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {navItems.map((item) => (
              <CommandItem key={item.href} onSelect={() => navigate(item.href)}>
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Projects">
            {projectItems.map((project) => (
              <CommandItem key={project.id} onSelect={() => navigate(project.href)}>
                <div className="flex w-full items-center justify-between gap-2">
                  <span>{project.label}</span>
                  <span className="font-mono text-[10px] text-[var(--muted)]">{project.hint}</span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => openExternal(siteConfig.resumePath)}>Download CV</CommandItem>
            <CommandItem onSelect={copyEmail}>{copied ? "Email copied" : "Copy email"}</CommandItem>
            <CommandItem onSelect={() => openExternal(siteConfig.linkedin)}>Open LinkedIn</CommandItem>
            <CommandItem onSelect={() => openExternal(siteConfig.github)}>Open GitHub</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
