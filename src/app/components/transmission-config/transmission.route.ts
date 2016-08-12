/**
 * Created by aaltamir on 8/7/16.
 */
import {Routes} from '@angular/router';
import {TransmissionConfigComponent} from "./transmission-config.component";
import {TransmissionFormComponent} from "./transmission-form.component";

export const TransmissionRoutes: Routes = [
  { path: 'transmission', children: [
    { path: '', component: TransmissionConfigComponent },
    { path: 'add', component: TransmissionFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
