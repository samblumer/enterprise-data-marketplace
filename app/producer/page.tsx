"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Plus, UploadCloud } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { QualityBar } from "@/components/quality-bar";
import { dataProducts } from "@/data/mockData";

export default function ProducerPage() {
  const ownerScope = ["Maya Chen", "David Romero", "Priya Sethi", "Nina Patel"];
  const myProducts = useMemo(
    () => dataProducts.filter((product) => ownerScope.includes(product.owner)),
    []
  );

  const drafts = dataProducts.filter((product) => product.certificationStatus === "Draft").length;
  const [selectedProductId, setSelectedProductId] = useState(myProducts[0]?.id ?? "");
  const [publishMessage, setPublishMessage] = useState("");

  const selectedProduct = myProducts.find((product) => product.id === selectedProductId) ?? myProducts[0];

  return (
    <div className="space-y-7">
      <section className="panel rise-in rounded-lg px-7 py-10">
        <p className="eyebrow">Producer Workspace</p>
        <h1 className="mt-3 section-title">Publish and Maintain Data Products</h1>
        <p className="mt-2 text-sm body-muted">Manage metadata completeness, quality posture, and publication readiness.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-primary">
            <Plus size={14} />
            New Product (Mock)
          </button>
          <button className="btn-secondary">
            <UploadCloud size={14} />
            Update Metadata (Mock)
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <MetricCard label="Owned Products" value={String(myProducts.length)} hint="Across sales, finance, product, customer" />
        <MetricCard label="Drafts" value={String(drafts)} hint="Pending publication readiness" />
        <MetricCard
          label="Avg Quality"
          value={`${Math.round(myProducts.reduce((sum, item) => sum + item.qualityScore, 0) / myProducts.length)}/100`}
          hint="Monitored before certification"
        />
        <MetricCard
          label="Needs Steward Review"
          value={String(myProducts.filter((item) => item.certificationStatus !== "Certified").length)}
          hint="Metadata or controls incomplete"
        />
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <article className="panel rise-in rounded-lg p-6">
          <h2 className="text-xl font-semibold text-ink-900">Product Publication Queue</h2>
          <div className="mt-4 space-y-3">
            {myProducts.map((product) => (
              <div key={product.id} className="rounded-md border border-ink-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-ink-900">{product.name}</p>
                    <p className="text-xs body-muted">{product.domain} | Last updated {product.lastUpdated}</p>
                  </div>
                  <Link href={`/catalog/${product.id}`} className="btn-secondary !px-3 !py-1.5 !text-xs">
                    Preview
                  </Link>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-sm border border-ink-200 bg-ink-50 px-3 py-2 text-xs text-ink-700">Certification: {product.certificationStatus}</div>
                  <div className="rounded-sm border border-ink-200 bg-ink-50 px-3 py-2 text-xs text-ink-700">Sensitivity: {product.sensitivityClassification}</div>
                  <div className="rounded-sm border border-ink-200 bg-ink-50 px-3 py-2 text-xs text-ink-700">Steward: {product.steward}</div>
                </div>
                <div className="mt-3">
                  <QualityBar score={product.qualityScore} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel rise-in rounded-lg p-6">
          <h2 className="text-xl font-semibold text-ink-900">Publish / Update Simulation</h2>
          <form
            className="mt-4 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              if (selectedProduct) {
                setPublishMessage(
                  `Mock workflow complete: ${selectedProduct.name} routed to steward ${selectedProduct.steward} for review.`
                );
              }
            }}
          >
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Select Product</span>
              <select
                value={selectedProductId}
                onChange={(event) => setSelectedProductId(event.target.value)}
                className="field-input"
              >
                {myProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Change Summary</span>
              <textarea
                rows={3}
                placeholder="Describe schema updates, quality improvements, or policy changes"
                className="field-input"
              />
            </label>

            <button type="submit" className="btn-primary w-full justify-center">
              Submit Mocked Publication
            </button>
          </form>

          {publishMessage && <div className="mt-3 rounded-sm border border-mint-300 bg-mint-100 px-3 py-2 text-xs text-mint-700">{publishMessage}</div>}
        </article>
      </section>
    </div>
  );
}
