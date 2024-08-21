import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbrstarctHttpService {
  constructor(private http: HttpClient) {}

  public get$(request: any) {
    return this.http.get(request.url, request).pipe(
      timeout(120000),
      map((v) => v),
      catchError((err) => this.handleError(err))
    );
  }

  /* @params 
  @reauest : any
  */
  handleError(error: any) {
    return error;
  }
}
