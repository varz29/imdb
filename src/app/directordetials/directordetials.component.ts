import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-directordetials',
  templateUrl: './directordetials.component.html',
  styleUrls: ['./directordetials.component.css']
})
export class DirectordetialsComponent implements OnInit {

  constructor(private http: HttpClient, private renderer: Renderer,
    private elem: ElementRef, private router: Router, private route: ActivatedRoute) {

    // this.movie_id = this.route.snapshot.paramMap.get('id');



  }
  ngOnInit() {
    // console.log('pass movie id is ' + this.movie_id)

    // localStorage.clear()
    // if (!localStorage.getItem("moviedetial1")) {
    //   this.http.get<Moviess>("http://192.168.1.29:8080/imdb/rest/movie/" + this.movie_id + "/moviedetails/").subscribe(
    //     response => {
    //       this.slid = response;
    //       console.log('sgd')
    //       console.log(this.slid)
    //       console.log(response)
    //       this.saveData(response)
    //     },
    //     error => {

    //     });
    // } else {
    //   this.slid = JSON.parse(localStorage.getItem("directordetial"));
    //   console.log('loading data from cache')

    // }
  }

  // saveData(response) {
  //   localStorage.setItem("directordetail", JSON.stringify(response))

  // }

}
