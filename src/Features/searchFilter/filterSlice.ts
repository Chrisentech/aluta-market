import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  selectedOptions: string[];
}

const initialState: FilterState = {
  selectedOptions: [],
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateSelectedOptions: (state, action: PayloadAction<string>) => {
      state.selectedOptions = [...state.selectedOptions, ...action.payload];
    },
  },
});

export const { updateSelectedOptions } = filter.actions;
export default filter.reducer;
