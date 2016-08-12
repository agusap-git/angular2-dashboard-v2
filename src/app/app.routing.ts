import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import {BusinessPartnersRoutes} from "./components/business-partners-config/index";
import {TransmissionRoutes} from "./components/transmission-config/index";
import {ProcessorRoutes} from "./components/processor-config/index";
import {DocumentTypeRoutes} from "./components/document-type-config/index";
import {DocumentRoutes} from "./components/document-config/index";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuard} from "./common/guards/auth-guard";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'config', children: [
    ...BusinessPartnersRoutes,
    ...DocumentRoutes,
    ...DocumentTypeRoutes,
    ...ProcessorRoutes,
    ...TransmissionRoutes
    ], canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
