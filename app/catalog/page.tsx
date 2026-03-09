"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { FilterPanel } from "@/components/filter-panel";
import { ProductCard } from "@/components/product-card";
import { dataProducts } from "@/data/mockData";
import { defaultFilters, filterProducts, uniqueValues } from "@/lib/catalog";

export default function CatalogPage() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(defaultFilters);

  const domains = useMemo(() => uniqueValues(dataProducts.map((product) => product.domain)), []);
  const owners = useMemo(() => uniqueValues(dataProducts.map((product) => product.owner)), []);
  const certifications = useMemo(
    () => uniqueValues(dataProducts.map((product) => product.certificationStatus)),
    []
  );
  const accessTypes = useMemo(() => uniqueValues(dataProducts.map((product) => product.accessType)), []);

  const filtered = useMemo(() => filterProducts(dataProducts, query, filters), [query, filters]);

  return (
    <div className="space-y-7">
      <section className="panel rise-in rounded-lg px-7 py-10">
        <p className="eyebrow">Catalog</p>
        <h1 className="mt-3 section-title">Discover Enterprise Data Products</h1>
        <p className="mt-2 text-sm body-muted">
          Search domain-ready products and evaluate quality, certification, and governance metadata.
        </p>

        <div className="mt-6 flex items-center gap-2 rounded-sm border border-ink-300 bg-white px-3 py-2">
          <Search size={16} className="text-ink-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, owner, domain, or use case"
            className="w-full border-0 bg-transparent text-sm text-ink-900 outline-none"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 xl:grid-cols-[300px_1fr]">
        <FilterPanel
          filters={filters}
          onFiltersChange={setFilters}
          domains={domains}
          owners={owners}
          certifications={certifications}
          accessTypes={accessTypes}
        />

        <div>
          <div className="mb-3 text-sm body-muted">Showing {filtered.length} of {dataProducts.length} products</div>
          <div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
