import { createAction, props } from "@ngrx/store";
import { Company } from "../models/company";

export const updateCompany = createAction("[Update Company Page] Update Company",
  props<{ id: string, company: Company }>()
);

export const updateCompanySuccess = createAction(
  "[Update Company Page] Update Company Success",
  props<{ company: Company }>()
);

export const updateCompanyFailure = createAction(
  "[Update Company Page] Update Company Failure",
  props<{ error: any }>()
);
