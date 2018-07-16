import { Component, OnInit, Input } from '@angular/core';
import { ClickService } from '../../Services/click.service';
import * as SVG from 'svg.js';

@Component({
  selector: 'app-red-light',
  template: `<div id="PulseSvg"></div>`,
  // templateUrl: './red-light.component.html',
  styleUrls: ['./red-light.component.css']
})
export class RedLightComponent implements OnInit {

  clickService: ClickService;
  redLight;

  constructor(clickService: ClickService) {
    this.clickService = clickService;
  }

  ngOnInit() {
    if (SVG.supported) {
      //this.clickService.visualCue =
      let _svg = SVG('PulseSvg').size(50, 50);
      let _bgC = _svg.circle(35)
        .attr({ 'id': 'bg', 'cx': 25, 'cy': 25, fill: 'black', 'fill-opacity': 1 });
      let _fgC = _svg.circle(30)
        .attr({ 'id': 'fg', 'cx': 25, 'cy': 25, fill: 'red', 'fill-opacity': 1 });
      let _fgH = _svg.circle(23)
        .attr({ 'cx': 26, 'cy': 23, fill: 'white', 'fill-opacity': 0.4 });
        // let _fgH2 = _svg.circle(15)
        // .attr({'cx': 27, 'cy': 20, fill: 'white', 'fill-opacity': 0.2 });

        this.clickService.visualCue = _svg;
    }
    else {
      alert('SVG note supported');
      //   let _svg = document.createElement('svg');
      //   let _c1 = document.createElement('circle');
      //   let _c2 = document.createElement('circle');
      //   _svg.setAttribute('width','50');
      //   _svg.setAttribute('height','50');
      // _svg.classList.add('float-right');
      // _c1.setAttribute('cx','25');
      // _c2.setAttribute('cx','25');
      // _c1.setAttribute('cy','25');
      // _c2.setAttribute('cy','25');
      // _c1.setAttribute('r','22');
      // _c2.setAttribute('r','22');
      // _c1.setAttribute('stroke','silver');
      // _c2.setAttribute('stroke','silver');
      // _c1.setAttribute('stroke-width','2');
      // _c2.setAttribute('stroke-width','2');
      // _c1.setAttribute('fil','gray');
      // _c2.setAttribute('fil','red');
      // _c2.classList.add('fade-out');
      // _c2.classList.add('one');
      // _svg.appendChild(_c1);
      // _svg.appendChild(_c2);
      // document.appendChild(_svg);
    }


  }

}
