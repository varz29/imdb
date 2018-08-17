import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickModule } from 'ngx-slick';



import { AppComponent } from './app.component';
import { MoviessComponent } from './moviess/moviess.component';
import { SinglecardComponent } from './singlecard/singlecard.component';
import { TwocardsComponent } from './twocards/twocards.component';
import { MoviedetialComponent } from './moviedetial/moviedetial.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoggerService } from './service/log/logger.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GetallmoviesComponent } from './getallmovies/getallmovies.component';
import { MoviesbygenreComponent } from './moviesbygenre/moviesbygenre.component';
import { Newui1Component } from './newui1/newui1.component';
import { NewuiMoviedetailsComponent } from './newui-moviedetails/newui-moviedetails.component';
import { DirectordetialsComponent } from './directordetials/directordetials.component';
import { ActordetialsComponent } from './actordetials/actordetials.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviessComponent,
    SinglecardComponent,
    TwocardsComponent,
    MoviedetialComponent,
    NavbarComponent,
    GetallmoviesComponent,
    MoviesbygenreComponent,
    Newui1Component,
    NewuiMoviedetailsComponent,
    DirectordetialsComponent,
    ActordetialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    SlickModule.forRoot()

  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
