import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class MarvelCosmicsApi {

    private API_URL = environment.API_MARVEL_COSMICS;

    constructor(private http: HttpClient) { }

    getAllCosmics(): Observable<any> {
        return this.http.get<any>(this.API_URL)
            .pipe(map((data: any) => data.data.results))
    }

}