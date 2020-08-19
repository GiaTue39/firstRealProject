import { createReducer, on } from "@ngrx/store";
import { CreateCompanyActions } from "../actions";
import { Company } from "../models/company";

export const collectionFeatureKey = "collection";
export interface State {
  created: boolean;
  company: Company;
  error: string;
}

const initialState: State = {
  created: false,
  company: null,
  error: "",
};

export const reducer = createReducer(
  initialState,

  on(CreateCompanyActions.createCompany, (state) => ({
    ...state
  })),

  on(CreateCompanyActions.createCompanySuccess, (state, { company }) => ({
    ...state,
    created: true,
    company,
  })),

  on(CreateCompanyActions.createCompanyFailure, (state, { error }) => ({
    ...state,
    created: false,
    error,
  }))
);

export const isCreateCompany = (state: State) => state.created;
export const getCompany = (state: State) => state.company;
