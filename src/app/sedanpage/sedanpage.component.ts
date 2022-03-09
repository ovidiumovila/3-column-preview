import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-sedanpage',
  templateUrl: './sedanpage.component.html',
  styleUrls: ['./sedanpage.component.scss']
})
export class SedanpageComponent implements OnInit {

  constructor(
    private _routerService: RouterService
  ) { }

  ngOnInit(): void {
  }
  public goBack() {
    this._routerService.goBack();
  }
  public nextPage() {
    this._routerService.goToSuv();
  }
}
