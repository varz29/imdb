import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../pojo/movies/movies';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-twocards',
  templateUrl: './twocards.component.html',
  styleUrls: ['./twocards.component.css']
})
export class TwocardsComponent implements OnInit {

  slidess: Array<Movies> = new Array()
  @Input() obj: any
  obj1 = {
    src: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzkzNTE0N15BMl5BanBnXkFtZTgwMjYzOTA4NDM@._CR279,7,1523,1141_UX614_UY460._SY230_SX307_AL_.jpg"
  }
  obj2 = {
    src: "https://images-na.ssl-images-amazon.com/images/M/MV5BODA2OTk1NTA4M15BMl5BanBnXkFtZTgwNzA4ODA4NDM@._CR3,157,1531,1147_UX614_UY460._SY230_SX307_AL_.jpg"
  }
  hero = [this.obj1, this.obj2]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("objobj ..........")
    console.log(this.obj)

    localStorage.clear();
    if (!localStorage.getItem("movielist")) {
      this.http.get<Array<Movies>>("http://192.168.1.29:8080/imdb/rest/movie/getallmovies").subscribe(
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
