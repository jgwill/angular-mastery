import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = environment.noteapiurl;

//"https://us-central1-telm-novo.cloudfunctions.net/notes2";


@Injectable({
  providedIn: 'root'
})
export class XnotesService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    //@a Calls the endpoint with Auth Header
    return this.http.get(endpoint, httpOptions).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':'Bearer a12345'
  })
};