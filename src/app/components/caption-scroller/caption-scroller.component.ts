import { Component, OnInit, Input, AfterViewInit, HostListener } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/animations';

import 'intersection-observer';
import scrollama from 'scrollama';

export interface CaptionedContent {
  src: string;
  caption: string;
  video?: boolean;
  poster?: string;
}

@Component({
  selector: 'app-caption-scroller',
  templateUrl: './caption-scroller.component.html',
  styleUrls: ['./caption-scroller.component.scss'],
  animations: [
    trigger('fade', [
      state('active', style({ opacity: 1 })),
      state('inactive', style({ opacity: 0 })),
      transition('active=>inactive', animate(500)),
      transition('inactive=>active', animate(500))
    ])
  ]
})
export class CaptionScrollerComponent implements OnInit, AfterViewInit {

  @Input() captionedContent: CaptionedContent[];

  currentContent: CaptionedContent;
  scroller: any;

  constructor() { }

  ngOnInit() {
    this.currentContent = this.captionedContent[0];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.initScroller();
    }, 0);
  }

  initScroller() {
    this.scroller = scrollama();

    // setup the instance, pass callback functions
    this.scroller
      .setup({
        step: '.caption-wrapper',
        offset: 0.5
      })
      .onStepEnter(response => {
        const { element, index, direction } = response;
        console.log(`ENTER: element: ${element}, index: ${index}, direction: ${direction}`);

        if (this.currentContent.src !== this.captionedContent[index].src) {
          console.log('switch src');
          this.currentContent = this.captionedContent[index];
        }
      })
      .onStepExit(response => {
        const { element, index, direction } = response;
        console.log(`EXIT: element: ${element}, index: ${index}, direction: ${direction}`);
        // { element, index, direction }
      });
  }

  @HostListener('window:resize', ['$event'])
  private resize() {
    this.scroller.resize();
  }

}
