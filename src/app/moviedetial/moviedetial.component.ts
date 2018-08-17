import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Moviedetial } from '../pojo/moviedetial/moviedetial'


@Component({
  selector: 'app-moviedetial',
  templateUrl: './moviedetial.component.html',
  styleUrls: ['./moviedetial.component.css']
})
export class MoviedetialComponent implements OnInit {
  slid: Moviedetial;
  movie_id;
  @ViewChild('videoPlayer')
  videoplayer: any;
  @ViewChild('mine')
  mine: any;
  constructor(private http: HttpClient, private renderer: Renderer,
    private elem: ElementRef, private router: Router, private route: ActivatedRoute) {

    this.movie_id = this.route.snapshot.paramMap.get('id');



  }

  ngOnInit() {
    console.log('pass movie id is ' + this.movie_id)

    localStorage.clear()
    if (!localStorage.getItem("moviedetial")) {
      this.http.get<Moviedetial>("http://192.168.1.51:8080/imdb/rest/movie/" + this.movie_id + "/moviedetail/").subscribe(
        response => {
          this.slid = response;
          console.log(response)
          this.saveData(response)
        },
        error => {

        });
    } else {
      this.slid = JSON.parse(localStorage.getItem("moviedetial"));
      console.log('loading data from cache')

    }
  }

  saveData(response) {
    localStorage.setItem("moviedetail", JSON.stringify(response))

  }
  toggleVideo(event: any) {
    this.videoplayer.play();
  }


  ngAfterViewInit() {
    // localStorage.clear();

    this.playVideo(10000);



  }

  playVideo(timeout) {
    setTimeout(() => {

      try {
        this.videoplayer.nativeElement.play()
        console.log(this.videoplayer)

      } catch{
        this.playVideo(5000);
      }


    }, timeout);
  }
}
