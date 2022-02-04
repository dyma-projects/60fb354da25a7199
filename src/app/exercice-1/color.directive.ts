import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostBinding("style.color") color: string;

  @HostListener("document:keydown", ["$event"]) win(e) {
    console.log(e);

    if (e.keyCode == "40") {
      this.color = "red";
    } else if (e.keyCode == "38") {
      this.color = "yellow";
    } else if (e.keyCode == "37") {
      this.color = "purple";
    } else if (e.keyCode == 39) {
      this.color = "blue";
    } else {
      this.color = "black";
    }
  }
  constructor() {}
}
