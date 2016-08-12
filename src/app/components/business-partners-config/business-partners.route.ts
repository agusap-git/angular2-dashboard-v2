/**
 * Created by aaltamir on 8/7/16.
 */
import {BusinessPartnerFormComponent} from "./business-partner-form.component";
import {BusinessPartnersConfigComponent} from "./business-partners-config.component";
import {Routes} from "@angular/router";

export const BusinessPartnersRoutes: Routes = [
  { path: 'business-partner', children: [
    { path: '', component: BusinessPartnersConfigComponent },
    { path: 'add',  component: BusinessPartnerFormComponent },
    { path: 'update',  component: BusinessPartnerFormComponent },
    { path: 'delete',  component: BusinessPartnerFormComponent },
    { path: 'return',  component: BusinessPartnerFormComponent }
  ]}
];
