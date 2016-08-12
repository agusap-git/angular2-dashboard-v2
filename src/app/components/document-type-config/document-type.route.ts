/**
 * Created by aaltamir on 8/7/16.
 */
import {DocumentTypeConfigComponent} from "./document-type-config.component";
import {DocumentTypeFormComponent} from "./document-type-form.component";
import {Routes} from "@angular/router";

export const DocumentTypeRoutes: Routes = [
  { path: 'document-type', children: [
    { path: '', component: DocumentTypeConfigComponent },
    { path: 'add', component: DocumentTypeFormComponent },
    { path: 'update' },
    { path: 'delete' },
    { path: 'return' }
  ]}
];
