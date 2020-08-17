import { createAction, props } from "@ngrx/store";
/**
 * Load Collection Action
 */
export const loadCompanies = createAction("[Company Page] Load Companies");
export const loadCompaniesSuccess = createAction(
  "[Company Page] Load Companies Success",
  props<{ Companies: any }>()
);