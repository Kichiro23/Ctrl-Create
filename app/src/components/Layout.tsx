import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-fixed bg-gradient-to-br from-blue-300 via-indigo-100 to-purple-200 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
