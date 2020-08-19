import { createSelector } from "@ngrx/store";
import { selectDeletedCompanyState } from "../reducers";

export const selectIsDeleteCompany = createSelector(
  selectDeletedCompanyState,
  (state) => state.deleted
);


