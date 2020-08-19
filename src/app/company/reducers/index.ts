import { InjectionToken } from '@angular/core';

import { Action, ActionReducerMap, createFeatureSelector, createSelector, } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import * as fromCompany from './company.reducer';
import * as fromCreateCompany from './createcompany.reducer';
import * as fromDeleteCompany from './delete-company.reducer';
import * as fromUpdateCompany from './update-company.reducer';

export interface AppState {
  company: fromCompany.State;
  createCompany: fromCreateCompany.State;
  updateCompany: fromUpdateCompany.State;
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<AppState, Action>>('Company reducers token', {
  factory: () => ({
    company: fromCompany.reducer,
    rename: fromCompany.reducer,
    createCompany: fromCreateCompany.reducer,
    deleteCompany: fromDeleteCompany.reducer,
    updateCompany: fromUpdateCompany.reducer,
    router: fromRouter.routerReducer,
  }),
});

export const selectCompanyFeatureState = createFeatureSelector<any>(
  'company'
);

export const selectCompanyState = createSelector(
  selectCompanyFeatureState,
  (state) => state.company
);

export const selectRenameState = createSelector(
  selectCompanyFeatureState,
  (state) => state.rename
);

export const selectCreateCompanyState = createSelector(
  selectCompanyFeatureState,
  (state) => state.createCompany
);

export const selectDeletedCompanyState = createSelector(
  selectCompanyFeatureState,
  (state) => state.deleteCompany
);

export const selectUpdatedCompanyState = createSelector(
  selectCompanyFeatureState,
  (state) => state.updateCompany
);
