# Enterprise Information Marketplace Prototype

Frontend-only prototype of an enterprise-wide information marketplace for reusable data products.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Local mocked data only (no backend, no database, no auth provider)

## What this prototype demonstrates

- Centralized marketplace landing experience for data products
- Catalog search and filtering by:
  - domain
  - owner
  - quality score threshold
  - certification status
  - access type
- Data product detail pages with trust, governance, and metadata context
- Mocked request-access flow and statuses
- Producer dashboard with mocked publish/update workflow
- Governance/steward dashboard with mocked quality/lineage/policy checks
- My requests page for tracking request lifecycle

## Included mock data

`data/mockData.ts` seeds:

- 12 realistic data products across:
  - Customer
  - Sales
  - Finance
  - Procurement
  - Supply Chain
  - Product
  - HR
- Product metadata includes:
  - name
  - business description
  - domain
  - owner
  - steward
  - source systems
  - update frequency
  - SLA
  - quality score
  - certification status
  - sensitivity classification
  - sample fields
  - sample use cases
  - related products
  - lineage summary
  - policy tags
- Mock access requests and governance checks

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Key routes

- `/` - marketplace landing page
- `/catalog` - searchable/filterable product catalog
- `/catalog/[id]` - product detail page
- `/request-access?productId=<id>` - request access flow
- `/producer` - producer dashboard
- `/governance` - governance/steward dashboard
- `/my-requests` - request tracking page

## Notes

- This is intentionally a prototype with mocked workflows and local state.
- No persistence is implemented.
- The UI is optimized for executive/business stakeholder demos and can be extended with real APIs later.
