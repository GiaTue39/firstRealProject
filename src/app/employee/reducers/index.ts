import {
  createFeatureSelector,
  Action,
  ActionReducerMap,
  createSelector,
} from "@ngrx/store";

import * as fromEmployee from "./employee.reducer";
import * as fromCreateEmployee from "./create-employee.reducer";
import { InjectionToken } from "@angular/core";
import * as fromRouter from "@ngrx/router-store";

export interface AppState {
  employee: fromEmployee.State;
  createEmployee: fromCreateEmployee.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>("Root reducers token", {
  factory: () => ({
    employee: fromEmployee.reducer,
    createEmployee: fromCreateEmployee.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectEmployeeState = createFeatureSelector<fromEmployee.State>(
  "employee"
);

export const selectCreateEmployeeState = createFeatureSelector<
  fromCreateEmployee.State
>("createEmployee");
