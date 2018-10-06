import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserSearchService {

  url = 'https://br1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';
  // example: https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=<key>
  constructor(private http: Http) { }

  getUser(summonerName): Observable<any> {
    let query = summonerName + '?api_key=RGAPI-68964e53-4710-45e2-ab02-592321aa1ebc';
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
    // retornará um json, por ex:
    // {"id":20033079,"accountId":212597818,"name":"Murilonomicon","profileIconId":1386,"revisionDate":1519327548000,"summonerLevel":31}
  }
}
