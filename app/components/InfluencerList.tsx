import { Influencer } from "@/types/influencer";

export default function InfluencerList({ data }: { data: Influencer[] }) {
  if (!data.length) return <p>No influencer yet</p>;

  return (
    <ul>
      {data.map(i => (
        <li key={i.id}>
          {i.name} — {i.platform} — Rp{i.rate.toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
