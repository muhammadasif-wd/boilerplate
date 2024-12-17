"use client";

import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

import initialState from "./state";

export const shareableSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setSelfLibraryInfo: (state, action) => {
      state.test = action.payload;
    },
  },
});

export const { setSelfLibraryInfo } = shareableSlice.actions;

export default shareableSlice.reducer;

export const shareableSelector = (state: RootState) => state.shareableSlice;
