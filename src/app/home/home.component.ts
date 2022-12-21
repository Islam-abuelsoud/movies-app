import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { moviesApiService } from '../moviesApi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  trendingTV: any[] = [];
  trendingPerson: any[] = [];
  imgpre = 'https://image.tmdb.org/t/p/w500';

  constructor(private _moviesApiService:moviesApiService) { }

  ngOnInit(): void {
    this._moviesApiService.getTrending('movie').subscribe((resp) => {
      this.trendingMovies = resp.results.slice(0,10);
    });
    this._moviesApiService.getTrending('tv').subscribe((resp) => {
      this.trendingTV = resp.results.slice(0,10);
    });
    this._moviesApiService.getTrending('person').subscribe((resp) => {
      this.trendingPerson = resp.results.slice(10,20);
    });
  };

}
