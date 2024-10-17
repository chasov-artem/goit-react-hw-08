import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authSlice,
  },
});
