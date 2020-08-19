import { createAction, props } from "@ngrx/store";
import { Employees, DetailEmployeeModel } from "../models";

export const loadEmployees = createAction("[Employee Page] Load Employees");

export const loadEmployeesSuccess = createAction(
  "[Employee Page] Load Employees Success",
  props<{ employees: any }>()
);

export const loadEmployeesFailure = createAction(
  "[Employee Page] Load Employees Failure",
  props<{ error: any }>()
);

export const getEmployeesById = createAction(
  "[Employee Page] Get Employee By ID",
  props<{ id: string }>()
);

export const getEmployeesByIdSuccess = createAction(
  "[Employee Page] Get Employees By ID Success",
  props<{ employee: DetailEmployeeModel }>()
);

export const getEmployeesByIDFailure = createAction(
  "[Employee Page] Get Employees By ID Failure",
  props<{ error: any }>()
);
