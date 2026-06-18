import React from "react";
import { LANGUAGES, useLanguage, useT } from "../i18n/LanguageContext";

// Compact EN/SV toggle. The active domain sets the default language; clicking
// here overrides it and persists the choice in localStorage.
function LanguageSwitcher({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const t = useT();

  return (
    <div
      className={`inline-flex items-center rounded-md border border-outline overflow-hidden ${className}`}
      role="group"
      aria-label={t("lang.label")}
    >
      {LANGUAGES.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors duration-200 cursor-pointer ${
              active
                ? "bg-white text-surface-page"
                : "bg-transparent text-ink-subtle hover:text-ink hover:bg-outline"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
