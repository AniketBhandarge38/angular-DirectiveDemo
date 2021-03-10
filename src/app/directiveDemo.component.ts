import { Component } from "@angular/core";

@Component({
  selector: "dir-app",
  templateUrl: "./directiveDemo.component.html",
  styleUrls: ["./directiveDemo.component.css"]
})
export class directiveComp {
  clr: boolean = false;

  show: boolean = false;
  data: string = "click here for streaming";

  employees: Array<string> = ["Aniket", "Harish", "Sumit"];

  constructor() {}

  public showorhidedata() {
    this.show = !this.show;

    if (this.show) {
      this.data = "Now Streaming";
    } else {
      this.data = "streaming Stopped";
    }
  }
  public changeColor() {
    this.clr = !this.clr;
    console.log(this.clr);
  }
}
