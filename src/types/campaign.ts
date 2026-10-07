export interface CampaignPlate {
  id: string;
  code: string;
  title: string;
  chapter: string;
  chapterNumber: string;
  image: string;
  aspectRatio: string;
  look: string;
  textile: string;
  gsm: string;
  silhouette: string;
  architecturalContext: string;
  photographer: string;
  stylist: string;
  curatorNote: string;
  accentColor?: string;
}

export interface MaterialSpec {
  name: string;
  origin: string;
  composition: string;
  weight: string;
  tactileDescription: string;
  behavior: string;
}

export interface ChapterMeta {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  concept: string;
  quote: string;
}
