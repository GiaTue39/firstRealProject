import {
  createFeatureSelector,
  Action,
  ActionReducerMap,
  createSelector,
} from "@ngrx/store";

import * as fromEmployee from "./employee.reducer";
import { InjectionToken } from "@angular/core";
import * as fromRouter from "@ngrx/router-store";

export interface AppState {
  employee: fromEmployee.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>("Root reducers token", {
  factory: () => ({
    employee: fromEmployee.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectEmployeeState = createFeatureSelector<fromEmployee.State>(
  "employee"
);
