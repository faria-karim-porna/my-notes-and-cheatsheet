import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  pageView?: string;
}

const initialState: UIState = {};

const UISlice = createSlice({
  initialState,
  name: "sliceUI",
  reducers: {
    setPage(state, action: PayloadAction<string>) {
      state.pageView = action.payload;
    },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
