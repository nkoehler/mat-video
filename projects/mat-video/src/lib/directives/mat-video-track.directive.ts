import { Directive, ElementRef, Host, Input, OnChanges, SimpleChanges } from "@angular/core";

import { MatVideoComponent } from "../video.component";

@Directive({
  selector: "[matVideoTrack]"
})
export class MatVideoTrackDirective implements OnChanges {
  @Input() src: string = null;
  @Input() kind: string = null;
  @Input() srclang: string = null;
  @Input() label: string = null;

  private init = true;
  private video: MatVideoComponent;
  private track: HTMLTrackElement;

  constructor(@Host() private matVideoComponent: MatVideoComponent, private el: ElementRef) {
    this.video = matVideoComponent;
    this.track = el.nativeElement;
    this.init = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.track.src = this.src;
    this.track.kind = this.kind;
    this.track.srclang = this.srclang;
    this.track.label = this.label;

    if (!this.init) {
      this.video.load();
    }
  }
}
