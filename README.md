# mat-video for Angular 5+ and Material
[![npm version](https://badge.fury.io/js/mat-video.svg)](https://badge.fury.io/js/mat-video)
[![Build Status](https://travis-ci.org/nkoehler/mat-video.svg?branch=master)](https://travis-ci.org/nkoehler/mat-video)
[![Maintainability](https://api.codeclimate.com/v1/badges/46fb1a751d60d0f8b316/maintainability)](https://codeclimate.com/github/nkoehler/mat-video/maintainability)

**mat-video** is an Angular component for playing videos.  It has all the features you would expect from a standard video player, all in an extremely light package. The video player is designed to be flexible and easy to use; you can be up and running in less than 5 minutes!

It was built for modern browsers using _TypeScript_, _CSS3_ and _HTML5_ with _Angular/Material 5.0.0+_.

See the [changelog](https://github.com/nkoehler/mat-video/blob/master/CHANGELOG.md) for recent changes.  

If you wish to contribute, please fill out the [pull request template](https://github.com/nkoehler/mat-video/blob/master/CONTRIBUTING.md).  For issues, please fill out the [issue template](https://github.com/nkoehler/mat-video/blob/master/ISSUE_TEMPLATE.md) before submitting.

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
- Download
- Buffering spinners
- Poster image
- Customizable controls
- Material theming
- Supports Chrome, Firefox, Safari, Edge, and IE11

## Installation
**mat-video** requires [Angular Material](https://material.angular.io/guide/getting-started) as a peer dependency, including animations.

```
npm install --save @angular/material @angular/cdk @angular/animations hammerjs
```

_If you wish to support older browsers, you will need a [polyfill](https://github.com/web-animations/web-animations-js)._

Add the following import to `src/polyfills.ts`:

```typescript
import 'hammerjs';
```

To use **mat-video** in your project install it via [npm](https://www.npmjs.com/package/mat-video):

```
npm install --save mat-video
```

Add the following to your module:

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatVideoModule
  ],
})
export class AppModule { }
```

Finally, include an [Angular Material theme](https://material.angular.io/guide/theming) in `styles.css`, or via a `<link>` element in `index.html`.

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```

## Usage
A minimal example is quite simple, in your HTML file:

```html
    <mat-video [src]="localOrRemoteVideo.mp4"></mat-video>
```

A slightly more customized example, in your HTML file:

```html
    <mat-video [src]="tutorial.mp4" title="My Tutorial Title" [width]="400" [height]="400" [autoplay]="true" [preload]="true" [fullscreen]="true" [download]="false" color="accent" spinner="spin" poster="image.jpg"></mat-video>
```

## API

Attribute | Type | Description | Default
--- | --- | --- | ---
*src* | **string** | Path or URL to a .mp4 file (**required**) | Empty string
*title* | **string** | Title for the video | Empty string
*width* | **number** | Number in pixels or null for video width | null
*height* | **number** | Number in pixels or null for video height | null
*autoplay* | **boolean** | Whether the video should autoplay | false
*preload* | **boolean** | Whether the video should preload | true
*download* | **boolean** | Whether the video will have a download option | false
*fullscreen* | **boolean** | Whether the video will have a fullscreen option | true
*color* | **ThemePalette** | Material theme color palette for the sliders | primary
*spinner* | **string** | Use 'spin', 'dot', 'split-ring', 'hourglass', or pass your own buffering spinner class | 'spin'
*poster* | **string** | Path or URL to a poster image | null

## Credits
**mat-video** is an open-source project developed by Nicholas Koehler.