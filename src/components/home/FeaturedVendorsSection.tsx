import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { MediaFrame } from "@/components/marketing/MediaFrame";
import { Reveal } from "@/components/marketing/Reveal";
import { QuietLink, Section, SectionHeading } from "@/components/marketing/Section";
import { featuredVendors } from "@/data/landingContent";
import type { FeaturedVendor } from "@/types/landing";

function Rating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <p className="flex items-center gap-1.5 text-[13px] text-ink-muted">
      <Star aria-hidden="true" className="size-3.5 fill-primary text-primary" />
      <span className="font-semibold text-ink">{rating.toFixed(1)}</span>
      <span>({reviews})</span>
    </p>
  );
}

function VendorEntry({ vendor, compact = false }: { vendor: FeaturedVendor; compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 26 }}
    >
      <Link
        to={vendor.href}
        className={
          compact
            ? "group grid grid-cols-[40%_1fr] items-center gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-4"
            : "group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-4"
        }
      >
        <MediaFrame
          ratio={compact ? "square" : "photo"}
          src={vendor.image}
          alt={vendor.imageAlt}
          imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className={compact ? "min-w-0" : "mt-3.5"}>
          <h3
            className={
              compact
                ? "truncate font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary"
                : "font-display text-2xl font-semibold text-ink transition-colors group-hover:text-primary"
            }
          >
            {vendor.name}
          </h3>
          <p className="mt-0.5 truncate text-[13px] text-ink-muted sm:text-sm">{vendor.cuisine}</p>
          <div className="mt-2 flex items-center gap-3">
            <Rating rating={vendor.rating} reviews={vendor.reviews} />
            <span aria-hidden="true" className="h-3 w-px bg-hairline" />
            <span className="text-[13px] font-semibold text-ink-muted">{vendor.priceBand}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedVendorsSection() {
  const [lead, ...rest] = featuredVendors;

  return (
    <Section>
      <SectionHeading
        title="Featured this week"
        description="Kitchens the city keeps reordering from, picked by what customers rate and reorder most."
        action={
          <Link to="/vendors" className="group inline-flex items-center">
            <QuietLink>Browse all vendors</QuietLink>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            />
          </Link>
        }
      />

      <Reveal className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
        <VendorEntry vendor={lead} />

        <div className="flex flex-col justify-center gap-7">
          {rest.map((vendor) => (
            <VendorEntry key={vendor.id} vendor={vendor} compact />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
