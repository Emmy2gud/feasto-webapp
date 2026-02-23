import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MaterialIcon } from "@/components/ui/material-icon";

const faqs = [
  {
    question: "Where do you deliver?",
    answer:
      "We deliver to all hostels, lecture blocks, libraries, and common areas across the Main University Campus, North Annex, and West Medical Wing. If there's a road or a path, we'll find you.",
  },
  {
    question: "How do I pay?",
    answer: "You can pay using campus credits, mobile money, or card payments.",
  },
  {
    question: "Can I become a runner?",
    answer: "Yes! We're always looking for reliable student runners. Apply through our platform.",
  },
  {
    question: "What if my food is cold?",
    answer: "We have a quality guarantee. Contact our support team for a replacement or refund.",
  },
];

export function FAQSection() {
  return (
    <section className="px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[2.4px] text-primary">
            Common Inquiries
          </span>
          <h2 className="text-5xl font-extrabold tracking-[-0.025em] text-foreground">
            Got Questions?
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-[720px]">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={index === 0 ? "rounded-[48px] border border-slate-100 bg-slate-50 px-8" : ""}
              >
                <AccordionTrigger className="flex w-full items-center justify-between py-6 text-left text-xl font-bold text-foreground hover:no-underline">
                  {faq.question}
                  <MaterialIcon icon="expand_more" className="ml-4 text-2xl text-primary transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-12 text-base font-normal leading-[1.625] text-[hsl(var(--slate-600))]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
