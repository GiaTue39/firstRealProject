import { Injectable } from "@angular/core";

import { Actions, ofType, createEffect } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap, exhaustMap } from "rxjs/operators";

import { CompanyActions, CreateCompanyActions } from "./actions";
import { CompanyService } from "./services/company.service";
import { Router } from '@angular/router';

@Injectable()
export class CreateCompanyEffect {
  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
    private router: Router
  ) {}

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
}
