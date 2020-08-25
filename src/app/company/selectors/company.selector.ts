import { createSelector } from "@ngrx/store";
import { selectCompanyState, selectRenameState } from "../reducers";
import { Company } from '../models/company';
import { companyAdapter } from '../reducers/company.reducer';

export const {
  selectIds: selectCompanyByIds,
  selectEntities: selectEntitiesCompany,
  selectAll: selectAllCompany,
  selectTotal: selectTotalCompany,
} = companyAdapter.getSelectors(selectCompanyState);

export const selectIsLoadingCompanies = createSelector(
  selectCompanyState,
  (state) => state.loading
);

export const selectAllCompanies = createSelector(
  selectCompanyState,
  (state) : Company[] => {
    console.log(state);
    return state.companies;
  }
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

