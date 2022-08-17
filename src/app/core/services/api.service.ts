import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(public http: HttpClient, public router: Router) { }

    get(path: string, parameters: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(
            `${this._url_}/${path}`,
            { headers: this.setHeaders(), params: parameters }
        ).pipe(
            catchError(this.handleError())
        );
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${this._url_}/${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        ).pipe(
            catchError(this.handleError())
        );
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${this._url_}/${path}`,
            JSON.stringify(body),
            { headers: this.setHeaders() }
        ).pipe(
            catchError(this.handleError())
        );
    }

    delete(path: string): Observable<any> {
        return this.http.delete(
            `${this._url_}/${path}`,
            { headers: this.setHeaders() }
        ).pipe(
            catchError(this.handleError())
        );
    }

    private get _url_(): string {
        return environment.url;
    }

    private setHeaders(ignoreLoading: boolean = false): HttpHeaders {

        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            Authorization: '',
        };

        var httpHeaders = new HttpHeaders(headers);

        if (ignoreLoading)
            httpHeaders.set('ignoreLoadingBar', '');

        return httpHeaders;
    }

    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // handle error
            throw error;
        };
    }
}
