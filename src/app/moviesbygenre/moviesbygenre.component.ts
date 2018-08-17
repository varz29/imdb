import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Moviebygenre } from '../pojo/moviesByGenre/moviebygenre';
import { Movies } from '../pojo/movies/movies';

@Component({
  selector: 'app-moviesbygenre',
  templateUrl: './moviesbygenre.component.html',
  styleUrls: ['./moviesbygenre.component.css']
})
export class MoviesbygenreComponent implements OnInit {
  slid: Array<Moviebygenre> = new Array()
  genre;
  generes = ['thriller', 'comedy', 'Documentary', 'short', 'Crime', 'Western', 'Family', 'Animation', 'drama', 'Romance']



  constructor(private http: HttpClient, private renderer: Renderer,
    private elem: ElementRef, private router: Router, private route: ActivatedRoute) {

    this.genre = this.route.snapshot.paramMap.get('genre');



  }
  ngOnInit() {
    // console.log('pass movie id is ' + this.movie_id)


    if (localStorage.getItem("moviebygenre")) {
      this.http.get<Array<Moviebygenre>>("http://192.168.1.28:8080/imdb/rest/moviesbygenre/searchmoviesbygenre?genreis=" + this.genre).subscribe(
        response => {
          this.slid = response;
          console.log(response)
          this.saveData(response)
        },
        error => {

        });
    } else {
      this.slid = JSON.parse(localStorage.getItem("moviebygenre"));
      console.log('loading data from cache')

    }
  }
  saveData(response) {
    localStorage.setItem("moviebygenre", JSON.stringify(response))

  }
  gotoMovieByGenre(genre) {
    console.log(genre)
    this.router.navigate(['/moviebygenre/' + genre])
    window.location.reload();


  }


}
