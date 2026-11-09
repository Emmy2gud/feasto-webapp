import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  Check,
  CreditCard,
  MapPin,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/context/cart-store";
import { savedAddresses } from "@/data/appShell";
import { vendors } from "@/data/vendorData";
import { formatEta, formatNaira } from "@/utils/vendorUtils";
import emptyBasket from "@/assets/illustrations/empty-basket.svg";
import { cn } from "@/lib/utils";

type PaymentMethod = "wallet" | "card" | "transfer";

const walletBalance = 12500;

const paymentOptions: { id: PaymentMethod; label: string; hint: string; icon: typeof Wallet }[] = [
  { id: "wallet", label: "Feasto wallet", hint: "Balance shown below", icon: Wallet },
  { id: "card", label: "Card", hint: "Verve, Mastercard or Visa", icon: CreditCard },
  { id: "transfer", label: "Bank transfer", hint: "Pay from your bank app", icon: Banknote },
];

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { lines, count, subtotal } = useCart();

  const vendor = vendors.find((entry) => entry.id === lines[0]?.vendorId);
  const deliveryFee = vendor?.deliveryFee ?? 0;
  const total = subtotal + (count > 0 ? deliveryFee : 0);

  const [addressId, setAddressId] = useState(savedAddresses[0].id);
  const [landmark, setLandmark] = useState("");
  const [phone, setPhone] = useState("0803 000 0000");
  const [note, setNote] = useState("");
  const [contactless, setContactless] = useState(true);
  const [payment, setPayment] = useState<PaymentMethod>("wallet");

  if (count === 0) {
    return (
      <div className="mx-auto flex w-full max-w-[520px] flex-col items-center px-4 py-14 text-center">
        <img
          src={emptyBasket}
          alt=""
          aria-hidden="true"
          width={320}
          height={240}
          className="h-40 w-auto"
        />
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">Your basket is empty</h1>
        <p className="mt-2 max-w-[34ch] text-[14px] leading-relaxed text-ink-muted">
          Pick a kitchen near you and the basket, delivery fee and total appear here.
        </p>
        <Button asChild className="mt-5 h-11 rounded-md px-5 text-[14px] font-semibold">
          <Link to="/vendors">Browse vendors</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1100px] px-4 pt-4 pb-40 sm:px-8 lg:pt-6 lg:pb-12">
      <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">Checkout</h1>
      <p className="mt-1 flex items-center gap-1.5 text-[13px] text-ink-muted">
        <ShieldCheck aria-hidden="true" className="size-4 text-primary" />
        Payment is confirmed before the vendor starts cooking.
      </p>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start lg:gap-8">
        <div className="flex flex-col gap-4">
          {/* Delivery address */}
          <section
            aria-labelledby="delivery-heading"
            className="rounded-xl border border-hairline bg-background p-4 sm:p-5"
          >
            <h2 id="delivery-heading" className="flex items-center gap-2 text-[15px] font-semibold text-ink">
              <MapPin aria-hidden="true" className="size-4 text-primary" />
              Delivery address
            </h2>

            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {savedAddresses.map((address) => {
                const isActive = address.id === addressId;
                return (
                  <label
                    key={address.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-2.5 rounded-md border p-3 transition-colors",
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-hairline hover:border-primary/35",
                    )}
                  >
                    <input
                      type="radio"
                      name="address"
                      className="sr-only"
                      checked={isActive}
                      onChange={() => setAddressId(address.id)}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border",
                        isActive ? "border-primary bg-primary text-primary-foreground" : "border-hairline",
                      )}
                    >
                      {isActive ? <Check className="size-2.5" strokeWidth={3} /> : null}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[13px] font-semibold text-ink">
                        {address.label}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-snug text-ink-muted">
                        {address.line}, {address.area}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="landmark" className="text-[12px] font-medium text-ink">
                  Landmark or flat number
                </Label>
                <Input
                  id="landmark"
                  value={landmark}
                  onChange={(event) => setLandmark(event.target.value)}
                  placeholder="e.g. Blue gate beside the pharmacy"
                  className="h-11 rounded-md border-hairline text-[14px]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone" className="text-[12px] font-medium text-ink">
                  Phone number for the rider
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="h-11 rounded-md border-hairline text-[14px]"
                />
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-1.5">
              <Label htmlFor="note" className="text-[12px] font-medium text-ink">
                Note for the kitchen <span className="font-normal text-ink-muted">(optional)</span>
              </Label>
              <Textarea
                id="note"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                rows={2}
                placeholder="No onions, extra pepper, call when you arrive"
                className="min-h-[64px] resize-none rounded-md border-hairline text-[14px]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-hairline pt-3">
              <div>
                <Label htmlFor="contactless" className="text-[13px] font-medium text-ink">
                  Leave at the door
                </Label>
                <p className="text-[12px] text-ink-muted">The rider calls to confirm drop-off.</p>
              </div>
              <Switch id="contactless" checked={contactless} onCheckedChange={setContactless} />
            </div>
          </section>

          {/* Payment */}
          <section
            aria-labelledby="payment-heading"
            className="rounded-xl border border-hairline bg-background p-4 sm:p-5"
          >
            <h2 id="payment-heading" className="flex items-center gap-2 text-[15px] font-semibold text-ink">
              <Wallet aria-hidden="true" className="size-4 text-primary" />
              Payment
            </h2>

            <div className="mt-3 flex flex-col gap-1.5">
              {paymentOptions.map((option) => {
                const isActive = payment === option.id;
                return (
                  <label
                    key={option.id}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 transition-colors",
                      isActive ? "border-primary bg-primary/5" : "border-hairline hover:border-primary/35",
                    )}
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="sr-only"
                      checked={isActive}
                      onChange={() => setPayment(option.id)}
                    />
                    <option.icon
                      aria-hidden="true"
                      className={cn("size-4 shrink-0", isActive ? "text-primary" : "text-ink-muted")}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-semibold text-ink">{option.label}</span>
                      <span className="block text-[12px] text-ink-muted">{option.hint}</span>
                    </span>
                    {option.id === "wallet" ? (
                      <span className="text-[13px] font-semibold text-ink">
                        {formatNaira(walletBalance)}
                      </span>
                    ) : null}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "grid size-4 place-items-center rounded-full border",
                        isActive ? "border-primary bg-primary text-primary-foreground" : "border-hairline",
                      )}
                    >
                      {isActive ? <Check className="size-2.5" strokeWidth={3} /> : null}
                    </span>
                  </label>
                );
              })}
            </div>

            {payment === "wallet" && total > walletBalance ? (
              <p className="mt-3 rounded-sm bg-surface px-3 py-2 text-[12px] text-ink-muted">
                The wallet is short by {formatNaira(total - walletBalance)}. Top up or switch to card.
              </p>
            ) : null}

            {payment === "card" ? (
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_88px]">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="card" className="text-[12px] font-medium text-ink">
                    Card number
                  </Label>
                  <Input
                    id="card"
                    inputMode="numeric"
                    placeholder="0000 0000 0000 0000"
                    className="h-11 rounded-md border-hairline font-mono text-[14px] tracking-wider"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="cvv" className="text-[12px] font-medium text-ink">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    inputMode="numeric"
                    placeholder="123"
                    className="h-11 rounded-md border-hairline font-mono text-[14px]"
                  />
                </div>
              </div>
            ) : null}

            {payment === "transfer" ? (
              <div className="mt-3 rounded-md bg-surface p-3 text-[12px] leading-relaxed text-ink-muted">
                Transfer to the Feasto collection account shown on the next screen. The vendor
                starts cooking once payment lands.
              </div>
            ) : null}
          </section>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-[88px]">
          <section
            aria-labelledby="summary-heading"
            className="rounded-xl border border-hairline bg-background"
          >
            <div className="border-b border-hairline px-4 py-3">
              <h2 id="summary-heading" className="text-[15px] font-semibold text-ink">
                Order summary
              </h2>
              {vendor ? (
                <p className="mt-0.5 text-[12px] text-ink-muted">
                  {vendor.name} · {formatEta(vendor.etaMin, vendor.etaMax)}
                </p>
              ) : null}
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
                    <p className="mt-0.5 text-[12px] text-ink-muted">
                      {line.qty} × {formatNaira(line.unitPrice)}
                    </p>
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

            <div className="hidden px-4 pb-4 lg:block">
              <Button
                type="button"
                onClick={() => navigate("/tracking")}
                className="h-11 w-full justify-between rounded-md px-4 text-[14px] font-semibold"
              >
                <span>Place order</span>
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <p className="mt-2 text-center text-[11px] text-ink-muted">
                You can cancel free of charge until the vendor starts cooking.
              </p>
            </div>
          </section>
        </aside>
      </div>

      {/* Phone action bar */}
      <div className="fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-30 border-t border-hairline bg-background/97 px-3 py-2.5 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <div className="min-w-0">
            <p className="text-[11px] text-ink-muted">Total incl. delivery</p>
            <p className="text-[15px] font-semibold text-ink">{formatNaira(total)}</p>
          </div>
          <Button
            type="button"
            onClick={() => navigate("/tracking")}
            className="h-11 flex-1 rounded-md text-[14px] font-semibold"
          >
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
}
