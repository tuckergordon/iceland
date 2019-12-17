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

  blueLagoonContent = [
    {
      src: 'assets/images/blue_lagoon.jpeg',
      caption: ''
    },
    {
      src: 'assets/images/blue_lagoon.jpeg',
      caption: 'The area around the resort felt other-wordly: craggy rocks surrounding water so piercingly-blue that it almost seemed to glow in the rapidly fading light, all covered in a fog slowly marching across the warm waters below.'
    },
    {
      src: 'assets/images/blue_lagoon.jpeg',
      caption: ''
    }
  ];

  geysirContent = [
    {
      src: 'assets/videos/geysir1.mov',
      caption: 'I’m left instead with a shaky shot of the end of its eruption',
      video: true,
      // autoPlay: false
    },
    {
      src: 'assets/videos/geysir2.mov',
      caption: 'and this shot of bubbling liquid.',
      video: true
    },
    {
      src: 'assets/images/above_geysir.jpeg',
      caption: 'We took a brief hike up above the geyser to witness the landscape and were reminded of our reflections from the day before:',
    },
    {
      src: 'assets/images/geysir_pano.jpeg',
      caption: 'Wherever you go in Iceland, you will be met with a stunning landscape.',
      pano: true
    },
    {
      src: 'assets/images/geysir_pano.jpeg',
      caption: '',
      pano: true,
      extra: true
    },
  ];

  selijalandsfossContent = [
    {
      src: 'assets/videos/selijalandsfoss.mov',
      caption: '',
      video: true,
      extra: true
    },
    {
      src: 'assets/videos/selijalandsfoss.mov',
      caption: 'We began with Seljalandsfoss - a magnificent waterfall pouring over a cliffside into a pool below.',
      video: true,
    },
    {
      src: 'assets/videos/selijalandsfoss_behind.mov',
      caption: 'A path led us behind the falls',
      video: true,
      split: true
    },
    {
      src: 'assets/videos/selijalandsfoss_bottom.mov',
      caption: 'and down to the water basin.',
      video: true,
      split: true
    },
    {
      src: 'assets/images/selijalandsfoss_scrambling.jpeg',
      caption: 'The end of the path required some scrambling...'
    },
    {
      src: 'assets/videos/selijalandsfoss_hose.mov',
      caption: 'and featured a bonus water feature!',
      video: true,
      split: true
    },
    {
      src: 'assets/videos/glijufrafoss_cliffs.mov',
      caption: 'We decided to explore the area a bit, and followed a path that ran north along the cliffs.'
    },
    {
      src: 'assets/images/glijufrafoss_rock.jpeg',
      caption: 'After walking for only 10 minutes, we discovered a break in the cliffside with the looks of another falls peeking out from within.',
      split: true
    },
  ]

  ngOnInit() {
  }

}
