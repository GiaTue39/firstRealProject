import { createReducer, on } from "@ngrx/store";

import { CreateEmployeeActions, DeleteEmployeeActions } from "../actions";
import { Employees } from "../models";

export const collectionFeatureKey = "collection";

export interface State {
  deleted: boolean;
  error: string;
}

const initialState: State = {
  deleted: false,

  error: "",
};

export const reducer = createReducer(
  initialState,

  on(DeleteEmployeeActions.deleteEmployee, (state) => {
    return { ...state };
  }),

  on(DeleteEmployeeActions.deleteEmployeeSuccess, (state) => ({
    ...state,
    deleted: true,
  })),

  on(DeleteEmployeeActions.deleteEmployeeFailure, (state, { error }) => ({
    ...state,
    deleted: false,
    error,
  }))
);

export const isDeleted = (state: State) => state.deleted;
