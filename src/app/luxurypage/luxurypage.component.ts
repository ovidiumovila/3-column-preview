import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-luxurypage',
  templateUrl: './luxurypage.component.html',
  styleUrls: ['./luxurypage.component.scss']
})
export class LuxurypageComponent implements OnInit {

  constructor(
    private _routerService: RouterService
  ) { }

  ngOnInit(): void {
  }
public goBack(){
  this._routerService.goBack();
}
public backPage(){
  this._routerService.goToSuv();
}
}
