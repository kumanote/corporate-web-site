import { links } from "../config";

export interface Activity {
  avatar_image_url: string | null;
  banner_image_url: string | null;
  tags: Array<string> | null;
  slug: string;
  project_id: string | null;
  title: string;
  subtitle: string | null;
  content: string;
  start_date: string;
  end_date: string;
  published_at: string | null;
  page_view: number | null;
}

export interface ActivitySearchResult {
  total: number;
  list: Array<Activity>;
}

export async function fetchLatestActivities(limit = 3): Promise<Activity[]> {
  const baseUrl = import.meta.env.DEV ? "/api/v1" : `${links.blogApi}`;
  const params = new URLSearchParams({
    type: "latest",
    skip: "0",
    limit: String(limit),
  });

  const res = await fetch(`${baseUrl}/activities/search?${params}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch activities: ${res.status}`);
  }
  const data: ActivitySearchResult = await res.json();
  return data.list;
}
