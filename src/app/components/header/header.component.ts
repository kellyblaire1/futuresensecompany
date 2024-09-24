import { Component } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss"
})
export class HeaderComponent {
  navlist: any = [
    {
      text: "About",
      link: "/about"
    },
    {
      text: "Competencies",
      link: "/competencies"
    },
    {
      text: "Approach",
      link: "/approach"
    },
    {
      text: "Key Offerings",
      link: "/key-offerings"
    },
    {
      text: "Team",
      link: "/team"
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  closeOffcanvas() {
    const offCanvasEl = document.getElementById('menu');
    const offcanvas = bootstrap.Offcanvas.getInstance(offCanvasEl);

    offcanvas.hide();
  }
}
