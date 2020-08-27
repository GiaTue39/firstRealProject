import { createReducer, on } from '@ngrx/store';

import { CompanyActions, DeleteCompanyActions } from '../actions';
import { Company } from '../models/company';
import { DetailCompanyModel } from '../models/detailcompany';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as _ from 'lodash';
import { from } from 'rxjs';

export const collectionFeatureKey = 'collection';

export interface State extends EntityState<Company> {
  loaded: boolean;
  loading: boolean;
  companies: Array<Company>;
  companyById: DetailCompanyModel;
  error: string;
  nameChanged: string;
}

export function selectCompanyId(a: Company): string {
  return a.id;
}

export const companyAdapter: EntityAdapter<Company> = createEntityAdapter<
  Company
>({
  selectId: selectCompanyId,
});

const initialState: State = companyAdapter.getInitialState({
  loaded: false,
  loading: false,
  companies: undefined,
  companyById: undefined,
  error: undefined,
  nameChanged: undefined,
});

export const reducer = createReducer(
  initialState,

  on(CompanyActions.loadCompanies, (state) => {
    return { ...state, loading: true };
  }),

  on(CompanyActions.loadCompaniesSuccess, (state, { companies }) => {
    return companyAdapter.addAll(companies, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),

  on(CompanyActions.loadCompaniesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  })),

  on(CompanyActions.loadCompanyById, (state) => {
    return { ...state, loading: true };
  }),

  on(CompanyActions.loadCompanyByIdSuccess, (state, { company }) => ({
    ...state,
    loaded: true,
    loading: false,
    companyById: company,
  })),

  on(CompanyActions.loadCompaniesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  })),

  on(DeleteCompanyActions.deleteCompany, (state) => ({
    ...state,
  })),

  on(DeleteCompanyActions.deleteCompanySuccess, (state, { id }) => {
    return companyAdapter.removeOne(id, {
      ...state,
      loading: false,
      loaded: true,
    });
  }),

  on(DeleteCompanyActions.deleteCompanyFailure, (state, { error }) => ({
    ...state,
    deleted: false,
    error,
  }))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getCompanyById = (state: State) => state.companyById;
export const getDoiTen = (state: State) => state.nameChanged;
