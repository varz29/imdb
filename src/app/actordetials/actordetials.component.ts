import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ActorDetials } from '../pojo/actordetials/actor-detials'

@Component({
  selector: 'app-actordetials',
  templateUrl: './actordetials.component.html',
  styleUrls: ['./actordetials.component.css']
})
export class ActordetialsComponent implements OnInit {
  slid: ActorDetials;
  movie_id;


  constructor(private http: HttpClient, private renderer: Renderer,
    private elem: ElementRef, private router: Router, private route: ActivatedRoute) {

    this.movie_id = this.route.snapshot.paramMap.get('id');



  }
  ngOnInit() {
    console.log('pass movie id is ' + this.movie_id)

    localStorage.clear()
    if (!localStorage.getItem("moviedetial1")) {
      this.http.get<ActorDetials>("http://192.168.1.29:8080/imdb/rest/actor/" + this.movie_id + "/getactordetail/").subscribe(
        response => {
          this.slid = response;
          console.log('sgd')
          console.log(this.slid)
          console.log(response)
          this.saveData(response)
        },
        error => {

        });
    } else {
      this.slid = JSON.parse(localStorage.getItem("actordetial"));
      console.log('loading data from cache')

    }
  }
  saveData(response) {
    localStorage.setItem("actordetail", JSON.stringify(response))

  }
  gotoMovieDetail(movie) {
    console.log(movie.id)
    console.log(movie)

    this.router.navigate(['/newuimoviedetials/' + movie.id]);

  }

}
