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
    let query = summonerName + '?api_key=RGAPI-b6bffbc4-30eb-482f-8a71-1a4d7076c50a';
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
  }
}
