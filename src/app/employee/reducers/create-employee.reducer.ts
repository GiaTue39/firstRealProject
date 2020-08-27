import { createReducer, on } from '@ngrx/store';

import { CreateEmployeeActions } from '../actions';
import { Employees } from '../models';

export const collectionFeatureKey = 'collection';

export interface State {
  created: boolean;
  employee: Employees;
  error: string;
  creating: boolean;
}

const initialState: State = {
  created: false,
  employee: null,
  error: '',
  creating: false,
};

export const reducer = createReducer(
  initialState,

  on(CreateEmployeeActions.createEmployee, (state) => {
    return { ...state, creating: true };
  }),

  on(CreateEmployeeActions.createEmployeesSuccess, (state, { employee }) => ({
    ...state,
    created: true,
    creating: false,
    employee,
  })),

  on(CreateEmployeeActions.createEmployeesFailure, (state, { error }) => ({
    ...state,
    created: false,
    creating: false,
    error,
  }))
);

export const isCreated = (state: State) => state.created;

export const getEmployee = (state: State) => state.employee;
