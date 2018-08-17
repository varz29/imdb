import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../pojo/movies/movies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-singlecard',
  templateUrl: './singlecard.component.html',
  styleUrls: ['./singlecard.component.css']
})
export class SinglecardComponent implements OnInit {
  slidess: Array<Movies> = new Array()
  @Input() obj: any


  constructor(private http: HttpClient) { }

  ngOnInit() {
    //console.log(localStorage.getItem("movielist"))
    //localStorage.clear();
    if (!localStorage.getItem("movielist")) {
      this.http.get<Array<Movies>>("http://192.168.1.28:8080/imdb/rest/movie/getallmovies").subscribe(
        response => {
          this.slidess = response;
          console.log(response)
          this.saveData(response)
        },
        error => {

        });
    } else {
      this.slidess = JSON.parse(localStorage.getItem("movielist"));
      console.log('loading data from cache')

    }
  }


  saveData(response) {
    localStorage.setItem("movielist", JSON.stringify(response))

  }

}
