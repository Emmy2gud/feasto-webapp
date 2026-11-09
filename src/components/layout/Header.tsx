import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/marketing/Logo";
import { primaryNav } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  return (
    <header
      className={
        scrolled
          ? "sticky top-0 z-50 w-full border-b border-hairline bg-background/90 shadow-soft backdrop-blur-md"
          : "sticky top-0 z-50 w-full border-b border-transparent bg-background"
      }
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link
          to="/"
          aria-label="Feasto home"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink",
                ].join(" ")
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary"
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            variant="ghost"
            className="h-10 rounded-lg px-3 font-semibold text-ink hover:bg-surface"
          >
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild className="h-10 rounded-lg px-4 font-semibold">
            <Link to="/vendors">Order food</Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="size-11 rounded-lg border-hairline md:hidden"
        >
          {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-hairline bg-background md:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex flex-col py-3">
              {primaryNav.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-14 items-center justify-between border-b border-hairline text-[15px] font-semibold text-ink"
                >
                  {link.label}
                  <ChevronRight aria-hidden="true" className="size-4 text-ink-muted" />
                </Link>
              ))}

              <div className="mt-4 mb-2 flex flex-col gap-2">
                <Button asChild className="h-12 rounded-lg font-semibold">
                  <Link to="/vendors" onClick={() => setIsMenuOpen(false)}>
                    Order food
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className={cn("h-12 rounded-lg border-hairline font-semibold")}
                >
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    Sign in
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
