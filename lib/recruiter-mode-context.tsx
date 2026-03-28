"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type RecruiterMode = "recruiter" | "detailed";

type RecruiterModeContextValue = {
  mode: RecruiterMode;
  isRecruiterSummary: boolean;
  toggleMode: () => void;
  setMode: (mode: RecruiterMode) => void;
};

const STORAGE_KEY = "walid-portfolio-recruiter-mode";
const STORAGE_EVENT = "walid-portfolio-recruiter-mode-change";
const DEFAULT_MODE: RecruiterMode = "recruiter";
let memoryMode: RecruiterMode = DEFAULT_MODE;

const RecruiterModeContext = createContext<RecruiterModeContextValue | null>(null);

function isRecruiterMode(value: string | null): value is RecruiterMode {
  return value === "recruiter" || value === "detailed";
}

function readModeSnapshot(): RecruiterMode {
  if (typeof window === "undefined") {
    return memoryMode;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isRecruiterMode(stored)) {
      memoryMode = stored;
    }
  } catch {
    return memoryMode;
  }

  return memoryMode;
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };
  const handleModeChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(STORAGE_EVENT, handleModeChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(STORAGE_EVENT, handleModeChange);
  };
}

function writeModeSnapshot(nextMode: RecruiterMode) {
  memoryMode = nextMode;

  if (typeof window === "undefined") {
    return;
  }

  try {
    if (window.localStorage.getItem(STORAGE_KEY) !== nextMode) {
      window.localStorage.setItem(STORAGE_KEY, nextMode);
    }
  } catch {
    // Ignore storage write failures and keep the in-memory mode.
  }

  window.dispatchEvent(new Event(STORAGE_EVENT));
}

export function RecruiterModeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribe, readModeSnapshot, () => DEFAULT_MODE);

  const setMode = (nextMode: RecruiterMode) => {
    writeModeSnapshot(nextMode);
  };

  const toggleMode = () => {
    writeModeSnapshot(mode === "recruiter" ? "detailed" : "recruiter");
  };

  const value = {
    mode,
    isRecruiterSummary: mode === "recruiter",
    toggleMode,
    setMode,
  };

  return <RecruiterModeContext.Provider value={value}>{children}</RecruiterModeContext.Provider>;
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext);
  if (!context) {
    throw new Error("useRecruiterMode must be used within RecruiterModeProvider");
  }
  return context;
}
