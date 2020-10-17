import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from '../shared/interfaces/movie.interface';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
