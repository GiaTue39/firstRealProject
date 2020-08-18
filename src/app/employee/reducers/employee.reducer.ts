import { createReducer, on } from "@ngrx/store";

import { EmployeeActions } from "../actions";
import { Employees, DetailEmployeeModel } from "../models";

export const collectionFeatureKey = "collection";

export interface State {
  loaded: boolean;
  loading: boolean;
  employees: Array<Employees>;
  error: string;
  employeeID: DetailEmployeeModel;
}

const initialState: State = {
  loaded: false,
  loading: false,
  employees: [],
  error: "",
  employeeID: undefined,
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
  })),

  on(EmployeeActions.getEmployeesById, (state) => {
    return { ...state, loading: true };
  }),

  on(EmployeeActions.getEmployeesByIdSuccess, (state, { employees }) => ({
    ...state,
    loaded: true,
    loading: false,
    employeeID: employees,
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

export const getEmployeeByID = (state: State) => state.employeeID;
