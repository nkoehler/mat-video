# 2.8.0 (2020-04-03)

### Features:

- **angular:** added support for Angular 9
- **video:** added srcObject support ([community contribution](https://github.com/nkoehler/mat-video/pull/47))
- **video:** added playsinline support ([community contribution](https://github.com/nkoehler/mat-video/pull/46))

### Bug Fixes:

- **video:** fixed an issue with muted throwing a console error ([community contribution](https://github.com/nkoehler/mat-video/pull/45))

### Deprecated:

- **angular:** officially dropping support for Angular 5, 6, and 7



# 2.7.2 (2019-06-14)

### Bug Fixes:

- **angular:** improved compatibility with previous Angular versions ([bug](https://github.com/nkoehler/mat-video/issues/24))



# 2.7.1 (2019-06-03)

### Bug Fixes:

- **angular:** fixed bad deployment that was causing compatability issues with previous Angular versions



# 2.7.0 (2019-06-01)

### Features:

- **angular:** added support for Angular 8
- **muted:** added the muted attribute which is bindable to user interactions similar to HTML5 video tag attribute ([community contribution](https://github.com/nkoehler/mat-video/pull/17))
- **frame-by-frame:** added the option to skip frames on the video ([community contribution](https://github.com/nkoehler/mat-video/pull/21))
- **video:** added the option to get and set the current video time more easily ([community contribution](https://github.com/nkoehler/mat-video/pull/22))
- **demo:** updated demo with two-way binding on the muted attribute, which allows the mute state to be changed programmatically
- **demo:** updated demo to show the new optional frame skipping controls
- **demo:** updated demo with two-way binding on the time attribute, which allows the video time to be changed programmatically

### Bug Fixes:

- **loading:** fixed issue that prevented the loading indicator from hiding until clicking play on iOS devices ([bug](https://github.com/nkoehler/mat-video/issues/19))



# 2.6.0 (2019-02-22)

### Features:

- **controls:** can force the state of the overlay/controls ([feature request](https://github.com/nkoehler/mat-video/issues/11))
- **demo:** updated demo to allow overlay/controls state to be changed



# 2.5.1 (2019-01-19)

### Bug Fixes:

- **controls:** added gradient to header and button controls, fixes issue with white background videos ([bug](https://github.com/nkoehler/mat-video/issues/9))
- **fullscreen:** fixed issue with Chrome 71+ not entering fullscreen properly ([bug](https://github.com/nkoehler/mat-video/issues/10))
- **dependencies:** updated Angular to the latest version
- **dependencies:** updated Angular Material to the latest version



# 2.5.0 (2018-11-18)

### Features:

- **keyboard:** can disable the keyboard shortcuts ([feature request](https://github.com/nkoehler/mat-video/issues/6))
- **demo:** updated demo to show disabled keyboard shortcuts



# 2.4.0 (2018-11-03)

### Features:

- **angular:** added Angular 7 support ([feature request](https://github.com/nkoehler/mat-video/issues/5))

### Bug Fixes:

- **dependencies:** updated Angular to the latest version
- **dependencies:** updated Angular Material to the latest version



# 2.3.0 (2018-08-04)

### Features:

- **events:** added experimental support for listening to HTML5 video events

### Bug Fixes:

- **player:** added null checks when manually reloading the video
- **dependencies:** updated Angular to the latest version
- **dependencies:** updated Angular Material to the latest version



# 2.2.0 (2018-05-14)

### Features:

- **source:** added support for multiple video sources via the *source* tag ([feature request](https://github.com/nkoehler/mat-video/issues/3))
- **track:** added support for subtitles and text tracks via the *track* tag ([feature request](https://github.com/nkoehler/mat-video/issues/3))
- **download:** updated the download control to use the current video source
- **source:** added *matVideoSource* directive for change detection on the *source* tag
- **track:** added *matVideoTrack* directive for change detection on the *track* tag
- **player:** added public load method for reloading the video
- **demo:** updated demo to use player load method where needed

### Code Refactor:

- **seeking:** reduced repetitive code in the seeking control
- **keyboard:** optimized keyboard event listeners

### Bug Fixes:

- **dependencies:** updated @angular/material to the latest version
- **dependencies:** updated @angular/cdk to the latest version



# 2.1.0 (2018-05-12)

### Features:

- **looping:** added the ability to loop videos
- **demo:** added the option to toggle the video looping

### Code Refactor:

- **seeking:** reduced repetitive code in the seeking control

### Bug Fixes:

- **dependencies:** updated all dependencies to their latest version



# 2.0.0 (2018-05-08)

### Breaking Changes:

- **attribute:** removed *width* attribute, use CSS instead
- **attribute:** removed *height* attribute, use CSS instead

### Features:

- **player:** video player is now responsive by default ([feature request](https://github.com/nkoehler/mat-video/issues/1))
- **style:** CSS can now be used to control the video player size
- **quality:** video quality indicator can now be toggled
- **demo:** added responsive and fixed CSS options in place of *width* and *height* attributes
- **demo:** added the option to toggle the video quality indicator

### Code Refactor:

- **style:** removed unnecessary code and CSS related to styling the video player

### Bug Fixes:

- **quality:** fixed a bug where the quality indicator was incorrectly styled
- **dependencies:** updated @angular/material to the latest version
- **dependencies:** updated @angular/cdk to the latest version



# 1.4.0 (2018-05-06)

### Features:

- **angular:** added Angular 6 support



# 1.3.1 (2018-05-05)

### Code Refactor:

- **player:** major refactor by moving all UI logic to their respective components
- **seeking:** updated seeking component to use progress slider component
- **internal:** updated progress slider component for easier reuse

### Bug Fixes:

- **player:** updated color attribute from string to ThemePalette
- **style:** several CSS updates
- **code:** several code style fixes



# 1.3.0 (2018-04-28)

### Features:

- **keyboard:** keyboard can now be used to toggle fullscreen (f key), toggle mute (m key), and toggle playback (space key)
- **player:** increased UI timeout from 1500ms to 2000ms
- **player:** mouse pointer is now hidden when the UI fades away



# 1.2.0 - 1.2.1 (2018-04-27)

### Features:

- **poster:** added the option to specify a poster image for the video
- **buffering:** added a buffering indicator, including 4 built in types, and you can add your own by using a global class
- **playback:** added the option to play/pause the video by clicking it
- **seeking:** seeking the video now updates the time as you drag the slider
- **buffering:** improved clarity for buffered progress
- **fullscreen:** improved video and player scaling while in fullscreen
- **demo:** added poster image support
- **demo:** added buffering spinner support

### Code Refactor:

- **player:** rewrote and improved video player CSS and styling code
- **player:** moved the volume control to the left side of the video player

### Bug Fixes:

- **player:** fixed the video buffer incorrectly displaying the wrong value during certain scenarios
- **playback:** fixed the play button not being reset when changing the video source
- **player:** video controls are now hidden while video metadata is being loaded
- **player:** fixed a bug where videos with a greater height than width did not appear right in fullscreen
- **npm:** updated peer dependencies for clearer compatability
- **npm:** improved npm package installation



# 1.1.1 - 1.1.2 (2018-04-26)

### Code Refactor:

- **player:** improved maintainability score by rewriting event listeners

### Bug Fixes:

- **player:** updated component to include icon css
- **npm:** removed unnecessary @angular/flex-layout dependency
- **npm:** removed unnecessary angular-bigscreen dependency
- **npm:** updated peer dependencies for clearer compatability
- **npm:** improved npm package installation



# 1.1.0 (2018-04-25)

### Features:

- **theme:** player sliders can now be material themed
- **download:** videos located on the same website server can be downloaded
- **demo:** sample application has been visually improved
- **demo:** theming the player and demo controls has been added as an option

### Bug Fixes:

- **demo:** removed unnecessary font dependency that was unused
- **demo:** corrected demo page title
- **style:** updated master stylesheet with reduced body tag margins
- **style:** fixed multiple fonts being used



# 1.0.0 - 1.0.4 (2018-04-23)

### Initial Version