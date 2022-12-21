import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesApiService } from '../moviesApi.service';



@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {
  imgpre = 'https://image.tmdb.org/t/p/w500';
  id = "";
  tvDetail: any = {};
  constructor(private _ActivatedRoute: ActivatedRoute, private _moviesApiService: moviesApiService) {
    this.id = _ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this._moviesApiService.getTvDetals(this.id).subscribe((res) => {
      this.tvDetail = res;
    });
  }

}
