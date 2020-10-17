import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ApiKeyModalComponent} from '../modals/api-key-modal/api-key-modal.component';

@Component({
  selector: 'app-settings-api',
  templateUrl: './settings-api.component.html',
  styleUrls: ['./settings-api.component.scss']
})
export class SettingsApiComponent {

  constructor(public dialog: MatDialog) {
  }

  public onShowModal(): void {
    this.dialog.open(ApiKeyModalComponent);
  }
}
