/**
 * Created by aaltamir on 8/7/16.
 */
import {ProcessorConfigComponent} from "./processor-config.component";
import {ProcessorFormComponent} from "./processor-form.component";
import {Routes} from "@angular/router";

export const ProcessorRoutes: Routes = [
  { path: 'processor', children: [
    { path: '', component: ProcessorConfigComponent },
    { path: 'add', component: ProcessorFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
