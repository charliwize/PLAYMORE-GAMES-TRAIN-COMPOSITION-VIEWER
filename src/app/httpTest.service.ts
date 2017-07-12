import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/Observable/throw";
import { Observable } from "rxjs/Observable"
@Injectable()

export class HTTPGetService {
    constructor(private _http: Http) {}
    _errorHandler (error: Response) {
        console.error(error)
        return Observable.throw(error || "server error")
        
    }
    getStations (){
        return this._http.get('https://rata.digitraffic.fi/api/v1/metadata/stations')
        .map(function (response: Response) {
            return response.json()
        })
        .catch(this._errorHandler )
    }
    getTrainInfo (station) {
        return this._http.get('https://rata.digitraffic.fi/api/v1/live-trains?station='+station)
        .map(function (response: Response) {
            return response.json()
        })
        .catch(this._errorHandler )
    }
    getCompositions(number, departure_date) {
        return this._http.get('https://rata.digitraffic.fi/api/v1/compositions/'+ number + '?departure_date='+ departure_date)
        .map(function (response: Response) {
            return response.json()
        })
        .catch(this._errorHandler )
    }


}