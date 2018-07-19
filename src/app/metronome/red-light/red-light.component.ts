import { Component, OnInit, Input } from '@angular/core';
import { ClickService } from '../../Services/click.service';
import * as SVG from 'svg.js';

@Component({
  selector: 'app-red-light',
  //template: `<div id="PulseSvg"></div>`,
  templateUrl: './red-light.component.html',
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
      let _svg = SVG('PulseSvg').size(75, 75);
      let _bgC = _svg.circle(60)
        .attr({ 'id': 'bg', 'cx': 30, 'cy': 30, fill: 'black', 'fill-opacity': 1 });
      let _fgC = _svg.circle(60)
        .attr({ 'id': 'fg', 'cx': 30, 'cy': 30, fill: 'red', 'fill-opacity': 0.1 });
      let _fgH = _svg.circle(40)
        .attr({ 'cx': 33, 'cy': 25, fill: 'white', 'fill-opacity': 0.4 });
      // let _fgH2 = _svg.circle(15)
      // .attr({'cx': 27, 'cy': 20, fill: 'white', 'fill-opacity': 0.2 });

      this.clickService.visualCue = _svg;

      
    let glassLight = this.clickService.visualCue.select('#fg').first();
    this.clickService.pulseElementCollection.push(glassLight);    
    this.clickService.fadeOut([glassLight]);
    }
    else {
      alert('SVG not supported');
    }


  }

}