import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoFullComponent } from './components/video-full/video-full.component';
import { TitleSectionComponent } from './sections/title-section/title-section.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoFullComponent,
    TitleSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
