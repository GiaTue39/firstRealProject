import { createReducer, on } from "@ngrx/store";

import { CompanyActions } from "../actions";
import { Company } from "../models/company";
import { DetailCompanyModel } from '../models/detailcompany';

export const collectionFeatureKey = "collection";

export interface State {
  loaded: boolean;
  loading: boolean;
  companies: Array<Company>;
  companyById: DetailCompanyModel;
  error: string;
  nameChanged: string;
}

const initialState: State = {
  loaded: false,
  loading: false,
  companies: undefined,
  companyById: undefined,
  error: undefined,
  nameChanged: undefined,
};

export const reducer = createReducer(
  initialState,

  on(CompanyActions.loadCompanies, (state) => {
    return { ...state, loading: true };
  }),

  on(CompanyActions.loadCompaniesSuccess, (state, { companies }) => ({
    ...state,
    loaded: true,
    loading: false,
    companies,
  })),

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
    companyById: company
  })),

  on(CompanyActions.loadCompaniesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  })),

  /////

  on(CompanyActions.DoiTen, (state) => {
    return { ...state, loading: true };
  }),

  on(CompanyActions.DoiTenSuccess, (state, { name }) => ({
    ...state,
    loaded: true,
    loading: false,
    nameChanged: name
  })),

  on(CompanyActions.DoiTenFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  }))
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getCompanyById = (state: State) => state.companyById;
export const getDoiTen = (state: State) => state.nameChanged;
