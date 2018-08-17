import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviessComponent } from './moviess/moviess.component';
import { MoviedetialComponent } from './moviedetial/moviedetial.component';
import { GetallmoviesComponent } from './getallmovies/getallmovies.component';
import { MoviesbygenreComponent } from './moviesbygenre/moviesbygenre.component';
import { Newui1Component } from './newui1/newui1.component';
import { NewuiMoviedetailsComponent } from './newui-moviedetails/newui-moviedetails.component';
import { ActordetialsComponent } from './actordetials/actordetials.component';


const routes: Routes = [
  { path: '', redirectTo: 'movie', pathMatch: 'full' },
  { path: 'movie', component: MoviessComponent },
  { path: 'moviedetail/:id', component: MoviedetialComponent },
  { path: 'allmovies', component: GetallmoviesComponent },
  { path: 'moviebygenre/:genre', component: MoviesbygenreComponent },
  { path: 'newui', component: Newui1Component },
  { path: 'newuimoviedetials/:id', component: NewuiMoviedetailsComponent },
  { path: 'actordetials/:id', component: ActordetialsComponent }














];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }