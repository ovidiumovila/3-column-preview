import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private _router: Router
  ) { }

  public goToSedan() {
    this._router.navigate(['sedan']);
  }

  public goToSuv() {
    this._router.navigate(['suv']);
  }
  public goBack() {
    this._router.navigate(['']);
  }
  public goToLuxury() {
    this._router.navigate(['luxury'])
  }
}
