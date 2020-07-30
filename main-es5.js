(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\n      <defs>\n        <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\n          <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\n        </pattern>\n      </defs>\n      <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\n    </svg>\n    <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{ displayValue }}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\n  <mat-icon>file_download</mat-icon>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"seekFrames(-5)\">\n  <mat-icon>skip_previous</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(-1)\">\n  <mat-icon>arrow_left</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(1)\">\n  <mat-icon>arrow_right</mat-icon>\n</button>\n\n<button mat-icon-button (click)=\"seekFrames(5)\">\n  <mat-icon>skip_next</mat-icon>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">{{ video.videoHeight }}p</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider-progress-bar\n  [color]=\"color\"\n  mode=\"buffer\"\n  step=\"0.01\"\n  [value]=\"curTimePercent\"\n  [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"\n></mat-slider-progress-bar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"playtime\">{{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime }}</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"videoBuffering\" [class]=\"spinner\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"volume-control\">\n  <button mat-icon-button (click)=\"toggleMuted()\">\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\n  </button>\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\"> </mat-slider>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/video.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/mat-video/src/lib/video.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n  <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    {{ title }}\n  </div>\n\n  <video\n    #video\n    class=\"video\"\n    [attr.autoplay]=\"autoplay ? true : null\"\n    [preload]=\"preload ? 'auto' : 'metadata'\"\n    [attr.poster]=\"poster ? poster : null\"\n    [attr.loop]=\"loop ? loop : null\"\n    [attr.playsinline]=\"playsinline ? true : null\"\n  >\n    <ng-content select=\"source\"></ng-content>\n    <ng-content select=\"track\"></ng-content>\n    This browser does not support HTML5 video.\n  </video>\n\n  <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    <div class=\"progress\">\n      <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n    </div>\n\n    <div class=\"menu\">\n      <div class=\"left\">\n        <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\"> </mat-play-button>\n\n        <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n        <mat-volume-control\n          [muted]=\"muted\"\n          (mutedChanged)=\"muted = $event; mutedChange.emit(muted)\"\n          [color]=\"color\"\n          [video]=\"video\"\n          [keyboard]=\"keyboard\"\n        >\n        </mat-volume-control>\n\n        <mat-time-control [video]=\"video\"></mat-time-control>\n      </div>\n\n      <div class=\"right\">\n        <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n        <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n        <mat-fullscreen-button\n          *ngIf=\"fullscreen\"\n          (fullscreenChanged)=\"isFullscreen = $event\"\n          [player]=\"player\"\n          [keyboard]=\"keyboard\"\n        ></mat-fullscreen-button>\n      </div>\n    </div>\n  </div>\n\n  <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #sidenav mode=\"side\" class=\"sidenav\">\n    <mat-toolbar color=\"primary\">\n      <span class=\"title\">\n        Settings\n      </span>\n    </mat-toolbar>\n    <div class=\"content options\">\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"url\" [(ngModel)]=\"src\" placeholder=\"Source\" />\n        <mat-hint align=\"end\"\n          >Download button will only work for\n          <a href=\"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy\" target=\"_blank\">\n            same-origin URLs\n          </a>\n        </mat-hint>\n      </mat-form-field>\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"url\" [(ngModel)]=\"poster\" placeholder=\"Poster\" />\n      </mat-form-field>\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"text\" [(ngModel)]=\"title\" placeholder=\"Title\" />\n      </mat-form-field>\n\n      <mat-form-field class=\"item-margin\" [color]=\"color\">\n        <input matInput type=\"text\" [(ngModel)]=\"currentTime\" placeholder=\"Current Time\" />\n      </mat-form-field>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Autoplay:</div>\n        <mat-slide-toggle [(ngModel)]=\"autoplay\" (change)=\"vid.load()\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Preload:</div>\n        <mat-slide-toggle [(ngModel)]=\"preload\" (change)=\"vid.load()\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Loop:</div>\n        <mat-slide-toggle [(ngModel)]=\"loop\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Muted:</div>\n        <mat-slide-toggle [(ngModel)]=\"muted\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Quality:</div>\n        <mat-slide-toggle [(ngModel)]=\"quality\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Download:</div>\n        <mat-slide-toggle [(ngModel)]=\"download\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Fullscreen:</div>\n        <mat-slide-toggle [(ngModel)]=\"fullscreen\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Plays Inline:</div>\n        <mat-slide-toggle [(ngModel)]=\"playsinline\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Frame-by-Frame:</div>\n        <mat-slide-toggle [(ngModel)]=\"showFrameByFrame\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Keyboard:</div>\n        <mat-slide-toggle [(ngModel)]=\"keyboard\" [color]=\"color\"></mat-slide-toggle>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Overlay:</div>\n        <mat-radio-group [(ngModel)]=\"overlay\">\n          <mat-radio-button class=\"item-margin\" [value]=\"null\" [color]=\"color\">\n            Default\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" [value]=\"false\" [color]=\"color\">\n            Off\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" [value]=\"true\" [color]=\"color\">\n            On\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Color:</div>\n        <mat-radio-group [(ngModel)]=\"color\">\n          <mat-radio-button class=\"item-margin\" value=\"primary\" [color]=\"color\">\n            Primary\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"accent\" [color]=\"color\">\n            Accent\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"warn\" [color]=\"color\">\n            Warn\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">Spinner:</div>\n        <mat-radio-group [(ngModel)]=\"spinner\">\n          <mat-radio-button class=\"item-margin\" value=\"spin\" [color]=\"color\">\n            Spin\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"dot\" [color]=\"color\">\n            Dot\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"split-ring\" [color]=\"color\">\n            Split Ring\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"hourglass\" [color]=\"color\">\n            Hourglass\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n\n      <div class=\"item-section\">\n        <div class=\"item-margin\">CSS Examples:</div>\n        <mat-radio-group [(ngModel)]=\"ngclass\">\n          <mat-radio-button class=\"item-margin\" value=\"mat-video-responsive\" [color]=\"color\">\n            Responsive\n          </mat-radio-button>\n          <mat-radio-button class=\"item-margin\" value=\"mat-video-fixed\" [color]=\"color\">\n            Fixed\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n    </div>\n\n    <div class=\"mat-toolbar mat-primary mat-toolbar-single-row footer\">\n      <div class=\"badges\">\n        <a href=\"https://badge.fury.io/js/mat-video\" target=\"_blank\">\n          <img alt=\"npm version\" src=\"https://badge.fury.io/js/mat-video.svg\" />\n        </a>\n        <a href=\"https://travis-ci.org/nkoehler/mat-video\" target=\"_blank\">\n          <img alt=\"Build Status\" src=\"https://travis-ci.org/nkoehler/mat-video.svg?branch=master\" />\n        </a>\n        <a href=\"https://codeclimate.com/github/nkoehler/mat-video/\" target=\"_blank\">\n          <img alt=\"Maintainability\" src=\"https://api.codeclimate.com/v1/badges/46fb1a751d60d0f8b316/maintainability\" />\n        </a>\n      </div>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" matTooltip=\"Settings\">\n        <mat-icon>settings</mat-icon>\n      </button>\n\n      <span class=\"title\"> <span class=\"name\">mat-video</span> for Angular {{ version }} </span>\n\n      <a mat-icon-button href=\"https://github.com/nkoehler/mat-video\" class=\"github\" matTooltip=\"GitHub\">\n        <svg height=\"32\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"32\">\n          <path\n            fill-rule=\"evenodd\"\n            d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"\n          ></path>\n        </svg>\n      </a>\n    </mat-toolbar>\n\n    <div class=\"content video\">\n      <mat-video\n        #vid\n        [ngClass]=\"ngclass\"\n        [src]=\"src\"\n        [title]=\"title\"\n        [autoplay]=\"autoplay\"\n        [preload]=\"preload\"\n        [loop]=\"loop\"\n        [fullscreen]=\"fullscreen\"\n        [download]=\"download\"\n        [quality]=\"quality\"\n        [keyboard]=\"keyboard\"\n        [color]=\"color\"\n        [spinner]=\"spinner\"\n        [poster]=\"poster\"\n        [overlay]=\"overlay\"\n        [(muted)]=\"muted\"\n        [playsinline]=\"playsinline\"\n        [showFrameByFrame]=\"showFrameByFrame\"\n        [(time)]=\"currentTime\"\n      >\n      </mat-video>\n    </div>\n\n    <div class=\"mat-toolbar mat-primary mat-toolbar-single-row footer\">\n      <div class=\"version\">Version {{ appversion }}</div>\n      <div class=\"copyright\">\n        Nicholas Koehler\n        <mat-icon class=\"icon\">copyright</mat-icon> 2019-2020\n      </div>\n      <div class=\"license\">\n        MIT License\n      </div>\n    </div>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, scripts, private, dependencies, devDependencies, husky, lint-staged, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"mat-video-app\",\"version\":\"2.8.1\",\"description\":\"\",\"scripts\":{\"ng\":\"ng\",\"prettier\":\"prettier --write \\\"**/*.{scss,ts,component.html}\\\"\",\"start\":\"ng serve mat-video-app\",\"build\":\"ng build mat-video-app\",\"build:lib\":\"ng build mat-video && copy README.md .\\\\dist\\\\mat-video\\\\README.md && copy CHANGELOG.md .\\\\dist\\\\mat-video\\\\CHANGELOG.md && copy LICENSE .\\\\dist\\\\mat-video\\\\LICENSE\",\"test\":\"ng test mat-video --code-coverage\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\",\"clean\":\"rm -rf dist\"},\"private\":false,\"dependencies\":{\"@angular/animations\":\"8.2.2\",\"@angular/cdk\":\"8.1.3\",\"@angular/common\":\"8.2.2\",\"@angular/compiler\":\"8.2.2\",\"@angular/core\":\"8.2.2\",\"@angular/forms\":\"8.2.2\",\"@angular/material\":\"8.1.3\",\"@angular/platform-browser\":\"8.2.2\",\"@angular/platform-browser-dynamic\":\"8.2.2\",\"@angular/router\":\"8.2.2\",\"@schuchard/prettier\":\"3.1.0\",\"hammerjs\":\"2.0.8\",\"rxjs\":\"6.5.2\",\"tslib\":\"1.10.0\",\"zone.js\":\"0.10.1\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"0.802.2\",\"@angular-devkit/build-ng-packagr\":\"0.802.2\",\"@angular/cli\":\"8.2.2\",\"@angular/compiler-cli\":\"8.2.2\",\"@angular/language-service\":\"8.2.2\",\"@types/node\":\"12.7.2\",\"@types/jasmine\":\"3.4.0\",\"@types/jasminewd2\":\"2.0.6\",\"codelyzer\":\"5.1.0\",\"husky\":\"3.0.1\",\"jasmine-core\":\"3.4.0\",\"jasmine-spec-reporter\":\"4.2.1\",\"karma\":\"4.2.0\",\"karma-chrome-launcher\":\"3.1.0\",\"karma-coverage-istanbul-reporter\":\"2.1.0\",\"karma-jasmine\":\"2.0.1\",\"karma-jasmine-html-reporter\":\"1.4.2\",\"lint-staged\":\"9.2.1\",\"ng-packagr\":\"5.4.3\",\"prettier\":\"1.18.2\",\"protractor\":\"5.4.2\",\"ts-node\":\"8.3.0\",\"tsickle\":\"0.36.0\",\"tslint\":\"5.18.0\",\"tslint-config-prettier\":\"1.18.0\",\"typescript\":\"3.5.3\"},\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\"}},\"lint-staged\":{\"*.{scss,ts,component.html}\":[\"prettier --write\",\"git add\"]}}");

/***/ }),

/***/ "./projects/mat-video/src/lib/directives/mat-video-source.directive.ts":
/*!*****************************************************************************!*\
  !*** ./projects/mat-video/src/lib/directives/mat-video-source.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: MatVideoSourceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoSourceDirective", function() { return MatVideoSourceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.component */ "./projects/mat-video/src/lib/video.component.ts");



var MatVideoSourceDirective = /** @class */ (function () {
    function MatVideoSourceDirective(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    MatVideoSourceDirective.prototype.ngOnChanges = function (changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init) {
            this.video.load();
        }
    };
    MatVideoSourceDirective.ctorParameters = function () { return [
        { type: _video_component__WEBPACK_IMPORTED_MODULE_2__["MatVideoComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoSourceDirective.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoSourceDirective.prototype, "type", void 0);
    MatVideoSourceDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[matVideoSource]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())
    ], MatVideoSourceDirective);
    return MatVideoSourceDirective;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/directives/mat-video-track.directive.ts":
/*!****************************************************************************!*\
  !*** ./projects/mat-video/src/lib/directives/mat-video-track.directive.ts ***!
  \****************************************************************************/
/*! exports provided: MatVideoTrackDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoTrackDirective", function() { return MatVideoTrackDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video.component */ "./projects/mat-video/src/lib/video.component.ts");



var MatVideoTrackDirective = /** @class */ (function () {
    function MatVideoTrackDirective(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.kind = null;
        this.srclang = null;
        this.label = null;
        this.init = true;
        this.video = matVideoComponent;
        this.track = el.nativeElement;
        this.init = false;
    }
    MatVideoTrackDirective.prototype.ngOnChanges = function (changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init) {
            this.video.load();
        }
    };
    MatVideoTrackDirective.ctorParameters = function () { return [
        { type: _video_component__WEBPACK_IMPORTED_MODULE_2__["MatVideoComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoTrackDirective.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoTrackDirective.prototype, "kind", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoTrackDirective.prototype, "srclang", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoTrackDirective.prototype, "label", void 0);
    MatVideoTrackDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[matVideoTrack]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())
    ], MatVideoTrackDirective);
    return MatVideoTrackDirective;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.scss":
/*!************************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n}\n\n.mat-slider-progress-background {\n  position: absolute;\n  height: 2px;\n  width: 100%;\n  fill: lightgrey;\n}\n\n.mat-slider-track-buffer {\n  background-color: lightgrey !important;\n}\n\n.mat-slider-thumb {\n  border-color: transparent !important;\n}\n\n.mat-slider-thumb {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 0.2s, opacity 0.2s linear;\n}\n\n:host:hover .mat-slider-thumb {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvaW50ZXJuYWwvbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIvbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi9pbnRlcm5hbC9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL21hdC12aWRlby9zcmMvbGliL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zbGlkZXItcHJvZ3Jlc3MtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWxsOiBsaWdodGdyZXk7XG59XG5cbi5tYXQtc2xpZGVyLXRyYWNrLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zbGlkZXItdGh1bWIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuOmhvc3Q6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1zbGlkZXItcHJvZ3Jlc3MtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmaWxsOiBsaWdodGdyZXk7XG59XG5cbi5tYXQtc2xpZGVyLXRyYWNrLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLm1hdC1zbGlkZXItdGh1bWIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcbn1cblxuOmhvc3Q6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MatSliderProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderProgressBarComponent", function() { return MatSliderProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");





/** Counter used to generate unique IDs for progress bars. */
var sliderprogressbarId = 0;
var MatSliderProgressBarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MatSliderProgressBarComponent, _super);
    function MatSliderProgressBarComponent(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        var _this = _super.call(this, elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) || this;
        _this.mode = "buffer";
        _this.value = 0;
        _this.pBufferValue = 0;
        /** The id of the progress bar. */
        _this.sliderprogressbarId = "mat-slider-progress-bar-" + sliderprogressbarId++;
        _this.tabIndex = parseInt(tabIndex, 10) || 0;
        return _this;
    }
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: function () {
            return this.pBufferValue;
        },
        set: function (v) {
            this.pBufferValue = clamp(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "_trackBufferStyles", {
        /** CSS styles for the track fill element. */
        get: function () {
            if (this.mode === "buffer") {
                var axis = this.vertical ? "Y" : "X";
                return {
                    transform: "translate" + axis + "(0px) scale" + axis + "(" + this.pBufferValue / 100 + ")"
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    MatSliderProgressBarComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ["tabindex",] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSliderProgressBarComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSliderProgressBarComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSliderProgressBarComponent.prototype, "bufferValue", null);
    MatSliderProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-slider-progress-bar",
            template: __webpack_require__(/*! raw-loader!./mat-slider-progress-bar.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.html"),
            providers: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MAT_SLIDER_VALUE_ACCESSOR"]],
            host: {
                "(focus)": "_onFocus()",
                "(blur)": "_onBlur()",
                "(click)": 'this["_onClick"] ? this["_onClick"]($event) : null',
                "(mousedown)": 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
                "(keydown)": "_onKeydown($event)",
                "(keyup)": "_onKeyup()",
                "(mouseenter)": "_onMouseenter()",
                "(slide)": "_onSlide($event)",
                "(slideend)": "_onSlideEnd()",
                "(slidestart)": "_onSlideStart($event)",
                class: "mat-slider",
                role: "slider",
                "[tabIndex]": "tabIndex",
                "[attr.aria-disabled]": "disabled",
                "[attr.aria-valuemax]": "max",
                "[attr.aria-valuemin]": "min",
                "[attr.aria-valuenow]": "value",
                "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
                "[class.mat-slider-disabled]": "disabled",
                "[class.mat-slider-has-ticks]": "tickInterval",
                "[class.mat-slider-horizontal]": "!vertical",
                "[class.mat-slider-axis-inverted]": "_invertAxis",
                "[class.mat-slider-sliding]": "_isSliding",
                "[class.mat-slider-thumb-label-showing]": "thumbLabel",
                "[class.mat-slider-vertical]": "vertical",
                "[class.mat-slider-min-value]": "_isMinValue",
                "[class.mat-slider-hide-last-tick]": "disabled || _isMinValue && _thumbGap && _invertAxis"
            },
            inputs: ["disabled", "color", "tabIndex"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./mat-slider-progress-bar.component.scss */ "./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])("tabindex"))
    ], MatSliderProgressBarComponent);
    return MatSliderProgressBarComponent;
}(_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"]));

/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}


/***/ }),

/***/ "./projects/mat-video/src/lib/pipes/seconds-to-time.pipe.ts":
/*!******************************************************************!*\
  !*** ./projects/mat-video/src/lib/pipes/seconds-to-time.pipe.ts ***!
  \******************************************************************/
/*! exports provided: SecondsToTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondsToTimePipe", function() { return SecondsToTimePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecondsToTimePipe = /** @class */ (function () {
    function SecondsToTimePipe() {
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600
        };
    }
    SecondsToTimePipe.prototype.transform = function (seconds) {
        if (!seconds) {
            return "0:00";
        }
        else {
            var timeString = "";
            for (var key in this.times) {
                if (Math.floor(seconds / this.times[key]) > 0) {
                    timeString += Math.floor(seconds / this.times[key]).toString() + ":";
                    seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                }
            }
            timeString += Math.floor(seconds / 60).toString() + ":";
            seconds = seconds - 60 * Math.floor(seconds / 60);
            if (Math.floor(seconds) < 10) {
                timeString += "0";
            }
            timeString += Math.floor(seconds).toString();
            return timeString;
        }
    };
    SecondsToTimePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: "secondsToTime"
        })
    ], SecondsToTimePipe);
    return SecondsToTimePipe;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/services/event.service.ts":
/*!**************************************************************!*\
  !*** ./projects/mat-video/src/lib/services/event.service.ts ***!
  \**************************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventService = /** @class */ (function () {
    function EventService() {
    }
    EventService.prototype.addEvents = function (renderer, events) {
        var e_1, _a;
        var _loop_1 = function (event_1) {
            event_1.dispose = renderer.listen(event_1.element, event_1.name, function (newEvent) { return event_1.callback(newEvent); });
        };
        try {
            for (var events_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var event_1 = events_1_1.value;
                _loop_1(event_1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return)) _a.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    EventService.prototype.removeEvents = function (events) {
        var e_2, _a;
        try {
            for (var events_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](events), events_2_1 = events_2.next(); !events_2_1.done; events_2_1 = events_2.next()) {
                var event_2 = events_2_1.value;
                if (event_2.dispose) {
                    event_2.dispose();
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (events_2_1 && !events_2_1.done && (_a = events_2.return)) _a.call(events_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/services/fullscreen.service.ts":
/*!*******************************************************************!*\
  !*** ./projects/mat-video/src/lib/services/fullscreen.service.ts ***!
  \*******************************************************************/
/*! exports provided: FullscreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenService", function() { return FullscreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullscreenService = /** @class */ (function () {
    function FullscreenService() {
        this.fnMap = [
            // Object keys
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            // New WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Old WebKit (Safari 5.1)
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Mozilla
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            // MS
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];
        this.keyboardAllowed = typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element;
        var ret = {};
        var val;
        for (var i = 0; i < this.fnMap.length; i++) {
            val = this.fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    // Map everything to the first list of keys
                    ret[this.fnMap[0][i].toString()] = val[i];
                }
                this.fn = ret;
            }
        }
    }
    FullscreenService.prototype.request = function (elem) {
        var request = this.fn.requestFullscreen;
        elem = elem || document.documentElement;
        // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
            elem[request]();
        }
        else {
            elem[request](this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
        }
    };
    FullscreenService.prototype.exit = function () {
        document[this.fn.exitFullscreen]();
    };
    FullscreenService.prototype.toggle = function (elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    };
    FullscreenService.prototype.onChange = function (callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    };
    FullscreenService.prototype.onError = function (callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    };
    FullscreenService.prototype.isFullscreen = function () {
        return Boolean(document[this.fn.fullscreenElement]);
    };
    FullscreenService.prototype.isEnabled = function () {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    };
    FullscreenService.prototype.getElement = function () {
        return document[this.fn.fullscreenElement];
    };
    FullscreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FullscreenService);
    return FullscreenService;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/styles/icons.scss":
/*!******************************************************!*\
  !*** ./projects/mat-video/src/lib/styles/icons.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\");\n}\n::ng-deep.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  font-feature-settings: \"liga\";\n  -webkit-font-feature-settings: \"liga\";\n  -webkit-font-smoothing: antialiased;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvc3R5bGVzL2ljb25zLnNjc3MiLCJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi9zdHlsZXMvaWNvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBHQUFBO0FDQ0Y7QURFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7QUNBRiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi9zdHlsZXMvaWNvbnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9tYXRlcmlhbGljb25zL3YzNi9mbFVoUnE2dHpaY2xRRUotVmRnLUl1aWFEc05jLndvZmYyKSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cblxuOjpuZy1kZWVwLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJsaWdhXCI7XG4gIC13ZWJraXQtZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvbWF0ZXJpYWxpY29ucy92MzYvZmxVaFJxNnR6WmNsUUVKLVZkZy1JdWlhRHNOYy53b2ZmMikgZm9ybWF0KFwid29mZjJcIik7XG59XG46Om5nLWRlZXAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICBkaXJlY3Rpb246IGx0cjtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIjtcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6IFwibGlnYVwiO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn0iXX0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.scss":
/*!**********************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: inherit;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoicHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCJhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MatDownloadButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDownloadButtonComponent", function() { return MatDownloadButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatDownloadButtonComponent = /** @class */ (function () {
    function MatDownloadButtonComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatDownloadButtonComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatDownloadButtonComponent.prototype, "title", void 0);
    MatDownloadButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-download-button",
            template: __webpack_require__(/*! raw-loader!./mat-download-button.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.html"),
            styles: [__webpack_require__(/*! ./mat-download-button.component.scss */ "./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.scss")]
        })
    ], MatDownloadButtonComponent);
    return MatDownloadButtonComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.scss":
/*!************************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: MatFrameByFrameControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFrameByFrameControlComponent", function() { return MatFrameByFrameControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatFrameByFrameControlComponent = /** @class */ (function () {
    function MatFrameByFrameControlComponent() {
        this.fps = 29.97;
    }
    MatFrameByFrameControlComponent.prototype.ngOnInit = function () { };
    MatFrameByFrameControlComponent.prototype.seekFrames = function (nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        var currentFrames = this.video.currentTime * this.fps;
        var newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
        this.video.currentTime = newPos;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatFrameByFrameControlComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatFrameByFrameControlComponent.prototype, "fps", void 0);
    MatFrameByFrameControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-frame-by-frame-control",
            template: __webpack_require__(/*! raw-loader!./mat-frame-by-frame-control.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.html"),
            styles: [__webpack_require__(/*! ./mat-frame-by-frame-control.component.scss */ "./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.scss")]
        })
    ], MatFrameByFrameControlComponent);
    return MatFrameByFrameControlComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.scss":
/*!**************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MatFullscreenButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFullscreenButtonComponent", function() { return MatFullscreenButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");
/* harmony import */ var _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fullscreen.service */ "./projects/mat-video/src/lib/services/fullscreen.service.ts");




var MatFullscreenButtonComponent = /** @class */ (function () {
    function MatFullscreenButtonComponent(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    MatFullscreenButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fscreen.isEnabled()) {
            this.canFullscreen = true;
        }
        this.fscreen.onChange(function (event) { return (_this.fscreen.isFullscreen() ? _this.onChangesFullscreen(true) : _this.onChangesFullscreen(false)); });
    };
    MatFullscreenButtonComponent.prototype.setFullscreen = function (value) {
        if (this.canFullscreen && this.fullscreen !== value) {
            this.toggleFullscreen();
        }
    };
    MatFullscreenButtonComponent.prototype.toggleFullscreen = function () {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    };
    MatFullscreenButtonComponent.prototype.updateFullscreen = function () {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    };
    MatFullscreenButtonComponent.prototype.onChangesFullscreen = function (value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    };
    MatFullscreenButtonComponent.prototype.onFullscreenKey = function (event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    };
    MatFullscreenButtonComponent.ctorParameters = function () { return [
        { type: _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_3__["FullscreenService"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatFullscreenButtonComponent.prototype, "player", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keyup.f", ["$event"])
    ], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
    MatFullscreenButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-fullscreen-button",
            template: __webpack_require__(/*! raw-loader!./mat-fullscreen-button.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.html"),
            styles: [__webpack_require__(/*! ./mat-fullscreen-button.component.scss */ "./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.scss")]
        })
    ], MatFullscreenButtonComponent);
    return MatFullscreenButtonComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.scss":
/*!**************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.ts":
/*!************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.ts ***!
  \************************************************************************************/
/*! exports provided: MatPlayButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlayButtonComponent", function() { return MatPlayButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");



var MatPlayButtonComponent = /** @class */ (function () {
    function MatPlayButtonComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    MatPlayButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: "play", callback: function (event) { return _this.setVideoPlayback(true); }, dispose: null },
            { element: this.video, name: "pause", callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: "durationchange", callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: "ended", callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: "click", callback: function (event) { return _this.toggleVideoPlayback(); }, dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    };
    MatPlayButtonComponent.prototype.ngOnDestroy = function () {
        this.evt.removeEvents(this.events);
    };
    MatPlayButtonComponent.prototype.setVideoPlayback = function (value) {
        if (this.play !== value) {
            this.toggleVideoPlayback();
        }
    };
    MatPlayButtonComponent.prototype.toggleVideoPlayback = function () {
        this.play = !this.play;
        this.updateVideoPlayback();
    };
    MatPlayButtonComponent.prototype.updateVideoPlayback = function () {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    };
    MatPlayButtonComponent.prototype.onPlayKey = function (event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    };
    MatPlayButtonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatPlayButtonComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatPlayButtonComponent.prototype, "play", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatPlayButtonComponent.prototype, "playChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatPlayButtonComponent.prototype, "keyboard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keyup.space", ["$event"])
    ], MatPlayButtonComponent.prototype, "onPlayKey", null);
    MatPlayButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-play-button",
            template: __webpack_require__(/*! raw-loader!./mat-play-button.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.html"),
            styles: [__webpack_require__(/*! ./mat-play-button.component.scss */ "./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.scss")]
        })
    ], MatPlayButtonComponent);
    return MatPlayButtonComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.scss":
/*!**********************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quality {\n  display: inline-block;\n  font-size: 12px;\n  padding-left: 12px;\n  padding-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3VpL21hdC1xdWFsaXR5LWNvbnRyb2wvbWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWFsaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn1cbiIsIi5xdWFsaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.ts":
/*!********************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MatQualityControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatQualityControlComponent", function() { return MatQualityControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatQualityControlComponent = /** @class */ (function () {
    function MatQualityControlComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatQualityControlComponent.prototype, "video", void 0);
    MatQualityControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-quality-control",
            template: __webpack_require__(/*! raw-loader!./mat-quality-control.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.html"),
            styles: [__webpack_require__(/*! ./mat-quality-control.component.scss */ "./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.scss")]
        })
    ], MatQualityControlComponent);
    return MatQualityControlComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: MatSeekProgressControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSeekProgressControlComponent", function() { return MatSeekProgressControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");



var MatSeekProgressControlComponent = /** @class */ (function () {
    function MatSeekProgressControlComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.curTimePercent = 0;
        this.bufTimePercent = 0;
        this.video = null;
        this.color = "primary";
        this.currentTime = 0;
        this.currentTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.bufferedTime = 0;
        this.bufferedTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MatSeekProgressControlComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: "seeking", callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
            { element: this.video, name: "canplaythrough", callback: function (event) { return _this.updateBufferedTime(); }, dispose: null },
            { element: this.video, name: "timeupdate", callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
            { element: this.video, name: "progress", callback: function (event) { return _this.updateBufferedTime(); }, dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    };
    MatSeekProgressControlComponent.prototype.ngOnDestroy = function () {
        this.evt.removeEvents(this.events);
    };
    MatSeekProgressControlComponent.prototype.seekVideo = function (value) {
        var percentage = value / 100;
        var newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    };
    MatSeekProgressControlComponent.prototype.updateCurrentTime = function (time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    };
    MatSeekProgressControlComponent.prototype.updateBufferedTime = function () {
        if (this.video.buffered.length > 0) {
            var largestBufferValue = 0;
            for (var i = 0; i < this.video.buffered.length; i++) {
                var cur = this.video.currentTime;
                var start = this.video.buffered.start(i);
                var end = this.video.buffered.end(i);
                if (start <= cur && end > cur && end - start > largestBufferValue) {
                    largestBufferValue = end;
                }
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    };
    MatSeekProgressControlComponent.prototype.updateTime = function (emitter, time) {
        emitter.emit(time);
        return (time / this.video.duration) * 100;
    };
    MatSeekProgressControlComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSeekProgressControlComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSeekProgressControlComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
    MatSeekProgressControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-seek-progress-control",
            template: __webpack_require__(/*! raw-loader!./mat-seek-progress-control.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.html"),
            styles: [__webpack_require__(/*! ./mat-seek-progress-control.component.scss */ "./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.scss")]
        })
    ], MatSeekProgressControlComponent);
    return MatSeekProgressControlComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.scss":
/*!****************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playtime {\n  display: inline;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdGltZS1jb250cm9sL21hdC10aW1lLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheXRpbWUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbiIsIi5wbGF5dGltZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.ts":
/*!**************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MatTimeControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTimeControlComponent", function() { return MatTimeControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatTimeControlComponent = /** @class */ (function () {
    function MatTimeControlComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatTimeControlComponent.prototype, "video", void 0);
    MatTimeControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-time-control",
            template: __webpack_require__(/*! raw-loader!./mat-time-control.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.html"),
            styles: [__webpack_require__(/*! ./mat-time-control.component.scss */ "./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.scss")]
        })
    ], MatTimeControlComponent);
    return MatTimeControlComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/dot.scss":
/*!*****************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/dot.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dot {\n  width: 64px;\n  height: 64px;\n  background-color: white;\n  border-radius: 100%;\n  -webkit-animation: dot 1s infinite ease-in-out;\n  animation: dot 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes dot {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes dot {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZpZGVvLXNwaW5uZXIvaW5kaWNhdG9ycy9kb3Quc2NzcyIsInByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3VpL21hdC12aWRlby1zcGlubmVyL2luZGljYXRvcnMvZG90LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHNDQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLDJCQUFBO0VDQUY7RURFQTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUVFLG1CQUFBO0VDREY7RURHQTtJQUVFLG1CQUFBO0lBQ0EsVUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoicHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZpZGVvLXNwaW5uZXIvaW5kaWNhdG9ycy9kb3Quc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3Qge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZG90IDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGRvdCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRvdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkb3Qge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuIiwiLmRvdCB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZG90IDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IGRvdCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRvdCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZG90IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/hourglass.scss":
/*!***********************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/hourglass.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hourglass {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.hourglass:after {\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  width: 0;\n  height: 0;\n  margin: 6px;\n  box-sizing: border-box;\n  border: 26px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: hourglass 1.2s infinite;\n  animation: hourglass 1.2s infinite;\n}\n\n@-webkit-keyframes hourglass {\n  0% {\n    -webkit-transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    -webkit-transform: rotate(360deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    -webkit-transform: rotate(720deg);\n  }\n}\n\n@keyframes hourglass {\n  0% {\n    transform: rotate(0);\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  }\n  50% {\n    transform: rotate(360deg);\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  100% {\n    transform: rotate(720deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZpZGVvLXNwaW5uZXIvaW5kaWNhdG9ycy9ob3VyZ2xhc3Muc2NzcyIsInByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3VpL21hdC12aWRlby1zcGlubmVyL2luZGljYXRvcnMvaG91cmdsYXNzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDRCQUFBO0lBQ0EseUVBQUE7RUNDRjtFRENBO0lBQ0UsaUNBQUE7SUFDQSxzRUFBQTtFQ0NGO0VEQ0E7SUFDRSxpQ0FBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLG9CQUFBO0lBQ0EseUVBQUE7WUFBQSxpRUFBQTtFQ0FGO0VERUE7SUFDRSx5QkFBQTtJQUNBLHNFQUFBO1lBQUEsOERBQUE7RUNBRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3VpL21hdC12aWRlby1zcGlubmVyL2luZGljYXRvcnMvaG91cmdsYXNzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG91cmdsYXNzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi5ob3VyZ2xhc3M6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgbWFyZ2luOiA2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMjZweCBzb2xpZCAjZmZmO1xuICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdXJnbGFzcyAxLjJzIGluZmluaXRlO1xuICBhbmltYXRpb246IGhvdXJnbGFzcyAxLjJzIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgaG91cmdsYXNzIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGhvdXJnbGFzcyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcbiAgfVxufVxuIiwiLmhvdXJnbGFzcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uaG91cmdsYXNzOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbjogNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDI2cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3VyZ2xhc3MgMS4ycyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBob3VyZ2xhc3MgMS4ycyBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGhvdXJnbGFzcyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDU1LCAwLjY3NSwgMC4xOSk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaG91cmdsYXNzIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/spin.scss":
/*!******************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/spin.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spin {\n  box-sizing: border-box;\n  width: 64px;\n  height: 64px;\n  border-radius: 100%;\n  border: 10px solid rgba(255, 255, 255, 0.2);\n  border-top-color: #fff;\n  -webkit-animation: spin 1s infinite linear;\n  animation: spin 1s infinite linear;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZpZGVvLXNwaW5uZXIvaW5kaWNhdG9ycy9zcGluLnNjc3MiLCJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdmlkZW8tc3Bpbm5lci9pbmRpY2F0b3JzL3NwaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtDQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLCtCQUFBO0VDQ0Y7RURDQTtJQUNFLGlDQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFO0lBQ0UsdUJBQUE7RUNBRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3VpL21hdC12aWRlby1zcGlubmVyL2luZGljYXRvcnMvc3Bpbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDEwcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iLCIuc3BpbiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMTBweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/split-ring.scss":
/*!************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/split-ring.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".split-ring {\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n}\n\n.split-ring:after {\n  content: \" \";\n  display: block;\n  width: 46px;\n  height: 46px;\n  margin: 1px;\n  border-radius: 50%;\n  border: 5px solid #fff;\n  border-color: #fff transparent #fff transparent;\n  -webkit-animation: split-ring 1.2s linear infinite;\n  animation: split-ring 1.2s linear infinite;\n}\n\n@-webkit-keyframes split-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes split-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZpZGVvLXNwaW5uZXIvaW5kaWNhdG9ycy9zcGxpdC1yaW5nLnNjc3MiLCJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdmlkZW8tc3Bpbm5lci9pbmRpY2F0b3JzL3NwbGl0LXJpbmcuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0RBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSwrQkFBQTtFQ0NGO0VEQ0E7SUFDRSxpQ0FBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRTtJQUNFLHVCQUFBO0VDQUY7RURFQTtJQUNFLHlCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdmlkZW8tc3Bpbm5lci9pbmRpY2F0b3JzL3NwbGl0LXJpbmcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGxpdC1yaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4uc3BsaXQtcmluZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgbWFyZ2luOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50ICNmZmYgdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGxpdC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHNwbGl0LXJpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGxpdC1yaW5nIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BsaXQtcmluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iLCIuc3BsaXQtcmluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnNwbGl0LXJpbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA0NnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbjogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BsaXQtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBzcGxpdC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BsaXQtcmluZyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzcGxpdC1yaW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.scss":
/*!******************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  left: calc(50% - 32px);\n  top: calc(50% - 32px);\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZpZGVvLXNwaW5uZXIvbWF0LXZpZGVvLXNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdmlkZW8tc3Bpbm5lci9tYXQtdmlkZW8tc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdmlkZW8tc3Bpbm5lci9tYXQtdmlkZW8tc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDMycHgpO1xuICB0b3A6IGNhbGMoNTAlIC0gMzJweCk7XG4gIHotaW5kZXg6IDE7XG59XG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAzMnB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDMycHgpO1xuICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.ts":
/*!****************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MatVideoSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoSpinnerComponent", function() { return MatVideoSpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");



var MatVideoSpinnerComponent = /** @class */ (function () {
    function MatVideoSpinnerComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.spinner = "spin";
        this.videoBuffering = false;
        this.events = [];
    }
    MatVideoSpinnerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: "loadstart", callback: function (event) { return (_this.videoBuffering = true); }, dispose: null },
            { element: this.video, name: "loadedmetadata", callback: function (event) { return (_this.videoBuffering = false); }, dispose: null },
            { element: this.video, name: "playing", callback: function (event) { return (_this.videoBuffering = false); }, dispose: null },
            { element: this.video, name: "waiting", callback: function (event) { return (_this.videoBuffering = true); }, dispose: null },
            { element: this.video, name: "durationchange", callback: function (event) { return (_this.videoBuffering = true); }, dispose: null }
        ];
        this.video.onloadeddata = function () { return (_this.videoBuffering = false); };
        this.evt.addEvents(this.renderer, this.events);
    };
    MatVideoSpinnerComponent.prototype.ngOnDestroy = function () {
        this.video.onloadeddata = null;
        this.evt.removeEvents(this.events);
    };
    MatVideoSpinnerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoSpinnerComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoSpinnerComponent.prototype, "spinner", void 0);
    MatVideoSpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-video-spinner",
            template: __webpack_require__(/*! raw-loader!./mat-video-spinner.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.html"),
            styles: [__webpack_require__(/*! ./mat-video-spinner.component.scss */ "./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.scss"), __webpack_require__(/*! ./indicators/spin.scss */ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/spin.scss"), __webpack_require__(/*! ./indicators/dot.scss */ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/dot.scss"), __webpack_require__(/*! ./indicators/split-ring.scss */ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/split-ring.scss"), __webpack_require__(/*! ./indicators/hourglass.scss */ "./projects/mat-video/src/lib/ui/mat-video-spinner/indicators/hourglass.scss")]
        })
    ], MatVideoSpinnerComponent);
    return MatVideoSpinnerComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.scss":
/*!********************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".volume-control {\n  display: inline;\n}\n\n.volume-slider {\n  margin-left: -15px;\n}\n\n::ng-deep.mat-slider-thumb {\n  border-color: transparent !important;\n}\n\n::ng-deep.mat-slider-track-background {\n  background-color: lightgrey !important;\n  transform: translateX(0px) !important;\n}\n\n.volume-control .volume-slider {\n  visibility: hidden;\n  opacity: 0;\n  min-width: 0px;\n  width: 0px;\n  transition: visibility 0s 0.2s, opacity 0.2s linear, width 0.2s linear;\n}\n\n.volume-control:hover .volume-slider {\n  visibility: visible;\n  opacity: 1;\n  min-width: 90px;\n  width: 90px;\n  transition: opacity 0.2s linear, width 0.2s linear, min-width 0.2s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdWkvbWF0LXZvbHVtZS1jb250cm9sL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3VpL21hdC12b2x1bWUtY29udHJvbC9tYXQtdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0EscUNBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esc0VBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZvbHVtZS1jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udm9sdW1lLXNsaWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXkgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgIWltcG9ydGFudDtcbn1cblxuLnZvbHVtZS1jb250cm9sIC52b2x1bWUtc2xpZGVyIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICBtaW4td2lkdGg6IDBweDtcbiAgd2lkdGg6IDBweDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyLCB3aWR0aCAwLjJzIGxpbmVhcjtcbn1cblxuLnZvbHVtZS1jb250cm9sOmhvdmVyIC52b2x1bWUtc2xpZGVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhciwgd2lkdGggMC4ycyBsaW5lYXIsIG1pbi13aWR0aCAwLjJzIGxpbmVhcjtcbn1cbiIsIi52b2x1bWUtY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnZvbHVtZS1zbGlkZXIge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbjo6bmctZGVlcC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi52b2x1bWUtY29udHJvbCAudm9sdW1lLXNsaWRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgbWluLXdpZHRoOiAwcHg7XG4gIHdpZHRoOiAwcHg7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhciwgd2lkdGggMC4ycyBsaW5lYXI7XG59XG5cbi52b2x1bWUtY29udHJvbDpob3ZlciAudm9sdW1lLXNsaWRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXIsIHdpZHRoIDAuMnMgbGluZWFyLCBtaW4td2lkdGggMC4ycyBsaW5lYXI7XG59Il19 */"

/***/ }),

/***/ "./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.ts":
/*!******************************************************************************************!*\
  !*** ./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MatVolumeControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVolumeControlComponent", function() { return MatVolumeControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");



var MatVolumeControlComponent = /** @class */ (function () {
    function MatVolumeControlComponent(evt) {
        this.evt = evt;
        this.video = null;
        this.color = "primary";
        this.volume = 1;
        this.volumeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.muted = false;
        this.mutedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    MatVolumeControlComponent.prototype.ngAfterViewInit = function () {
        this.updateMuted(false);
    };
    MatVolumeControlComponent.prototype.ngOnChanges = function (changes) {
        if (changes.muted) {
            this.updateMuted(false);
        }
    };
    MatVolumeControlComponent.prototype.setVolume = function (value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0) {
            this.setMuted(false);
        }
    };
    MatVolumeControlComponent.prototype.setMuted = function (value) {
        if (this.muted !== value) {
            this.toggleMuted();
        }
    };
    MatVolumeControlComponent.prototype.toggleMuted = function () {
        this.muted = !this.muted;
        this.updateMuted();
    };
    MatVolumeControlComponent.prototype.updateMuted = function (emitChange) {
        if (emitChange === void 0) { emitChange = true; }
        if (this.video) {
            this.video.muted = this.muted;
        }
        if (emitChange) {
            this.mutedChanged.emit(this.muted);
        }
    };
    MatVolumeControlComponent.prototype.onMuteKey = function (event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    };
    MatVolumeControlComponent.ctorParameters = function () { return [
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVolumeControlComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVolumeControlComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVolumeControlComponent.prototype, "volume", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVolumeControlComponent.prototype, "muted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVolumeControlComponent.prototype, "keyboard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("document:keyup.m", ["$event"])
    ], MatVolumeControlComponent.prototype, "onMuteKey", null);
    MatVolumeControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-volume-control",
            template: __webpack_require__(/*! raw-loader!./mat-volume-control.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.html"),
            styles: [__webpack_require__(/*! ./mat-volume-control.component.scss */ "./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.scss")]
        })
    ], MatVolumeControlComponent);
    return MatVolumeControlComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/video.component.scss":
/*!*********************************************************!*\
  !*** ./projects/mat-video/src/lib/video.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoplayer {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: black;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\n.header {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 14px 0px;\n  width: 100%;\n  z-index: 1;\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));\n}\n\n.video {\n  display: block;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n.controls {\n  color: white;\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  width: 100%;\n  z-index: 1;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.65));\n}\n\n.controls .progress {\n  height: 26px;\n}\n\n.controls .menu {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 48px;\n}\n\n.controls .menu .left {\n  justify-content: flex-start;\n}\n\n.controls .menu .right {\n  justify-content: flex-end;\n}\n\n.visible {\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.5s linear;\n}\n\n.hidden {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0s 0.5s, opacity 0.5s linear;\n}\n\n.show-mouse {\n  cursor: default;\n}\n\n.hide-mouse {\n  cursor: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vcHJvamVjdHMvbWF0LXZpZGVvL3NyYy9saWIvdmlkZW8uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9tYXQtdmlkZW8vc3JjL2xpYi92aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdGQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUZBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtREFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InByb2plY3RzL21hdC12aWRlby9zcmMvbGliL3ZpZGVvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvcGxheWVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBwYWRkaW5nOiAxNHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC42NSkpO1xufVxuXG4udmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMDtcbn1cblxuLmNvbnRyb2xzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNjUpKTtcbn1cblxuLmNvbnRyb2xzIC5wcm9ncmVzcyB7XG4gIGhlaWdodDogMjZweDtcbn1cblxuLmNvbnRyb2xzIC5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5jb250cm9scyAubWVudSAubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmNvbnRyb2xzIC5tZW51IC5yaWdodCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyAwLjVzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xufVxuXG4uc2hvdy1tb3VzZSB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmhpZGUtbW91c2Uge1xuICBjdXJzb3I6IG5vbmU7XG59XG4iLCIudmlkZW9wbGF5ZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDE0cHggMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjY1KSk7XG59XG5cbi52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAwO1xufVxuXG4uY29udHJvbHMge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC42NSkpO1xufVxuXG4uY29udHJvbHMgLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiAyNnB4O1xufVxuXG4uY29udHJvbHMgLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmNvbnRyb2xzIC5tZW51IC5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udHJvbHMgLm1lbnUgLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIDAuNXMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG59XG5cbi5zaG93LW1vdXNlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uaGlkZS1tb3VzZSB7XG4gIGN1cnNvcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./projects/mat-video/src/lib/video.component.ts":
/*!*******************************************************!*\
  !*** ./projects/mat-video/src/lib/video.component.ts ***!
  \*******************************************************/
/*! exports provided: MatVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoComponent", function() { return MatVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");



var MatVideoComponent = /** @class */ (function () {
    function MatVideoComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.src = null;
        this.title = null;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.fullscreen = true;
        this.playsinline = false;
        this.showFrameByFrame = false;
        this.fps = 29.97;
        this.download = false;
        this.color = "primary";
        this.spinner = "spin";
        this.poster = null;
        this.keyboard = true;
        this.overlay = null;
        this.muted = false;
        this.mutedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playing = false;
        this.isFullscreen = false;
        this.videoLoaded = false;
        this.isMouseMoving = false;
        this.isMouseMovingTimeout = 2000;
    }
    Object.defineProperty(MatVideoComponent.prototype, "time", {
        get: function () {
            return this.getVideoTag().currentTime;
        },
        set: function (val) {
            var _this = this;
            var video = this.getVideoTag();
            if (video && val) {
                if (val > video.duration) {
                    val = video.duration;
                }
                if (val < 0) {
                    val = 0;
                }
                if (Math.abs(val - video.currentTime) > 0.0001) {
                    video.currentTime = val;
                }
                if (Math.abs(this.lastTime - video.currentTime) > 0.0001) {
                    setTimeout(function () { return _this.timeChange.emit(video.currentTime); }, 0);
                    this.lastTime = video.currentTime;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MatVideoComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            {
                element: this.video.nativeElement,
                name: "loadstart",
                callback: function (event) { return (_this.videoLoaded = false); },
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "loadedmetadata",
                callback: function (event) { return _this.evLoadedMetadata(event); },
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "error",
                callback: function (event) { return console.error("Unhandled Video Error", event); },
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "contextmenu",
                callback: function (event) { return event.preventDefault(); },
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "timeupdate",
                callback: function (event) { return _this.evTimeUpdate(event); },
                dispose: null
            },
            {
                element: this.player.nativeElement,
                name: "mousemove",
                callback: function (event) { return _this.evMouseMove(event); },
                dispose: null
            }
        ];
        this.video.nativeElement.onloadeddata = function () { return (_this.videoLoaded = true); };
        this.evt.addEvents(this.renderer, this.events);
        this.setVideoSrc(this.src);
    };
    MatVideoComponent.prototype.ngOnChanges = function (changes) {
        if (changes.src) {
            this.setVideoSrc(this.src);
        }
    };
    MatVideoComponent.prototype.ngOnDestroy = function () {
        this.video.nativeElement.onloadeddata = null;
        this.evt.removeEvents(this.events);
    };
    MatVideoComponent.prototype.load = function () {
        if (this.video && this.video.nativeElement) {
            this.video.nativeElement.load();
        }
    };
    MatVideoComponent.prototype.getVideoTag = function () {
        return this.video && this.video.nativeElement ? this.video.nativeElement : null;
    };
    MatVideoComponent.prototype.evLoadedMetadata = function (event) {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    };
    MatVideoComponent.prototype.evMouseMove = function (event) {
        var _this = this;
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(function () {
            _this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
    };
    MatVideoComponent.prototype.evTimeUpdate = function (event) {
        this.time = this.getVideoTag().currentTime;
    };
    MatVideoComponent.prototype.getOverlayClass = function (activeClass, inactiveClass) {
        if (this.overlay === null) {
            return !this.playing || this.isMouseMoving ? activeClass : inactiveClass;
        }
        else {
            return this.overlay ? activeClass : inactiveClass;
        }
    };
    MatVideoComponent.prototype.setVideoSrc = function (src) {
        if (this.srcObjectURL) {
            URL.revokeObjectURL(this.srcObjectURL);
            this.srcObjectURL = null;
        }
        if (!this.video || !this.video.nativeElement) {
            return;
        }
        if (!src) {
            this.video.nativeElement.src = null;
            if ("srcObject" in HTMLVideoElement.prototype) {
                this.video.nativeElement.srcObject = new MediaStream();
            }
        }
        else if (typeof src === "string") {
            this.video.nativeElement.src = src;
        }
        else if ("srcObject" in HTMLVideoElement.prototype) {
            this.video.nativeElement.srcObject = src;
        }
        else {
            this.srcObjectURL = URL.createObjectURL(src);
            this.video.nativeElement.src = this.srcObjectURL;
        }
        this.video.nativeElement.muted = this.muted;
    };
    MatVideoComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("player", { static: false })
    ], MatVideoComponent.prototype, "player", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("video", { static: false })
    ], MatVideoComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "autoplay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "preload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "loop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "quality", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "fullscreen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "playsinline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "showFrameByFrame", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "fps", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "download", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "spinner", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "poster", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "keyboard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "overlay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "muted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatVideoComponent.prototype, "mutedChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], MatVideoComponent.prototype, "timeChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MatVideoComponent.prototype, "time", null);
    MatVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "mat-video",
            template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./projects/mat-video/src/lib/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.scss */ "./projects/mat-video/src/lib/video.component.scss"), __webpack_require__(/*! ./styles/icons.scss */ "./projects/mat-video/src/lib/styles/icons.scss")]
        })
    ], MatVideoComponent);
    return MatVideoComponent;
}());



/***/ }),

/***/ "./projects/mat-video/src/lib/video.module.ts":
/*!****************************************************!*\
  !*** ./projects/mat-video/src/lib/video.module.ts ***!
  \****************************************************/
/*! exports provided: MatVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoModule", function() { return MatVideoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _directives_mat_video_source_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/mat-video-source.directive */ "./projects/mat-video/src/lib/directives/mat-video-source.directive.ts");
/* harmony import */ var _directives_mat_video_track_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/mat-video-track.directive */ "./projects/mat-video/src/lib/directives/mat-video-track.directive.ts");
/* harmony import */ var _internal_mat_slider_progress_bar_mat_slider_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/mat-slider-progress-bar/mat-slider-progress-bar.component */ "./projects/mat-video/src/lib/internal/mat-slider-progress-bar/mat-slider-progress-bar.component.ts");
/* harmony import */ var _pipes_seconds_to_time_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/seconds-to-time.pipe */ "./projects/mat-video/src/lib/pipes/seconds-to-time.pipe.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/event.service */ "./projects/mat-video/src/lib/services/event.service.ts");
/* harmony import */ var _services_fullscreen_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/fullscreen.service */ "./projects/mat-video/src/lib/services/fullscreen.service.ts");
/* harmony import */ var _ui_mat_download_button_mat_download_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/mat-download-button/mat-download-button.component */ "./projects/mat-video/src/lib/ui/mat-download-button/mat-download-button.component.ts");
/* harmony import */ var _ui_mat_frame_by_frame_control_mat_frame_by_frame_control_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component */ "./projects/mat-video/src/lib/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component.ts");
/* harmony import */ var _ui_mat_fullscreen_button_mat_fullscreen_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/mat-fullscreen-button/mat-fullscreen-button.component */ "./projects/mat-video/src/lib/ui/mat-fullscreen-button/mat-fullscreen-button.component.ts");
/* harmony import */ var _ui_mat_play_button_mat_play_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/mat-play-button/mat-play-button.component */ "./projects/mat-video/src/lib/ui/mat-play-button/mat-play-button.component.ts");
/* harmony import */ var _ui_mat_quality_control_mat_quality_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/mat-quality-control/mat-quality-control.component */ "./projects/mat-video/src/lib/ui/mat-quality-control/mat-quality-control.component.ts");
/* harmony import */ var _ui_mat_seek_progress_control_mat_seek_progress_control_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/mat-seek-progress-control/mat-seek-progress-control.component */ "./projects/mat-video/src/lib/ui/mat-seek-progress-control/mat-seek-progress-control.component.ts");
/* harmony import */ var _ui_mat_time_control_mat_time_control_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/mat-time-control/mat-time-control.component */ "./projects/mat-video/src/lib/ui/mat-time-control/mat-time-control.component.ts");
/* harmony import */ var _ui_mat_video_spinner_mat_video_spinner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/mat-video-spinner/mat-video-spinner.component */ "./projects/mat-video/src/lib/ui/mat-video-spinner/mat-video-spinner.component.ts");
/* harmony import */ var _ui_mat_volume_control_mat_volume_control_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/mat-volume-control/mat-volume-control.component */ "./projects/mat-video/src/lib/ui/mat-volume-control/mat-volume-control.component.ts");
/* harmony import */ var _video_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./video.component */ "./projects/mat-video/src/lib/video.component.ts");






















var MatVideoModule = /** @class */ (function () {
    function MatVideoModule() {
    }
    MatVideoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _pipes_seconds_to_time_pipe__WEBPACK_IMPORTED_MODULE_9__["SecondsToTimePipe"],
                _video_component__WEBPACK_IMPORTED_MODULE_21__["MatVideoComponent"],
                _internal_mat_slider_progress_bar_mat_slider_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__["MatSliderProgressBarComponent"],
                _ui_mat_play_button_mat_play_button_component__WEBPACK_IMPORTED_MODULE_15__["MatPlayButtonComponent"],
                _ui_mat_volume_control_mat_volume_control_component__WEBPACK_IMPORTED_MODULE_20__["MatVolumeControlComponent"],
                _ui_mat_download_button_mat_download_button_component__WEBPACK_IMPORTED_MODULE_12__["MatDownloadButtonComponent"],
                _ui_mat_fullscreen_button_mat_fullscreen_button_component__WEBPACK_IMPORTED_MODULE_14__["MatFullscreenButtonComponent"],
                _ui_mat_time_control_mat_time_control_component__WEBPACK_IMPORTED_MODULE_18__["MatTimeControlComponent"],
                _ui_mat_quality_control_mat_quality_control_component__WEBPACK_IMPORTED_MODULE_16__["MatQualityControlComponent"],
                _ui_mat_video_spinner_mat_video_spinner_component__WEBPACK_IMPORTED_MODULE_19__["MatVideoSpinnerComponent"],
                _ui_mat_seek_progress_control_mat_seek_progress_control_component__WEBPACK_IMPORTED_MODULE_17__["MatSeekProgressControlComponent"],
                _directives_mat_video_source_directive__WEBPACK_IMPORTED_MODULE_6__["MatVideoSourceDirective"],
                _directives_mat_video_track_directive__WEBPACK_IMPORTED_MODULE_7__["MatVideoTrackDirective"],
                _ui_mat_frame_by_frame_control_mat_frame_by_frame_control_component__WEBPACK_IMPORTED_MODULE_13__["MatFrameByFrameControlComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"]],
            exports: [_video_component__WEBPACK_IMPORTED_MODULE_21__["MatVideoComponent"], _directives_mat_video_source_directive__WEBPACK_IMPORTED_MODULE_6__["MatVideoSourceDirective"], _directives_mat_video_track_directive__WEBPACK_IMPORTED_MODULE_7__["MatVideoTrackDirective"]],
            providers: [_services_fullscreen_service__WEBPACK_IMPORTED_MODULE_11__["FullscreenService"], _services_event_service__WEBPACK_IMPORTED_MODULE_10__["EventService"]]
        })
    ], MatVideoModule);
    return MatVideoModule;
}());



/***/ }),

/***/ "./projects/mat-video/src/public-api.ts":
/*!**********************************************!*\
  !*** ./projects/mat-video/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: MatVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_video_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/video.module */ "./projects/mat-video/src/lib/video.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatVideoModule", function() { return _lib_video_module__WEBPACK_IMPORTED_MODULE_0__["MatVideoModule"]; });

/*
 * Public API Surface of mat-video
 */



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n.content {\n  margin: 8px;\n}\n\n.video {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.mat-video-responsive {\n  width: 50%;\n}\n\n.mat-video-fixed {\n  width: 600px;\n}\n\n.sidenav-container {\n  height: 100vh;\n}\n\n.sidenav {\n  width: 500px;\n}\n\n.github {\n  fill: white;\n}\n\n.title {\n  font-weight: bold;\n  margin: auto;\n}\n\n.title .name {\n  font-style: italic;\n}\n\n.options {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 48px;\n  font-size: 12px;\n  z-index: 2;\n}\n\n.footer .badges {\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  padding-top: 12px;\n}\n\n.footer .icon {\n  width: 12px;\n  height: 12px;\n  font-size: 12px;\n  line-height: 12px;\n}\n\n.footer .version {\n  text-align: left;\n}\n\n.footer .copyright {\n  text-align: center;\n  margin: auto;\n}\n\n.footer .license {\n  text-align: right;\n}\n\n.mat-drawer-container {\n  background-color: white;\n}\n\n.mat-drawer-side {\n  border-right: none;\n}\n\n.item-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 40px;\n}\n\n.item-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9ua29laGxlci9tYXQtdmlkZW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlEQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4udmlkZW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC12aWRlby1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1hdC12aWRlby1maXhlZCB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5naXRodWIge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIC5uYW1lIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9vdGVyIC5iYWRnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uZm9vdGVyIC5pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmZvb3RlciAudmVyc2lvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9vdGVyIC5saWNlbnNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uaXRlbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pdGVtLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIiwiZGl2IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4udmlkZW8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1hdC12aWRlby1yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1hdC12aWRlby1maXhlZCB7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5naXRodWIge1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIC5uYW1lIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9vdGVyIC5iYWRnZXMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uZm9vdGVyIC5pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmZvb3RlciAudmVyc2lvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZm9vdGVyIC5saWNlbnNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uaXRlbS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pdGVtLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../package.json */ "./package.json", 1);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.version = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.appversion = _package_json__WEBPACK_IMPORTED_MODULE_2__.version;
        this.ngclass = "mat-video-responsive";
        this.src = "assets/NASA.mp4";
        this.title = "NASA Rocket Launch";
        this.width = 600;
        this.height = 337.5;
        this.currentTime = 0;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.download = true;
        this.fullscreen = true;
        this.playsinline = false;
        this.showFrameByFrame = false;
        this.keyboard = true;
        this.color = "primary";
        this.spinner = "spin";
        this.poster = "assets/NASA.jpg";
        this.overlay = null;
        this.muted = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_mat_video_src_public_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! projects/mat-video/src/public-api */ "./projects/mat-video/src/public-api.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                projects_mat_video_src_public_api__WEBPACK_IMPORTED_MODULE_15__["MatVideoModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener("DOMContentLoaded", function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/nkoehler/mat-video/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map