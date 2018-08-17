import { movieResponse } from "../newuimoviesdetial1/movie-response";
import { directorResponses } from "../newuimoviesdetial1/director-responses";
import { actorResponses } from "../newuimoviesdetial1/actor-responses";

export class Moviess {
    movie: movieResponse
    directors: Array<directorResponses>
    actors: Array<actorResponses>
}
