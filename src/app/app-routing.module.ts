import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieDetailsComponent} from './pages/movie-details/movie-details.component';
import {WelcomePageComponent} from './pages/welcome-page/welcome-page.component';


const routes: Routes = [
  {path: ':id', component: MovieDetailsComponent},
  {path: '', component: WelcomePageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
