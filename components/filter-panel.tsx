"use client";

import { ChangeEvent } from "react";
import { CatalogFilters } from "@/lib/catalog";

interface FilterPanelProps {
  filters: CatalogFilters;
  onFiltersChange: (next: CatalogFilters) => void;
  domains: string[];
  owners: string[];
  certifications: string[];
  accessTypes: string[];
}

export function FilterPanel({
  filters,
  onFiltersChange,
  domains,
  owners,
  certifications,
  accessTypes
}: FilterPanelProps) {
  const handleSelect =
    (field: keyof CatalogFilters) => (event: ChangeEvent<HTMLSelectElement>) => {
      onFiltersChange({ ...filters, [field]: event.target.value });
    };

  return (
    <aside className="panel rise-in h-fit rounded-lg p-5">
      <h2 className="section-title text-xl">Filter Products</h2>
      <div className="mt-5 space-y-4">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Domain</span>
          <select value={filters.domain} onChange={handleSelect("domain")} className="field-input">
            {domains.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Owner</span>
          <select value={filters.owner} onChange={handleSelect("owner")} className="field-input">
            {owners.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Certification</span>
          <select value={filters.certification} onChange={handleSelect("certification")} className="field-input">
            {certifications.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Access Type</span>
          <select value={filters.accessType} onChange={handleSelect("accessType")} className="field-input">
            {accessTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.1em] text-ink-600">Minimum Quality Score</span>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={filters.qualityMin}
            onChange={(event) => onFiltersChange({ ...filters, qualityMin: Number(event.target.value) })}
            className="w-full accent-slateblue-600"
          />
          <div className="mt-1 text-xs body-muted">{filters.qualityMin} and above</div>
        </label>
      </div>
    </aside>
  );
}
