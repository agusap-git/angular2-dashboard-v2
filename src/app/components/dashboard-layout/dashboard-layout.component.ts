import {Component, OnInit, Input} from '@angular/core';
import {Auth} from "../../services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'app-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html',
  styles: [],
})
export class DashboardLayoutComponent implements OnInit {
  @Input() pageTitle: String;
  @Input() pageSubtitle: String;

  loggedIn : boolean = true;

  constructor(private _auth : Auth) {
    this.loggedIn = this._auth.authenticated();
    console.log("Atenticado: " + this._auth.authenticated());
  }

  ngOnInit() {
  }

}
