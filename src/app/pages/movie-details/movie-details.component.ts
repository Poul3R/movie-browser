import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from '../../shared/services/movie.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MovieInterface} from '../../shared/interfaces/movie.interface';
import {MatDialog} from '@angular/material/dialog';
import {InfoModalComponent} from '../../shared/components/modals/info-modal/info-modal.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieId: string;
  movie: MovieInterface;
  movieDownloading = false;

  // To unsubscribe
  routeSubscription: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.movieId = params.id;
    });

    this.movieDownloading = true;
    this.movieService.getMovie({i: this.movieId}).subscribe(movie => {
      this.movieDownloading = false;
      this.movie = movie;
    }, error => {
      this.movieDownloading = false;
      this.dialog.open(InfoModalComponent, {data: error});
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
