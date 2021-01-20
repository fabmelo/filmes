// angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// interface
import { Movie } from './../../../core/model/movie.interface';

// service
import { UtilService } from './../../../core/service/util.service';
import { MovieService } from './../../../core/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  imdbID: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
    // recebe o imdbID
    this.imdbID = this.activatedRoute.snapshot.paramMap.get("imdbID");
    // busca o filme pelo imdbID
    this.getMoviewDetail(this.imdbID);
  }

  getMoviewDetail(imdbID: string){
    this.movieService.getById(imdbID).subscribe(
      (res: Movie | any) => {
        this.movie = res;
      },
      (error: any) => {
        this.utilService.toastMessage('Erro ao buscar o filme selecionado!');
      }
    );
  }

}
