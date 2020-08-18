import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";

import { CompanyActions } from "./actions";
import { CompanyService } from "./services/company.service";

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

  // changedName$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CompanyActions.DoiTen),
  //     switchMap(() =>
  //       this.companyService.layTruc().pipe(
  //         map((data) =>
  //           CompanyActions.DoiTenSuccess({name: data})
  //         ),
  //         catchError((error) => {
  //           return of(
  //             CompanyActions.loadCompanyByIdFailure({ error: error.statusText })
  //           );
  //         })
  //       )
  //     )
  //   );
  // });

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {}
}
