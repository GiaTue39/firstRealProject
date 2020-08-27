import { createReducer, on } from '@ngrx/store';
import { DeleteEmployeeActions } from '../actions';

export const collectionFeatureKey = 'collection';

export interface State {
  deleted: boolean;
}

const initialState: State = {
  deleted: false,
};

export const reducer = createReducer(
  initialState,

  on(DeleteEmployeeActions.deleteEmployee, (state) => {
    return { ...state };
  }),

  on(DeleteEmployeeActions.deleteEmployeeSuccess, (state, { id }) => ({
    ...state,
    deleted: true,
  })),

  on(DeleteEmployeeActions.deleteEmployeeFailure, (state, { error }) => ({
    ...state,
    deleted: false,
    error,
  }))
);

export const isCreated = (state: State) => state.deleted;
