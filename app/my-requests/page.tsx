import Link from "next/link";
import { RequestStatusBadge } from "@/components/badges";
import { accessRequests, dataProducts } from "@/data/mockData";

export default function MyRequestsPage() {
  return (
    <div className="space-y-7">
      <section className="panel rise-in rounded-lg px-7 py-10">
        <p className="eyebrow">Consumer Workspace</p>
        <h1 className="mt-3 section-title">My Access Requests</h1>
        <p className="mt-2 text-sm body-muted">
          Track approval status, approver feedback, and next actions for requested products.
        </p>
      </section>

      <section className="section-muted rounded-lg border border-ink-200 p-6">
        <div className="space-y-3">
          {accessRequests.map((request) => {
            const product = dataProducts.find((item) => item.id === request.productId);

            return (
              <article key={request.id} className="panel rounded-md p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-ink-900">{product?.name ?? request.productId}</p>
                    <p className="text-xs body-muted">Request ID: {request.id} | Submitted: {request.requestedAt}</p>
                  </div>
                  <RequestStatusBadge status={request.status} />
                </div>

                <p className="mt-3 text-sm text-ink-700">
                  <span className="font-semibold text-ink-900">Purpose:</span> {request.purpose}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-600">
                  <span>Team: {request.team}</span>
                  <span>Approver: {request.approver}</span>
                  {product && (
                    <Link href={`/catalog/${product.id}`} className="btn-link">
                      Open Product
                    </Link>
                  )}
                </div>

                {request.notes && (
                  <div className="mt-3 rounded-sm border border-ink-200 bg-ink-50 px-3 py-2 text-xs text-ink-700">{request.notes}</div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
