import { ElementRef } from "@angular/core";

export interface EventHandler {
    element: ElementRef;
    name: string;
    callback: (event: any) => boolean | void;
    dispose: () => void;
}