import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserSearchService {

  url = 'https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';
  constructor(private http: Http) { }

  getUser(summonerName): Observable<any> {
    let query = summonerName + '?api_key=RGAPI-2ad05484-5ed8-42b3-b8dc-cfa62fff9018';
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
  }
}
