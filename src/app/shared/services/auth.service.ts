import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_KEY = '9ff9c917';

  public getApiKey(): string {
    return this.API_KEY;
  }

  public setApiKey(key: string): void {
    this.API_KEY = key;
  }
}
