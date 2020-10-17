import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';

    switch (error.status) {
      case 401:
        errorMessage = 'Invalid API Key :(';
        break;
      default:
        errorMessage = 'Unknown error occurred :(';
        break;
    }

    return throwError(errorMessage);
  }
}
