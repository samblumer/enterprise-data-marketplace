import clsx from "clsx";
import { CertificationStatus, RequestStatus, Sensitivity } from "@/lib/types";

export function CertificationBadge({ status }: { status: CertificationStatus }) {
  return (
    <span
      className={clsx(
        "chip",
        status === "Certified" && "chip-success",
        status === "In Review" && "chip-warning",
        status === "Draft" && "chip-neutral"
      )}
    >
      {status}
    </span>
  );
}

export function SensitivityBadge({ value }: { value: Sensitivity }) {
  return (
    <span
      className={clsx(
        "chip",
        value === "Public" && "chip-success",
        value === "Internal" && "chip-neutral",
        value === "Confidential" && "chip-warning",
        value === "Restricted" && "chip-danger"
      )}
    >
      {value}
    </span>
  );
}

export function RequestStatusBadge({ status }: { status: RequestStatus }) {
  return (
    <span
      className={clsx(
        "chip",
        status === "Approved" && "chip-success",
        status === "Pending" && "chip-warning",
        status === "Needs Info" && "chip-accent",
        status === "Rejected" && "chip-danger"
      )}
    >
      {status}
    </span>
  );
}
