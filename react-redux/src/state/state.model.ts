export interface AppState {
  item: ReduxItem;
}

export interface ReduxItem {
  name: string;
  description: string;
  image: string;
  averageRating: number;
  seller: ReduxUser;
}

export interface ReduxUser {
  id: string;
  name: string;
}
