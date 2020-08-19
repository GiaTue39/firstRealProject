import { createReducer, on } from "@ngrx/store";

import { UpdateEmployeeActions } from "../actions";
import { Employees } from "../models";

export const collectionFeatureKey = "collection";

export interface State {
  saved: boolean;
  error: string;
  employee: Employees;
}

const initialState: State = {
  saved: false,
  error: "",
  employee: null,
};

export const reducer = createReducer(
  initialState,

  on(UpdateEmployeeActions.updateEmployee, (state) => {
    return { ...state };
  }),

  on(UpdateEmployeeActions.updateEmployeeSuccess, (state, { employee }) => ({
    ...state,
    saved: true,
    employee,
  })),

  on(UpdateEmployeeActions.updateEmployeeFailure, (state, { error }) => ({
    ...state,
    saved: false,
    error,
  }))
);

export const isSaved = (state: State) => state.saved;
export const getUpdate = (state: State) => state.employee;
