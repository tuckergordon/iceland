import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-full',
  templateUrl: './video-full.component.html',
  styleUrls: ['./video-full.component.scss']
})
export class VideoFullComponent implements OnInit {

  @Input() src: string;
  @Input() poster: string;

  constructor() { }

  ngOnInit() {
  }

}
