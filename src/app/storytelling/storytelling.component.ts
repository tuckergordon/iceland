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
      caption: 'Mountains plunging into the glassy surfaces of water, their reflections staring back at them.'
    },
    {
      src: 'assets/images/mossy_cliffs.jpeg',
      caption: 'Green moss crawling up pitch-black rocky buttes underneath the oranges and purples of the setting sun.'
    },
    {
      src: 'assets/videos/ocean_cliffs.mp4',
      video: true,
      poster: '', // TODO: poster
      caption: 'Volcanic cliffs towering above the ocean waves crashing onto black beaches far below.'
    },
    {
      src: 'assets/videos/ocean_cliffs.mp4',
      video: true,
      poster: '', // TODO: poster
      caption: '',
      extra: true
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
      caption: '',
      video: true,
      extra: true
      // autoPlay: false
    },
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
      caption: 'We decided to explore the area a bit, and followed a path that ran north along the cliffs.',
      video: true
    },
    {
      src: 'assets/images/glijufrafoss_rock.jpeg',
      caption: 'After walking for only 10 minutes, we discovered a break in the cliffside with the looks of another falls peeking out from within.',
      split: true
    },
    {
      src: 'assets/images/glijufrafoss1.jpeg',
      caption: 'This was Gljúfrafoss - a smaller falls, tucked away in a small canyon. '
    },
    {
      src: 'assets/videos/glijufrafoss2.mov',
      caption: 'Reaching the inner cavern required getting across the icy water streaming out from the pool. The best path proved to be a hopping between a few rocks that sat just above the water’s surface...and one that was a little deeper. ',
      video: true,
      split: true
    },
    {
      src: 'assets/videos/glijufrafoss3.mov',
      caption: 'Waterproof footwear probably would’ve been a good choice for this excursion, but it was a choice that I did not make and was left with one warm and dry foot and one colder, wetter one.',
      video: true,
      split: true
    },
    {
      src: 'assets/images/glijufrafoss4.jpeg',
      caption: 'The misty interior of the Gljúfrafoss cavern was worth this chilly cost of admission. '
    },
    {
      src: 'assets/images/glijufrafoss4.jpeg',
      caption: '',
      extra: true
    }
  ];

  skogafossContent = [
    {
      src: 'assets/images/skogafoss1.jpeg',
      caption: '',
      extra: true
    },
    {
      src: 'assets/images/skogafoss1.jpeg',
      caption: 'A golden river winding its way out to sea, reflecting the light washing over the sprawling hills and farmlands below.',
    },
    {
      src: 'assets/images/skogafoss2.jpeg',
      caption: 'I know it’s hyperbolic, but this was one of the most beautiful places I have ever been.',
    },
    {
      src: 'assets/images/skogafoss3.jpeg',
      caption: 'We wandered up a path that took us above the falls,',
    },
    {
      src: 'assets/images/skogafoss_upper.jpeg',
      caption: 'following the river until we were met with a sign that said we could not go any further.',
    },
    {
      src: 'assets/videos/skogafoss5.mov',
      caption: 'We walked back to the falls slowly, continuing to take in the golden mountains and grass around us.',
      video: true
    },
    {
      src: 'assets/images/skogafoss6.jpeg',
      caption: 'Eventually we returned to the falls to get one last look before we headed on our way.',
    },
  ];

  glacierContent = [
    {
      src: 'assets/images/glacier_mountain.jpeg',
      caption: '',
      extra: true
    },
    {
      src: 'assets/images/glacier_mountain.jpeg',
      caption: 'The blueness of glacial ice set it apart from the surrounding rocky, grass-covered cliffs and the white snow in the distance.',
    },
    {
      src: 'assets/images/glacier_reflection.jpeg',
      caption: 'It appeared to glow under the setting sun, despite its dusting of oreo-crumb dirt.',
    },
    {
      src: 'assets/images/glacier_dirt.jpeg',
      caption: 'We had spent the day in amazement of the majesty of Iceland’s waterfalls and golden landscapes. The glacier brought a similar feeling of awe, but with a sad twist.',
    },
    {
      src: 'assets/images/glacier_long.jpeg',
      caption: 'Despite its magnificence, this glacier was clearly a far cry from what it used to be. I suspect anyone reading this does not need someone on a soapbox crying out “the glaciers are melting because of global warming!”',
    },
    {
      src: 'assets/videos/glacier_melting.mov',
      caption: 'but it was hard to escape the greenhouse guilt of flying to this island in the middle of the ocean and driving around it in an SUV.',
      // caption: 'The glacier is emblematic of larger problems facing Iceland: its economy is increasingly dependent on tourism, but that comes with environmental costs that must be reckoned with. ',
      video: true
    },
    {
      src: 'assets/images/glacier_sunset.jpeg',
      caption: 'These were the thoughts that stuck with us as the sunset over the glacier - the last daylight that we would see in Iceland.',
    },
    {
      src: 'assets/images/glacier_sunset.jpeg',
      caption: '',
      extra: true
    },
  ];

  ngOnInit() {
  }

}
