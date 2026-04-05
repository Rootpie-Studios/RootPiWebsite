import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-8 border-t border-outline bg-surface-page">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-ink text-base tracking-tight">
              RootPi AB
            </span>
            <p className="text-xs text-ink-subtle mt-0.5">Lund, Sweden</p>
          </div>

          {/* Quick links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {[
              { to: "/", label: "Home" },
              { to: "/portfolio", label: "Projects" },
              { to: "/students", label: "Students" },
              { to: "/team", label: "Team" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-ink-subtle no-underline hover:text-ink transition-colors duration-200 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-sm text-ink-subtle font-normal">
            &copy; {currentYear} RootPi AB
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
