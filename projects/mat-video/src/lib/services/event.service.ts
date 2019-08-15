import { Injectable, Renderer2 } from "@angular/core";
import { EventHandler } from "../interfaces/event-handler.interface";

@Injectable()
export class EventService {
  constructor() {}

  addEvents(renderer: Renderer2, events: EventHandler[]): void {
    for (const event of events) {
      event.dispose = renderer.listen(event.element, event.name, newEvent => event.callback(newEvent));
    }
  }

  removeEvents(events: EventHandler[]): void {
    for (const event of events) {
      if (event.dispose) {
        event.dispose();
      }
    }
  }
}
