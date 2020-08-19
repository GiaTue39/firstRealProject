import { InjectionToken } from "@angular/core";

import {
  createFeatureSelector,
  Action,
  ActionReducerMap,
  createSelector,
} from "@ngrx/store";
import * as fromRouter from "@ngrx/router-store";

import * as fromCompany from "./company.reducer";
import * as fromCreateCompany from "./createcompany.reducer";
import * as fromDeleteCompany from "./delete-company.reducer";
import * as fromUpdateCompany from "./update-company.reducer";
export interface AppState {
  company: fromCompany.State;
  createCompany: fromCreateCompany.State;
  updateCompany: fromUpdateCompany.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>("Root reducers token", {
  factory: () => ({
    company: fromCompany.reducer,
    rename: fromCompany.reducer,
    createCompany: fromCreateCompany.reducer,
    deleteCompany: fromDeleteCompany.reducer,
    updateCompany: fromUpdateCompany.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectRenameState = createFeatureSelector<fromCompany.State>(
  "rename"
);

export const selectCompanyState = createFeatureSelector<fromCompany.State>(
  "company"
);

export const selectCreateCompanyState = createFeatureSelector<fromCreateCompany.State>(
  "createCompany"
);

export const selectDeletedCompanyState = createFeatureSelector<fromDeleteCompany.State>(
  "deleteCompany"
);

export const selectUpdatedCompanyState = createFeatureSelector<fromUpdateCompany.State>(
  "updateCompany"
);
