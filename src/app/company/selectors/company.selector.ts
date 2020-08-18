import { createSelector } from "@ngrx/store";
import { selectCompanyState } from "../reducers";

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
