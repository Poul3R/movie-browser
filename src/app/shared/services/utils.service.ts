import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public errorHandler(error: HttpErrorResponse) {
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

  public getRandomLetter(): string {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'z'];
    const randInt = Math.floor(Math.random() * Math.floor(21));
    return letters[randInt];
  }
}
