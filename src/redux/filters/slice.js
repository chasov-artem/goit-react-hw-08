import { createSlice, createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "./selectors";
import { selectContacts } from "../contacts/selectors";

const initialState = {
  filters: {
    name: "",
  },
};

const sliceFilter = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeSearch: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  }
);

export const { changeSearch } = sliceFilter.actions;
export const filtersReducer = sliceFilter.reducer;
