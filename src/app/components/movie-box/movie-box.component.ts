import {Component, Input, OnInit} from '@angular/core';
import {MovieInterface} from '../../shared/interfaces/movie.interface';

@Component({
  selector: 'app-movie-box',
  templateUrl: './movie-box.component.html',
  styleUrls: ['./movie-box.component.scss']
})
export class MovieBoxComponent implements OnInit {
  @Input() movie: MovieInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
