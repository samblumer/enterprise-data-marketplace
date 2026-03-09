import Link from "next/link";
import clsx from "clsx";
import { AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { MetricCard } from "@/components/metric-card";
import { dataProducts, governanceReviews } from "@/data/mockData";

export default function GovernancePage() {
  const failing = governanceReviews.filter((review) => review.status === "Fail").length;
  const warnings = governanceReviews.filter((review) => review.status === "Warning").length;

  return (
    <div className="space-y-7">
      <section className="panel rise-in rounded-lg px-7 py-10">
        <p className="eyebrow">Steward Dashboard</p>
        <h1 className="mt-3 section-title">Governance and Trust Controls</h1>
        <p className="mt-2 text-sm body-muted">
          Review lineage, quality, and policy metadata to keep marketplace assets reliable and compliant.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <MetricCard label="Active Checks" value={String(governanceReviews.length)} hint="Quality, lineage, policy" />
        <MetricCard label="Failures" value={String(failing)} hint="Immediate stewardship action" />
        <MetricCard label="Warnings" value={String(warnings)} hint="Owner remediation needed" />
        <MetricCard
          label="Certified Coverage"
          value={`${Math.round((dataProducts.filter((item) => item.certificationStatus === "Certified").length / dataProducts.length) * 100)}%`}
          hint="Catalog trust baseline"
        />
      </section>

      <section className="section-muted rounded-lg border border-ink-200 p-6">
        <h2 className="text-xl font-semibold text-ink-900">Governance Findings</h2>
        <div className="mt-4 space-y-3">
          {governanceReviews.map((review) => {
            const product = dataProducts.find((item) => item.id === review.productId);

            return (
              <div key={review.id} className="panel rounded-md p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {review.status === "Pass" && <CheckCircle2 size={16} className="text-mint-700" />}
                    {review.status === "Warning" && <AlertTriangle size={16} className="text-amber-700" />}
                    {review.status === "Fail" && <ShieldAlert size={16} className="text-slateblue-700" />}
                    <p className="font-semibold text-ink-900">{review.checkType} review</p>
                  </div>
                  <span
                    className={clsx(
                      "chip",
                      review.status === "Pass" && "chip-success",
                      review.status === "Warning" && "chip-warning",
                      review.status === "Fail" && "chip-danger"
                    )}
                  >
                    {review.status}
                  </span>
                </div>
                <p className="mt-2 text-sm body-muted">{review.detail}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-600">
                  <span>Product: {product?.name}</span>
                  <span>Last checked: {review.lastChecked}</span>
                  <Link href={`/catalog/${review.productId}`} className="btn-link">
                    Open Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
