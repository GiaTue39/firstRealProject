import { createReducer, on } from "@ngrx/store";
import { UpdateCompanyActions } from "../actions";
import { Company } from '../models/company';
export const collectionFeatureKey = "collection";
export interface State {
  updated: boolean;
  error: string;
  company: Company;
}
const initialState: State = {
  updated: false,
  error: "",
  company: null
};
export const reducer = createReducer(
  initialState,

  on(UpdateCompanyActions.updateCompany, (state) => ({
    ...state
  })),

  on(UpdateCompanyActions.updateCompanySuccess, (state, { company }) => ({
    ...state,
    updated: true,
    company
  })),

  on(UpdateCompanyActions.updateCompanyFailure, (state, { error }) => ({
    ...state,
    updated: false,
    error,
  }))
);
export const isUpdateCompany = (state: State) => state.updated;

