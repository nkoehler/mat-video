import { Directive, ElementRef, Host, Input, OnChanges, SimpleChanges } from "@angular/core";

import { MatVideoComponent } from "../video.component";

@Directive({
  selector: "[matVideoSource]"
})
export class MatVideoSourceDirective implements OnChanges {
  @Input() src: string = null;
  @Input() type: string = null;

  private init = true;
  private video: MatVideoComponent;
  private source: HTMLSourceElement;

  constructor(@Host() private matVideoComponent: MatVideoComponent, private el: ElementRef) {
    this.video = matVideoComponent;
    this.source = el.nativeElement;
    this.init = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.source.src = this.src;
    this.source.type = this.type;

    if (!this.init) {
      this.video.load();
    }
  }
}
