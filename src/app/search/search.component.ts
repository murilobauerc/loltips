import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchService } from 'src/app/summoner-name-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  tableContent = '';
  searchOnGoing = false;
  searchDone = false;
  resultsArray = [];
  search = '';
  error = '';
  totalPages = 0;
  actualSearch = '';

  constructor(private service: UserSearchService) { }

  ngOnInit() {
  }

  searchUser() {
    this.actualSearch = this.search;
    this.doRequest();
  }

  private doRequest() {
    this.searchOnGoing = true;
    this.searchDone = false;
    this.service.getUser(this.actualSearch.trim()).subscribe(res => {
      console.log(res);
      if (!res.Search) {
        this.error = 'Usuário não encontrado.';
        this.resultsArray = [];
      }else {
        this.error = '';
      }
      this.resultsArray = res.Search;
      this.searchOnGoing = false;
      this.searchDone = true;
    }, err => this.error = 'Erro de conexão.');
  }
}