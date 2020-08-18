import { createSelector } from "@ngrx/store";
import { selectUpdatedCompanyState } from "../reducers";

export const selectIsUpdateCompany = createSelector(
  selectUpdatedCompanyState,
  (state) => state.updated
);



