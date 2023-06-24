import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  showSidebar: boolean;
  pageView?: string;
}

const initialState: UIState = {
  showSidebar: true,
};

const UISlice = createSlice({
  initialState,
  name: "sliceUI",
  reducers: {
    setSidebarView(state, action: PayloadAction<boolean>) {
      state.showSidebar = action.payload;
    },
    setPage(state, action: PayloadAction<string>) {
      state.pageView = action.payload;
    },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
