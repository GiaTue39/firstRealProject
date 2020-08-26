import { createSelector } from "@ngrx/store";
import { selectUpdatedCompanyState } from "../reducers";

export const selectIsUpdateCompany = createSelector(
  selectUpdatedCompanyState,
  (state) => state.updated
);

export const selectUpdating = createSelector(
  selectUpdatedCompanyState,
  (state) => state.updating
);


