import React from "react";
import { useEffect, useState } from "react";
import logoMark from "../images/LogoMark.png";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const NAV_LINKS = [
  { path: "/", label: "Home", key: "home" },
  { path: "/portfolio", label: "Projects", key: "portfolio" },
  { path: "/students", label: "Students", key: "students" },
  { path: "/team", label: "Team", key: "team" },
];

function Header(props) {
  const location = useLocation();
  const [selected, setSelected] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname.substring(1);
    setSelected(path || "home");
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (key) =>
    key === "home" ? selected === "home" || selected === "" : selected === key;

  const linkBase =
    "py-2 px-4 no-underline font-semibold text-sm transition-colors duration-200 cursor-pointer rounded-md";
  const linkClasses = `${linkBase} text-ink-subtle hover:text-ink hover:bg-outline`;
  const selectedClasses = `${linkBase} text-ink border-b-2 border-ink rounded-none`;

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-page/90 backdrop-blur-md border-b border-outline"
          : "bg-transparent border-b border-outline/50"
      }`}
    >
      <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4 md:px-8 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            className="flex items-center gap-3 group"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <img
              src={logoMark}
              alt="RootPi"
              className="h-12 w-auto transition-opacity duration-200 group-hover:opacity-70"
            />
            <div className="transition-opacity duration-200 group-hover:opacity-70">
              {props.subtitle}
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map(({ path, label, key }) => (
            <Link
              key={key}
              className={isActive(key) ? selectedClasses : linkClasses}
              onClick={() => setSelected(key)}
              to={path}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 rounded-lg hover:bg-outline transition-colors duration-200 cursor-pointer mr-1"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
          >
            <RxHamburgerMenu size={22} color="#a1a1aa" />
          </button>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: { backgroundColor: "#18181b", borderLeft: "1px solid #27272a" },
            }}
          >
            <Box sx={{ width: 220 }} role="presentation">
              <div className="flex justify-between items-center px-4 py-3 border-b border-outline">
                <span className="font-bold text-ink text-sm">Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-outline transition-colors duration-200 cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <RxCross2 size={20} color="#a1a1aa" />
                </button>
              </div>
              <List>
                {NAV_LINKS.map(({ path, label, key }) => (
                  <ListItem key={key} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setSelected(key);
                        setDrawerOpen(false);
                      }}
                      sx={{
                        backgroundColor: isActive(key)
                          ? "rgba(96,165,250,0.08)"
                          : "transparent",
                        "&:hover": { backgroundColor: "#27272a" },
                      }}
                    >
                      <Link
                        className={`py-1 px-2 no-underline text-sm font-semibold ${
                          isActive(key) ? "text-accent" : "text-ink-muted"
                        }`}
                        to={path}
                        style={{ width: "100%" }}
                      >
                        {label}
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export default Header;
