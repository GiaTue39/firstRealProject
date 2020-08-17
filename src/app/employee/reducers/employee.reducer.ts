import { createReducer, on } from "@ngrx/store";

import { EmployeeActions } from "../actions";
import { Employees } from "../models";

export const collectionFeatureKey = "collection";

export interface State {
  loaded: boolean;
  loading: boolean;
  employees: Array<Employees>;
  error: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  employees: [],
  error: "",
};

export const reducer = createReducer(
  initialState,

  on(EmployeeActions.loadEmployees, (state) => {
    return { ...state, loading: true };
  }),

  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    loaded: true,
    loading: false,
    employees,
  })),

  on(EmployeeActions.loadEmployeesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  }))
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;
