import { useState, useEffect } from "react";
import { IconMenu2, IconXFilled, IconSun, IconMoon } from "@tabler/icons-react";

/* ── Constants ───────────────────────────────────────────── */
const BRAND_NAME = "Onkar Chougule";
const NAV_LINKS = [
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Design", id: "design" },
  {label:"Contact",id:"contact"}
];

const GLASS_STYLE = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(24px) saturate(1.2)",
  WebkitBackdropFilter: "blur(24px) saturate(1.2)",
  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
};

/* ── NavLink Component ───────────────────────────────────── */
function NavLink({ children, isMobile = false, onClick }) {
  const layoutStyles = isMobile
    ? "w-full px-4 py-3 rounded-xl text-left "
    : "px-4 py-2 rounded-full whitespace-nowrap active:scale-95";

  return (
    <button
      onClick={onClick}
      className={`
        ${layoutStyles}
        text-sm font-medium transition-all duration-150
        text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white
      `}
    >
      {children}
    </button>
  );
}

/* ── Main Navbar ─────────────────────────────────────────── */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Close mobile menu when screen resizes to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar if needed, but smooth is good for now
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col items-center pt-6 px-4 font-monolisa">
      {/* ── Desktop & Tablet Nav (sm+) ───────────────────────── */}
      <nav
        className="hidden sm:flex items-center gap-1 px-4 py-2.5 rounded-full relative z-20"
        style={GLASS_STYLE}
      >
        <span className="px-4 py-2 text-sm font-semibold mr-2 text-black dark:text-white">
          {BRAND_NAME}
        </span>

        {/* Divider */}
        <div className="w-px h-5 mr-2 rounded-full bg-black/10" />

        {NAV_LINKS.map((link) => (
          <NavLink key={link.id} onClick={() => handleScroll(link.id)}>
            {link.label}
          </NavLink>
        ))}

        <div className="w-px h-5 mx-2 rounded-full bg-black/10 dark:bg-white/10" />
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-1.5 rounded-full text-black/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
        >
          {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </button>
      </nav>

      {/* ── Mobile Nav (< sm) ────────────────────────────── */}
      <div className="sm:hidden w-full max-w-sm relative z-20">
        {/* Mobile Pill Bar */}
        <nav
          className="flex items-center justify-between gap-4 px-6 py-2 rounded-full"
          style={GLASS_STYLE}
        >
          <span className="text-sm font-semibold text-black dark:text-white">
            {BRAND_NAME}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-150 active:scale-90 text-black dark:text-white bg-transparent"
            >
              {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className={`
                flex items-center justify-center w-9 h-9 rounded-full 
                transition-all duration-150 active:scale-90 text-black dark:text-white
                ${isMenuOpen ? "bg-black/10 dark:bg-white/10" : "bg-transparent"}
              `}
            >
              {isMenuOpen ? (
                <IconXFilled size={18} />
              ) : (
                <IconMenu2 size={18} stroke={2} />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className="mt-2 rounded-2xl overflow-hidden"
          style={{
            ...GLASS_STYLE,
            maxHeight: isMenuOpen ? "320px" : "0px",
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen
              ? "translateY(0) scale(1)"
              : "translateY(-12px) scale(0.96)",
            pointerEvents: isMenuOpen ? "auto" : "none",
            transition: isMenuOpen
              ? "max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)"
              : "max-height 0.25s ease, opacity 0.18s ease, transform 0.2s ease",
          }}
        >
          <div className="p-2 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.id} isMobile onClick={() => handleScroll(link.id)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
