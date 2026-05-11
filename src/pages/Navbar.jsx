import { useState, useEffect } from "react";
import { IconMenu2, IconXFilled } from "@tabler/icons-react";

/* ── Constants ───────────────────────────────────────────── */
const BRAND_NAME = "Onkar Chougule";
const NAV_LINKS = ["About", "Education", "Projects", "Contact"];

const GLASS_STYLE = {
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(20px) saturate(1)",
  WebkitBackdropFilter: "blur(20px) saturate(1.8)",
  boxShadow: " 1.95px 1.95px 2.6px rgba(0,0,0,0.16)",
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
        text-white/80 hover:bg-black/5 hover:text-white/80
      `}
    >
      {children}
    </button>
  );
}

/* ── Main Navbar ─────────────────────────────────────────── */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when screen resizes to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="flex flex-col items-center pt-10 px-4 font-monolisa">
      {/* ── Desktop & Tablet Nav (sm+) ───────────────────────── */}
      <nav
        className="hidden sm:flex items-center gap-1 px-4 py-2.5 rounded-full relative z-20"
        style={GLASS_STYLE}
      >
        <span className="px-4 py-2 text-sm font-semibold mr-2 text-white">
          {BRAND_NAME}
        </span>

        {/* Divider */}
        <div className="w-px h-5 mr-2 rounded-full bg-black/10" />

        {NAV_LINKS.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </nav>

      {/* ── Mobile Nav (< sm) ────────────────────────────── */}
      <div className="sm:hidden w-full max-w-sm relative z-20">
        {/* Mobile Pill Bar */}
        <nav
          className="flex items-center justify-between gap-4 px-6 py-2 rounded-full"
          style={GLASS_STYLE}
        >
          <span className="text-sm font-semibold text-white">
            {BRAND_NAME}
          </span>

          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className={`
              flex items-center justify-center w-9 h-9 rounded-full 
              transition-all duration-150 active:scale-90 text-white
              ${isMenuOpen ? "bg-black" : "bg-transparent"}
            `}
          >
            {isMenuOpen ? (
              <IconXFilled size={18} />
            ) : (
              <IconMenu2 size={18} stroke={2} />
            )}
          </button>
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
              <NavLink key={link} isMobile onClick={() => setIsMenuOpen(false)}>
                {link}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
