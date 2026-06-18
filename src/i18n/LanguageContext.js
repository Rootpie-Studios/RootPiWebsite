import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "./translations";

export const LANGUAGES = ["en", "sv"];
const STORAGE_KEY = "rootpi_lang";

// Domains ending in .se default to Swedish, everything else (rootpi.xyz,
// localhost, previews) defaults to English.
function detectLangFromHost() {
  if (typeof window === "undefined") return "en";
  return window.location.hostname.endsWith(".se") ? "sv" : "en";
}

// A manual choice (stored in localStorage) always wins over the domain default.
function resolveInitialLang() {
  if (typeof window !== "undefined") {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && LANGUAGES.includes(stored)) return stored;
    } catch (e) {
      // localStorage may be unavailable (private mode); fall back to host.
    }
  }
  return detectLangFromHost();
}

const LanguageContext = createContext({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(resolveInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!LANGUAGES.includes(next)) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore persistence errors
    }
    setLangState(next);
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// Look up a dot-separated key (e.g. "home.hero.cta") in the active language,
// falling back to English and finally to the key itself.
function lookup(lang, key) {
  const fromLang = key.split(".").reduce((acc, part) => acc?.[part], translations[lang]);
  if (fromLang != null) return fromLang;
  const fromEn = key.split(".").reduce((acc, part) => acc?.[part], translations.en);
  return fromEn != null ? fromEn : key;
}

// Returns a translator bound to the current language.
export function useT() {
  const { lang } = useLanguage();
  return useCallback((key) => lookup(lang, key), [lang]);
}

// Resolve a value that may be a bilingual object ({ en, sv }) or a plain
// value (returned as-is, e.g. proper nouns and URLs).
export function pick(value, lang) {
  if (value && typeof value === "object" && ("en" in value || "sv" in value)) {
    return value[lang] ?? value.en ?? value.sv;
  }
  return value;
}
