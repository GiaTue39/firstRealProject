import { createAction, props } from "@ngrx/store";
import { DetailCompanyModel } from '../models/detailcompany';

export const loadCompanies = createAction(
  "[Company Page] Load Companies",
  props<{}>()
);

export const loadCompaniesSuccess = createAction(
  "[Company Page] Load Companies Success",
  props<{ companies: any }>()
);

export const loadCompaniesFailure = createAction(
  "[Company Page] Load Companies Failure",
  props<{ error: any }>()
);

export const loadCompanyById = createAction(
  "[Company Page] Load Companies By Id",
  props<{ id: string }>()
);

export const loadCompanyByIdSuccess = createAction(
  "[Company Page] Load Companies By Id Success",
  props<{ company: DetailCompanyModel }>()
);

export const loadCompanyByIdFailure = createAction(
  "[Company Page] Load Companies By Id Failure",
  props<{ error: any }>()
);
/////////////
export const DoiTen = createAction(
  "[Company Page] Doi Ten",
);

export const DoiTenSuccess = createAction(
  "[Company Page] Doi Ten Success",
  props<{ name: string }>()
);

export const DoiTenFailure = createAction(
  "[Company Page] Doi Ten Failure",
  props<{ error: any }>()
);