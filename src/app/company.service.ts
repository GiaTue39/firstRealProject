import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>('http://localhost:3000/api/companies').pipe(delay(4000));
  }

  createCompany(company): Observable<any> {
    return this.http.post('http://localhost:3000/api/companies', company);
  }
}
