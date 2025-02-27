import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { ClientsComponent } from './clients/clients.component';
import { PartnersComponent } from './partners/partners.component';

//Shared Components and imported modules between the project are imported here
//Components that shall be re-used between modules should be exported.
@NgModule({
  declarations: [
    ImageSliderComponent,
    ModalComponent,
    ClientsComponent,
    PartnersComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    ModalModule.forRoot()
  ]
  , exports: [
    ImageSliderComponent,
    ModalComponent,
    ClientsComponent,
    PartnersComponent
    ]
})
export class SharedModule { }
