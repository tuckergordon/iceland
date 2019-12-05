import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storytelling',
  templateUrl: './storytelling.component.html',
  styleUrls: ['./storytelling.component.scss']
})
export class StorytellingComponent implements OnInit {

  constructor() { }

  canyonDriveContent = [
    {
      src: 'assets/images/boys_on_cliffs.jpeg',
      caption: ''
    },
    {
      src: 'assets/images/boys_on_cliffs.jpeg',
      caption: 'After a pit stop back at the AirBnb, we headed towards our next destination, but on multiple occasions caught ourselves marveling at the landscape and had to pull over to admire it.'
    },
    {
      src: 'assets/videos/canyon_drive.mov',
      video: true,
      poster: '', // TODO: poster
      caption: 'Every time we drove around a bend or over a hill,'
    },
    {
      src: 'assets/images/glassy_canyon2.jpeg',
      caption: 'we were met with a new stunning view.'
    },
    {
      src: 'assets/images/glassy_canyon.jpeg',
      caption: 'Mountains plunging into the glassy surfaces of water, their reflections waiting for them on the other side.'
    },
    {
      src: 'assets/images/mossy_cliffs.jpeg',
      caption: 'Green moss crawling up pitch black rocky buttes underneath the oranges and purples of the setting sun.'
    },
    {
      src: 'assets/videos/ocean_cliffs.mp4',
      video: true,
      poster: '', // TODO: poster
      caption: 'Volcanic cliffs towering above the ocean waves crashing onto black beaches far below.'
    }
  ];

  ngOnInit() {
  }

}
