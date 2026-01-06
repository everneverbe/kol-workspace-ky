"use client";

import { Influencer } from "@/app/types/influencer";

export default function InfluencerList({ data }: { data: Influencer[] }) {
  if (data.length === 0) return <p>No influencers yet</p>;

  return (
    <ul>
      {data.map((inf, idx) => (
        <li key={idx}>
          {inf.name} — {inf.platform}
        </li>
      ))}
    </ul>
  );
}
