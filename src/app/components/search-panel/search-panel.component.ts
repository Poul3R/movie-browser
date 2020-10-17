import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MovieService} from '../../shared/services/movie.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {InfoModalComponent} from '../../shared/components/modals/info-modal/info-modal.component';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {
  searchForm: FormGroup;
  types: { label: string, value: string }[] = [
    {label: 'Movie', value: 'movie'},
    {label: 'Series', value: 'series'},
    {label: 'Episode', value: 'episode'}
  ];

  years: number[] = [];

  constructor(private movieService: MovieService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      t: new FormControl(null, Validators.required),
      type: new FormControl(null),
      y: new FormControl(null),
    });

    for (let i = 2020; i >= 1920; i--) {
      this.years.push(i);
    }
  }

  public onSearchMovie(): void {
    this.searchForm.markAllAsTouched();

    if (this.searchForm.valid) {
      this.movieService.getMovie(this.searchForm.value).subscribe(response => {

        try {
          this.router.navigate([response.imdbID]);
        } catch (err) {
          this.dialog.open(InfoModalComponent, {data: 'No content'});
        }

      }, error => {
        this.dialog.open(InfoModalComponent, {data: error});
      });
    }
  }
}
