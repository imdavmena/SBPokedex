export interface ResponseDataModel {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedAPIResourceModel[];
}

export interface NamedAPIResourceModel {
  name: string;
  url: string;
}
