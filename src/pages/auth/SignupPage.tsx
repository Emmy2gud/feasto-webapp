import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Bike, ListChecks, Lock, Mail, MoveRight, Phone, User, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthShell } from "@/components/auth/AuthShell";
import type { AuthHighlight } from "@/components/auth/AuthShell";
import { TextField } from "@/components/forms/TextField";

const highlights: AuthHighlight[] = [
  {
    icon: ListChecks,
    title: "Menus kept current",
    description: "Vendors mark sold-out items, so you are not ordering food that ran out.",
  },
  {
    icon: Bike,
    title: "A rider on every order",
    description: "Orders go to riders already working your area instead of waiting in a queue.",
  },
  {
    icon: Wallet,
    title: "One account, three roles",
    description: "Order as a customer, register a business or apply to ride with the same login.",
  },
];

type Errors = {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  terms?: string;
};

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function clearError(field: keyof Errors) {
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};

    if (fullName.trim().length < 2) {
      nextErrors.fullName = "Enter the name you want on your orders.";
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (phone.replace(/\D/g, "").length < 7) {
      nextErrors.phone = "Enter a phone number the rider can call.";
    }
    if (password.length < 8) {
      nextErrors.password = "Use at least 8 characters.";
    }
    if (!acceptedTerms) {
      nextErrors.terms = "Accept the terms to create an account.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    console.info("Sign up attempt", { fullName: fullName.trim(), email: email.trim(), phone });
  }

  return (
    <AuthShell
      title="Create your account."
      subtitle="Food, groceries and medicine from vendors near your address. The phone number is so the rider can reach you at the door."
      heading="Food from kitchens near you, at your door."
      note="One account for ordering and tracking across the city. It takes about a minute."
      highlights={highlights}
      footer={
        <p className="text-sm text-ink-muted">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Sign in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        <TextField
          id="fullName"
          label="Full name"
          icon={User}
          autoComplete="name"
          placeholder="Amaka Obi"
          value={fullName}
          onChange={(value) => {
            setFullName(value);
            clearError("fullName");
          }}
          error={errors.fullName}
          required
        />

        <TextField
          id="email"
          label="Email address"
          icon={Mail}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(value) => {
            setEmail(value);
            clearError("email");
          }}
          error={errors.email}
          required
        />

        <TextField
          id="phone"
          label="Phone number"
          icon={Phone}
          type="tel"
          autoComplete="tel"
          placeholder="0803 000 0000"
          value={phone}
          onChange={(value) => {
            setPhone(value);
            clearError("phone");
          }}
          error={errors.phone}
          required
        />

        <TextField
          id="password"
          label="Password"
          icon={Lock}
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(value) => {
            setPassword(value);
            clearError("password");
          }}
          error={errors.password}
          required
        />

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="terms"
            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-muted"
          >
            <input
              id="terms"
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => {
                setAcceptedTerms(event.target.checked);
                if (errors.terms) clearError("terms");
              }}
              aria-invalid={Boolean(errors.terms)}
              aria-describedby={errors.terms ? "terms-error" : undefined}
              className="mt-0.5 size-4 shrink-0 cursor-pointer rounded-sm accent-primary"
            />
            <span>I agree to the Feasto terms of service and privacy policy.</span>
          </label>
          {errors.terms ? (
            <p id="terms-error" className="text-[13px] font-medium text-destructive">
              {errors.terms}
            </p>
          ) : null}
        </div>

        <Button type="submit" className="mt-1 h-11 w-full rounded-lg font-semibold">
          Create account
          <MoveRight aria-hidden="true" className="size-4" />
        </Button>
      </form>
    </AuthShell>
  );
}
