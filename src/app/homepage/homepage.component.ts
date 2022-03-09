import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    // private + "nume" : "tipul"
    private _routerService: RouterService
  ) { }

  ngOnInit(): void {
  }
  public switchToSuv(){
    this._routerService.goToSuv();
  }
public switchToLuxury(){
  this._routerService.goToLuxury();
}
}
