import Link from "next/link";
import { ArrowRight, Building2, Clock3, ShieldCheck } from "lucide-react";
import { DataProduct } from "@/lib/types";
import { CertificationBadge, SensitivityBadge } from "@/components/badges";
import { QualityBar } from "@/components/quality-bar";

export function ProductCard({ product }: { product: DataProduct }) {
  return (
    <article className="panel rise-in rounded-lg p-6">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow">{product.domain}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink-900">{product.name}</h3>
        </div>
        <CertificationBadge status={product.certificationStatus} />
      </div>

      <p className="mb-5 text-sm body-muted">{product.businessDescription}</p>

      <div className="mb-5 grid grid-cols-1 gap-2 text-xs text-ink-700 sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <Building2 size={14} className="text-ink-500" />
          <span>Owner: {product.owner}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 size={14} className="text-ink-500" />
          <span>{product.updateFrequency}</span>
        </div>
        <div className="flex items-center gap-2 sm:col-span-2">
          <ShieldCheck size={14} className="text-ink-500" />
          <span>SLA: {product.sla}</span>
        </div>
      </div>

      <div className="mb-5">
        <QualityBar score={product.qualityScore} />
      </div>

      <div className="mb-5 flex items-center justify-between">
        <SensitivityBadge value={product.sensitivityClassification} />
        <p className="text-xs body-muted">Access: {product.accessType}</p>
      </div>

      <Link href={`/catalog/${product.id}`} className="btn-primary">
        Open Product
        <ArrowRight size={14} />
      </Link>
    </article>
  );
}
