"use client";

import { useEffect, useState } from "react";
import InfluencerList from "../components/InfluencerList";
import { getInfluencers } from "../lib/storage";
import { Influencer } from "../types/influencer";

export default function InfluencersPage() {
  const [data, setData] = useState<Influencer[]>([]);

  useEffect(() => {
    setData(getInfluencers());
  }, []);

  return <InfluencerList data={data} />;
}

export default function InfluencersPage() {
  return <h1>Influencers OK</h1>;
}

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
