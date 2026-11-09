import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { MediaFrame } from "@/components/marketing/MediaFrame";
import { RevealGroup, RevealItem } from "@/components/marketing/Reveal";
import { QuietLink, Section, SectionHeading } from "@/components/marketing/Section";
import { homeCategories } from "@/data/landingContent";

export function CategoriesSection() {
  return (
    <Section id="categories" surface="surface">
      <SectionHeading
        title="What are you looking for?"
        description="Four kinds of vendors deliver with Feasto. Every one of them shows its menu, prices and stock before you order."
        action={
          <Link to="/vendors" className="group inline-flex items-center">
            <QuietLink>All vendors</QuietLink>
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 text-ink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
            />
          </Link>
        }
      />

      <RevealGroup className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:gap-5">
        {homeCategories.map((category) => (
          <RevealItem key={category.id}>
            <Link
              to={category.href}
              className="group block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-4"
            >
              <MediaFrame
                ratio="photo"
                src={category.image}
                alt={category.imageAlt}
                imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[15px] font-semibold text-ink transition-colors group-hover:text-primary sm:text-base">
                    {category.label}
                  </h3>
                  <p className="mt-0.5 text-[13px] leading-snug text-ink-muted">{category.blurb}</p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary"
                />
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
