import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesApiService } from '../moviesApi.service';


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  imgpre = 'https://image.tmdb.org/t/p/w500';
  id = "";
  personDetail: any = {};
  constructor(private _moviesApiService: moviesApiService, private _ActivatedRoute: ActivatedRoute) {
    this.id = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._moviesApiService.getPersonDetals(this.id).subscribe((res) => {
      this.personDetail = res;
    });
  }

}
