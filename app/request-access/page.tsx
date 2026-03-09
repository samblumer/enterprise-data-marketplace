"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { dataProducts } from "@/data/mockData";

export default function RequestAccessPage() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId") ?? dataProducts[0].id;

  const selectedProduct = useMemo(
    () => dataProducts.find((product) => product.id === productId) ?? dataProducts[0],
    [productId]
  );

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-7">
      <section className="panel rise-in rounded-lg px-7 py-10">
        <Link href={`/catalog/${selectedProduct.id}`} className="mb-4 inline-flex items-center gap-2 text-sm btn-link">
          <ArrowLeft size={14} />
          Back to Product
        </Link>

        <p className="eyebrow">Access Workflow</p>
        <h1 className="mt-3 section-title">Request Data Product Access</h1>
        <p className="mt-2 text-sm body-muted">
          This workflow simulates approval routing, purpose capture, and stewardship checks.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <article className="panel rise-in rounded-lg p-6">
          <h2 className="text-xl font-semibold text-ink-900">Request Form</h2>

          {submitted ? (
            <div className="mt-4 rounded-md border border-mint-300 bg-mint-100/60 p-4 text-sm text-mint-700">
              <p className="flex items-center gap-2 font-semibold">
                <CheckCircle2 size={16} />
                Request submitted successfully
              </p>
              <p className="mt-2">
                Your request is now in <strong>Pending</strong> status and routed to the data owner for review.
              </p>
              <Link href="/my-requests" className="mt-3 inline-block btn-link">
                View My Requests
              </Link>
            </div>
          ) : (
            <form
              className="mt-4 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Data Product</span>
                <input value={selectedProduct.name} readOnly className="field-input bg-ink-50" />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Business Purpose</span>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe intended use and expected business outcome"
                  className="field-input"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Access Duration</span>
                  <select className="field-input">
                    <option>90 days</option>
                    <option>180 days</option>
                    <option>1 year</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Environment</span>
                  <select className="field-input">
                    <option>Analytics workspace</option>
                    <option>BI semantic layer</option>
                    <option>Sandbox</option>
                  </select>
                </label>
              </div>

              <label className="flex items-start gap-2 rounded-sm border border-ink-200 bg-ink-50 px-3 py-2 text-sm text-ink-700">
                <input type="checkbox" required className="mt-0.5" />
                I confirm I will use this data according to policy tags and sensitivity classification.
              </label>

              <button type="submit" className="btn-primary">
                Submit Request
              </button>
            </form>
          )}
        </article>

        <article className="section-muted rounded-lg border border-ink-200 p-6 text-sm text-ink-700">
          <h2 className="text-xl font-semibold text-ink-900">Approval Path</h2>
          <ul className="mt-3 space-y-3">
            <li className="rounded-sm border border-ink-200 bg-white px-3 py-2">
              1. Policy pre-check validates sensitivity and certification status.
            </li>
            <li className="rounded-sm border border-ink-200 bg-white px-3 py-2">
              2. Data owner approves or requests additional business context.
            </li>
            <li className="rounded-sm border border-ink-200 bg-white px-3 py-2">
              3. Steward performs quality and lineage readiness review.
            </li>
            <li className="rounded-sm border border-ink-200 bg-white px-3 py-2">
              4. Access grant is provisioned to target analytics environment.
            </li>
          </ul>

          <div className="mt-4 rounded-sm border border-ink-200 bg-white px-3 py-2">
            <p className="text-xs body-muted">Selected Product</p>
            <p className="font-semibold text-ink-900">{selectedProduct.name}</p>
            <p className="text-xs body-muted">Owner: {selectedProduct.owner}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
