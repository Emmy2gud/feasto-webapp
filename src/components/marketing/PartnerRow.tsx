import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

type PartnerRowProps = {
  roleLabel: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

/** One directory entry in the partner invitation block. */
export function PartnerRow({ roleLabel, title, description, ctaLabel, href }: PartnerRowProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      transition={{ type: "spring", stiffness: 340, damping: 28 }}
      className="group border-t border-hairline"
    >
      <Link
        to={href}
        className="grid gap-3 py-7 focus-visible:outline-none lg:grid-cols-[132px_1fr_auto] lg:items-center lg:gap-8"
      >
        <span className="text-[13px] font-semibold text-ink-muted">{roleLabel}</span>
        <span className="block">
          <span className="block font-display text-xl font-semibold text-ink sm:text-2xl">{title}</span>
          <span className="mt-1.5 block max-w-[54ch] text-sm leading-relaxed text-ink-muted">
            {description}
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {ctaLabel}
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </motion.div>
  );
}
