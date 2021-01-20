//  angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePt from "@angular/common/locales/pt";

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './module/single/movie-search/movie-search.component';
import { MovieListComponent } from './module/single/movie-list/movie-list.component';
import { MovieDetailComponent } from './module/single/movie-detail/movie-detail.component';

// angular material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

// syncfusion
import {
  setCulture,
  setCurrencyCode,
  L10n,
  loadCldr,
} from "@syncfusion/ej2-base";

// globalization / internacionalization - Syncfusion
import { globalizationI18n } from './shared/globalization/i18n/syncfusion';
import { globalizationL10n } from "./shared/globalization/l10n/syncfusion";
import { cagregorian } from "./shared/globalization/cldr-data/main/pt/ca-gregorian";
import { currencies } from "./shared/globalization/cldr-data/main/pt/currencies";
import { numbers } from "./shared/globalization/cldr-data/main/pt/numbers";
import { timeZoneNames } from "./shared/globalization/cldr-data/main/pt/timeZoneNames";
import { characters } from "./shared/globalization/cldr-data/main/pt/characters";
import { dateFields } from "./shared/globalization/cldr-data/main/pt/dateFields";
import { listPatterns } from "./shared/globalization/cldr-data/main/pt/listPatterns";
import { localeDisplayNames } from "./shared/globalization/cldr-data/main/pt/localeDisplayNames";
import { posix } from "./shared/globalization/cldr-data/main/pt/posix";
import { units } from "./shared/globalization/cldr-data/main/pt/units";
loadCldr(
  globalizationI18n,
  cagregorian,
  currencies,
  numbers,
  timeZoneNames,
  characters,
  dateFields,
  listPatterns,
  localeDisplayNames,
  posix,
  units
);
setCulture("pt");
setCurrencyCode("BRL");
L10n.load(globalizationL10n);

// registrar o local com padrão 'pt-BR'
registerLocaleData(localePt);

// syncfusion
import { AggregateService, FilterService, GridModule, GroupService, PageService, SearchService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieListComponent,
    MovieSearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDividerModule,

    GridModule,
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    ToolbarService,
    AggregateService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
