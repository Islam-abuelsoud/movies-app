import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class moviesApiService {

  constructor(private _HttpClient: HttpClient) { }
  getTrending(type: string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=f5913716a8741bafafde10f030c328af`);
  };
  getMovieDetals(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f5913716a8741bafafde10f030c328af`)
  };
  getTvDetals(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f5913716a8741bafafde10f030c328af`)
  };
  getPersonDetals(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f5913716a8741bafafde10f030c328af`)
  };
  

}
