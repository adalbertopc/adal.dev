export interface Project {
  id: string;
  name: string;
  url: string;
  deployUrl?: string;
  description?: string;
  openGraphImageUrl: string;
  stars?: number;
  topics: string[];
}
