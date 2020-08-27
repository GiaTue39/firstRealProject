import { createReducer, on } from '@ngrx/store';

import { EmployeeActions, DeleteEmployeeActions } from '../actions';
import { Employees, DetailEmployeeModel } from '../models';
import * as _ from 'lodash';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  employees: Array<Employees>;
  error: string;
  employeeID: DetailEmployeeModel;
  deleted: boolean;
}

const initialState: State = {
  loaded: false,
  loading: false,
  employees: [],
  error: '',
  employeeID: undefined,
  deleted: false,
};

export const reducer = createReducer(
  initialState,

  on(EmployeeActions.loadEmployees, (state) => {
    return { ...state, loading: true };
  }),

  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    loaded: true,
    loading: false,
    employees,
  })),

  on(EmployeeActions.loadEmployeesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  })),

  on(EmployeeActions.getEmployeesById, (state) => {
    return { ...state, loading: true };
  }),

  on(EmployeeActions.getEmployeesByIdSuccess, (state, { employee }) => {
    const employees = [...state.employees];
    if (
      employees.length === 0 ||
      employees.findIndex((e) => e.id === employee.id) < 0
    ) {
      employees.push(employee);
    } else {
      const index = employees.findIndex((e) => e.id !== employee.id);
      employees[index] = employee;
    }

    return {
      ...state,
      loading: false,
      employees,
    };
  }),

  on(EmployeeActions.loadEmployeesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    loading: false,
    error,
  })),

  on(DeleteEmployeeActions.deleteEmployee, (state) => {
    return { ...state };
  }),

  on(DeleteEmployeeActions.deleteEmployeeSuccess, (state, id) => {
    let newEmployees = _.cloneDeep(state.employees);
    newEmployees = newEmployees.filter((employee) => employee.id !== id.id);
    return {
      ...state,
      loading: false,
      loaded: true,
      employees: newEmployees,
    };
  }),

  on(DeleteEmployeeActions.deleteEmployeeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error,
  }))
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getEmployeeByID = (state: State) => state.employeeID;
