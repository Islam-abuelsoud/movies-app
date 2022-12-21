import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesApiService } from '../moviesApi.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  imgpre = 'https://image.tmdb.org/t/p/w500';
  id = "";
  movieDetail: any = {};
  constructor(private _ActivatedRoute: ActivatedRoute, private _moviesApiService: moviesApiService) {
    this.id = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._moviesApiService.getMovieDetals(this.id).subscribe((res) => {
      this.movieDetail = res;
    });
    
  
  }

}
