import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NewsComponent } from '../news/news.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { SpecificNewComponent } from '../specific-new/specific-new.component';
import { MobileAppComponent } from '../mobile-app/mobile-app.component';
import { WebPlatformComponent } from '../web-platform/web-platform.component';
import { ERPComponent } from '../erp/erp.component';
import { AboutUsModule } from '../about-us/about-us.module';
import { CdnComponent } from '../cdn/cdn.component';
import { BoltErpComponent } from '../bolt-erp/bolt-erp.component';
import { TailoredSolutionsComponent } from '../tailored-solutions/tailored-solutions.component';
import { DigitalTransformationComponent } from '../digital-transformation/digital-transformation.component';
import { BOLTRESTAURANTComponent } from '../boltrestaurant/boltrestaurant.component';
import { BOLTSALONComponent } from '../boltsalon/boltsalon.component';
import { AtmComponent } from '../atm/atm.component';
import { BOLTDOCTORComponent } from '../boltdoctor/boltdoctor.component';
import { PartnersComponent } from '../shared/partners/partners.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    SpecificNewComponent,
    ContactUsComponent,
    MobileAppComponent,
    WebPlatformComponent,
    ERPComponent,
    CdnComponent,
    BoltErpComponent,
    TailoredSolutionsComponent,
    DigitalTransformationComponent,
    BOLTRESTAURANTComponent,
    BOLTSALONComponent,
    BOLTDOCTORComponent,
    AtmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    AboutUsModule,
    SharedModule,
    BrowserAnimationsModule, //Routing animations
  ]
})
export class LayoutModule { }
