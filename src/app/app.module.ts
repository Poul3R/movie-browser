import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieBoxComponent } from './movie-box/movie-box.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    PopularMoviesComponent,
    MovieBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
