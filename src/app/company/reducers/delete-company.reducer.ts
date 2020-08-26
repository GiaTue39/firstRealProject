import { createReducer, on } from "@ngrx/store";
import { DeleteCompanyActions } from "../actions";
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

  on(DeleteCompanyActions.deleteCompany, (state) => ({
    ...state
  })),

  on(DeleteCompanyActions.deleteCompanySuccess, (state, { id }) => ({
    ...state,
    deleted: true
  })),

  on(DeleteCompanyActions.deleteCompanyFailure, (state, { error }) => ({
    ...state,
    deleted: false,
    error,
  }))
);
export const isDeletedCompany = (state: State) => state.deleted;

