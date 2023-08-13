import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type VisibilityState = {
    isStatsVisible: boolean;
    isPayoutsVisible: boolean;
};

const initialState: VisibilityState = {
    isStatsVisible: true,
    isPayoutsVisible: true
};

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    toggleStatsVisibility: (state) => {
      state.isStatsVisible = !state.isStatsVisible;
    },
    togglePayoutsVisibility: (state) => {
      state.isPayoutsVisible = !state.isPayoutsVisible;
    }
  }
});

export const { toggleStatsVisibility, togglePayoutsVisibility } = visibilitySlice.actions;
export default visibilitySlice.reducer;
