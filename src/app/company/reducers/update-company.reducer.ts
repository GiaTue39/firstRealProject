import { createReducer, on } from "@ngrx/store";
import { UpdateCompanyActions } from "../actions";
import { Company } from '../models/company';
export const collectionFeatureKey = "collection";
export interface State {
  updated: boolean;
  error: string;
  company: Company;
  updating: boolean;
}
const initialState: State = {
  updated: false,
  error: "",
  company: null,
  updating: false,
};
export const reducer = createReducer(
  initialState,

  on(UpdateCompanyActions.updateCompany, (state) => ({
    ...state,
    updating: true,
  })),

  on(UpdateCompanyActions.updateCompanySuccess, (state, { company }) => ({
    ...state,
    updated: true,
    updating: false,
    company
  })),

  on(UpdateCompanyActions.updateCompanyFailure, (state, { error }) => ({
    ...state,
    updated: false,
    updating: false,
    error,
  }))
);
export const isUpdateCompany = (state: State) => state.updated;

