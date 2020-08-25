import { createSelector } from "@ngrx/store";
import { selectDeleteEmployeeState } from "../reducers";

export const selectIsDeletedEmployees = createSelector(
  selectDeleteEmployeeState,
  (state) => {
    console.log(state);

    return !!state.deleted;
  }
);
