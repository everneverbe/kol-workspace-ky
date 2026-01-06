"use client";

import { useEffect, useState } from "react";
import InfluencerList from "@/app/components/InfluencerList";
import { getInfluencers } from "@/app/lib/storage";
import { Influencer } from "@/app/types/influencer";

export default function InfluencersPage() {
  const [data, setData] = useState<Influencer[]>([]);

  useEffect(() => {
    setData(getInfluencers());
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Influencers</h1>
      <InfluencerList data={data} />
    </main>
  );
}
