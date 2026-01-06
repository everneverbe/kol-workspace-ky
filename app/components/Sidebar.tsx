"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={{ width: 220, padding: 24, borderRight: "1px solid #eee", height: "100vh" }}>
      <h3>KOL Workspace</h3>
      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Link href="/">Dashboard</Link>
        <Link href="/influencers">Influencers</Link>
      </nav>
    </aside>
  );
}
