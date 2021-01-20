// rxjs
import { Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";

// service
import { UtilService } from './util.service';

// outros
import { environment } from '../../../environments/environment';

// interface
import { Movie } from '../../core/model/movie.interface';

// angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {

  constructor(
      private httpClient: HttpClient,
      private utilService: UtilService
  ) {}

  /**
     * Obtem lista de filmes
     * @param endpoint
     * @returns Devolve um array de objetos de filmes
     */
    getSearch<Movie>(param: string): Observable<Array<Movie>> {
      return this.httpClient
          .get<Array<Movie>>(`${environment.apiUrl}/?s=${param}&apikey=${environment.apiKey}`)
          .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

  /**
     * Obtem o filme pelo ID
     * @param id
     * @param endpoint
     * @returns Devolve um objeto do tipo Movie
     */
    getById<Movie>(imdbID: string): Observable<Movie> {
      return this.httpClient
          .get<Movie>(`${environment.apiUrl}/?i=${imdbID}&apikey=${environment.apiKey}`)
          .pipe(retry(2), catchError(error => this.utilService.handleError(error)));
  }

}
