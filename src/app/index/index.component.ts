import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';

declare var $: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  diff: any;

  from = new Date('2012-01-01');
  to = new Date();

  constructor() {
    this.diff = (this.to.getTime() - this.from.getTime()) / (1000 * 3600 * 24 * 365);

    this.diff = this.diff.toFixed(0);
  }

  ngOnInit(): void {
    $('.owl-carousel').owlCarousel();

    var typed = new Typed('#typed', {
      strings: ["Transforming Businesses to Deliver Value", "Full Scale Analytics", "Market Research Solution", "Contact Strategy", "Post Implementation Support"],
      backSpeed: 10,
      backDelay: 1000,
      startDelay: 100,
      loop: true,
      showCursor: false,
      typeSpeed: 90
    });
  }

}
