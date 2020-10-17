import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import {SharedModule} from './shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { MovieBoxComponent } from './components/movie-box/movie-box.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiKeyInterceptor} from './shared/interceptors/apiKey.interceptor';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    PopularMoviesComponent,
    MovieBoxComponent,
    MovieDetailsComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
