// angular
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// interface
import { Movie } from './../../../core/model/movie.interface';

// service
import { UtilService } from './../../../core/service/util.service';
import { MovieService } from './../../../core/service/movie.service';

// syncfusion
import { CommandModel, FilterSettingsModel, GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit  {

  parameter: string;
  movieDataSource: Array<Movie> = [];
  notFound: boolean = false;
  sortOptions: Object;
  @ViewChild('grid') public grid: GridComponent;
  pageSettings: PageSettingsModel;
  commands: Array<CommandModel>;
  filterOptions: FilterSettingsModel;
  isMobile: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private utilService: UtilService,
    private router: Router
  ) {
    this.sortOptions = { columns: [{ direction: 'Ascending' }] };
  }

  ngOnInit() {
    // verifica se é mobile
    this.isMobile = this.utilService.detectMobile();
    // recebe o parametro
    this.parameter = this.activatedRoute.snapshot.paramMap.get("parameter");
    // busca os filmes pelo parametro
    this.getMovies(this.parameter);
    // define a quantidade de registros por página
    this.pageSettings = { pageSize: 5 };
  }

  onDetail(imdbID: string) {
    this.router.navigate(["detail", imdbID]);
  }

  getMovies(parameter: string) {
    this.movieService.getSearch(parameter).subscribe(
      (res: Array<Movie>) => {

        if (res['Error'] && res['Response'] === "False") {
          this.notFound = true;
          return;
        }

        this.movieDataSource = res['Search'];

      },
      (error: any) => {
        this.utilService.toastMessage('Erro ao buscar filmes!');
      }
    );
  }

}
