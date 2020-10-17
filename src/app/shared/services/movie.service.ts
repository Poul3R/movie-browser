import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UtilsService} from './utils.service';
import {catchError} from 'rxjs/operators';
import {MovieInterface} from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilsService) {
  }

  public getMovie(data: {}): Observable<any> {
    // const params = new HttpParams({
    //   fromObject: data
    // });
    return this.httpClient.get<MovieInterface>(environment.apiUrl, {params: data}).pipe(catchError(this.utilsService.errorHandler));
  }
}
