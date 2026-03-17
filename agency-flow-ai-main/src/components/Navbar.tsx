import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[hsl(var(--nav-bg))] ${
          scrolled ? "shadow-2xl shadow-black/20" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="text-lg font-display font-bold tracking-tight text-[hsl(var(--nav-foreground))]">
            AIFlow<span className="text-primary">System</span>.
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-[hsl(var(--nav-foreground))]/60 hover:text-[hsl(var(--nav-foreground))] transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:team@aiflowsystem.co?subject=Book%20a%20Call"
              className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-full hover:brightness-110 transition-all"
            >
              Book a Call →
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[hsl(var(--nav-foreground))]"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-[hsl(var(--nav-bg))] border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[hsl(var(--nav-foreground))]/80 hover:text-[hsl(var(--nav-foreground))] text-lg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:team@aiflowsystem.co?subject=Book%20a%20Call"
              onClick={() => setMobileOpen(false)}
              className="text-center font-semibold bg-primary text-primary-foreground px-5 py-3 rounded-full"
            >
              Book a Call →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
