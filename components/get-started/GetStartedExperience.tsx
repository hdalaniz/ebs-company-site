"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { pricing } from "@/config/site";
import { GetStartedError, GetStartedSuccess } from "@/components/get-started/GetStartedResult";
import { buttonLinkVariants } from "@/components/marketing/ButtonLink";
import { CUSTOMER_MESSAGES } from "@/lib/commercial-leads/types";
import {
  createDraft,
  PRODUCT_INTERESTS,
  productInterestLabel,
  STEPS,
  TRADES,
  WEBSITE_SITUATIONS,
  withProductInterest,
  type ProductInterest,
  type QualificationDraft,
  type StepId,
  type Trade,
  type WebsiteSituation,
} from "@/lib/get-started/model";
import { parsePublicError, parsePublicSuccess } from "@/lib/get-started/public-response";
import {
  firstStepForErrors,
  validateQualification,
  validateStep,
  type QualificationField,
  type QualificationFieldErrors,
} from "@/lib/get-started/validate";
import { cn } from "@/lib/cn";

type GetStartedExperienceProps = {
  initialProduct: ProductInterest;
  productQuery: ProductInterest | null;
};

const inputClass =
  "mt-2 w-full min-h-11 rounded-lg border border-navy/15 bg-white px-3 py-2.5 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal";

export function GetStartedExperience({
  initialProduct,
  productQuery,
}: GetStartedExperienceProps) {
  const [step, setStep] = useState<StepId>("business");
  const [draft, setDraft] = useState<QualificationDraft>(() => createDraft(initialProduct));
  const [errors, setErrors] = useState<QualificationFieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof parsePublicSuccess>>(null);
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const skipFocus = useRef(true);
  const baseId = useId();

  useEffect(() => {
    if (skipFocus.current) {
      skipFocus.current = false;
      return;
    }
    if (result) {
      successHeadingRef.current?.focus();
      return;
    }
    stepHeadingRef.current?.focus();
  }, [step, result]);

  function update<K extends keyof QualificationDraft>(key: K, value: QualificationDraft[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key as QualificationField]) return current;
      const next = { ...current };
      delete next[key as QualificationField];
      return next;
    });
  }

  function goNext() {
    const stepErrors = validateStep(step, draft);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;
    setFormError(null);
    setStep(step === "business" ? "offer" : "contact");
  }

  function goBack() {
    setFormError(null);
    setStep(step === "contact" ? "offer" : "business");
  }

  async function submitRequest() {
    const validation = validateQualification(draft);
    if (!validation.ok) {
      setErrors(validation.fields);
      setStep(firstStepForErrors(validation.fields));
      setFormError(null);
      return;
    }

    setPending(true);
    setFormError(null);
    try {
      const response = await fetch("/api/get-started", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...validation.value,
          productQuery,
        }),
      });
      const body: unknown = await response.json().catch(() => null);
      const success = parsePublicSuccess(body);
      if (!response.ok || !success) {
        const error = parsePublicError(body);
        setFormError(error.message);
        if (Object.keys(error.fields).length > 0) {
          setErrors(error.fields);
          setStep(firstStepForErrors(error.fields));
        }
        return;
      }
      setResult(success);
    } catch {
      setFormError(CUSTOMER_MESSAGES.upstream);
    } finally {
      setPending(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    if (step !== "contact") {
      goNext();
      return;
    }
    void submitRequest();
  }

  if (result) {
    return <GetStartedSuccess result={result} headingRef={successHeadingRef} />;
  }

  const stepMeta = STEPS.find((item) => item.id === step) ?? STEPS[0];

  return (
    <div data-initial-product={initialProduct}>
      <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">
        RiseCurrent
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Get started
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
        Tell us about your home-service business. We&apos;ll follow up on
        Launch, Presence, or a free Insight diagnostic.
      </p>
      <ul className="mt-5 flex flex-col gap-1 text-sm leading-6 text-ink/75 sm:flex-row sm:flex-wrap sm:gap-x-5">
        <li>Launch is available, {pricing.launch.toLowerCase()}.</li>
        <li>Presence is available, {pricing.presence.toLowerCase()}.</li>
        <li>Insight is {pricing.insight.toLowerCase()}.</li>
      </ul>

      <form
        className="ebs-card mt-8 p-5 sm:p-8"
        noValidate
        onSubmit={onSubmit}
        aria-busy={pending}
      >
        <ol aria-label="Progress" className="grid grid-cols-3 gap-2">
          {STEPS.map((item, index) => {
            const current = item.id === step;
            return (
              <li
                key={item.id}
                aria-current={current ? "step" : undefined}
                className={cn(
                  "rounded-lg px-2 py-2 text-center",
                  current ? "bg-teal/15 text-ink" : "bg-sky/80 text-muted",
                )}
              >
                <span className="block text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                  Step {index + 1}
                </span>
                <span className="mt-0.5 block text-xs font-semibold sm:text-sm">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ol>

        <h2
          ref={stepHeadingRef}
          tabIndex={-1}
          className="mt-6 text-xl font-semibold tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
        >
          {step === "business"
            ? "Your business"
            : step === "offer"
              ? "Website and offer"
              : "How we should reach you"}
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink/70">
          Step {STEPS.findIndex((item) => item.id === stepMeta.id) + 1} of {STEPS.length}.
          Required fields are marked.
        </p>

        <div hidden={step !== "business"} className="mt-6 space-y-6">
          <TextField
            id={`${baseId}-business-name`}
            label="Business name"
            required
            autoComplete="organization"
            value={draft.businessName}
            error={errors.businessName}
            onChange={(value) => update("businessName", value)}
          />
          <ChoiceField
            legend="Trade"
            name="trade"
            required
            value={draft.trade}
            error={errors.trade}
            options={TRADES.map((option) => ({
              value: option.value,
              label: option.label,
            }))}
            onChange={(value) => update("trade", value as Trade)}
          />
          <ChoiceField
            legend="Website situation"
            name="websiteSituation"
            required
            value={draft.websiteSituation}
            error={errors.websiteSituation}
            options={WEBSITE_SITUATIONS.map((option) => ({
              value: option.value,
              label: option.label,
              detail: option.detail,
            }))}
            onChange={(value) => {
              const situation = value as WebsiteSituation;
              setDraft((current) => ({
                ...current,
                websiteSituation: situation,
                websiteUrl: situation === "no-website" ? "" : current.websiteUrl,
              }));
              setErrors((current) => {
                const next = { ...current };
                delete next.websiteSituation;
                if (situation === "no-website") delete next.websiteUrl;
                return next;
              });
            }}
          />
          {draft.websiteSituation === "no-website" ? (
            <p className="text-sm leading-6 text-ink/75">
              No website is fine. You can continue.
            </p>
          ) : (
            <TextField
              id={`${baseId}-website`}
              label="Website address"
              optional
              type="url"
              inputMode="url"
              autoComplete="url"
              value={draft.websiteUrl}
              error={errors.websiteUrl}
              hint="Leave this blank if you don't have a website."
              onChange={(value) => update("websiteUrl", value)}
            />
          )}
        </div>

        <div hidden={step !== "offer"} className="mt-6 space-y-6">
          <ChoiceField
            legend="What do you want to explore?"
            name="productInterest"
            required
            value={draft.productInterest}
            error={errors.productInterest}
            options={PRODUCT_INTERESTS.map((option) => ({
              value: option.value,
              label: option.label,
              detail: option.detail,
              id: `product-interest-${option.value}`,
            }))}
            onChange={(value) => {
              setDraft((current) => withProductInterest(current, value as ProductInterest));
              setErrors((current) => {
                const next = { ...current };
                delete next.productInterest;
                return next;
              });
            }}
          />
          <TextField
            id={`${baseId}-problem`}
            label="Biggest problem"
            optional
            multiline
            value={draft.biggestProblem}
            error={errors.biggestProblem}
            hint="Optional. A sentence is enough."
            onChange={(value) => update("biggestProblem", value)}
          />
        </div>

        <div hidden={step !== "contact"} className="mt-6 space-y-6">
          <p className="text-sm leading-6 text-ink/75">
            Interested in {productInterestLabel(draft.productInterest)}.{" "}
            <button
              type="button"
              className="font-semibold text-ink underline decoration-teal/50 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal"
              onClick={() => {
                setFormError(null);
                setStep("offer");
              }}
            >
              Change offer
            </button>
          </p>
          <TextField
            id={`${baseId}-contact-name`}
            label="Contact name"
            required
            autoComplete="name"
            value={draft.contactName}
            error={errors.contactName}
            onChange={(value) => update("contactName", value)}
          />
          <TextField
            id={`${baseId}-email`}
            label="Email"
            required
            type="email"
            inputMode="email"
            autoComplete="email"
            value={draft.email}
            error={errors.email}
            onChange={(value) => update("email", value)}
          />
          <TextField
            id={`${baseId}-phone`}
            label="Phone"
            optional
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={draft.phone}
            error={errors.phone}
            onChange={(value) => update("phone", value)}
          />
        </div>

        {formError ? (
          <div className="mt-6">
            <GetStartedError message={formError} />
          </div>
        ) : null}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          {step === "business" ? (
            <span />
          ) : (
            <button
              type="button"
              className={cn(buttonLinkVariants.secondary, "w-full sm:w-auto")}
              onClick={goBack}
              disabled={pending}
            >
              Back
            </button>
          )}
          {step === "contact" ? (
            <button
              type="submit"
              className={cn(buttonLinkVariants.primary, "w-full sm:w-auto")}
              disabled={pending}
            >
              {pending ? "Sending…" : "Submit request"}
            </button>
          ) : (
            <button
              type="submit"
              className={cn(buttonLinkVariants.primary, "w-full sm:w-auto")}
            >
              Continue
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  required = false,
  optional = false,
  multiline = false,
  type = "text",
  autoComplete,
  inputMode,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  optional?: boolean;
  multiline?: boolean;
  type?: "text" | "email" | "tel" | "url";
  autoComplete?: string;
  inputMode?: "email" | "tel" | "url" | "text";
}) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  const className = cn(inputClass, error && "border-navy-deep");
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-teal"> *</span> : null}
        {optional ? <span className="font-medium text-muted"> (optional)</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="mt-1 text-sm leading-6 text-ink/65">
          {hint}
        </p>
      ) : null}
      {multiline ? (
        <textarea
          id={id}
          value={value}
          rows={3}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={className}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          inputMode={inputMode}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          className={className}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-navy-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function ChoiceField({
  legend,
  name,
  value,
  options,
  onChange,
  error,
  required = false,
}: {
  legend: string;
  name: string;
  value: string;
  options: ReadonlyArray<{ value: string; label: string; detail?: string; id?: string }>;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
}) {
  const errorId = useId();
  return (
    <fieldset aria-describedby={error ? errorId : undefined}>
      <legend className="text-sm font-semibold text-ink">
        {legend}
        {required ? <span className="text-teal"> *</span> : null}
      </legend>
      <div className="mt-3 space-y-2">
        {options.map((option) => {
          const selected = value === option.value;
          const id = option.id ?? `${name}-${option.value}`;
          return (
            <label
              key={option.value}
              htmlFor={id}
              className={cn(
                "flex min-h-11 cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-3",
                selected
                  ? "border-teal bg-teal/10"
                  : "border-navy/15 bg-white hover:border-navy/30",
              )}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                required={required}
                className="mt-1 size-4 accent-teal"
                onChange={() => onChange(option.value)}
              />
              <span>
                <span className="block text-sm font-semibold text-ink">{option.label}</span>
                {option.detail ? (
                  <span className="mt-1 block text-sm leading-6 text-muted">{option.detail}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-navy-deep">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
