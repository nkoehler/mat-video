import { ElementRef } from "@angular/core";

export interface EventHandler {
  element: any;
  name: string;
  callback: (event?: any) => boolean | void;
  dispose: () => void;
}
