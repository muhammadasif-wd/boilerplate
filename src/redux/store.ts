import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import APIHeader from "./APIHeader";
import shareableSlice from "./shared/action";

const store = configureStore({
  reducer: {
    [APIHeader.reducerPath]: APIHeader.reducer,
    shareableSlice,
  },
  devTools: process.env.NODE_ENV != "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([APIHeader.middleware]),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
