import { Influencer } from "@/app/types/influencer";

const KEY = "kol_influencers";

export function getInfluencers(): Influencer[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function saveInfluencers(data: Influencer[]) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
