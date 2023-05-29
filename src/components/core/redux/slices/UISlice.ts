import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  showModal?: boolean;
}

const initialState: UIState = {
  showModal: false,
};

const UISlice = createSlice({
  initialState,
  name: "sliceUI",
  reducers: {
    setModalView(state, action: PayloadAction<boolean>) {
      state.showModal = action.payload;
    },
  },
});
export const UIReducer = UISlice.reducer;
export const UIAction = UISlice.actions;
