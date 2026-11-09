import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Lock, Mail, MapPin, MoveRight, Wallet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AuthShell } from "@/components/auth/AuthShell";
import type { AuthHighlight } from "@/components/auth/AuthShell";
import { TextField } from "@/components/forms/TextField";

const highlights: AuthHighlight[] = [
  {
    icon: MapPin,
    title: "Track the ride",
    description: "A status change at pickup and at handoff, with the rider on the map.",
  },
  {
    icon: Wallet,
    title: "Full total first",
    description: "Card, transfer or Feasto wallet. The delivery fee shows before you confirm.",
  },
  {
    icon: Bookmark,
    title: "Reorder in two taps",
    description: "Saved addresses and past orders stay on the account.",
  },
];

type Errors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: Errors = {};

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email.trim())) {
      nextErrors.email = "Enter the email address you signed up with.";
    }
    if (password.length === 0) {
      nextErrors.password = "Enter your password.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    console.info("Sign in attempt", { email: email.trim() });
  }

  return (
    <AuthShell
      title="Welcome back."
      subtitle="Sign in to pick up where you left off: the basket, the saved address and any order already on the way."
      heading="Your order, on its way."
      note="Sign in to reorder a favourite, change the delivery address or watch the rider move on the map."
      highlights={highlights}
      footer={
        <p className="text-sm text-ink-muted">
          New to Feasto?{" "}
          <Link
            to="/signup"
            className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            Create an account
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
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
            if (errors.email) setErrors((current) => ({ ...current, email: undefined }));
          }}
          error={errors.email}
          required
        />

        <TextField
          id="password"
          label="Password"
          icon={Lock}
          type="password"
          autoComplete="current-password"
          placeholder="Your password"
          value={password}
          onChange={(value) => {
            setPassword(value);
            if (errors.password) setErrors((current) => ({ ...current, password: undefined }));
          }}
          error={errors.password}
          required
        />

        <Button type="submit" className="mt-1 h-11 w-full rounded-lg font-semibold">
          Sign in
          <MoveRight aria-hidden="true" className="size-4" />
        </Button>
      </form>
    </AuthShell>
  );
}
