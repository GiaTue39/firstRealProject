import { createSelector } from "@ngrx/store";
import { selectCreateCompanyState } from "../reducers";

export const selectIsCreateCompany = createSelector(
  selectCreateCompanyState,
  (state) => state.created
);

export const selectAllCompanies = createSelector(
  selectCreateCompanyState,
  (state) => state.company
);

export const selectDangGuiYeuCauLenServerDeTaoCongTy = createSelector(
  selectCreateCompanyState,
  (state) => state.dangGuiYeuCauLenServerDeTaoCongTy
);
