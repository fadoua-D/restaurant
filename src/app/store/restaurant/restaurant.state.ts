export interface RestaurantState {
  restaurants: any[];
  loading: boolean;
  error: string | null;
}

const initialState: RestaurantState = {
  restaurants: [],
  loading: false,
  error: null
};
