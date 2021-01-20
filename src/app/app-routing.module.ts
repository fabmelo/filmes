import { AboutDevComponent } from './module/single/about-dev/about-dev.component';
import { AboutAppComponent } from './module/single/about-app/about-app.component';
// angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { MovieListComponent } from './module/single/movie-list/movie-list.component';
import { MovieDetailComponent } from './module/single/movie-detail/movie-detail.component';
import { MovieSearchComponent } from './module/single/movie-search/movie-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: MovieSearchComponent
  },
  {
    path: 'list/:parameter',
    component: MovieListComponent
  },
  {
    path: 'detail/:imdbID',
    component: MovieDetailComponent
  },
  {
    path: 'about-app',
    component: AboutAppComponent
  },
  {
    path: 'about-dev',
    component: AboutDevComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
