import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
@Injectable()

export class HTTPGetService {
    constructor(private _http: Http) {}
    getStations (){
        return this._http.get('https://rata.digitraffic.fi/api/v1/metadata/stations')
        .map(function (response: Response) {
            return response.json()
        })
    }
    getTrainInfo (station) {
        return this._http.get('https://rata.digitraffic.fi/api/v1/live-trains?station='+station)
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