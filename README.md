# mat-video for Angular 5+ and Material

**mat-video** is an Angular component for playing videos.  It has all the features you would expect from standard video player, all in an extremely light package. The video player is designed to be flexible and easy to use; you can be up and running in less than 5 minutes!

It was built for modern browsers using _TypeScript_, _CSS3_ and _HTML5_ with _Angular/Material 5.0.0+_.

See the [changelog](https://github.com/nkoehler/mat-video/blob/master/CHANGELOG.md) for recent changes.

## Features
- Native _HTML5_ video player
- Easy to use
- Play/Pause
- Seeking
- Volume
- Autoplay
- Preload
- Scaling
- Fullscreen
- Download (work-in-progress)
- Customizable controls
- Built using Material for theming potential
- Supports Chrome, Firefox, Safari, Edge, and IE11

## Installation
To use mat-video in your project install it via [npm](https://www.npmjs.com/package/mat-video):

```
npm i mat-video --save
```

Add the following to your module file:

```typescript
// Normal Angular + Material imports
...
import { MatVideoModule } from './video/video.module';

@NgModule({
  imports: [
    ...
    MatVideoModule
  ],
})
```

## Usage
A minimal example is quite simple, in your HTML file:

```html
    <mat-video [src]="localOrRemoteVideo.mp4"></mat-video>
```

A slightly more customized example, in your HTML file:

```html
    <mat-video [src]="tutorial.mp4" [title]="My Tutorial Title" [width]="400" [height]="400" [autoplay]="true" [preload]="true" [fullscreen]="true" [download]="false"></mat-video>
```

## API

Attribute | Type | Description | Default
--- | --- | --- | ---
*src* | **string** | A path or URL to an .mp4 file | Empty string
*title* | **string** | A title for the video | Empty string
*width* | **number** | A number in pixels or null for video width | null
*height* | **number** | A number in pixels or null for video height | null
*autoplay* | **boolean** | A boolean for whether the video should autoplay | false
*preload* | **boolean** | A boolean for whether the video should preload | true
*fullscreen* | **boolean** | A boolean for whether the video will have a fullscreen option | true
*download* | **boolean** | A boolean for whether the video will have a download option | false

## Credits
**mat-video** is an open-source project developed by Nicholas Koehler.