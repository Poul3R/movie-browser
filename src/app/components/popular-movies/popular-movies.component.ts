import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from '../../shared/interfaces/movie.interface';
import {MovieService} from '../../shared/services/movie.service';
import {UtilsService} from '../../shared/services/utils.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  popularMovies: MovieInterface[] = [];

  constructor(
    private movieService: MovieService,
    private utilsService: UtilsService,
    ) {
  }

  ngOnInit(): void {
    // 7
    for (let i = 0; i <= 3; i++) {
      this.movieService.getMovie({t: this.utilsService.getRandomLetter()}).subscribe(movie => {
        this.popularMovies.push(movie);
      }, error => {
        // this.snackBar.open(error, 'X', {duration: 3000});
      });
    }
  }

}
