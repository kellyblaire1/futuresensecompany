import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navlist: any = [
    {
      text: 'About',
      link: '/about'
    },
    {
      text: 'Competencies',
      link: '/competencies'
    },
    {
      text: 'Approach',
      link: '/approach'
    },
    {
      text: 'Key Offerings',
      link: '/key-offerings'
    },
    {
      text: 'Team',
      link: '/team'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
