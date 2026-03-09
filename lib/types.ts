export type Domain =
  | "Customer"
  | "Sales"
  | "Finance"
  | "Procurement"
  | "Supply Chain"
  | "Product"
  | "HR";

export type CertificationStatus = "Certified" | "In Review" | "Draft";

export type AccessType = "Open" | "Internal Approval" | "Restricted";

export type Sensitivity = "Public" | "Internal" | "Confidential" | "Restricted";

export type RequestStatus = "Pending" | "Approved" | "Needs Info" | "Rejected";

export interface DataProduct {
  id: string;
  name: string;
  businessDescription: string;
  domain: Domain;
  owner: string;
  steward: string;
  sourceSystems: string[];
  updateFrequency: string;
  sla: string;
  qualityScore: number;
  certificationStatus: CertificationStatus;
  sensitivityClassification: Sensitivity;
  accessType: AccessType;
  sampleFields: string[];
  sampleUseCases: string[];
  relatedProducts: string[];
  lineageSummary: string;
  policyTags: string[];
  lastUpdated: string;
}

export interface AccessRequest {
  id: string;
  productId: string;
  requester: string;
  team: string;
  purpose: string;
  requestedAt: string;
  status: RequestStatus;
  approver: string;
  notes?: string;
}

export interface GovernanceReview {
  id: string;
  productId: string;
  checkType: "Quality" | "Lineage" | "Policy";
  status: "Pass" | "Warning" | "Fail";
  detail: string;
  lastChecked: string;
}
