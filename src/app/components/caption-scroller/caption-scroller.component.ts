import { Component, OnInit, Input, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';

import 'intersection-observer';
import scrollama from 'scrollama';
import * as d3 from 'd3';

export interface CaptionedContent {
  src: string;
  caption: string;
  video?: boolean;
  poster?: string;
  pano?: boolean;
  // extra?: boolean;
  split?: boolean;
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
  @Input() scrollerName: string;  // TODO: better way of giving each instance a unique class

  currentContent: CaptionedContent;
  scroller: any;
  host: d3.Selection<any, unknown, null, undefined>;

  constructor(private hostRef: ElementRef) { }

  ngOnInit() {
    this.currentContent = this.captionedContent[0];
  }

  ngAfterViewInit() {
    this.host = d3.select(this.hostRef.nativeElement);
    setTimeout(() => {
      this.initScroller();
    }, 0);
  }

  initScroller() {
    this.scroller = scrollama();

    let activeIndex = 0;

    // setup the instance, pass callback functions
    this.scroller
      .setup({
        step: '.caption-wrapper--' + this.scrollerName,
        offset: 0.5,
        progress: true
      })
      .onStepEnter(response => {
        const { element, index, direction } = response;

        if (this.currentContent.src !== this.captionedContent[index].src) {
          activeIndex = index;
          this.currentContent = this.captionedContent[activeIndex];
        }
      })
      .onStepProgress(response => {
        let { element, index, progress } = response;

        if (progress === 0) return; // prevent pano bug where active hasn't been set yet

        if (this.currentContent.pano) {
          const activeElement = this.host.select<HTMLElement>('.content--active');

          const extras = d3.select(this.hostRef.nativeElement)
            .selectAll<HTMLElement, null>('.content--active ~ .content')
            .filter((d, i, nodes) => d3.select(nodes[i]).attr('src') === activeElement.attr('src'));

          progress = (progress + (index - activeIndex )) / (extras.nodes().length);
          progress = Math.min(progress, 1);

          activeElement.style('left', (d, i, nodes) => {
            const width = nodes[i].getBoundingClientRect().width;
            return -progress * (width - this.hostRef.nativeElement.getBoundingClientRect().width) + 'px';
          });
        }
      });
  }

  @HostListener('window:resize')
  resize() {
    this.scroller.resize();
  }

}
