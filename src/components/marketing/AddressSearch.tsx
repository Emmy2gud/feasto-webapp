import { useId, useMemo, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { addressSuggestions } from "@/data/landingContent";

type AddressSearchProps = {
  suggestions?: string[];
  className?: string;
  placeholder?: string;
};

/**
 * The single address task on the home page. Submitting confirms the address and
 * hands the visitor to the vendor listing.
 */
export function AddressSearch({
  suggestions = addressSuggestions,
  className,
  placeholder = "Street, area or landmark",
}: AddressSearchProps) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const listId = useId();
  const errorId = useId();

  const matches = useMemo(() => {
    const query = value.trim().toLowerCase();
    const pool = query
      ? suggestions.filter((item) => item.toLowerCase().includes(query))
      : suggestions;
    return pool.slice(0, 5);
  }, [suggestions, value]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = value.trim();

    if (!address) {
      setError("Enter a delivery address to see what is open.");
      inputRef.current?.focus();
      return;
    }

    setError(null);
    setOpen(false);
    navigate(`/vendors?address=${encodeURIComponent(address)}`);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!open || matches.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((current) => (current + 1) % matches.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => (current <= 0 ? matches.length - 1 : current - 1));
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      setValue(matches[activeIndex]);
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <form onSubmit={submit} className={cn("w-full max-w-xl", className)}>
      <label htmlFor={`${listId}-input`} className="mb-2 block text-[13px] font-semibold text-ink">
        Delivery address
      </label>

      <div className="relative">
        <div
          className={cn(
            "flex flex-col gap-2 rounded-xl border bg-background p-2 transition-shadow sm:flex-row sm:items-center",
            error ? "border-destructive/60" : "border-hairline",
            "focus-within:border-primary/60 focus-within:shadow-soft",
          )}
        >
          <div className="flex min-w-0 flex-1 items-center gap-2.5 px-2">
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-primary" />
            <input
              ref={inputRef}
              id={`${listId}-input`}
              role="combobox"
              aria-expanded={open}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              autoComplete="street-address"
              value={value}
              placeholder={placeholder}
              onChange={(event) => {
                setValue(event.target.value);
                setOpen(true);
                setActiveIndex(-1);
                if (error) setError(null);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => {
                window.setTimeout(() => setOpen(false), 120);
              }}
              onKeyDown={handleKeyDown}
              className="h-11 w-full min-w-0 bg-transparent text-[15px] text-ink outline-hidden placeholder:text-ink-muted/80"
            />
          </div>

          <Button type="submit" size="lg" className="h-11 shrink-0 gap-1.5 rounded-lg px-5 font-semibold">
            Find food
            <MoveRight aria-hidden="true" className="size-4" />
          </Button>
        </div>

        {error ? (
          <p id={errorId} role="alert" className="mt-2 text-[13px] font-medium text-destructive">
            {error}
          </p>
        ) : null}

        {open && matches.length > 0 ? (
          <ul
            id={listId}
            role="listbox"
            aria-label="Suggested areas"
            className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-hairline bg-background py-1 shadow-panel"
          >
            {matches.map((item, index) => (
              <li key={item}>
                <button
                  type="button"
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    setValue(item);
                    setOpen(false);
                    inputRef.current?.focus();
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-ink transition-colors",
                    index === activeIndex ? "bg-surface" : "hover:bg-surface",
                  )}
                >
                  <MapPin aria-hidden="true" className="size-3.5 text-ink-muted" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </form>
  );
}
