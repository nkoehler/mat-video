import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "secondsToTime"
})
export class SecondsToTimePipe implements PipeTransform {
  times = {
    year: 31557600,
    month: 2629746,
    day: 86400,
    hour: 3600
  };

  transform(seconds: number) {
    if (!seconds) {
      return "0:00";
    } else {
      let timeString = "";
      for (const key in this.times) {
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
  }
}
