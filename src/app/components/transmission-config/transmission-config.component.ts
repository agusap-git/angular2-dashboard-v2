import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DatatableDirective} from "../../common/directives/tables/datatable.directive";

@Component({
  moduleId: module.id,
  selector: 'app-transmission-config',
  templateUrl: 'transmission-config.component.html',
  styles: [],
  directives: [DatatableDirective]
})
export class TransmissionConfigComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }

  onAdd(){
    console.log("I'm Add");
    this._router.navigate(['config/transmission/add']);
  }

  onUpdate(){
    console.log("I'm Update");
  }

  onDelete(){
    console.log("I'm Delete");
  }

  onReturn(){
    console.log("I'm Return");
  }

}
