import { DataProduct } from "@/lib/types";

export interface CatalogFilters {
  domain: string;
  owner: string;
  certification: string;
  accessType: string;
  qualityMin: number;
}

export const defaultFilters: CatalogFilters = {
  domain: "All",
  owner: "All",
  certification: "All",
  accessType: "All",
  qualityMin: 0
};

export function filterProducts(products: DataProduct[], query: string, filters: CatalogFilters) {
  const normalizedQuery = query.trim().toLowerCase();

  return products.filter((product) => {
    const textMatch =
      normalizedQuery.length === 0 ||
      [
        product.name,
        product.businessDescription,
        product.domain,
        product.owner,
        product.steward,
        product.sampleUseCases.join(" ")
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    const domainMatch = filters.domain === "All" || product.domain === filters.domain;
    const ownerMatch = filters.owner === "All" || product.owner === filters.owner;
    const certMatch = filters.certification === "All" || product.certificationStatus === filters.certification;
    const accessMatch = filters.accessType === "All" || product.accessType === filters.accessType;
    const qualityMatch = product.qualityScore >= filters.qualityMin;

    return textMatch && domainMatch && ownerMatch && certMatch && accessMatch && qualityMatch;
  });
}

export function uniqueValues(values: string[]) {
  return ["All", ...Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))];
}
