import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SliceState = {
  status: string;
};

const initialState: SliceState = { status: "All" };
const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
});

export const { changeStatus } = filtersSlice.actions;
export default filtersSlice.reducer;
