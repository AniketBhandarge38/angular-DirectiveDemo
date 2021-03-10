import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: number = 100;

  constructor() {
    console.log("constructor called : " + `new - data is ${this.data}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }
}
