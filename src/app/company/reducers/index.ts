import {
    createFeatureSelector,
    Action,
    ActionReducerMap,
    createSelector,
  } from "@ngrx/store";
  import * as fromCompany from "./company.reducer";
  import { InjectionToken } from "@angular/core";
  import * as fromRouter from "@ngrx/router-store";
  export interface AppState {
    employee: fromCompany.State;
    router: fromRouter.RouterReducerState<any>;
  }
  export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<AppState, Action>
  >("Root reducers token", {
    factory: () => ({
      employee: fromCompany.reducer,
      router: fromRouter.routerReducer,
    }),
  });
  export const selectEmployeeState = createFeatureSelector<fromCompany.State>(
    "employee"
  );
  export const selectIsLoadingEmployees = createSelector(
    selectEmployeeState,
    (state) => state.loading
  );
  export const selectAllEmployees = createSelector(
    selectEmployeeState,
    (state) => state.companies
  );