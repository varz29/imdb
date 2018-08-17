import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Moviess } from '../pojo/newuimoviesdetial1/moviess'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-newui-moviedetails',
  templateUrl: './newui-moviedetails.component.html',
  styleUrls: ['./newui-moviedetails.component.css']
})
export class NewuiMoviedetailsComponent implements OnInit {
  slid: Moviess;
  movie_id;


  constructor(private http: HttpClient, private renderer: Renderer,
    private elem: ElementRef, private router: Router, private route: ActivatedRoute) {

    this.movie_id = this.route.snapshot.paramMap.get('id');



  }
  ngOnInit() {
    console.log('pass movie id is ' + this.movie_id)

    localStorage.clear()
    if (!localStorage.getItem("moviedetial1")) {
      this.http.get<Moviess>("http://192.168.1.29:8080/imdb/rest/movie/" + this.movie_id + "/moviedetails/").subscribe(
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
      this.slid = JSON.parse(localStorage.getItem("moviedetial1"));
      console.log('loading data from cache')

    }
  }

  saveData(response) {
    localStorage.setItem("moviedetail1", JSON.stringify(response))

  }
  gotoActorDetail(actor) {
    console.log(actor.id)
    console.log(actor)

    this.router.navigate(['/actordetials/' + actor.id]);

  }
}
