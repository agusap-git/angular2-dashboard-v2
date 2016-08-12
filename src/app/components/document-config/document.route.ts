/**
 * Created by aaltamir on 8/7/16.
 */
import {DocumentConfigComponent} from "./document-config.component";
import {DocumentFormComponent} from "./document-form.component";
import {Routes} from "@angular/router";

export const DocumentRoutes: Routes = [
  { path: 'document', children: [
    { path: '', component: DocumentConfigComponent },
    { path: 'add', component: DocumentFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
