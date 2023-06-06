import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IReview {
  id: string,
  rating: number,
  title: string
};

interface ListReviewState {
  reviews?: IReview[]
}

const initialState: ListReviewState = {

};

export const slice = createSlice({
  initialState,
  name: 'listReviews',
  reducers: {
    fetch: () => { },
    clearData: (state) => {
      state.reviews = undefined;
    },
    loaded: (state, action: PayloadAction<{ data: IReview[] }>) => {
      state.reviews = action.payload.data;
    },
    loadError: (state) => {
      state.reviews = undefined;
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
