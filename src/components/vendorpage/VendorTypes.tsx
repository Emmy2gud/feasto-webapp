import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { Button } from "@/components/ui/button";
import { MediaFrame } from "@/components/marketing/MediaFrame";
import { Section, SectionHeading } from "@/components/marketing/Section";
import { vendorTypes } from "@/data/landingContent";
import { cn } from "@/lib/utils";

export function VendorTypes() {
  const [activeId, setActiveId] = useState(vendorTypes[0].id);
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const active = vendorTypes.find((type) => type.id === activeId) ?? vendorTypes[0];

  function focusTab(index: number) {
    const next = (index + vendorTypes.length) % vendorTypes.length;
    setActiveId(vendorTypes[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <Section surface="surface">
      <SectionHeading
        title="Who can sell on Feasto"
        description="Three kinds of businesses list with us. Pick the one that matches yours to see what you would list."
      />

      <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[250px_1fr] lg:gap-12">
     
        <div
          role="tablist"
          aria-label="Vendor types"
          className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden"
        >
          {vendorTypes.map((type) => {
            const isActive = type.id === active.id;
            return (
              <button
                key={type.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`vendor-panel-${type.id}`}
                id={`vendor-tab-${type.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(type.id)}
                className={cn(
                  "h-10 shrink-0 rounded-lg border px-3.5 text-sm font-medium transition-colors",
                  isActive
                    ? "border-hairline bg-background text-ink shadow-soft"
                    : "border-transparent bg-background/60 text-ink-muted",
                )}
              >
                {type.name.split(" and ")[0]}
              </button>
            );
          })}
        </div>

        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Vendor types"
          className="hidden flex-col gap-1 lg:flex"
        >
          {vendorTypes.map((type, index) => {
            const isActive = type.id === active.id;
            return (
              <button
                key={type.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`vendor-panel-${type.id}`}
                id={`vendor-tab-${type.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(type.id)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    focusTab(index + 1);
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    focusTab(index - 1);
                  }
                }}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-lg px-3.5 py-3 text-left text-[15px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  isActive
                    ? "bg-background font-semibold text-ink shadow-soft"
                    : "text-ink-muted hover:bg-background/60 hover:text-ink",
                )}
              >
                {type.name}
                {isActive ? <Check aria-hidden="true" className="size-4 shrink-0 text-primary" /> : null}
              </button>
            );
          })}
        </div>

        <div className="min-w-0" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id={`vendor-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`vendor-tab-${active.id}`}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <MediaFrame
                ratio="wide"
                src={active.image}
                alt={active.imageAlt}
                width={1200}
                height={675}
                className="rounded-lg"
              />

              <div className="mt-5 grid gap-6 md:grid-cols-[1fr_auto] md:items-start md:gap-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {active.name}
                  </h3>
                  <p className="mt-2 max-w-[54ch] text-[15px] leading-relaxed text-ink-muted">
                    {active.summary}
                  </p>

                  <h4 className="mt-5 text-[13px] font-semibold text-ink">What you can list</h4>
                  <ul className="mt-2.5 flex flex-col gap-2">
                    {active.listables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-lg border-hairline bg-background font-semibold"
                >
                  <Link to="/vendor-form">Register your business</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
