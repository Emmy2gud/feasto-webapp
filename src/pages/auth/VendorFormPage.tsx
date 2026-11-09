import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, FileText, Mail, MapPin, MoveRight, Store, UtensilsCrossed } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormIntro } from "@/components/forms/FormIntro";
import { SelectField } from "@/components/forms/SelectField";
import { StatPair } from "@/components/marketing/FactRow";
import { TextField } from "@/components/forms/TextField";
import { UploadField } from "@/components/forms/UploadField";
import { kitchenCapabilities, vendorFacts } from "@/data/landingContent";
import { cn } from "@/lib/utils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const cuisineOptions = [
  { value: "african", label: "African kitchen" },
  { value: "continental", label: "Continental" },
  { value: "fastfood", label: "Fast food and snacks" },
  { value: "drinks", label: "Drinks and smoothies" },
  { value: "groceries", label: "Groceries and essentials" },
];

const tabTriggerClass =
  "group h-9 rounded-md text-[13px] font-semibold text-ink-muted transition-colors data-[state=active]:bg-background data-[state=active]:text-ink data-[state=active]:shadow-soft";

const stepNumberClass =
  "grid size-5 shrink-0 place-items-center rounded-full bg-surface-strong text-[11px] font-semibold text-ink-muted transition-colors group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground";

export default function VendorFormPage() {
  const [selectedDays, setSelectedDays] = useState<string[]>([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ]);

  function toggleDay(day: string) {
    setSelectedDays((current) =>
      current.includes(day) ? current.filter((value) => value !== day) : [...current, day],
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container-page max-w-[1180px] pt-8 sm:pt-10">
        <header className="max-w-[54ch]">
          <h1 className="font-display text-3xl font-bold text-balance text-ink sm:text-4xl">
            Register your business
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            Three steps: your kitchen, your trading details and your menu file. Registration is free
            and there is no monthly fee.
          </p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <Tabs defaultValue="restaurant" className="min-w-0">
            <div className="rounded-xl border border-hairline bg-background">
              <div className="border-b border-hairline p-2 sm:p-3">
                <TabsList className="grid h-auto w-full grid-cols-3 gap-1 rounded-lg bg-surface p-[3px]">
                  <TabsTrigger value="restaurant" className={tabTriggerClass}>
                    <span className={stepNumberClass}>1</span>
                    Restaurant
                  </TabsTrigger>
                  <TabsTrigger value="business" className={tabTriggerClass}>
                    <span className={stepNumberClass}>2</span>
                    Business
                  </TabsTrigger>
                  <TabsTrigger value="menu" className={tabTriggerClass}>
                    <span className={stepNumberClass}>3</span>
                    Menu file
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-5 sm:p-7">
                <TabsContent value="restaurant" className="mt-0 flex flex-col gap-6">
                  <FormIntro
                    icon={Store}
                    title="Your kitchen"
                    description="This is what customers see at the top of your listing, so use the name they know you by."
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                      id="restaurant-name"
                      label="Restaurant name"
                      icon={UtensilsCrossed}
                      placeholder="e.g. Ade's Kitchen"
                    />
                    <SelectField
                      id="cuisine"
                      label="Cuisine type"
                      icon={UtensilsCrossed}
                      options={cuisineOptions}
                      defaultValue="african"
                    />
                    <TextField
                      id="business-email"
                      label="Business email"
                      icon={Mail}
                      type="email"
                      autoComplete="email"
                      placeholder="kitchen@example.com"
                    />
                    <TextField
                      id="kitchen-address"
                      label="Kitchen address"
                      icon={MapPin}
                      placeholder="e.g. 12 Adeola Street, Yaba"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="business" className="mt-0 flex flex-col gap-6">
                  <FormIntro
                    icon={FileText}
                    title="Trading details"
                    description="Used to verify the business and to work out when you are open for orders."
                  />
                  <TextField
                    id="cac"
                    label="CAC or registration number"
                    icon={FileText}
                    placeholder="BN 1234567"
                  />

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[13px] font-semibold text-ink">Open days</p>
                      <span className="text-[13px] text-ink-muted">
                        {selectedDays.length} of 7 days
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {DAYS.map((day) => {
                        const isSelected = selectedDays.includes(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => toggleDay(day)}
                            aria-pressed={isSelected}
                            className={cn(
                              "h-9 min-w-11 rounded-md border px-3 text-[13px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                              isSelected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-hairline bg-background text-ink-muted hover:text-ink",
                            )}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                      id="opening-time"
                      label="Opening time"
                      icon={Clock}
                      type="time"
                      defaultValue="08:00"
                    />
                    <TextField
                      id="closing-time"
                      label="Closing time"
                      icon={Clock}
                      type="time"
                      defaultValue="22:00"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="menu" className="mt-0 flex flex-col gap-6">
                  <FormIntro
                    icon={FileText}
                    title="Menu file"
                    description="Upload your current menu with prices. Our team adds it to your listing before you go live."
                  />
                  <UploadField
                    id="menu-file"
                    title="Upload menu document"
                    hint="PDF, spreadsheet or photos of the menu. Up to 10MB."
                    icon={FileText}
                    accept="image/*,.pdf,.xlsx,.csv"
                  />
                </TabsContent>
              </div>

              <div className="flex flex-col gap-3 border-t border-hairline p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <p className="max-w-[38ch] text-[13px] leading-relaxed text-ink-muted">
                  We review applications within one working day and call before your first order.
                </p>
                <Button type="button" className="h-11 w-full rounded-lg font-semibold sm:w-auto">
                  Submit application
                  <MoveRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>
          </Tabs>

          <aside className="flex flex-col gap-4">
            <div className="rounded-xl bg-secondary p-6 text-white">
              <h2 className="font-display text-xl font-semibold">What the dashboard gives you</h2>
              <ul className="mt-4 flex flex-col border-t border-white/12">
                {kitchenCapabilities.slice(0, 3).map((capability) => (
                  <li key={capability.id} className="flex gap-3 border-b border-white/12 py-3.5">
                    <capability.icon
                      aria-hidden="true"
                      className="mt-0.5 size-[18px] shrink-0 text-primary"
                    />
                    <div>
                      <p className="text-sm font-semibold">{capability.title}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-white/65">
                        {capability.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <StatPair tone="dark" items={vendorFacts} className="mt-4 border-t-0 pt-0" />
            </div>

            <p className="text-[13px] text-ink-muted">
              Already a partner?{" "}
              <Link to="/dashboard" className="font-semibold text-primary hover:underline">
                Open the vendor dashboard
              </Link>
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
