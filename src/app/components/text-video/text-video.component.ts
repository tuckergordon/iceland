import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-video',
  templateUrl: './text-video.component.html',
  styleUrls: ['./text-video.component.scss']
})
export class TextVideoComponent implements OnInit {

  @Input() src: string;
  @Input() poster: string;
  @Input() captions: string[];

  constructor() { }

  ngOnInit() {
  }

}
