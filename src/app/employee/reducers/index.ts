import { createFeatureSelector, Action, ActionReducerMap } from "@ngrx/store";
import { InjectionToken } from "@angular/core";
import * as fromRouter from "@ngrx/router-store";

import * as fromEmployee from "./employee.reducer";
import * as fromCreateEmployee from "./create-employee.reducer";
import * as fromDeleteEmployee from "./delete-employee.reducer";
import * as fromUpdateEmployee from "./update-employee.reducer";

export interface AppState {
  employee: fromEmployee.State;
  createEmployee: fromCreateEmployee.State;
  deleteEmployee: fromDeleteEmployee.State;
  updateEmployee: fromUpdateEmployee.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>("Root reducers token", {
  factory: () => ({
    employee: fromEmployee.reducer,
    createEmployee: fromCreateEmployee.reducer,
    deleteEmployee: fromDeleteEmployee.reducer,
    updateEmployee: fromUpdateEmployee.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectEmployeeState = createFeatureSelector<fromEmployee.State>(
  "employee"
);

export const selectCreateEmployeeState = createFeatureSelector<
  fromCreateEmployee.State
>("createEmployee");

export const selectDeleteEmployeeState = createFeatureSelector<
  fromDeleteEmployee.State
>("deleteEmployee");

export const selectUpdateEmployeeState = createFeatureSelector<
  fromUpdateEmployee.State
>("updateEmployee");
