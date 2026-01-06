"use client";
import { useState } from "react";
import { Influencer } from "@/types/influencer";

export default function InfluencerForm({ onAdd }: { onAdd: (i: Influencer) => void }) {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState<Influencer["platform"]>("Instagram");
  const [rate, setRate] = useState(0);

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <select onChange={e => setPlatform(e.target.value as any)}>
        <option>Instagram</option>
        <option>TikTok</option>
        <option>YouTube</option>
      </select>
      <input type="number" placeholder="Rate" onChange={e => setRate(+e.target.value)} />
      <button onClick={() => onAdd({ id: crypto.randomUUID(), name, platform, rate })}>
        Add
      </button>
    </div>
  );
}
