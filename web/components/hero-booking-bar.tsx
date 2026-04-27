"use client";

import { useId, useMemo, useRef, useState } from "react";

const BOOK = "https://fantasyworldresort.com/";

/** Matches "Arrival" / brand accent for booking field labels (placeholder text stays `text-gray-400`). */
const fieldLabelOrange = "text-[rgba(215,121,15,1)]";

function MIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined select-none ${className}`} aria-hidden>
      {name}
    </span>
  );
}

function formatDate(ymd: string) {
  if (!ymd) return "Select date";
  try {
    return new Date(`${ymd}T12:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return ymd;
  }
}

const selectClass =
  "w-full cursor-pointer appearance-none border-0 bg-transparent py-0.5 pl-0 pr-7 text-sm font-semibold text-gray-800 outline-none focus:ring-0";

function DateField({
  name,
  inputId,
  buttonId,
  value,
  onChange,
  min,
}: {
  name: string;
  inputId: string;
  buttonId: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full min-w-0">
      <input
        id={inputId}
        name={name}
        ref={ref}
        type="date"
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
        tabIndex={-1}
        aria-hidden
      />
      <button
        id={buttonId}
        type="button"
        onClick={() => {
          const el = ref.current;
          if (el && "showPicker" in el && typeof (el as HTMLInputElement & { showPicker: () => void }).showPicker === "function") {
            (el as HTMLInputElement & { showPicker: () => void }).showPicker();
          } else {
            el?.click();
          }
        }}
        className="w-full min-w-0 text-left text-sm font-semibold text-gray-800 transition hover:text-gray-900"
      >
        {formatDate(value)}
      </button>
    </div>
  );
}

function FieldCell({
  icon,
  label,
  children,
  labelFor,
  className = "",
  labelClassName,
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
  labelFor?: string;
  className?: string;
  labelClassName?: string;
}) {
  return (
    <div
      className={`group flex min-h-[3.5rem] w-full min-w-0 flex-1 basis-0 items-center gap-2.5 px-3 py-2 sm:gap-3 sm:px-3.5 sm:py-2.5 ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition group-hover:bg-gray-200/90">
        <MIcon name={icon} className="text-[1.2rem] leading-none md:text-[1.35rem]" />
      </span>
      <div className="min-w-0 flex-1 text-left">
        {labelFor ? (
          <label
            htmlFor={labelFor}
            className={`mb-0 block text-[10px] font-medium uppercase tracking-wider sm:text-xs ${
              labelClassName ?? "text-gray-400"
            }`}
          >
            {label}
          </label>
        ) : (
          <p className="text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:text-xs">{label}</p>
        )}
        <div className="min-w-0 pt-0.5 text-sm">{children}</div>
      </div>
    </div>
  );
}

export function HeroBookingBar() {
  const id = useId();
  const [arrival, setArrival] = useState("2026-04-27");
  const [departure, setDeparture] = useState("2026-04-29");
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [dogs, setDogs] = useState("1");
  const [promo, setPromo] = useState("");

  const minDeparture = useMemo(() => {
    if (!arrival) return undefined;
    const t = new Date(`${arrival}T12:00:00`);
    t.setDate(t.getDate() + 1);
    return t.toISOString().slice(0, 10);
  }, [arrival]);

  const handleArrival = (v: string) => {
    setArrival(v);
    if (minDeparture && departure < minDeparture) {
      setDeparture(minDeparture);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const u = new URL(BOOK, window.location.origin);
    u.searchParams.set("arrival", arrival);
    u.searchParams.set("departure", departure);
    u.searchParams.set("adults", adults);
    u.searchParams.set("children", children);
    u.searchParams.set("dogs", dogs);
    if (promo.trim()) u.searchParams.set("promo", promo.trim());
    window.open(u.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 w-full overflow-hidden rounded-[20px] border border-white/20 bg-white/56 px-1.5 py-5 shadow-[0_0_0_1px_rgba(0,0,0,0.15)] backdrop-blur-[43.9px]"
    >
      <div className="flex w-full min-w-0 flex-col divide-y divide-gray-200 md:flex-row md:divide-x md:divide-y-0 md:items-stretch">
        <FieldCell
          icon="calendar_today"
          label="Arrival"
          labelFor={`${id}-arr-btn`}
          className="md:border-r-0"
          labelClassName={fieldLabelOrange}
        >
          <DateField
            name="arrival"
            inputId={`${id}-in`}
            buttonId={`${id}-arr-btn`}
            value={arrival}
            onChange={handleArrival}
          />
        </FieldCell>

        <FieldCell
          icon="event"
          label="Departure"
          labelFor={`${id}-dep-btn`}
          labelClassName={fieldLabelOrange}
        >
          <DateField
            name="departure"
            inputId={`${id}-out`}
            buttonId={`${id}-dep-btn`}
            value={departure}
            onChange={setDeparture}
            min={minDeparture}
          />
        </FieldCell>

        <FieldCell
          icon="group"
          label="Adults"
          labelFor={`${id}-a`}
          labelClassName={fieldLabelOrange}
        >
          <div className="relative">
            <select
              id={`${id}-a`}
              name="adults"
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className={selectClass}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>
            <MIcon
              name="expand_more"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[1.1rem] text-gray-400"
            />
          </div>
        </FieldCell>

        <FieldCell
          icon="child_care"
          label="Children"
          labelFor={`${id}-c`}
          labelClassName={fieldLabelOrange}
        >
          <div className="relative">
            <select
              id={`${id}-c`}
              name="children"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className={selectClass}
            >
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={String(n)}>
                  {n}
                </option>
              ))}
            </select>
            <MIcon
              name="expand_more"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[1.1rem] text-gray-400"
            />
          </div>
        </FieldCell>

        <FieldCell
          icon="pets"
          label="Dogs (2 max)"
          labelFor={`${id}-d`}
          labelClassName={fieldLabelOrange}
        >
          <div className="relative">
            <select
              id={`${id}-d`}
              name="dogs"
              value={dogs}
              onChange={(e) => setDogs(e.target.value)}
              className={selectClass}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <MIcon
              name="expand_more"
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[1.1rem] text-gray-400"
            />
          </div>
        </FieldCell>

        <FieldCell
          icon="sell"
          label="Promo"
          className="md:border-r-0"
          labelFor={`${id}-promo`}
          labelClassName={fieldLabelOrange}
        >
          <input
            id={`${id}-promo`}
            name="promo"
            value={promo}
            onChange={(e) => setPromo(e.target.value)}
            type="text"
            placeholder="Promo code"
            className="w-full border-0 bg-transparent p-0 text-sm font-medium text-gray-800 placeholder:font-normal placeholder:text-gray-400 focus:ring-0"
            autoComplete="off"
          />
        </FieldCell>

        <div className="flex w-full min-w-0 items-center justify-end p-1.5 pl-0 pt-0 sm:p-1.5 md:w-auto md:shrink-0 md:pl-0">
          <button
            type="submit"
            className="inline-flex w-fit min-h-12 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-brand-orange bg-brand-orange px-5 text-xs font-bold uppercase tracking-wide text-white shadow-sm transition hover:brightness-105 active:scale-[0.99] sm:px-6 sm:text-sm"
          >
            <MIcon name="search" className="text-[1.25rem] !text-white" />
            Check Availability
          </button>
        </div>
      </div>
    </form>
  );
}
