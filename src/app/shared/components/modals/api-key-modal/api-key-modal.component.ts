import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-api-key-modal',
  templateUrl: './api-key-modal.component.html',
  styleUrls: ['./api-key-modal.component.scss']
})
export class ApiKeyModalComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ApiKeyModalComponent>,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      apiKey: new FormControl(null, Validators.required)
    });

  }

  public onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.authService.setApiKey(this.form.controls.apiKey.value);
      this.dialogRef.close();
    }
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
