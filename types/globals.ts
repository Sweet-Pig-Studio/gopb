export interface Location {
  id: string;
  lat: number;
  long: number;
  category: string;
  tags: string[];
  cuisine: string[];
  name: string;
  dateUpdated: string;
  plantBasedLevel: string;
  menu: string[];
  address: string;
  editorRating: number;
  userRating: number;
}