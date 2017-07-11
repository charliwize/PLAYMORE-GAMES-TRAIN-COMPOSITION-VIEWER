import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
@Injectable()

export class HTTPGetService {
    constructor(private _http: Http) {}
    getTrainNumber () {
        return this._http.get('https://rata.digitraffic.fi/api/v1/live-trains?station=SLO')
        .map(function (response: Response) {
            return response.json()
        })
    }
    getCompositions(number, departure_date) {
        return this._http.get('https://rata.digitraffic.fi/api/v1/compositions/'+ number + '?departure_date='+ departure_date)
        .map(function (response: Response) {
            return response.json()
        })
    }
}