"use client";

import InfluencerList from "../components/InfluencerList";

export default function InfluencersPage() {
  return (
    <main>
      <InfluencerList data={[]} />
    </main>
  );
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
