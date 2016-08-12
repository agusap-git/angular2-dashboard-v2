import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { routing } from "./app.routing";
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from "./common/guards/auth-guard";
import { Auth } from "./services/auth.service";
import { HomeComponent } from "./components/home/home.component";
import { DashboardLayoutComponent } from "./components/dashboard-layout/dashboard-layout.component";
import { BusinessPartnersConfigComponent } from "./components/business-partners-config/business-partners-config.component";
import { TransmissionConfigComponent } from "./components/transmission-config/transmission-config.component";
import { DocumentTypeConfigComponent } from "./components/document-type-config/document-type-config.component";
import { ProcessorConfigComponent } from "./components/processor-config/processor-config.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/not-found/not-found.component";
import { DocumentConfigComponent } from "./components/document-config/document-config.component";
import { BusinessPartnerFormComponent } from "./components/business-partners-config/business-partner-form.component";
import { TransmissionFormComponent } from "./components/transmission-config/transmission-form.component";
import { ProcessorFormComponent } from "./components/processor-config/processor-form.component";
import { DocumentFormComponent } from "./components/document-config/document-form.component";
import { DocumentTypeFormComponent } from "./components/document-type-config/document-type-form.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    BusinessPartnersConfigComponent,
    BusinessPartnerFormComponent,
    DocumentTypeConfigComponent,
    DocumentTypeFormComponent,
    DocumentConfigComponent,
    DocumentFormComponent,
    ProcessorConfigComponent,
    ProcessorFormComponent,
    TransmissionConfigComponent,
    TransmissionFormComponent,
    DashboardLayoutComponent
  ],
  providers: [
    AuthGuard,
    Auth
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
