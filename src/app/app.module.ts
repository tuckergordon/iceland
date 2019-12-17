import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoFullComponent } from './components/video-full/video-full.component';
import { TitleSectionComponent } from './sections/title-section/title-section.component';
import { TextVideoComponent } from './components/text-video/text-video.component';
import { CaptionScrollerComponent } from './components/caption-scroller/caption-scroller.component';
import { StorytellingComponent } from './storytelling/storytelling.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    VideoFullComponent,
    TitleSectionComponent,
    TextVideoComponent,
    CaptionScrollerComponent,
    StorytellingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
