import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types/landing";

type FaqListProps = {
  items: FaqItem[];
  /** Index of the item open on first paint. */
  defaultOpen?: number | null;
  className?: string;
};

/** Open list of questions. No cards, no per-item background. */
export function FaqList({ items, defaultOpen = 0, className }: FaqListProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen === null ? undefined : `item-${defaultOpen}`}
      className={cn("border-t border-hairline", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`} className="border-b border-hairline">
          <AccordionTrigger className="group gap-6 py-5 text-left text-base font-semibold text-ink hover:no-underline sm:text-[17px] [&>svg]:hidden">
            <span className="text-pretty">{item.question}</span>
            <span
              aria-hidden="true"
              className="grid size-6 shrink-0 place-items-center rounded-full border border-hairline text-ink-muted transition-colors group-hover:border-primary/40 group-hover:text-primary"
            >
              <Plus className="size-3.5 transition-transform duration-300 group-data-[state=open]:rotate-45" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="max-w-[64ch] pb-5 text-[15px] leading-relaxed text-ink-muted">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
