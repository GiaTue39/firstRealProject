import { createSelector } from "@ngrx/store";
import { selectCompanyState, selectRenameState } from "../reducers";

export const selectIsLoadingCompanies = createSelector(
  selectCompanyState,
  (state) => state.loading
);

export const selectAllCompanies = createSelector(
  selectCompanyState,
  (state) => state.companies
);

export const selectCompanyById = createSelector(
  selectCompanyState,
  (state) => state.companyById
);

///////

export const selectAllRename = createSelector(
  selectRenameState,
  (state) => state.nameChanged
);

