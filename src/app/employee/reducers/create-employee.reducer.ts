import { createReducer, on } from "@ngrx/store";

import { CreateEmployeeActions } from "../actions";
import { Employees } from "../models";

export const collectionFeatureKey = "collection";

export interface State {
  created: boolean;
  employees: Employees;
  error: string;
}

const initialState: State = {
  created: false,
  employees: null,
  error: "",
};

export const reducer = createReducer(
  initialState,

  on(CreateEmployeeActions.createEmployee, (state) => {
    return { ...state };
  }),

  on(CreateEmployeeActions.createEmployeesSuccess, (state, { employee }) => ({
    ...state,
    created: true,
    employee,
  })),

  on(CreateEmployeeActions.createEmployeesFailure, (state, { error }) => ({
    ...state,
    created: false,
    error,
  }))
);

export const isCreated = (state: State) => state.created;

export const getEmployee = (state: State) => state.employees;
