import { createAction, props } from "@ngrx/store";

export const deleteCompany = createAction("[Delete Company Page] Delete Company",
  props<{ id: string }>()
);

export const deleteCompanySuccess = createAction(
  "[Delete Company Page] Delete Company Success",
  props<{ id: string }>()
);

export const deleteCompanyFailure = createAction(
  "[Delete Company Page] Delete Company Failure",
  props<{ error: any }>()
);
