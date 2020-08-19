import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, exhaustMap, tap } from "rxjs/operators";

import { CompanyActions, CreateCompanyActions, DeleteCompanyActions, UpdateCompanyActions } from "../actions";
import { CompanyService } from "../services/company.service";
@Injectable()
export class CompanyEffect {

  loadCompanies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.loadCompanies),
      switchMap(() =>
        this.companyService.getCompanies().pipe(
          map((data) =>
            CompanyActions.loadCompaniesSuccess({ companies: data })
          ),
          catchError((error) => {
            return of(
              CompanyActions.loadCompaniesFailure({ error: error.statusText })
            );
          })
        )
      )
    );
  });

  loadCompanyById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.loadCompanyById),
      switchMap(() =>
        this.companyService.getCompanies().pipe(
          map((data) =>
            CompanyActions.loadCompaniesSuccess({ companies: data })
          ),
          catchError((error) => {
            return of(
              CompanyActions.loadCompaniesFailure({ error: error.statusText })
            );
          })
        )
      )
    );
  });

  getCompanyById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompanyActions.loadCompanyById),
      switchMap((action) =>
        this.companyService.getCompany(action.id).pipe(
          map((data) =>
            CompanyActions.loadCompanyByIdSuccess({ company: data })
          ),
          catchError((error) => {
            return of(
              CompanyActions.loadCompanyByIdFailure({ error: error.statusText })
            );
          })
        )
      )
    );
  });

  changedName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CompanyActions.DoiTen),
      exhaustMap((action) => {
        return this.companyService.layTruc().pipe(
          map((res: any) => {
            return CompanyActions.DoiTenSuccess({ name: res });
          }),
          catchError((error) => of(CompanyActions.DoiTenFailure({ error })))
        );
      })
    ));

  createCompany$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CreateCompanyActions.createCompany),
      map((action) => action.company),
      exhaustMap((company) =>
        this.companyService.createCompany(company).pipe(
          map(
            (res) =>
              CreateCompanyActions.createCompanySuccess({ company: res }),
            this.router.navigate(["/companies"])
          ),
          catchError((error) =>
            of(
              CreateCompanyActions.createCompanyFailure({
                error: error.statusText,
              })
            )
          )
        )
      )
    );
  });

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeleteCompanyActions.deleteCompany),
      map((action) => action.id),
      exhaustMap((id: string) =>
        this.companyService.deleteCompany(id).pipe(
          map(() => DeleteCompanyActions.deleteCompanySuccess({ id })),
          catchError((error) =>
            of(DeleteCompanyActions.deleteCompanyFailure({ error }))
          )
        )
      )
    )
  );

  notify: any;

  updateCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateCompanyActions.updateCompany),
      exhaustMap(({ id, company }) =>
        this.companyService.update(id, company).pipe(
          map((res) =>
            UpdateCompanyActions.updateCompanySuccess({ company: res })
          ),
          catchError((error) =>
            of(UpdateCompanyActions.updateCompanyFailure({ error }))
          )
        )
      )
    )
  );
  onUpdateEmployeeSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UpdateCompanyActions.updateCompanySuccess),
        tap(() => {

          this.snackBar.open("Updated successfully ! :D", "Cancel", {
            duration: 2000,
          });

          this.router.navigate(['/companies']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }
}
