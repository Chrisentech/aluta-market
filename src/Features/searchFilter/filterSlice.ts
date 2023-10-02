import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  selectedOptions: { [category: string]: string[] };
}

const initialState: FilterState = {
  selectedOptions: {},
};

const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateSelectedOptions: (state, action: PayloadAction<{ category: string; options: string[] }>) => {
      const { category, options } = action.payload;
      state.selectedOptions[category] = options;
    },
  },
});

export const { updateSelectedOptions } = filter.actions;
export default filter.reducer;
