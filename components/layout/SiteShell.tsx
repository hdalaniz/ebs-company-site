import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-clip bg-warm">
      <div className="page-grid" aria-hidden="true" />
      <div className="page-glow" aria-hidden="true" />
      <Header />
      <main className="relative z-10 flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  );
}
