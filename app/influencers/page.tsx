"use client";

import { useEffect, useState } from "react";
import { Influencer } from "@/types/influencer";
import { load, save } from "@/lib/storage";
import InfluencerForm from "@/features/influencers/InfluencerForm";
import InfluencerList from "@/features/influencers/InfluencerList";

export default function InfluencersPage() {
  const [data, setData] = useState<Influencer[]>([]);

  useEffect(() => {
    setData(load("influencers", []));
  }, []);

  const add = (i: Influencer) => {
    const updated = [...data, i];
    setData(updated);
    save("influencers", updated);
  };

  return (
    <>
      <h1>Influencers</h1>
      <InfluencerForm onAdd={add} />
      <InfluencerList data={data} />
    </>
  );
}
