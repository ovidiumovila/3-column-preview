import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-suvpage',
  templateUrl: './suvpage.component.html',
  styleUrls: ['./suvpage.component.scss']
})
export class SuvpageComponent implements OnInit {

  constructor(
    private _routerService: RouterService
  ) { }

  ngOnInit(): void {
  }
public goBack(){
  this._routerService.goBack();
}
public backPage(){
  this._routerService.goToSedan();
}
public nextPage(){
  this._routerService.goToLuxury();
}
}
