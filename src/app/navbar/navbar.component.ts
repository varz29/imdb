import { Component, OnInit } from '@angular/core';

import { Movies } from '../pojo/movies/movies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfiguration } from '../app.constants';
import { LoggerService } from '../service/log/logger.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  movie_list: Array<Movies> = new Array()
  generes = ['thriller', 'comedy', 'Documentary', 'short', 'Crime', 'Western', 'Family', 'Animation', 'drama', 'Romance']

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('hellow world');
    // console.log(localStorage.getItem("movielist"))
    // localStorage.clear();
    if (!localStorage.getItem("movielist")) {
      this.http.get<Array<Movies>>(AppConfiguration.ServerWithMovieList).subscribe(
        response => {
          this.movie_list = response;
          console.log(response)
          this.saveData(response)
        },
        error => {

        });
    } else {
      this.movie_list = JSON.parse(localStorage.getItem("movielist"));
      console.log('loading data from cache')

    }
  }
  saveData(response) {
    localStorage.setItem("movielist", JSON.stringify(response))

  }
  gotoGetallmovies() {
    this.router.navigate(['/allmovies/']);

  }
  gotoMovieByGenre(genre) {
    console.log(genre)
    this.router.navigate(['/moviebygenre/' + genre], { relativeTo: this.route })


  }



}
