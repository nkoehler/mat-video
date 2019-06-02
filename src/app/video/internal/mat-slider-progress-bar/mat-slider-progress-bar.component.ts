import { Component, Input, Output, EventEmitter, ElementRef, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, Optional, Attribute } from '@angular/core';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';

/** Counter used to generate unique IDs for progress bars. */
let sliderprogressbarId = 0;

@Component({
    selector: 'mat-slider-progress-bar',
    templateUrl: './mat-slider-progress-bar.component.html',
    styleUrls: ['./mat-slider-progress-bar.component.css'],
    providers: [MAT_SLIDER_VALUE_ACCESSOR],
    host: {
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()',
        '(click)': 'this["_onClick"] ? this["_onClick"]($event) : null', // Angular 5/6 support
        '(mousedown)': 'this["_onMousedown"] ? this["_onMousedown"]($event) : null', // Angular 7 support
        '(keydown)': '_onKeydown($event)',
        '(keyup)': '_onKeyup()',
        '(mouseenter)': '_onMouseenter()',
        '(slide)': '_onSlide($event)',
        '(slideend)': '_onSlideEnd()',
        '(slidestart)': '_onSlideStart($event)',
        'class': 'mat-slider',
        'role': 'slider',
        '[tabIndex]': 'tabIndex',
        '[attr.aria-disabled]': 'disabled',
        '[attr.aria-valuemax]': 'max',
        '[attr.aria-valuemin]': 'min',
        '[attr.aria-valuenow]': 'value',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-slider-disabled]': 'disabled',
        '[class.mat-slider-has-ticks]': 'tickInterval',
        '[class.mat-slider-horizontal]': '!vertical',
        '[class.mat-slider-axis-inverted]': '_invertAxis',
        '[class.mat-slider-sliding]': '_isSliding',
        '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
        '[class.mat-slider-vertical]': 'vertical',
        '[class.mat-slider-min-value]': '_isMinValue',
        '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
    },
    inputs: ['disabled', 'color', 'tabIndex'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MatSliderProgressBarComponent extends MatSlider {
    @Input() mode: string = 'buffer';
    @Input() value: number = 0;
    /** Buffer value of the progress bar. Defaults to zero. */
    @Input()
    get bufferValue(): number { return this._bufferValue; }
    set bufferValue(v: number) { this._bufferValue = clamp(v || 0); }
    private _bufferValue: number = 0;

    /** The id of the progress bar. */
    sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`;

    constructor(
        elementRef: ElementRef,
        focusMonitor: FocusMonitor,
        changeDetectorRef: ChangeDetectorRef,
        @Optional() dir: Directionality,
        @Attribute('tabindex') tabIndex: string
    ) {
        super(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex);
        this.tabIndex = parseInt(tabIndex) || 0;
    }

    /** CSS styles for the track fill element. */
    get _trackBufferStyles(): { [key: string]: string } {
        if (this.mode === 'buffer') {
            const axis = this.vertical ? 'Y' : 'X';
            return {
                'transform': `translate${axis}(0px) scale${axis}(${this._bufferValue / 100})`
            };
        }
    }
}

/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v: number, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
