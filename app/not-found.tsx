import Link from "next/link";

export default function NotFound() {
  return (
    <div className="panel rise-in rounded-lg p-8">
      <p className="eyebrow">Not Found</p>
      <h1 className="mt-3 text-3xl font-semibold text-ink-900">Data product not found</h1>
      <p className="mt-2 text-sm body-muted">The requested data product does not exist in this prototype catalog.</p>
      <Link href="/catalog" className="btn-primary mt-5">
        Return to Catalog
      </Link>
    </div>
  );
}
