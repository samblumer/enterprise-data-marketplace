import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck } from "lucide-react";
import { dataProducts, governanceReviews } from "@/data/mockData";
import { MetricCard } from "@/components/metric-card";

export default function HomePage() {
  const certified = dataProducts.filter((product) => product.certificationStatus === "Certified").length;
  const restricted = dataProducts.filter((product) => product.accessType === "Restricted").length;
  const avgQuality = Math.round(
    dataProducts.reduce((acc, product) => acc + product.qualityScore, 0) / dataProducts.length
  );

  return (
    <div className="space-y-10">
      <section className="panel rise-in rounded-lg px-7 py-12 md:px-12">
        <p className="eyebrow">Enterprise Information Marketplace</p>
        <h1 className="mt-4 max-w-4xl display-title">
          Trusted Data Products For Enterprise Decision-Making At Global Scale
        </h1>
        <p className="mt-4 max-w-3xl text-base body-muted">
          Discover, evaluate, and request governed data products in one central marketplace. Built for business,
          technology, and governance teams operating across domains.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/catalog" className="btn-primary">
            Explore Catalog
            <ArrowRight size={14} />
          </Link>
          <Link href="/producer" className="btn-secondary">
            Open Producer Dashboard
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <MetricCard label="Data Products" value={String(dataProducts.length)} hint="Across 7 enterprise domains" />
        <MetricCard label="Certified" value={String(certified)} hint="Ready for strategic reporting" />
        <MetricCard label="Average Quality" value={`${avgQuality}/100`} hint="Monitored by stewards" />
        <MetricCard label="Restricted Assets" value={String(restricted)} hint="Approval workflow enabled" />
      </section>

      <section className="section-muted rounded-lg border border-ink-200 px-6 py-8 md:px-8">
        <h2 className="section-title">Marketplace Journeys</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <article className="panel rounded-lg p-5">
            <div className="mb-4 inline-flex rounded-sm border border-ink-200 bg-white p-2 text-ink-800">
              <CheckCircle2 size={18} />
            </div>
            <h3 className="text-lg font-semibold text-ink-900">Consumer Journey</h3>
            <p className="mt-2 text-sm body-muted">
              Search the catalog, evaluate trust metadata, and request product access.
            </p>
            <Link href="/catalog" className="mt-4 inline-block btn-link">
              Open Catalog
            </Link>
          </article>

          <article className="panel rounded-lg p-5">
            <div className="mb-4 inline-flex rounded-sm border border-ink-200 bg-white p-2 text-ink-800">
              <Factory size={18} />
            </div>
            <h3 className="text-lg font-semibold text-ink-900">Producer Journey</h3>
            <p className="mt-2 text-sm body-muted">
              Publish new products, improve metadata quality, and track stewardship readiness.
            </p>
            <Link href="/producer" className="mt-4 inline-block btn-link">
              Open Producer Dashboard
            </Link>
          </article>

          <article className="panel rounded-lg p-5">
            <div className="mb-4 inline-flex rounded-sm border border-ink-200 bg-white p-2 text-ink-800">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-lg font-semibold text-ink-900">Governance Journey</h3>
            <p className="mt-2 text-sm body-muted">
              Review quality, lineage, and policy checks to maintain catalog trust.
            </p>
            <Link href="/governance" className="mt-4 inline-block btn-link">
              Open Governance Dashboard
            </Link>
          </article>
        </div>
      </section>

      <section className="panel rise-in rounded-lg p-6">
        <h2 className="section-title">Latest Stewardship Signals</h2>
        <div className="mt-5 space-y-2">
          {governanceReviews.map((review) => (
            <div key={review.id} className="rounded-md border border-ink-200 bg-white px-3 py-3 text-sm text-ink-700">
              <span className="font-semibold text-ink-900">{review.checkType}:</span> {review.detail}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
