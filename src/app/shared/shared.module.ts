import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InfoModalComponent } from './components/modals/info-modal/info-modal.component';
import { SettingsApiComponent } from './components/settings-api/settings-api.component';
import { ApiKeyModalComponent } from './components/modals/api-key-modal/api-key-modal.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [LoadingSpinnerComponent, InfoModalComponent, SettingsApiComponent, ApiKeyModalComponent],
  imports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    LoadingSpinnerComponent,
    MatDialogModule,
    SettingsApiComponent

  ]
})
export class SharedModule {}
