import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NameCarouselComponent } from './name-carousel/name-carousel.component';
import { BioAccordionComponent } from './bio-accordion/bio-accordion.component';
import { HeroDescriptionComponent } from './hero-description/hero-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NameCarouselComponent,
    BioAccordionComponent,
    HeroDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [FrontPageComponent]
})
export class AppModule { }
