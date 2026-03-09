import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock3, Database, FileStack, Shield } from "lucide-react";
import { CertificationBadge, SensitivityBadge } from "@/components/badges";
import { QualityBar } from "@/components/quality-bar";
import { dataProducts } from "@/data/mockData";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = dataProducts.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = dataProducts.filter((item) => product.relatedProducts.includes(item.id));

  return (
    <div className="space-y-7">
      <section className="panel rise-in rounded-lg px-7 py-10">
        <p className="eyebrow">{product.domain} Product</p>
        <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
          <h1 className="section-title">{product.name}</h1>
          <CertificationBadge status={product.certificationStatus} />
        </div>
        <p className="mt-3 max-w-4xl text-sm body-muted">{product.businessDescription}</p>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-md border border-ink-200 p-3">
            <p className="text-xs uppercase tracking-[0.1em] text-ink-500">Owner</p>
            <p className="mt-1 text-sm font-semibold text-ink-900">{product.owner}</p>
          </div>
          <div className="rounded-md border border-ink-200 p-3">
            <p className="text-xs uppercase tracking-[0.1em] text-ink-500">Steward</p>
            <p className="mt-1 text-sm font-semibold text-ink-900">{product.steward}</p>
          </div>
          <div className="rounded-md border border-ink-200 p-3">
            <p className="text-xs uppercase tracking-[0.1em] text-ink-500">Update Frequency</p>
            <p className="mt-1 text-sm font-semibold text-ink-900">{product.updateFrequency}</p>
          </div>
          <div className="rounded-md border border-ink-200 p-3">
            <p className="text-xs uppercase tracking-[0.1em] text-ink-500">SLA</p>
            <p className="mt-1 text-sm font-semibold text-ink-900">{product.sla}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 xl:grid-cols-2">
          <div className="rounded-md border border-ink-200 p-4">
            <QualityBar score={product.qualityScore} />
            <div className="mt-3 flex items-center gap-2 text-xs text-ink-700">
              <Shield size={14} />
              <span>Access type: {product.accessType}</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <SensitivityBadge value={product.sensitivityClassification} />
            </div>
          </div>
          <div className="rounded-md border border-ink-200 p-4 text-sm text-ink-700">
            <p className="mb-2 font-semibold text-ink-900">Lineage Summary</p>
            <p className="body-muted">{product.lineageSummary}</p>
            <p className="mb-1 mt-4 font-semibold text-ink-900">Policy tags</p>
            <div className="flex flex-wrap gap-2">
              {product.policyTags.map((tag) => (
                <span key={tag} className="chip chip-neutral">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Link href={`/request-access?productId=${product.id}`} className="btn-primary mt-6">
          Request Access
          <ArrowRight size={14} />
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <article className="panel rise-in rounded-lg p-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-ink-900">
            <Database size={16} />
            Source Systems
          </h2>
          <ul className="space-y-2 text-sm text-ink-700">
            {product.sourceSystems.map((source) => (
              <li key={source} className="rounded-sm border border-ink-200 px-3 py-2">
                {source}
              </li>
            ))}
          </ul>
        </article>

        <article className="panel rise-in rounded-lg p-6">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-ink-900">
            <FileStack size={16} />
            Sample Fields
          </h2>
          <ul className="flex flex-wrap gap-2 text-xs text-ink-700">
            {product.sampleFields.map((field) => (
              <li key={field} className="chip chip-neutral">
                {field}
              </li>
            ))}
          </ul>

          <h3 className="mb-2 mt-5 text-sm font-semibold text-ink-900">Sample use cases</h3>
          <ul className="space-y-2 text-sm text-ink-700">
            {product.sampleUseCases.map((useCase) => (
              <li key={useCase} className="rounded-sm border border-ink-200 px-3 py-2">
                {useCase}
              </li>
            ))}
          </ul>

          <p className="mt-4 flex items-center gap-2 text-xs text-ink-600">
            <Clock3 size={14} />
            Last metadata update: {product.lastUpdated}
          </p>
        </article>
      </section>

      <section className="section-muted rounded-lg border border-ink-200 p-6">
        <h2 className="text-lg font-semibold text-ink-900">Related Products</h2>
        <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              href={`/catalog/${related.id}`}
              className="rounded-md border border-ink-300 bg-white px-4 py-3 text-sm transition hover:border-slateblue-400"
            >
              <p className="font-semibold text-ink-900">{related.name}</p>
              <p className="text-xs body-muted">{related.domain}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
