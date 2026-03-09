"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Database, FileCheck2, Home, LayoutDashboard, ShieldCheck } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Marketplace", icon: Home },
  { href: "/catalog", label: "Catalog", icon: Database },
  { href: "/producer", label: "Producer", icon: LayoutDashboard },
  { href: "/governance", label: "Governance", icon: ShieldCheck },
  { href: "/my-requests", label: "My Requests", icon: FileCheck2 }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="page-shell min-h-screen">
      <div className="border-b border-ink-200 bg-ink-900 px-4 py-2 text-xs text-white md:px-8">
        Global Data Platform | Enterprise Information Marketplace Prototype
      </div>

      <header className="border-b border-ink-200 bg-white">
        <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-4 py-5 md:px-8">
          <Link href="/" className="rounded-sm px-2 py-1">
            <div className="flex items-center bg-white px-5 py-3">
              <Image
                src="/ABB_logo.svg.png"
                alt="ABB"
                width={156}
                height={52}
                priority
                className="h-10 w-auto"
              />
            </div>
          </Link>
          <div className="chip chip-accent">Prototype</div>
        </div>

        <div className="mx-auto w-full max-w-[1360px] px-4 pb-4 md:px-8">
          <nav className="flex flex-wrap gap-2 border-t border-ink-200 pt-4">
            {navItems.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "inline-flex items-center gap-2 rounded-sm border px-3 py-2 text-sm",
                    active
                      ? "border-slateblue-600 bg-slateblue-50 text-slateblue-800"
                      : "border-ink-200 text-ink-700 hover:border-ink-300 hover:text-ink-900"
                  )}
                >
                  <Icon size={15} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1360px] space-y-10 px-4 py-10 md:px-8">{children}</main>
    </div>
  );
}

