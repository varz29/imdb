import { Injectable } from '@angular/core';
@Injectable()
export class AppConfiguration {
    public static Server = 'http://192.168.1.51:8080/imdb/rest/';

    public static movieurl = 'movie/getallMovies';







    public static ServerWithMovieList = AppConfiguration.Server + AppConfiguration.movieurl;

}