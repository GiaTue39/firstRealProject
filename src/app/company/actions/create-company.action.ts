import { createAction, props } from "@ngrx/store";
import { Company } from "../models/company";

export const createCompany = createAction("[Create Company Page] Create Company",
  props<{ company: Company }>()
);

export const createCompanySuccess = createAction(
  "[Create Company Page] Create Company Success",
  props<{ company: Company }>()
);

export const createCompanyFailure = createAction(
  "[Create Company Page] Create Company Failure",
  props<{ error: any }>()
);
