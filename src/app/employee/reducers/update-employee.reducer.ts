import { createReducer, on } from '@ngrx/store';

import { UpdateEmployeeActions } from '../actions';
import { DetailEmployeeModel } from '../models';

export const collectionFeatureKey = 'collection';

export interface State {
  error: string;
  employee: DetailEmployeeModel;
  updating: boolean;
}

const initialState: State = {
  error: '',
  employee: null,
  updating: false,
};

export const reducer = createReducer(
  initialState,

  on(UpdateEmployeeActions.updateEmployee, (state) => {
    return { ...state, updating: true };
  }),

  on(UpdateEmployeeActions.updateEmployeeSuccess, (state, { employee }) => ({
    ...state,
    employee,
    updating: false,
  })),

  on(UpdateEmployeeActions.updateEmployeeFailure, (state, { error }) => ({
    ...state,
    error,
    updating: false,
  }))
);

export const getUpdate = (state: State) => state.employee;
