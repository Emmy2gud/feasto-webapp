import { Link } from "react-router-dom";
import {
  Bike,
  Clock,
  IdCard,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormIntro } from "@/components/forms/FormIntro";
import { SelectField } from "@/components/forms/SelectField";
import { TextField } from "@/components/forms/TextField";
import { UploadField } from "@/components/forms/UploadField";
import { riderPerks } from "@/data/landingContent";

const tabTriggerClass =
  "group h-9 rounded-md text-[13px] font-semibold text-ink-muted transition-colors data-[state=active]:bg-background data-[state=active]:text-ink data-[state=active]:shadow-soft";

const stepNumberClass =
  "grid size-5 shrink-0 place-items-center rounded-full bg-surface-strong text-[11px] font-semibold text-ink-muted transition-colors group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground";

const vehicleOptions = [
  { value: "bicycle", label: "Bicycle" },
  { value: "scooter", label: "Electric scooter" },
  { value: "motorcycle", label: "Motorcycle" },
];

export default function RiderFormPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container-page max-w-[1180px] pt-8 sm:pt-10">
        <header className="max-w-[54ch]">
          <h1 className="font-display text-3xl font-bold text-balance text-ink sm:text-4xl">
            Become a Feasto rider
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">
            Three short steps: who you are, what you ride, and one photo of your ID. Verification
            happens on a short call after you apply.
          </p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <Tabs defaultValue="personal" className="min-w-0">
            <div className="rounded-xl border border-hairline bg-background">
              <div className="border-b border-hairline p-2 sm:p-3">
                <TabsList className="grid h-auto w-full grid-cols-3 gap-1 rounded-lg bg-surface p-[3px]">
                  <TabsTrigger value="personal" className={tabTriggerClass}>
                    <span className={stepNumberClass}>1</span>
                    Personal
                  </TabsTrigger>
                  <TabsTrigger value="vehicle" className={tabTriggerClass}>
                    <span className={stepNumberClass}>2</span>
                    Vehicle
                  </TabsTrigger>
                  <TabsTrigger value="verification" className={tabTriggerClass}>
                    <span className={stepNumberClass}>3</span>
                    Verification
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="p-5 sm:p-7">
                <TabsContent value="personal" className="mt-0 flex flex-col gap-6">
                  <FormIntro
                    icon={User}
                    title="Personal details"
                    description="These go on your rider profile and are what support uses to reach you."
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <TextField
                      id="fullName"
                      label="Full name"
                      icon={User}
                      autoComplete="name"
                      placeholder="Amaka Obi"
                    />
                    <TextField
                      id="email"
                      label="Email address"
                      icon={Mail}
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                    <TextField
                      id="phone"
                      label="Phone number"
                      icon={Phone}
                      type="tel"
                      autoComplete="tel"
                      placeholder="0803 000 0000"
                    />
                    <TextField
                      id="area"
                      label="Area you ride in"
                      icon={MapPin}
                      placeholder="e.g. Yaba, Lekki"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="vehicle" className="mt-0 flex flex-col gap-6">
                  <FormIntro
                    icon={Bike}
                    title="What you ride"
                    description="Bicycles work well in the central districts. Longer cross-city routes are easier on a scooter or motorcycle."
                  />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      id="vehicle-type"
                      label="Vehicle type"
                      icon={Bike}
                      options={vehicleOptions}
                      defaultValue="bicycle"
                    />
                    <TextField
                      id="vehicle-model"
                      label="Model and colour"
                      icon={Bike}
                      placeholder="e.g. Red Honda 125"
                    />
                    <TextField
                      id="plate"
                      label="Plate number (motorcycles only)"
                      icon={IdCard}
                      placeholder="e.g. LAG 123 XY"
                    />
                    <TextField
                      id="availability"
                      label="Usual riding hours"
                      icon={Clock}
                      type="time"
                      defaultValue="17:00"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="verification" className="mt-0 flex flex-col gap-6">
                  <FormIntro
                    icon={ShieldCheck}
                    title="Verification"
                    description="One government-issued ID is enough. Files stay private and are only used for this check."
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <UploadField
                      id="government-id"
                      title="Government-issued ID"
                      hint="National ID, driver's licence or passport (JPG, PNG, PDF)"
                      icon={IdCard}
                      accept="image/*,.pdf"
                    />
                    <UploadField
                      id="vehicle-papers"
                      title="Vehicle papers"
                      hint="Required for motorcycles. Insurance or registration"
                      icon={Bike}
                      accept="image/*,.pdf"
                    />
                  </div>
                </TabsContent>
              </div>

              <div className="flex flex-col gap-3 border-t border-hairline p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                <p className="max-w-[38ch] text-[13px] leading-relaxed text-ink-muted">
                  You can update these details after your verification call.
                </p>
                <Button type="button" className="h-11 w-full rounded-lg font-semibold sm:w-auto">
                  Apply to ride
                  <MoveRight aria-hidden="true" className="size-4" />
                </Button>
              </div>
            </div>
          </Tabs>

          <aside className="flex flex-col gap-4">
            <div className="rounded-xl bg-secondary p-6 text-white">
              <h2 className="font-display text-xl font-semibold">Why ride with Feasto</h2>
              <ul className="mt-4 flex flex-col border-t border-white/12">
                {riderPerks.slice(0, 3).map((perk) => (
                  <li key={perk.id} className="flex gap-3 border-b border-white/12 py-3.5">
                    <perk.icon aria-hidden="true" className="mt-0.5 size-[18px] shrink-0 text-primary" />
                    <div>
                      <p className="text-sm font-semibold">{perk.title}</p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-white/65">
                        {perk.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-[13px] text-ink-muted">
              Already applied?{" "}
              <Link
                to="/rider/dashboard"
                className="font-semibold text-primary hover:underline"
              >
                Open your rider dashboard
              </Link>
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
