# 1.3.0 (2018-04-28)

### Features:

- **player:** keyboard can now be used to toggle fullscreen (f key), toggle mute (m key), and toggle playback (space key)
- **player:** increased UI timeout from 1500ms to 2000ms
- **player:** mouse pointer is now hidden when the UI fades away



# 1.2.0 - 1.2.1 (2018-04-27)

### Features:

- **player:** added the option to specify a poster image for the video
- **player:** added a buffering indicator, including 4 built in types, and you can add your own by using a global class
- **player:** added the option to play/pause the video by clicking it
- **player:** seeking the video now updates the time as you drag the slider
- **player:** improved clarity for buffered progress
- **player:** improved video and player scaling while in fullscreen
- **demo:** added poster image support
- **demo:** added buffering spinner support

### Code Refactor:

- **player:** rewrote and improved video player css and styling code
- **player:** moved the volume control to the left side of the video player

### Bug Fixes:

- **player:** fixed the video buffer incorrectly displaying the wrong value during certain scenarios
- **player:** fixed the play button not being reset when changing the video source
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