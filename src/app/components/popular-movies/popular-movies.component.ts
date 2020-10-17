import {Component, OnInit} from '@angular/core';
import {MovieInterface} from '../../shared/interfaces/movie.interface';
import {MovieService} from '../../shared/services/movie.service';
import {UtilsService} from '../../shared/services/utils.service';
import {MatDialog} from '@angular/material/dialog';
import {InfoModalComponent} from '../../shared/components/modals/info-modal/info-modal.component';

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
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    for (let i = 0; i <= 7; i++) {
      this.movieService.getMovie({t: this.utilsService.getRandomLetter()}).subscribe(movie => {
        this.popularMovies.push(movie);
      }, error => {
        this.dialog.open(InfoModalComponent, {data: error});
        return;
      });
    }
  }

}
