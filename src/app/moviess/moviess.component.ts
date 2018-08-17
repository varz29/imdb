import { Component, OnInit } from '@angular/core';
import { Movies } from '../pojo/movies/movies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfiguration } from '../app.constants';
import { LoggerService } from '../service/log/logger.service';

@Component({
  selector: 'app-moviess',
  templateUrl: './moviess.component.html',
  styleUrls: ['./moviess.component.css']
})
export class MoviessComponent implements OnInit {
  movie_list: Array<Movies> = new Array()
  name: string
  subtitle: string;
  title: string;
  generes = ['thriller', 'comedy', 'Documentary', 'short', 'Crime', 'Western', 'Family', 'Animation', 'drama', 'Romance']
  singlecardobj1 = {
    title: "Directors Trademarks The Films of Christopher Nolan",
    subtitle: "IMDb dives into the distinct trademarks of Christopher Nolans directorial style to illustrate what The Dark Knight, Inception, and Memento have in common."

  }

  obj4 = {
    title: "Our favorite Couples",
    subtitle: "When it comes to relationship goals, these couples set the bar super high. See more in our gallery of superhero couples.",
    img1src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzkzNTE0N15BMl5BanBnXkFtZTgwMjYzOTA4NDM@._CR279,7,1523,1141_UX614_UY460._SY230_SX307_AL_.jpg",
    img2src: "https://images-na.ssl-images-amazon.com/images/M/MV5BODA2OTk1NTA4M15BMl5BanBnXkFtZTgwNzA4ODA4NDM@._CR3,157,1531,1147_UX614_UY460._SY230_SX307_AL_.jpg"
  }

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
  gotoGetallmovies() {
    this.router.navigate(['/allmovies/']);

  }
  gotoMovieByGenre(genre) {
    console.log(genre)
    this.router.navigate(['/moviebygenre/' + genre], { relativeTo: this.route })


  }
}
