import { Component } from '@angular/core';
import * as AOS from "aos";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "futuresensecompany.com";

  constructor() {}

  ngOnInit(): void {
    AOS.init({
      // Global settings:
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false // whether elements should animate out while scrolling past them
    });
  }
}
