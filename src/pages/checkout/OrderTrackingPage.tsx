import { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Bike,
  Check,
  MessageSquare,
  Package,
  PackageCheck,
  PhoneCall,
  Star,
  Utensils,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-store";
import { vendors } from "@/data/vendorData";
import { formatNaira } from "@/utils/vendorUtils";
import riderPhoto from "@/assets/riders/dispatch2.jpg";
import riderIllustration from "@/assets/illustrations/rider-en-route.svg";
import { cn } from "@/lib/utils";

const rider = { name: "Kelechi Okoro", rating: 4.9, deliveries: 812, phone: "+2348030000000" };

/** Captured once per session so the timeline stays stable across re-renders. */
const ORDER_STARTED_AT = Date.now();

export default function OrderTrackingPage() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const { lines, count, subtotal, clear } = useCart();

  const vendor = vendors.find((entry) => entry.id === lines[0]?.vendorId);
  const deliveryFee = vendor?.deliveryFee ?? 0;
  const total = subtotal + (count > 0 ? deliveryFee : 0);

  const timeline = useMemo(() => {
    const formatter = new Intl.DateTimeFormat("en-NG", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const at = (minutesFromNow: number) =>
      formatter.format(new Date(ORDER_STARTED_AT + minutesFromNow * 60000));

    return [
      { title: "Order placed", time: at(-18), state: "done" as const, icon: Package },
      { title: "Kitchen cooking", time: at(-12), state: "done" as const, icon: Utensils },
      { title: "Rider on the way", time: at(-4), state: "current" as const, icon: Bike },
      { title: "Arriving", time: `Est. ${at(9)}`, state: "next" as const, icon: PackageCheck },
    ];
  }, []);

  if (count === 0) {
    return (
      <div className="mx-auto flex w-full max-w-[520px] flex-col items-center px-4 py-14 text-center">
        <img
          src={riderIllustration}
          alt=""
          aria-hidden="true"
          width={360}
          height={260}
          className="h-40 w-auto"
        />
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">No order to track yet</h1>
        <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-ink-muted">
          Once you place an order, the rider's progress and arrival time appear here.
        </p>
        <Button asChild className="mt-5 h-11 rounded-md px-5 text-[14px] font-semibold">
          <Link to="/vendors">Browse vendors</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pt-4 pb-12 sm:px-8 lg:pt-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[12px] text-ink-muted">Order FT-4821</p>
          <h1 className="mt-0.5 font-display text-2xl font-bold text-ink sm:text-3xl">
            {timeline[2].title}
          </h1>
          <p className="mt-1 text-[13px] text-ink-muted">
            {vendor ? `From ${vendor.name}, ${vendor.neighborhood}` : "From your vendor"}
          </p>
        </div>

        <div className="rounded-lg bg-surface px-3 py-2 text-right">
          <p className="text-[11px] text-ink-muted">Arriving</p>
          <p className="text-[15px] font-semibold text-ink">{timeline[3].time.replace("Est. ", "")}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_340px] lg:items-start lg:gap-8">
        <div className="flex flex-col gap-4">
          {/* Progress */}
          <section
            aria-labelledby="progress-heading"
            className="rounded-xl border border-hairline bg-background p-4 sm:p-5"
          >
            <h2 id="progress-heading" className="text-[15px] font-semibold text-ink">
              Delivery progress
            </h2>

            <div className="mt-4">
              <div className="relative h-1.5 rounded-full bg-surface-strong">
                <motion.div
                  initial={reduceMotion ? { width: "66%" } : { width: "0%" }}
                  animate={{ width: "66%" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>

              <ol className="mt-3 grid grid-cols-4 gap-1.5">
                {timeline.map((step) => (
                  <li key={step.title} className="flex flex-col gap-1.5">
                    <span
                      className={cn(
                        "flex items-center gap-1.5 text-[11px] font-semibold sm:text-[12px]",
                        step.state === "next" ? "text-ink-muted" : "text-ink",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "grid size-4 shrink-0 place-items-center rounded-full",
                          step.state === "done" && "bg-secondary text-white",
                          step.state === "current" && "bg-primary text-primary-foreground",
                          step.state === "next" && "border border-hairline text-ink-muted",
                        )}
                      >
                        {step.state === "done" ? (
                          <Check className="size-2.5" strokeWidth={3} />
                        ) : step.state === "current" ? (
                          <step.icon className="size-2.5" />
                        ) : null}
                      </span>
                      <span className="hidden truncate sm:inline">{step.title}</span>
                    </span>
                    <span className="text-[11px] text-ink-muted">{step.time}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-4 flex flex-col items-center rounded-lg bg-surface/70 px-4 py-4 sm:flex-row sm:gap-5 sm:py-3">
              <img
                src={riderIllustration}
                alt=""
                aria-hidden="true"
                width={360}
                height={260}
                className="h-28 w-auto shrink-0 sm:h-24"
              />
              <p className="mt-2 max-w-[34ch] text-center text-[13px] leading-relaxed text-ink-muted sm:mt-0 sm:text-left">
                {rider.name.split(" ")[0]} has your food and is heading to{" "}
                <span className="font-medium text-ink">
                  {vendor ? vendor.neighborhood : "your address"}
                </span>
                .
              </p>
            </div>
          </section>

          {/* Rider */}
          <section
            aria-labelledby="rider-heading"
            className="rounded-xl border border-hairline bg-background p-4 sm:p-5"
          >
            <h2 id="rider-heading" className="text-[15px] font-semibold text-ink">
              Your rider
            </h2>

            <div className="mt-3 flex items-center gap-3">
              <img
                src={riderPhoto}
                alt={`${rider.name}, your delivery rider`}
                width={112}
                height={112}
                className="size-14 rounded-md object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold text-ink">{rider.name}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-ink-muted">
                  <Star aria-hidden="true" className="size-3.5 fill-primary text-primary" />
                  {rider.rating} · {rider.deliveries} deliveries
                </p>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button
                asChild
                className="h-11 rounded-md text-[13px] font-semibold"
              >
                <a href={`tel:${rider.phone}`}>
                  <PhoneCall aria-hidden="true" className="size-4" />
                  Call rider
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-md border-hairline text-[13px] font-semibold"
              >
                <a href={`sms:${rider.phone}`}>
                  <MessageSquare aria-hidden="true" className="size-4" />
                  Message
                </a>
              </Button>
            </div>
          </section>
        </div>

        {/* Order */}
        <aside className="lg:sticky lg:top-[88px]">
          <section
            aria-labelledby="order-heading"
            className="rounded-xl border border-hairline bg-background"
          >
            <div className="border-b border-hairline px-4 py-3">
              <h2 id="order-heading" className="text-[15px] font-semibold text-ink">
                What's coming
              </h2>
            </div>

            <ul className="px-4">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-3 border-b border-hairline py-3 last:border-b-0">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-md bg-surface-strong">
                    {line.image ? (
                      <img
                        src={line.image}
                        alt=""
                        width={96}
                        height={96}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-[13px] leading-snug font-semibold text-ink">
                      {line.name}
                    </p>
                    <p className="mt-0.5 text-[12px] text-ink-muted">× {line.qty}</p>
                  </div>
                  <p className="text-[13px] font-semibold text-ink">
                    {formatNaira(line.unitPrice * line.qty)}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="flex flex-col gap-1.5 border-t border-hairline px-4 py-3 text-[13px]">
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Subtotal</dt>
                <dd className="font-medium text-ink">{formatNaira(subtotal)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-ink-muted">Delivery</dt>
                <dd className="font-medium text-ink">{formatNaira(deliveryFee)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-hairline pt-2 text-[15px]">
                <dt className="font-semibold text-ink">Total</dt>
                <dd className="font-semibold text-ink">{formatNaira(total)}</dd>
              </div>
            </dl>

            <div className="px-4 pb-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  clear();
                  navigate("/vendors");
                }}
                className="h-11 w-full rounded-md border-hairline text-[13px] font-semibold"
              >
                Order received
              </Button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
