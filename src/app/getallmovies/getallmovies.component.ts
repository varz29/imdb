import { Component, OnInit } from '@angular/core';
import { Movies } from '../pojo/movies/movies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfiguration } from '../app.constants';
import { LoggerService } from '../service/log/logger.service';

@Component({
  selector: 'app-getallmovies',
  templateUrl: './getallmovies.component.html',
  styleUrls: ['./getallmovies.component.css']
})
export class GetallmoviesComponent implements OnInit {
  movie_list: Array<Movies> = new Array()


  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('hellow world');
    // console.log(localStorage.getItem("movielist"))
    //localStorage.clear();
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

  gotoMovieDetail(movie) {
    console.log(movie)

    this.router.navigate(['/moviedetail/' + movie.id]);

  }

}
